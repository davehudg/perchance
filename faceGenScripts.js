/* faceGenScripts.js
   Perchance Face/Body Generator - consolidated external script
   - No eval() (uses VALUE_TABLES)
   - Cross-origin safe preset saving
   - Hair selection normalization & composition
   - Persist/restore selections
   - Schema validation & prompt builder
   - a11y helpers and focus management
   - All event wiring via init()
*/

/* ================== CONFIG & LOOKUPS ================== */

window.FBG = window.FBG || { storageKey: 'fbg:last' };

/* VALUE_TABLES expects lists.js to be loaded first (defines e.g., genderVt, ageVt, etc.) */
window.VALUE_TABLES = window.VALUE_TABLES || {
    gender: typeof genderVt !== 'undefined' ? genderVt : [],
    ethnicity: typeof ethnicityVt !== 'undefined' ? ethnicityVt : [],
    eyeColor: typeof eyeColorVt !== 'undefined' ? eyeColorVt : [],
    skinColor: typeof skinColorVt !== 'undefined' ? skinColorVt : [],
    age: typeof ageVt !== 'undefined' ? ageVt : [],
    facialHair: typeof facialHairVt !== 'undefined' ? facialHairVt : [],
    glasses: typeof glassesVt !== 'undefined' ? glassesVt : [],

    faceShape: typeof faceShapeVt !== 'undefined' ? faceShapeVt : [],
    faceLength: typeof faceLengthVt !== 'undefined' ? faceLengthVt : [],
    hairline: typeof hairlineVt !== 'undefined' ? hairlineVt : [],
    forehead: typeof foreheadVt !== 'undefined' ? foreheadVt : [],
    eyebrows: typeof eyebrowsVt !== 'undefined' ? eyebrowsVt : [],
    browRidge: typeof browRidgeVt !== 'undefined' ? browRidgeVt : [],
    eyeShape: typeof eyeShapeVt !== 'undefined' ? eyeShapeVt : [],
    eyeSet: typeof eyeSetVt !== 'undefined' ? eyeSetVt : [],
    nose: typeof noseVt !== 'undefined' ? noseVt : [],
    cheekBones: typeof cheekBonesVt !== 'undefined' ? cheekBonesVt : [],
    lips: typeof lipsVt !== 'undefined' ? lipsVt : [],
    chin: typeof chinVt !== 'undefined' ? chinVt : [],
    jawline: typeof jawlineVt !== 'undefined' ? jawlineVt : [],

    eyebrowMod: typeof eyebrowModVt !== 'undefined' ? eyebrowModVt : [],
    noseMod: typeof noseModVt !== 'undefined' ? noseModVt : [],
    noseBridge: typeof noseBridgeVt !== 'undefined' ? noseBridgeVt : [],
    lipMod: typeof lipModVt !== 'undefined' ? lipModVt : [],

    hair: typeof hairVt !== 'undefined' ? hairVt : [],
    hairColor: typeof hairColorVt !== 'undefined' ? hairColorVt : [],
    highlights: typeof highlightVt !== 'undefined' ? highlightVt : [],
    hairStyleMale: typeof maleHairStyles !== 'undefined' ? maleHairStyles : [],
    hairStyleFemale: typeof femaleHairStyles !== 'undefined' ? femaleHairStyles : [],

    bodyType: typeof bodyTypeVt !== 'undefined' ? bodyTypeVt : [],
    bodyComp: typeof bodyCompVt !== 'undefined' ? bodyCompVt : [],
    muscularity: typeof muscularityVt !== 'undefined' ? muscularityVt : [],
    height: typeof heightVt !== 'undefined' ? heightVt : [],
    bustSize: typeof bustSizeVt !== 'undefined' ? bustSizeVt : [],

    ears: typeof earsVt !== 'undefined' ? earsVt : [],
    clothing: typeof clothingVt !== 'undefined' ? clothingVt : []
};

/* ================== STATE ================== */

window.features = window.features || {
    name: "",
    gender: "", ethnicity: "", eyeColor: "", skinColor: "", age: "", glasses: "", freckles: "", facialHair: "",
    hair: "", hairColor: "", highlights: "",
    faceShape: "", faceLength: "", hairline: "", forehead: "", eyebrows: "", browRidge: "", eyeShape: "", eyeSet: "",
    nose: "", cheekBones: "", lips: "", chin: "", jawline: "",
    ears: "", clothing: "",
    bodyType: "", bodyComp: "", muscularity: "", height: "", bustSize: ""
};

window.listFeatures = window.listFeatures || [];
window.hairElements = window.hairElements || { hairColor: "", highlights: "", hairStyle: "" };

/* ================== ELEMENT HELPERS ================== */

function $(id) { return document.getElementById(id); }

/* Grabs references lazily when needed, to survive dynamic DOMs */
function els() {
    return {
        gender: $('gender'), ethnicity: $('ethnicity'), eyeColor: $('eyeColor'), skinColor: $('skinColor'),
        age: $('age'), glasses: $('glasses'), freckles: $('freckles'), facialHair: $('facialHair'),
        hair: $('hair'), hairType: $('hairType'), clothing: $('clothing'),
        facialFeature: $('facialFeature'), facialFeatureType: $('facialFeatureType'),
        modifiers: $('modifiers'), bridges: $('bridges'),
        bodyFeature: $('bodyFeature'), bodyFeatureType: $('bodyFeatureType'),
        toolTip: $('toolTip'), pText: $('pText'),
        random: $('random'), gen: $('gen'), reset: $('reset'),
        generateBtn: $('generateBtn'), parseBtn: $('something'),
        loaderEl: $('loaderEl'), responseEl: $('responseEl'), pName: $('pName'),
        aiFace: $('aiFace'), pics: $('pics'),
        presetName: $('presetName'), preset: $('preset'), save: $('save'),
        live: $('live')
    };
}

/* ================== UTILITIES ================== */

function changeGender(genderSel, facialHairSel) {
    if (!genderSel || !facialHairSel) return;
    if (genderSel.value === "male") facialHairSel.style.display = "inline";
    else { facialHairSel.value = ""; facialHairSel.style.display = "none"; }
}

function deepCopyArray(arr) {
    return arr.map(item => Array.isArray(item) ? deepCopyArray(item) :
        (item && typeof item === 'object') ? deepCopyObject(item) : item);
}
function deepCopyObject(obj) {
    const copy = {};
    for (const [k, v] of Object.entries(obj)) {
        if (Array.isArray(v)) copy[k] = deepCopyArray(v);
        else if (v && typeof v === 'object') copy[k] = deepCopyObject(v);
        else copy[k] = v;
    }
    return copy;
}
function setFeatureText(el, feats) {
    if (!el) return;
    const vals = Object.entries(feats).filter(([k, v]) => v && k !== 'name').map(([k, v]) => v);
    el.textContent = vals.join(", ");
}
function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min)) + min; }

function persistSelections() { try { localStorage.setItem(FBG.storageKey, JSON.stringify(window.features)); } catch { } }
function hydrateSelections() {
    try {
        const saved = JSON.parse(localStorage.getItem(FBG.storageKey) || 'null');
        if (saved) { Object.assign(window.features, saved); setFeatureText(els().pText, window.features); }
    } catch { }
}

function ensureLive() {
    let live = els().live;
    if (!live) {
        live = document.createElement('div'); live.id = 'live'; live.setAttribute('aria-live', 'polite');
        live.style.position = 'absolute'; live.style.left = '-9999px'; live.style.width = '1px'; live.style.height = '1px';
        document.body.appendChild(live);
    }
    return live;
}
function announce(msg) { ensureLive().textContent = msg; }

function showPicsAndFocus() {
    const { pics, aiFace } = els();
    if (pics) pics.style.display = 'inline';
    if (aiFace) { aiFace.style.display = 'inline'; aiFace.tabIndex = -1; aiFace.focus(); }
    announce('Images generated.');
}

/* ================== PRESETS ================== */

function addToArray(presetNameInput, presetSelect, arrayOfFeatures, feats, pText) {
    const name = (presetNameInput && presetNameInput.value || "").trim();
    if (!name) { if (presetNameInput) presetNameInput.style.background = "yellow"; return; }
    if (arrayOfFeatures.some(x => x.name === name)) { if (presetNameInput) presetNameInput.style.background = "yellow"; return; }
    const copy = deepCopyObject(feats);
    copy.name = name;
    arrayOfFeatures.push(copy);

    if (presetSelect) {
        const opt = document.createElement("option");
        opt.value = name; opt.textContent = name;
        presetSelect.appendChild(opt);
    }

    if (presetNameInput) presetNameInput.value = "";
    setFeatureText(pText, feats);
    persistSelections();
}

async function savePresetsSafe(arrayOfFeatures) {
    const payload = JSON.stringify(arrayOfFeatures || [], null, 2);
    const fallback = () => {
        try {
            const blob = new Blob([payload], { type: 'application/json' });
            const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
            a.download = 'features.json'; document.body.appendChild(a); a.click(); a.remove();
            setTimeout(() => URL.revokeObjectURL(a.href), 5000);
            announce('Presets downloaded.');
        } catch (e) { console.error(e); }
    };
    try {
        if (!window.showSaveFilePicker) return fallback();
        const handle = await window.showSaveFilePicker({
            suggestedName: 'features.json',
            types: [{ description: 'JSON', accept: { 'application/json': ['.json'] } }]
        });
        const ws = await handle.createWritable(); await ws.write(payload); await ws.close();
        announce('Presets saved.');
    } catch (e) {
        console.warn('Picker blocked/unavailable, falling back.', e);
        fallback();
    }
}

/* ================== HAIR ================== */

function normalizeHairKey(s) {
    const k = String(s || '').toLowerCase().replace(/\s+/g, '');
    if (k.includes('color')) return 'hairColor';
    if (k.includes('highlight')) return 'highlights';
    if (k.includes('style')) return 'hairStyle';
    return s || '';
}

function populateHair(feature, hairType, gender, hColorList, hlList, mHair, fHair) {
    if (!hairType) return;
    hairType.innerHTML = '';
    const key = normalizeHairKey(feature);

    let list = [];
    if (key === 'hairColor') list = hColorList || [];
    else if (key === 'highlights') list = hlList || [];
    else if (key === 'hairStyle') list = (gender && gender.value === 'male') ? (mHair || []) : (fHair || []);

    const hdr = document.createElement('option');
    hdr.value = ''; hdr.textContent = 'Choose...';
    hairType.appendChild(hdr);

    (list || []).forEach(item => {
        const op = document.createElement('option');
        op.value = item.value; op.textContent = item.text;
        hairType.appendChild(op);
    });
    hairType.value = '';
}

function setHairElement(selectedValue, hairCategorySelect, hairEl, feats, pText) {
    const key = normalizeHairKey(hairCategorySelect && hairCategorySelect.value);
    if (key === 'hairColor') hairEl.hairColor = selectedValue || '';
    else if (key === 'highlights') hairEl.highlights = selectedValue || '';
    else if (key === 'hairStyle') hairEl.hairStyle = selectedValue || '';

    feats.hair = [hairEl.hairColor, hairEl.highlights, hairEl.hairStyle].filter(Boolean).join(" ");
    feats.hairColor = hairEl.hairColor || '';
    feats.highlights = hairEl.highlights || '';

    setFeatureText(pText, feats);
    persistSelections();
}

/* ================== POPULATE + TOOLTIP ================== */

function populateSelect(header, selectItem, list) {
    if (!selectItem) return;
    selectItem.innerHTML = "";
    const hdr = document.createElement("option");
    hdr.textContent = header; hdr.value = "";
    selectItem.appendChild(hdr);
    (list || []).forEach(item => {
        const op = document.createElement("option");
        op.value = item.value; op.textContent = item.text;
        selectItem.appendChild(op);
    });
}

function populateModifier(group, bridge, mods, ebrowList, noseList, lipList, jawList) {
    if (!mods || !bridge) return;
    switch (group) {
        case "eyebrows": populateSelect("Eyebrow Modifiers", mods, ebrowList); bridge.style.display = "none"; break;
        case "nose": populateSelect("Nose Modifiers", mods, noseList); bridge.style.display = "inline"; break;
        case "lips": populateSelect("Lip Modifiers", mods, lipList); bridge.style.display = "none"; break;
        case "chin": populateSelect("Jawlines", mods, jawList); bridge.style.display = "none"; break;
        default: mods.style.display = "none"; bridge.style.display = "none"; return;
    }
    mods.style.display = "inline";
}

function populateFaceFeature(feature) {
    const sel = $('facialFeatureType');
    if (!sel) return;
    sel.innerHTML = "";
    const dVar = VALUE_TABLES[feature] || [];
    dVar.forEach(type => {
        const option = document.createElement("option");
        option.value = type.value; option.textContent = type.text;
        sel.appendChild(option);
    });
}

function populateBodyFeature(feature) {
    const sel = $('bodyFeatureType');
    if (!sel) return;
    sel.innerHTML = "";
    const dVar = VALUE_TABLES[feature] || [];
    dVar.forEach(type => {
        const option = document.createElement("option");
        option.value = type.value; option.textContent = type.text;
        sel.appendChild(option);
    });
}

function setToolTip(type, value) {
    const { toolTip, facialFeature, bodyFeature } = els();
    if (!toolTip) return;
    if (type === "none") { toolTip.textContent = ""; return; }
    const featureSel = (type === "facial") ? facialFeature : bodyFeature;
    const dVar = VALUE_TABLES[featureSel && featureSel.value] || [];
    const result = (dVar || []).find(item => item.value === value);
    toolTip.textContent = (result && result.toolTip) ? result.toolTip : "";
    persistSelections();
}

/* ================== SETTERS ================== */

function setFeature(destKey, value, feats, pText) {
    feats[destKey] = value;
    setFeatureText(pText || els().pText, feats);
    persistSelections();
}

function setFeatureType(type, value) {
    const E = els();
    if (type === "facial") {
        const faceSelect = E.facialFeature, modbox = E.modifiers, nosebridge = E.bridges;
        let v = value;
        if (faceSelect && faceSelect.value === "nose" && nosebridge && nosebridge.value) v = v + " " + nosebridge.value;
        if (faceSelect && ["nose", "eyebrows", "lips", "chin"].includes(faceSelect.value) && modbox && modbox.value) v = modbox.value + " " + v;
        if (faceSelect && faceSelect.value === "eyebrows" && window.hairElements.hairColor) {
            const base = window.hairElements.hairColor.substring(0, window.hairElements.hairColor.length - 5);
            v = base + " " + v;
        }
        window.features[faceSelect.value] = v;
    } else {
        const bodySelect = E.bodyFeature;
        if (bodySelect) window.features[bodySelect.value] = value;
    }
    setFeatureText(E.pText, window.features);
    persistSelections();
}

function setFeatureTypeWithMod(modifier) {
    const E = els();
    const faceSelect = E.facialFeature;
    const feature = E.facialFeatureType;
    let color = window.hairElements.hairColor;

    if (!faceSelect || !feature) return;

    switch (faceSelect.value) {
        default: break;
        case "lips":
        case "chin":
        case "eyebrows": {
            let v = (modifier ? (modifier + " ") : "") + (feature.value || "");
            if (faceSelect.value === "eyebrows" && color) {
                const base = color.substring(0, color.length - 5);
                v = base + " " + v;
            }
            window.features[faceSelect.value] = v;
            break;
        }
        case "nose": {
            window.features[faceSelect.value] = (E.modifiers && E.modifiers.value ? E.modifiers.value + " " : "") + (feature.value || "") + (E.bridges && E.bridges.value ? " " + E.bridges.value : "");
            break;
        }
    }
    setFeatureText(E.pText, window.features);
    persistSelections();
}

/* ================== RANDOMIZER + UPDATE WRAPPER ================== */

function genRandomFeatures() {
    const E = els();
    const VT = VALUE_TABLES;
    window.features.gender = ["male", "female"][getRandomInt(0, 2)];
    window.features.eyeColor = (VT.eyeColor[getRandomInt(0, VT.eyeColor.length)] || {}).value || "";
    window.features.skinColor = (VT.skinColor[getRandomInt(0, VT.skinColor.length)] || {}).value || "";
    window.features.age = (VT.age[7] || {}).value || "";
    window.features.freckles = (typeof frecklesVt !== 'undefined' ? (frecklesVt[getRandomInt(0, frecklesVt.length)] || {}).value : "");

    const hairColor = (VT.hairColor[getRandomInt(1, VT.hairColor.length)] || {}).value || "";
    if (window.features.gender === "male") {
        window.features.facialHair = (VT.facialHair[getRandomInt(0, VT.facialHair.length)] || {}).value || "";
        window.hairElements.hairStyle = (VT.hairStyleMale[getRandomInt(0, VT.hairStyleMale.length)] || {}).value || "";
    } else {
        window.features.facialHair = "";
        window.hairElements.hairStyle = (VT.hairStyleFemale[getRandomInt(0, VT.hairStyleFemale.length)] || {}).value || "";
    }
    window.hairElements.hairColor = hairColor;
    window.hairElements.highlights = "";

    window.features.hair = [window.hairElements.hairColor, window.hairElements.highlights, window.hairElements.hairStyle].filter(Boolean).join(" ");

    (typeof faceFeatsVt !== 'undefined' ? faceFeatsVt : []).forEach(item => {
        const dArr = VALUE_TABLES[item.value] || [];
        if (dArr.length > 1) window.features[item.value] = (dArr[getRandomInt(1, dArr.length)] || {}).value || "";
    });
    (typeof bodyFeatsVt !== 'undefined' ? bodyFeatsVt : []).forEach(item => {
        const dArr = VALUE_TABLES[item.value] || [];
        if (dArr.length > 1) window.features[item.value] = (dArr[getRandomInt(1, dArr.length)] || {}).value || "";
    });
    if (window.features.gender === "male") window.features.bustSize = "";

    setFeatureText(E.pText, window.features);
    if (E.pics) E.pics.style.display = "inline";
    if (typeof window.update === "function") window.update();
}

function updateImages() {
    const E = els();
    if (E.pics) E.pics.style.display = "inline";
    if (typeof window.update === "function") window.update();
}

/* ================== AI DESCRIPTION ================== */

function genDescriptionOutput(aiFace, responseEl, loaderEl) {
    if (aiFace) aiFace.style.display = "none";
    if (responseEl) responseEl.style.display = "inline-block";
    if (loaderEl && typeof output !== 'undefined') loaderEl.innerHTML = output.evaluateItem;
}

function parseOutput() {
    const E = els();
    const text = (E.responseEl && E.responseEl.value) || "";
    const pattern = /- (?<key>[\w\s]+): (?<val>[^\n]+)/gi;

    for (const match of text.matchAll(pattern)) {
        const keyRaw = (match.groups.key || "").trim();
        const valRaw = (match.groups.val || "").trim();
        const key = keyRaw.toLowerCase();

        if (key === "name") { if (E.pName) E.pName.innerHTML = valRaw; continue; }
        if (key === "age") { if (E.pName) E.pName.innerHTML = (E.pName.innerHTML + ", " + valRaw); continue; }

        if (key.includes("hair")) {
            if (key.includes("color")) {
                const arr = VALUE_TABLES.hairColor || [];
                const idx = arr.findIndex(o => (o.value || '').toLowerCase().includes(valRaw.toLowerCase()));
                const val = (idx > -1 ? arr[idx].value : valRaw);
                window.features.hairColor = window.features.eyebrowColor = window.features.bodyHairColor = val;
                window.hairElements.hairColor = val;
            } else {
                window.hairElements.hairStyle = valRaw;
            }
            window.features.hair = [window.hairElements.hairColor, window.hairElements.highlights, window.hairElements.hairStyle].filter(Boolean).join(" ");
            continue;
        }

        const keyNorm = keyRaw.replace(/\s+/g, '');
        const dArr = VALUE_TABLES[keyNorm] || [];
        if (dArr.length) {
            const idx2 = dArr.findIndex(o => (o.value || '').toLowerCase().includes(valRaw.toLowerCase()));
            window.features[keyNorm] = (idx2 > -1 ? dArr[idx2].value : valRaw);
        } else if (Object.prototype.hasOwnProperty.call(window.features, keyNorm)) {
            window.features[keyNorm] = valRaw;
        }
    }

    setFeatureText(E.pText, window.features);
    if (E.responseEl) E.responseEl.style.display = "none";
    if (E.aiFace) E.aiFace.style.display = "inline";
    if (E.pics) E.pics.style.display = "inline";
    if (typeof window.update === "function") window.update();
}

/* ================== PROMPT & VALIDATION ================== */

function buildPrompt(opts) {
    opts = opts || {};
    const f = opts.features || window.features || {};
    const base = (opts.baseTags || []);
    const extra = (opts.extraTags || []);
    const negative = opts.negative || "";
    const subject = [
        f.gender, f.ethnicity, f.eyeColor, f.skinColor,
        f.hair, f.facialHair,
        f.faceShape, f.faceLength, f.hairline, f.forehead,
        f.eyebrows, f.browRidge, f.eyeShape, f.eyeSet, f.nose,
        f.cheekBones, f.lips, f.chin, f.jawline,
        f.bodyType, f.bodyComp, f.muscularity, f.height, f.bustSize,
        f.ears, f.glasses, f.freckles, f.clothing
    ].filter(Boolean);
    const positive = base.concat(subject, extra).filter(Boolean).join(', ');
    return { positive, negative, kind: opts.kind || 'image' };
}

function validateFeatures(feats) {
    const errs = [];
    const need = (k, label) => { if (!feats[k]) errs.push('Choose ' + label); };
    need('gender', 'Gender');
    need('eyeColor', 'Eye Color');
    need('skinColor', 'Skin Tone');
    need('age', 'Age');
    if (!feats.hair && !(feats.hairColor || feats.highlights)) errs.push('Pick a Hair option');
    return { ok: errs.length === 0, errors: errs };
}

/* ================== SELECT CHANGE HANDLER ================== */

function onSelectChange(e) {
    const id = e.target.id;
    const E = els();

    switch (id) {
        case "gender":
            changeGender(E.gender, E.facialHair);          // NEW: re-toggle facial hair visibility
            setFeature('gender', e.target.value, window.features, E.pText);
            break;

        case "facialFeature":
            populateFaceFeature(e.target.value);
            populateModifier(e.target.value, E.bridges, E.modifiers, VALUE_TABLES.eyebrowMod, VALUE_TABLES.noseMod, VALUE_TABLES.lipMod, VALUE_TABLES.jawline);
            setToolTip("none", e.target.value);
            break;

        case "facialFeatureType":
            setFeatureType("facial", e.target.value);
            setToolTip("facial", e.target.value);
            break;

        case "bodyFeature":
            populateBodyFeature(e.target.value);
            setToolTip("none", e.target.value);
            break;

        case "bodyFeatureType":
            setFeatureType("body", e.target.value);
            setToolTip("body", e.target.value);
            break;

        case "hair":
            populateHair(e.target.value, E.hairType, E.gender, VALUE_TABLES.hairColor, VALUE_TABLES.highlights, VALUE_TABLES.hairStyleMale, VALUE_TABLES.hairStyleFemale);
            setToolTip("none", e.target.value);
            break;

        case "hairType":
            setHairElement(e.target.value, E.hair, window.hairElements, window.features, E.pText);
            setToolTip("none", e.target.value);
            break;

        case "modifiers":
        case "bridges":
            setFeatureTypeWithMod(e.target.value);
            break;

        case "preset": {
            const pick = window.listFeatures.find(x => x.name === e.target.value);
            if (pick) {
                Object.assign(window.features, deepCopyObject(pick), { name: "" });
                setFeatureText(E.pText, window.features);
            }
            break;
        }

        default:
            setFeature(id.split('FeatureType')[0], e.target.value, window.features, E.pText);
            setToolTip("none", e.target.value);
            break;
    }
}

/* ================== SETUP ================== */

function setupSelects() {
    const E = els();
    populateSelect("Skin Tone", E.skinColor, VALUE_TABLES.skinColor);
    populateSelect("Eye Color", E.eyeColor, VALUE_TABLES.eyeColor);
    populateSelect("Age", E.age, VALUE_TABLES.age);
    populateSelect("Glasses", E.glasses, VALUE_TABLES.glasses);
    populateSelect("Freckles", E.freckles, (typeof frecklesVt !== 'undefined' ? frecklesVt : []));
    populateSelect("Facial Hair", E.facialHair, VALUE_TABLES.facialHair);
    populateSelect("Facial Features", E.facialFeature, (typeof faceFeatsVt !== 'undefined' ? faceFeatsVt : []));
    populateSelect("Body Features", E.bodyFeature, (typeof bodyFeatsVt !== 'undefined' ? bodyFeatsVt : []));
    populateSelect("Hair", E.hair, VALUE_TABLES.hair);
    populateSelect("Bridge", E.bridges, VALUE_TABLES.noseBridge);
    populateSelect("Ethnicity", E.ethnicity, VALUE_TABLES.ethnicity);
    populateSelect("Clothing", E.clothing, VALUE_TABLES.clothing);
}

function wireButtons() {
    const E = els();
    if (E.random) E.random.addEventListener('click', () => { genRandomFeatures(); persistSelections(); });
    if (E.gen) E.gen.addEventListener('click', () => { if (typeof update === 'function') { update(); } showPicsAndFocus(); });
    if (E.reset) E.reset.addEventListener('click', () => { if (window.features) { Object.keys(window.features).forEach(k => window.features[k] = ""); setFeatureText(E.pText, window.features); } persistSelections(); });

    if (E.generateBtn) E.generateBtn.addEventListener('click', () => { genDescriptionOutput(E.aiFace, E.responseEl, E.loaderEl); announce('Generating description…'); });
    if (E.parseBtn) E.parseBtn.addEventListener('click', () => { parseOutput(); announce('Parsing description.'); });

    if (E.save) E.save.addEventListener('click', () => savePresetsSafe(window.listFeatures || []));

    const addBtn = document.getElementById('add');
    if (addBtn) addBtn.addEventListener('click', () => {
        addToArray(E.presetName, E.preset, window.listFeatures, window.features, E.pText);
    });

    if (E.preset && !document.getElementById('updatePreset')) {
        const up = document.createElement('button'); up.id = 'updatePreset'; up.textContent = 'Update Preset';
        const del = document.createElement('button'); del.id = 'deletePreset'; del.textContent = 'Delete Preset';
        E.preset.insertAdjacentElement('afterend', up);
        up.insertAdjacentElement('afterend', del);

        up.addEventListener('click', () => {
            const name = E.preset.value; if (!name) return;
            const arr = window.listFeatures || [];
            const idx = arr.findIndex(x => x.name === name);
            if (idx === -1) return;
            const copy = JSON.parse(JSON.stringify(window.features || {})); copy.name = name;
            arr[idx] = copy;
            announce(`Preset "${name}" updated.`);
            persistSelections();
        });

        del.addEventListener('click', () => {
            const name = E.preset.value; if (!name) return;
            const arr = window.listFeatures || [];
            const idx = arr.findIndex(x => x.name === name);
            if (idx === -1) return;
            arr.splice(idx, 1);
            const opt = Array.from(E.preset.options).find(o => o.value === name);
            if (opt) opt.remove();
            E.preset.value = '';
            announce(`Preset "${name}" deleted.`);
            persistSelections();
        });
    }
}

function wireSelects() {
    document.querySelectorAll('select').forEach(sel => {
        sel.addEventListener('change', onSelectChange);
    });
}

function wrapUpdateForValidation() {
    if (typeof window.update !== 'function') return;
    const original = window.update;
    window.update = function () {
        const res = validateFeatures(window.features || {});
        if (!res.ok) {
            alert('Please complete:\n- ' + res.errors.join('\n- '));
            announce('Missing required fields.');
            return;
        }
        original.apply(this, arguments);
    };
}

function init() {
    setupSelects();
    hydrateSelections();
    wireSelects();
    wireButtons();
    wrapUpdateForValidation();
    changeGender(els().gender, els().facialHair);
}

/* Expose API (Perchance/markup may call these) */
window.changeGender = changeGender;
window.addToArray = addToArray;
window.savePresetsSafe = savePresetsSafe;
window.populateHair = populateHair;
window.setHairElement = setHairElement;
window.populateSelect = populateSelect;
window.populateModifier = populateModifier;
window.populateFaceFeature = populateFaceFeature;
window.populateBodyFeature = populateBodyFeature;
window.setToolTip = setToolTip;
window.setFeature = setFeature;
window.setFeatureType = setFeatureType;
window.setFeatureTypeWithMod = setFeatureTypeWithMod;
window.genRandomFeatures = genRandomFeatures;
window.updateImages = updateImages;
window.genDescriptionOutput = genDescriptionOutput;
window.parseOutput = parseOutput;
window.buildPrompt = buildPrompt;
window.validateFeatures = validateFeatures;
window.init = init;

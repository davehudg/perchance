//#region Misc functions

function changeGender(gender, facialHair) {
  if (!gender || !facialHair) return;
  if (gender.value === "male") {
    facialHair.style.display = "inline";
  } else {
    facialHair.value = "";
    facialHair.style.display = "none";
  }
}

function deepCopyArray(arr) {
  return arr.map(item => Array.isArray(item) ? deepCopyArray(item) :
    (item && typeof item === 'object') ? deepCopyObject(item) : item);
}

function deepCopyObject(obj) {
  const copy = {};
  for (const [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      copy[key] = deepCopyArray(value);
    } else if (value && typeof value === 'object') {
      copy[key] = deepCopyObject(value);
    } else {
      copy[key] = value;
    }
  }
  return copy;
}

//#endregion

//#region Random

function reset(pText, allFeatures) {
  let temp = Object.entries(allFeatures).filter(([key, value]) => key);
  temp.forEach(item => {
    console.log(item[0]);
    allFeatures[item[0]] = "";
  });
  setFeatureText(pText, allFeatures);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//#endregion

//#region AI feature generation

//#endregion

//#region Set functions

function setFeatureText(Obj, allFeatures) {
  let nonEmptyEnteries = Object.entries(allFeatures).filter(([key, value]) => value !== "" && value !== null);
  let nonEmptyValues = nonEmptyEnteries.map(([key, value]) => value)
  let result = nonEmptyValues.join(", ");
  Obj.textContent = result;
}

function setFeature(pText, source, dest, allFeatures) {
  // set the feature to be
  allFeatures[dest] = source.value;
  // set the text

  setFeatureText(pText, allFeatures);
  // debug
  console.table(allFeatures);
  if (typeof persistSelections === 'function') { try { persistSelections(); } catch { } }
}

function setHairElement(pText, feature, hColor, hl, hairType, allFeatures) {
  let temp = [];

  if (hColor.value != "") {
    temp.push(hColor.value);
  }

  if (hl.value != "") {
    temp.push(hl.value);
  }

  if (hairType.value != "") {
    temp.push(hairType.value);
  }

  let nonEmptyValues = temp.filter(value => value !== "" && value !== null);
  let result = nonEmptyValues.join(" ");
  allFeatures["hair"] = result;
  setFeatureText(pText, allFeatures);
  if (typeof persistSelections === 'function') { try { persistSelections(); } catch { } }
}

//#endregion

//#region Populate functions

function populateSelect(header, selectItem, list) {
  selectItem.innerHTML = "";
  let newHeader = document.createElement("option");
  newHeader.textContent = header;
  newHeader.value = "";
  selectItem.appendChild(newHeader);
  list.forEach((item, index) => {
    // create new element
    let newOption = document.createElement("option");
    // set new element properties
    newOption.value = item.value;
    newOption.textContent = item.text;
    // add new element to recieving element
    selectItem.appendChild(newOption);
  });
}

function populateHair(feature, hairType, gender, hColorList, hlList, mHair, fHair) {
  if (!hairType) return;
  hairType.innerHTML = "";
  let feat = [];
  switch (feature) {
    case "hairColor":
      feat = hColorList || [];
      break;
    case "highlights":
      feat = hlList || [];
      break;
    case "hairStyle":
      feat = (gender && gender.value === "male") ? (mHair || []) : (fHair || []);
      break;
    default:
      feat = [];
  }
  (feat || []).forEach(type => {
    const option = document.createElement("option");
    option.value = type.value;
    option.textContent = type.text;
    hairType.appendChild(option);
  });
}

function populateModifier(group, bridge, mods, ebrowList, noseList, lipList, jawList) {
  switch (group) {
    case "eyebrows":
      populateSelect("Eyebrow Modifiers", mods, ebrowList)
      bridge.style.display = "none";
      break;
    case "nose":
      populateSelect("Nose Modifiers", mods, noseList)
      bridge.style.display = "inline";
      break;
    case "lips":
      populateSelect("Lip Modifiers", mods, lipList)
      bridge.style.display = "none";
      break;
    case "chin":
      populateSelect("Jawlines", mods, jawList)
      bridge.style.display = "none";
      break;
    default:
      mods.style.display = "none";
      bridge.style.display = "none";
      return;
  }
  mods.style.display = "inline";
}

//#endregion

//#region Add to Feature list functions

function addToArray(pText, allFeaturesText, featDiv, feats, arrayOfFeatures, presetName, preset) {
  let error = false;

  allFeaturesText = "";
  let temp = Object.entries(feats).filter(([key, value]) => key);
  temp.forEach(item => {
    console.log(item[0])
    if (feats[item[0]] !== "") {
      allFeaturesText += feats[item[0]] + ", ";
    }
    else {
      let errEl = "";
      switch (item[0]) {
        case "gender": errEl = document.getElementById("genderDiv"); break;
        case "ethnicity": errEl = document.getElementById("ethnicityDiv"); break;
        case "hair": errEl = document.getElementById("hairDiv"); break;
        case "eyeColor": errEl = document.getElementById("eyeColorDiv"); break;
        case "age": errEl = document.getElementById("ageDiv"); break;
        case "glasses": errEl = document.getElementById("glassesDiv"); break;
        case "freckles": errEl = document.getElementById("freckelsDiv"); break;
        case "facialHair": errEl = document.getElementById("facialHairDiv"); break;

        case "faceShape": errEl = document.getElementById("faceShapeDiv"); break;
        case "faceLength": errEl = document.getElementById("faceLengthDiv"); break;
        case "hairline": errEl = document.getElementById("hairlineDiv"); break;
        case "forehead": errEl = document.getElementById("foreheadDiv"); break;
        case "eyebrows": errEl = document.getElementById("eyebrowsDiv"); break;
        case "browRidge": errEl = document.getElementById("browRidgeDiv"); break;
        case "eyeShape": errEl = document.getElementById("eyeShapeDiv"); break;
        case "eyeSet": errEl = document.getElementById("eyeSetDiv"); break;
        case "nose": errEl = document.getElementById("noseDiv"); break;
        case "cheekBones": errEl = document.getElementById("cheekBonesDiv"); break;
        case "lips": errEl = document.getElementById("lipsDiv"); break;
        case "chin": errEl = document.getElementById("chinDiv"); break;
        case "jawline": errEl = document.getElementById("jawlineDiv"); break;

        case "ears": errEl = document.getElementById("earsDiv"); break;
        case "clothing": errEl = document.getElementById("clothingDiv"); break;

        case "bodyType": errEl = document.getElementById("bodyTypeDiv"); break;
        case "bodyComp": errEl = document.getElementById("bodyCompDiv"); break;
        case "muscularity": errEl = document.getElementById("muscularityDiv"); break;
        case "height": errEl = document.getElementById("heightDiv"); break;
        case "bustSize": errEl = document.getElementById("bustSizeDiv"); break;
      }
      errEl.style.backgroundColor = "pink";
      errEl.style.borderColor = "red";
      setTimeout(() => { errEl.style = ""; }, 1000);
      error = true;
    }
  });

  if (error) {
    featDiv.style.backgroundColor = "pink";
    featDiv.style.borderColor = "red";
    setTimeout(() => { featDiv.style = ""; }, 1000);
    return;
  }

  allFeaturesText = allFeaturesText.substring(0, allFeaturesText.length - 2);
  setFeatureText(pText, feats);

  // Check for a name and no duplicates
  let isDup = arrayOfFeatures.find((fe) => fe.name == presetName.value);
  if (presetName.value == "") {
    presetName.style.background = "yellow";
    return;
  }
  if (isDup) {
    presetName.style.background = "yellow";
    return;
  }

  feats["name"] = presetName.value;
  let item = document.createElement("option");
  item.value = presetName.value;
  item.text = presetName.value;
  preset.appendChild(item);
  arrayOfFeatures.push(deepCopyObject(feats));
  reset(pText, feats);
  presetName.value = "";
}

//#endregion


//#region FBG config, value table map, persistence, prompt & init

window.FBG = window.FBG || {
  version: '0.2.0',
  flags: { debug: false, showAIDescription: true, showImages: true },
  model: { widthFace: 512, heightFace: 512, widthBody: 768, heightBody: 1024, guidance: 7.0, steps: 28 },
  a11y: { announceChanges: true },
  storageKey: 'fbg:last'
};

// Stable, eval-free directory of value tables defined in lists.js
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

// Persist / hydrate last selections
window.persistSelections = function persistSelections() {
  try {
    if (window.features) localStorage.setItem(FBG.storageKey, JSON.stringify(window.features));
  } catch { }
};

window.hydrateSelections = function hydrateSelections() {
  try {
    const saved = JSON.parse(localStorage.getItem(FBG.storageKey) || 'null');
    if (saved && window.features) {
      Object.assign(window.features, saved);
      // Optionally: update UI text if helper exists
      if (typeof setFeatureText === 'function') {
        var pText = document.getElementById('pText') || null;
        if (pText) setFeatureText(pText, window.features);
      }
    }
  } catch { }
};

// Cross-browser preset save/load
window.savePresets = async function savePresets(arrayOfFeatures) {
  const payload = JSON.stringify(arrayOfFeatures || [], null, 2);
  try {
    if (window.showSaveFilePicker) {
      const fh = await window.showSaveFilePicker({
        suggestedName: 'features.json',
        types: [{ description: 'JSON', accept: { 'application/json': ['.json'] } }]
      });
      const ws = await fh.createWritable(); await ws.write(payload); await ws.close();
    } else {
      const blob = new Blob([payload], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'features.json';
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  } catch (e) { console.error(e); }
};

window.loadPresetsFromFile = function loadPresetsFromFile(inputEl, onLoaded) {
  const file = inputEl && inputEl.files && inputEl.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (typeof onLoaded === 'function') onLoaded(data);
    } catch (e) { console.error('Invalid JSON', e); }
  };
  reader.readAsText(file);
};

// Prompt builder (image)
window.buildImagePrompt = function buildImagePrompt(opts) {
  opts = opts || {};
  var f = opts.features || (window.features || {});
  var baseTags = (opts.baseTags || []);
  var extraTags = (opts.extraTags || []);
  var negative = opts.negative || "";

  var subjectBits = [
    f.gender, f.ethnicity, f.eyeColor, f.skinColor, f.hair, f.facialHair,
    f.faceShape, f.faceLength, f.hairline, f.forehead, f.eyebrows, f.browRidge,
    f.eyeShape, f.eyeSet, f.nose, f.cheekBones, f.lips, f.chin, f.jawline,
    f.bodyType, f.bodyComp, f.muscularity, f.height, f.bustSize,
    f.ears, f.glasses, f.freckles, f.clothing
  ].filter(Boolean);

  var allPos = baseTags.concat(subjectBits, extraTags).filter(Boolean);
  return { positive: allPos.join(', '), negative: negative, kind: opts.kind || 'image' };
};

// Init wiring (keeps inline onclicks working, just adds listeners)
(function initFBG() {
  try { hydrateSelections(); } catch { }
  var genBtn = document.getElementById('gen');
  var randBtn = document.getElementById('random');
  var resetBtn = document.getElementById('reset');

  if (genBtn) genBtn.addEventListener('click', function () {
    var pics = document.getElementById('pics');
    if (pics) pics.style.display = 'inline';
    if (typeof update === 'function') update();
  });

  if (randBtn) randBtn.addEventListener('click', function () {
    if (typeof genRandomFeatures === 'function') genRandomFeatures();
    persistSelections();
  });

  if (resetBtn) resetBtn.addEventListener('click', function () {
    try {
      var pText = document.getElementById('pText') || null;
      if (typeof reset === 'function' && window.features) reset(pText, window.features);
      persistSelections();
    } catch { }
  });
})();

//#endregion

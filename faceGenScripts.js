/* Face/Body Generator — Phase 2 (Full features + Presets + lists.js parsing)
 * - Fix: lists.js uses `const`, so globals are NOT on `window`. We now bind identifiers
 *   directly into LISTS_SOURCE (no eval/Function), then read from there.
 * - Hair styles depend on gender (maleHairStyles / femaleHairStyles).
 * - Defaults each <select> to the FIRST NON-BLANK option so UI shows values.
 * - No eval. Perchance iframe-safe. WCAG theme toggle, copy, presets (CRUD/import/export).
 * - Prompt uses `value` tokens; UI shows `text`; tooltip shows `toolTip`.
 */

(function () {
  "use strict";

  // ===== GLOBAL CONSTANTS / NAMES =====
  const ID = {
    gender: "selGender",
    hairStyle: "selHairStyle",
    facialHairWrap: "facialHairWrap",
    facialHair: "selFacialHair",
    bustWrap: "bustSizeWrap",
    bustSize: "selBustSize",
  };

  const LIST_MAP = {
    // Generic
    selGender:      "genderVt",
    selEthnicity:   "ethnicityVt",
    selEyeColor:    "eyeColorVt",
    selSkinTone:    "skinColorVt",
    selAge:         "ageVt",
    selGlasses:     "glassesVt",
    selFreckles:    "frecklesVt",
    selClothing:    "clothingVt",

    // Hair (style via maleHairStyles/femaleHairStyles)
    selHairColor:       "hairColorVt",
    selHairHighlights:  "highlightVt",
    selFacialHair:      "facialHairVt",

    // Face
    selFaceShape:   "faceShapeVt",
    selFaceLength:  "faceLengthVt",
    selHairline:    "hairlineVt",
    selEyebrows:    "eyebrowsVt",
    selBrowRidge:   "browRidgeVt",
    selEyeShape:    "eyeShapeVt",
    selEyeSet:      "eyeSetVt",
    selNose:        "noseVt",
    selCheekBones:  "cheekBonesVt",
    selLips:        "lipsVt",
    selChin:        "chinVt",
    selJawline:     "jawlineVt",

    // Body
    selBodyType:    "bodyTypeVt",
    selComposition: "bodyCompVt",
    selMuscularity: "muscularityVt",
    selHeight:      "heightVt",
    selBustSize:    "bustSizeVt",
  };

  // lists.js bindings captured once (no window[] and no eval)
  const LISTS_SOURCE = {};
  try { LISTS_SOURCE.genderVt = genderVt; } catch {}
  try { LISTS_SOURCE.ethnicityVt = ethnicityVt; } catch {}
  try { LISTS_SOURCE.eyeColorVt = eyeColorVt; } catch {}
  try { LISTS_SOURCE.skinColorVt = skinColorVt; } catch {}
  try { LISTS_SOURCE.ageVt = ageVt; } catch {}
  try { LISTS_SOURCE.glassesVt = glassesVt; } catch {}
  try { LISTS_SOURCE.frecklesVt = frecklesVt; } catch {}
  try { LISTS_SOURCE.clothingVt = clothingVt; } catch {}

  try { LISTS_SOURCE.hairColorVt = hairColorVt; } catch {}
  try { LISTS_SOURCE.highlightVt = highlightVt; } catch {}
  try { LISTS_SOURCE.facialHairVt = facialHairVt; } catch {}
  try { LISTS_SOURCE.maleHairStyles = maleHairStyles; } catch {}
  try { LISTS_SOURCE.femaleHairStyles = femaleHairStyles; } catch {}

  try { LISTS_SOURCE.faceShapeVt = faceShapeVt; } catch {}
  try { LISTS_SOURCE.faceLengthVt = faceLengthVt; } catch {}
  try { LISTS_SOURCE.hairlineVt = hairlineVt; } catch {}
  try { LISTS_SOURCE.eyebrowsVt = eyebrowsVt; } catch {}
  try { LISTS_SOURCE.browRidgeVt = browRidgeVt; } catch {}
  try { LISTS_SOURCE.eyeShapeVt = eyeShapeVt; } catch {}
  try { LISTS_SOURCE.eyeSetVt = eyeSetVt; } catch {}
  try { LISTS_SOURCE.noseVt = noseVt; } catch {}
  try { LISTS_SOURCE.cheekBonesVt = cheekBonesVt; } catch {}
  try { LISTS_SOURCE.lipsVt = lipsVt; } catch {}
  try { LISTS_SOURCE.chinVt = chinVt; } catch {}
  try { LISTS_SOURCE.jawlineVt = jawlineVt; } catch {}

  try { LISTS_SOURCE.bodyTypeVt = bodyTypeVt; } catch {}
  try { LISTS_SOURCE.bodyCompVt = bodyCompVt; } catch {}
  try { LISTS_SOURCE.muscularityVt = muscularityVt; } catch {}
  try { LISTS_SOURCE.heightVt = heightVt; } catch {}
  try { LISTS_SOURCE.bustSizeVt = bustSizeVt; } catch {}

  // hoisted helpers (strict male/female)
  function isMale()   { return (document.getElementById(ID.gender)?.value || "").toLowerCase() === "male"; }
  function isFemale() { return (document.getElementById(ID.gender)?.value || "").toLowerCase() === "female"; }

  //=============================================================================
  // Small DOM helpers
  //=============================================================================
  const qs  = (s, r = document) => r.querySelector(s);

  //-----------------------------------------------------------------------------

  const qsa = (s, r = document) => Array.from(r.querySelectorAll(s));

  //-----------------------------------------------------------------------------

  const on  = (el, ev, fn, opts) => el && el.addEventListener(ev, fn, opts);

  //=============================================================================
  // App State
  //=============================================================================
  const FBG = {
    version: "2.3.2",
    themeKey: "fbg_theme",
    presetsKey: "fbg_presets_v2",
    state: {
      generic: {
        gender: "", ethnicity: "", eyeColor: "", skinTone: "", age: "",
        glasses: "", freckles: "", clothing: ""
      },
      hair: { color: "", highlights: "", style: "", facialHair: "" },
      face: {
        shape: "", length: "", hairline: "", eyebrows: "", browRidge: "",
        eyeShape: "", eyeSet: "", nose: "", cheekBones: "", lips: "", chin: "", jawline: ""
      },
      body: { type: "", composition: "", muscularity: "", height: "", bustSize: "" },
      output: { face: "", body: "", name: "" },
      selectedPresetId: null,
    },
    wireTheme: () => {}
  };
  window.FBG = FBG;

  //=============================================================================
  // Boot
  //=============================================================================
  // on(window, "DOMContentLoaded", init);

  // --- Diagnostics: catch uncaught errors early
  window.addEventListener("error", (e) => {
    console.error("[FBG] Uncaught error:", e.error || e.message, e.filename, e.lineno, e.colno);
  });

  // --- Start up robustly in Perchance: wait for DOM + #appRoot
  boot();

  function boot() {
    console.log("[FBG] boot starting; readyState=", document.readyState);
    const start = () => waitFor("#appRoot", init);
    if (document.readyState === "interactive" || document.readyState === "complete") {
      start();
    } else {
      document.addEventListener("DOMContentLoaded", start);
    }
  }

  // Poll for a selector (Perchance injects content async inside iframe)
  function waitFor(sel, cb, tries = 0) {
    const el = document.querySelector(sel);
    if (el) {
      console.log("[FBG] found", sel, "— initializing");
      cb();
      return;
    }
    if (tries > 50) {
      console.error("[FBG] gave up waiting for", sel);
      return;
    }
    setTimeout(() => waitFor(sel, cb, tries + 1), 100);
  }

  //-----------------------------------------------------------------------------

  function init() {
    wireTheme();
    setupSelectsFromLists();
    let eth = qs("#selEthnicity");
      if (eth) eth.selectedIndex = 0;
    let hs = qs("#selHairStyle");
      if (hs) hs.selectedIndex = 0;
    hydrateSelections();
    wireSelects();
    wireButtons();
    renderAll();
    restorePresetsUI();
  }

  //=============================================================================
  // Theme (persisted)
  //=============================================================================
  function wireTheme() {
    const root = document.documentElement;
    const btn  = qs("#themeToggle");

    const saved = localStorage.getItem(FBG.themeKey);
    if (saved === "dark" || saved === "light") root.setAttribute("data-theme", saved);

    reflectThemeButton();

    on(btn, "click", () => {
      const next = (root.getAttribute("data-theme") || "light") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      localStorage.setItem(FBG.themeKey, next);
      reflectThemeButton();
    });

    function reflectThemeButton() {
      const mode = root.getAttribute("data-theme") || "light";
      btn.setAttribute("aria-pressed", mode === "dark" ? "true" : "false");
      btn.title = `Switch to ${mode === "dark" ? "light" : "dark"} mode`;
    }

    FBG.wireTheme = () => {};
  }

  //=============================================================================
  // Select population from LISTS_SOURCE (value/text/toolTip), ignoring weight
  //=============================================================================

  function populateFromListVar(varName, selectId) {
    let el = document.getElementById(selectId);
    if (!el) return;

    let list = Array.isArray(LISTS_SOURCE[varName]) ? LISTS_SOURCE[varName] : null;
    if (!list) {
      el.innerHTML = `<option value="">(none)</option>`;
      el.selectedIndex = 0;
      return;
    }
    if (!list.length) {
      el.innerHTML = `<option value="">(none)</option>`;
      el.selectedIndex = 0;
      return;
    }

    let first = list[0];
    let rest = list.slice(1);
    let firstIsBlank = first && first.value === "" && (first.text ?? "") === "";
    let finalList = firstIsBlank ? [first, ...rest] : list.slice();

    el.innerHTML = finalList.map(item => {
      let v = item.value ?? "";
      let label = (item.text ?? item.value ?? "").trim();
      let tip = item.toolTip ? ` title="${escapeHtml(item.toolTip)}"` : "";
      let isBlank = !v && !label;
      return `<option value="${escapeHtml(String(v))}"${tip}>${escapeHtml(isBlank ? "(none)" : label)}</option>`;
    }).join("");

    if (selectId === "selEthnicity" || selectId === "selHairStyle") {
      // These should default to (none)
      el.selectedIndex = 0;
    } else {
      el.selectedIndex = firstNonBlankIndex(el);
    }
  }

  //-----------------------------------------------------------------------------

  function populateHairStyleByGender() {
    let g = (document.getElementById(ID.gender)?.value || "").toLowerCase();
    let styleSelect = document.getElementById(ID.hairStyle);
    if (!styleSelect) return;

    let prev = styleSelect.value;
    let exactVar = (g === "male") ? "maleHairStyles" : (g === "female") ? "femaleHairStyles" : null;

    if (exactVar) {
      populateFromListVar(exactVar, ID.hairStyle);
      styleSelect.selectedIndex = firstNonBlankIndex(styleSelect);
    } else {
      let male   = Array.isArray(LISTS_SOURCE.maleHairStyles)   ? LISTS_SOURCE.maleHairStyles   : [];
      let female = Array.isArray(LISTS_SOURCE.femaleHairStyles) ? LISTS_SOURCE.femaleHairStyles : [];
      let merged = [];
      let out = [];

      let hasBlank = (a)=> a[0] && a[0].value === "" && (a[0].text ?? "") === "";
      let pushUnique = (arr) => {
        for (let it of arr) {
          if (!merged.some(m => (m.value ?? "") === (it.value ?? "") && (m.text ?? "") === (it.text ?? ""))) {
            merged.push(it);
          }
        }
      };

      if (hasBlank(male) || hasBlank(female)) out.push({ value:"", text:"", toolTip:"" });
      pushUnique(male.filter((_,i)=> i || !hasBlank(male)));
      pushUnique(female.filter((_,i)=> i || !hasBlank(female)));

      styleSelect.innerHTML = out.concat(merged).map(item => {
        let v = item.value ?? "";
        let label = (item.text ?? item.value ?? "").trim();
        let tip = item.toolTip ? ` title="${escapeHtml(item.toolTip)}"` : "";
        let isBlank = !v && !label;
        return `<option value="${escapeHtml(String(v))}"${tip}>${escapeHtml(isBlank ? "(none)" : label)}</option>`;
      }).join("");

      if (!styleSelect.innerHTML) styleSelect.innerHTML = `<option value="">(none)</option>`;
      styleSelect.selectedIndex = firstNonBlankIndex(styleSelect);
    }

    if (prev && Array.from(styleSelect.options).some(o => o.value === prev)) {
      styleSelect.value = prev;
    }
  }

  //-----------------------------------------------------------------------------

  function setupSelectsFromLists() {
    Object.entries(LIST_MAP).forEach(([selectId, varName]) => {
      if (selectId === "selHairStyle") return; // handled separately
      populateFromListVar(varName, selectId);
    });

    populateHairStyleByGender();
    const hs = qs("#selHairStyle");
    if (hs) hs.selectedIndex = firstNonBlankIndex(hs);

    reflectGenderFields(qs("#selGender")?.value || "");
  }

  //=============================================================================
  // State sync
  //=============================================================================
  
  function hydrateSelections() {
    qsa("select").forEach(s => {
      if (!s.options.length) return;
      if (s.id === "selEthnicity" || s.id === "selHairStyle") {
        s.selectedIndex = 0; // remain unselected / (none)
        return;
      }
      s.selectedIndex = firstNonBlankIndex(s);
    });
    syncStateFromDOM();
  }

  //-----------------------------------------------------------------------------

  function syncStateFromDOM() {
    const G = FBG.state.generic;
    G.gender    = val("#selGender");
    G.ethnicity = val("#selEthnicity");
    G.eyeColor  = val("#selEyeColor");
    G.skinTone  = val("#selSkinTone");
    G.age       = val("#selAge");
    G.glasses   = val("#selGlasses");
    G.freckles  = val("#selFreckles");
    G.clothing  = val("#selClothing");

    const H = FBG.state.hair;
    H.color       = val("#selHairColor");
    H.highlights  = val("#selHairHighlights");
    H.style       = val("#selHairStyle");
    H.facialHair  = val("#selFacialHair");

    const F = FBG.state.face;
    F.shape      = val("#selFaceShape");
    F.length     = val("#selFaceLength");
    F.hairline   = val("#selHairline");
    F.eyebrows   = val("#selEyebrows");
    F.browRidge  = val("#selBrowRidge");
    F.eyeShape   = val("#selEyeShape");
    F.eyeSet     = val("#selEyeSet");
    F.nose       = val("#selNose");
    F.cheekBones = val("#selCheekBones");
    F.lips       = val("#selLips");
    F.chin       = val("#selChin");
    F.jawline    = val("#selJawline");

    const B = FBG.state.body;
    B.type        = val("#selBodyType");
    B.composition = val("#selComposition");
    B.muscularity = val("#selMuscularity");
    B.height      = val("#selHeight");
    B.bustSize    = val("#selBustSize");

    FBG.state.face.custom = (qs("#inpFaceCustom")?.value || "").trim();
    FBG.state.body.custom = (qs("#inpBodyCustom")?.value || "").trim();
  }

  //=============================================================================
  // Wiring
  //=============================================================================
  function wireSelects() {
    qsa("select").forEach(s => {
      on(s, "change", () => {
        if (s.id === ID.gender) {
          populateHairStyleByGender();
          let hs = document.getElementById(ID.hairStyle);
          if (hs) hs.selectedIndex = firstNonBlankIndex(hs);
          reflectGenderFields();
        }

        syncStateFromDOM();
        renderAll();
      });
    });

    on(qs("#inpFaceCustom"), "input", () => { syncStateFromDOM(); renderAll(); });
    on(qs("#inpBodyCustom"), "input", () => { syncStateFromDOM(); renderAll(); });
  }

  //-----------------------------------------------------------------------------

  function wireButtons() {
    on(qs("#copyBtn"), "click", async () => {
      const text = qs("#pText").value || "";
      try { await navigator.clipboard.writeText(text); flash(qs("#copyBtn"), "Copied!"); }
      catch { fallbackCopy(text); flash(qs("#copyBtn"), "Copied (fallback)!"); }
    });

    on(qs("#btnRandomFace"), "click", () => {
      randomize([
        "#selHairColor","#selHairHighlights","#selHairStyle",
        "#selFaceShape","#selFaceLength","#selHairline","#selEyebrows",
        "#selBrowRidge","#selEyeShape","#selEyeSet","#selNose",
        "#selCheekBones","#selLips","#selChin","#selJawline",
        "#selEyeColor","#selGlasses","#selFreckles"
      ]);
      if (isMale()) randomize(["#selFacialHair"]); else setEmpty("#selFacialHair");
      qs("#inpFaceCustom").value = "";
      syncStateFromDOM(); renderAll();
    });

    on(qs("#btnRandomBody"), "click", () => {
      randomize(["#selBodyType","#selComposition","#selMuscularity","#selHeight","#selClothing"]);
      if (isFemale()) randomize(["#selBustSize"]); else setEmpty("#selBustSize");
      qs("#inpBodyCustom").value = "";
      syncStateFromDOM(); renderAll();
    });

    on(qs("#btnReset"), "click", () => {
      // set all selects to blank "(none)"
      qsa("select").forEach(sel => { if (sel) sel.value = ""; });

      // clear free-text notes
      const fc = qs("#inpFaceCustom"); if (fc) fc.value = "";
      const bc = qs("#inpBodyCustom"); if (bc) bc.value = "";

      // refresh hair styles when gender is blank and toggle gendered fields
      populateHairStyleByGender();
      reflectGenderFields();

      // sync + re-render outputs
      syncStateFromDOM();
      renderAll();
    });

    // Presets
    on(qs("#btnPresetAdd"), handlePresetAdd);
    on(qs("#btnPresetUpdate"), handlePresetUpdate);
    on(qs("#btnPresetDelete"), handlePresetDelete);
    on(qs("#btnImport"), handleImport);
    on(qs("#btnExport"), handleExport);
  }

  //=============================================================================
  // Gendered conditionals
  //=============================================================================
  
  function reflectGenderFields() {
    let male = isMale();
    let female = isFemale();

    let facialWrap = document.getElementById(ID.facialHairWrap);
    if (facialWrap) facialWrap.style.display = male ? "" : "none";
    if (!male) setEmpty(`#${ID.facialHair}`);

    let bustWrap = document.getElementById(ID.bustWrap);
    if (bustWrap) bustWrap.style.display = female ? "" : "none";
    if (!female) setEmpty(`#${ID.bustSize}`);
  }

  //=============================================================================
  // Rendering / Prompt construction (uses `value` tokens, fixed order, no weight)
  //=============================================================================
  function renderAll() {
    const facePrompt = buildPortraitPrompt();
    const bodyPrompt = buildBodyPrompt();

    FBG.state.output.face = facePrompt;
    FBG.state.output.body = bodyPrompt;
    FBG.state.output.name = buildOutputName();

    qs("#outputFace").textContent = facePrompt;
    qs("#outputBody").textContent = bodyPrompt;
    qs("#outputName").textContent = FBG.state.output.name;
    qs("#pText").value = `${facePrompt}\n\n${bodyPrompt}`;
  }

  //-----------------------------------------------------------------------------

  function buildPortraitPrompt() {
    const G = FBG.state.generic;
    const F = FBG.state.face;
    const H = FBG.state.hair;

    const header = [
      G.gender, G.ethnicity, G.age, G.skinTone, G.eyeColor
    ].filter(Boolean).join(", ");

    const hairBits = [
      H.color, H.highlights, H.style
    ].filter(Boolean);
    if (/\b(male|man|masc)\b/i.test(FBG.state.generic.gender || "") && H.facialHair) {
      hairBits.push(H.facialHair);
    }

    const faceBits = [
      F.shape, F.length, F.hairline, F.eyebrows, F.browRidge,
      F.eyeShape, F.eyeSet, F.nose, F.cheekBones, F.lips, F.chin, F.jawline
    ].filter(Boolean);

    const misc   = [G.glasses, G.freckles].filter(Boolean);
    const notes  = FBG.state.face.custom ? [FBG.state.face.custom] : [];

    const pieces = [
      header && `portrait: ${header}`,
      hairBits.length && `hair: ${hairBits.join(", ")}`,
      faceBits.length && `face: ${faceBits.join(", ")}`,
      misc.length && misc.join(", "),
      notes.length && notes.join(", ")
    ].filter(Boolean);

    return pieces.join(" | ");
  }

  //-----------------------------------------------------------------------------

  function buildBodyPrompt() {
    const G = FBG.state.generic;
    const B = FBG.state.body;

    const bodyBits = [
      B.type, B.composition, B.muscularity, B.height
    ].filter(Boolean);
    if (isFemale() && B.bustSize) bodyBits.push(B.bustSize);

    const misc  = [G.clothing].filter(Boolean);
    const notes = FBG.state.body.custom ? [FBG.state.body.custom] : [];

    const pieces = [
      bodyBits.length && `body: ${bodyBits.join(", ")}`,
      misc.length && `clothing: ${misc.join(", ")}`,
      notes.length && notes.join(", ")
    ].filter(Boolean);

    return pieces.join(" | ");
  }

  //-----------------------------------------------------------------------------

  function buildOutputName() {
    const G = FBG.state.generic, H = FBG.state.hair, B = FBG.state.body;
    const faceBits = [G.gender, G.ethnicity, G.eyeColor, H.style].filter(Boolean).join(" • ");
    const bodyBits = [B.type, B.height].filter(Boolean).join(" • ");
    return [faceBits, bodyBits].filter(Boolean).join(" | ");
  }

  //=============================================================================
  // Presets (CRUD / Import / Export)
  //=============================================================================
  function restorePresetsUI() {
    drawPresetList(loadPresets());
  }

  //-----------------------------------------------------------------------------

  function handlePresetAdd() {
    const n = (qs("#presetName").value || "").trim();
    if (!n) return flash(qs("#presetName"), "Name required");
    const list = loadPresets();
    const rec = { id: rid(), name: n, createdUtc: iso(), data: snapshotState(), version: FBG.version };
    list.push(rec);
    savePresets(list);
    drawPresetList(list, rec.id);
    flash(qs("#btnPresetAdd"), "Added");
  }

  //-----------------------------------------------------------------------------

  function handlePresetUpdate() {
    const id = FBG.state.selectedPresetId;
    if (!id) return flash(qs("#btnPresetUpdate"), "Select a preset");
    const list = loadPresets();
    const idx = list.findIndex(x => x.id === id);
    if (idx < 0) return flash(qs("#btnPresetUpdate"), "Missing preset");
    const n = (qs("#presetName").value || "").trim();
    list[idx] = { ...list[idx], name: n || list[idx].name, data: snapshotState(), updatedUtc: iso() };
    savePresets(list);
    drawPresetList(list, id);
    flash(qs("#btnPresetUpdate"), "Updated");
  }

  //-----------------------------------------------------------------------------

  function handlePresetDelete() {
    const id = FBG.state.selectedPresetId;
    if (!id) return flash(qs("#btnPresetDelete"), "Select a preset");
    const list = loadPresets().filter(x => x.id !== id);
    FBG.state.selectedPresetId = null;
    savePresets(list);
    drawPresetList(list, null);
    qs("#presetName").value = "";
    flash(qs("#btnPresetDelete"), "Deleted");
  }

  //-----------------------------------------------------------------------------

  function handleImport() {
    const fi = qs("#fileImport");
    if (!fi.files || !fi.files[0]) return fi.click();
    const file = fi.files[0], r = new FileReader();
    r.onload = () => {
      try {
        const imported = JSON.parse(String(r.result || "[]"));
        const merged = mergePresets(loadPresets(), Array.isArray(imported) ? imported : []);
        savePresets(merged);
        drawPresetList(merged);
        flash(qs("#btnImport"), "Imported");
      } catch {
        flash(qs("#btnImport"), "Import failed");
      } finally {
        fi.value = "";
      }
    };
    r.onerror = () => { flash(qs("#btnImport"), "Import failed"); fi.value=""; };
    r.readAsText(file);
  }

  //-----------------------------------------------------------------------------

  function handleExport() {
    const blob = new Blob([JSON.stringify(loadPresets(), null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.download = `fbg-presets-${new Date().toISOString().slice(0,10)}.json`;
    a.href = url;
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  //-----------------------------------------------------------------------------

  function drawPresetList(list, selectId = FBG.state.selectedPresetId) {
    const host = qs("#presetList");
    host.innerHTML = "";
    if (!list.length) {
      host.innerHTML = `<div role="option" aria-disabled="true" style="color:var(--muted)">(no presets)</div>`;
      return;
    }
    list.forEach(item => {
      const b = document.createElement("button");
      b.type = "button";
      b.setAttribute("role", "option");
      b.textContent = item.name;
      if (item.id === selectId) b.setAttribute("aria-pressed", "true");
      on(b, "click", () => {
        FBG.state.selectedPresetId = item.id;
        qs("#presetName").value = item.name;
        qsa("#presetList button").forEach(x => x.removeAttribute("aria-pressed"));
        b.setAttribute("aria-pressed", "true");
        applySnapshot(item.data);
        renderAll();
      });
      host.appendChild(b);
    });
  }

  //-----------------------------------------------------------------------------

  function snapshotState() {
    return {
      generic: { ...FBG.state.generic },
      hair:    { ...FBG.state.hair },
      face:    { ...FBG.state.face },
      body:    { ...FBG.state.body },
      faceNotes: FBG.state.face.custom,
      bodyNotes: FBG.state.body.custom,
      schema: "fbg.v2"
    };
  }

  //-----------------------------------------------------------------------------

  function applySnapshot(s) {
    if (!s) return;

    const setSel = (id, val) => { const el=qs(`#${id}`); if (el && val!==undefined) el.value = String(val); };

    // generic
    Object.entries(s.generic || {}).forEach(([k,v])=> setSel({
      gender:"selGender", ethnicity:"selEthnicity", eyeColor:"selEyeColor", skinTone:"selSkinTone",
      age:"selAge", glasses:"selGlasses", freckles:"selFreckles", clothing:"selClothing"
    }[k] || "", v));

    // hair
    Object.entries(s.hair || {}).forEach(([k,v])=> setSel({
      color:"selHairColor", highlights:"selHairHighlights", style:"selHairStyle", facialHair:"selFacialHair"
    }[k] || "", v));

    // face
    Object.entries(s.face || {}).forEach(([k,v])=> setSel({
      shape:"selFaceShape", length:"selFaceLength", hairline:"selHairline", eyebrows:"selEyebrows",
      browRidge:"selBrowRidge", eyeShape:"selEyeShape", eyeSet:"selEyeSet", nose:"selNose",
      cheekBones:"selCheekBones", lips:"selLips", chin:"selChin", jawline:"selJawline"
    }[k] || "", v));

    // body
    Object.entries(s.body || {}).forEach(([k,v])=> setSel({
      type:"selBodyType", composition:"selComposition", muscularity:"selMuscularity", height:"selHeight",
      bustSize:"selBustSize"
    }[k] || "", v));

    if ("faceNotes" in s) qs("#inpFaceCustom").value = s.faceNotes || "";
    if ("bodyNotes" in s) qs("#inpBodyCustom").value = s.bodyNotes || "";

    populateHairStyleByGender();
    reflectGenderFields(qs("#selGender")?.value || "");

    qsa("select").forEach(sel => sel.selectedIndex = firstNonBlankIndex(sel));
    syncStateFromDOM();
  }

  //-----------------------------------------------------------------------------

  function mergePresets(current, imported) {
    const sig = (x)=> `${x.name}::${JSON.stringify(x.data)}`;
    const map = new Map(current.map(x=>[sig(x), x]));
    imported.forEach(x=>{
      if (x && x.name && x.data) {
        const k = sig(x);
        if (!map.has(k)) map.set(k, { ...x, id: x.id || rid() });
      }
    });
    return Array.from(map.values());
  }

  //-----------------------------------------------------------------------------

  function loadPresets() {
    try {
      const raw = localStorage.getItem(FBG.presetsKey);
      const arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr : [];
    } catch {
      return [];
    }
  }

  //-----------------------------------------------------------------------------

  function savePresets(list) {
    try { localStorage.setItem(FBG.presetsKey, JSON.stringify(list)); } catch {}
  }

  //=============================================================================
  // Utilities
  //=============================================================================
  function val(sel){ const el=qs(sel); return el ? el.value : ""; }

  //-----------------------------------------------------------------------------

  function setEmpty(sel){ const el=qs(sel); if (el){ el.value = ""; } }

  //-----------------------------------------------------------------------------

  function randomize(ids){
    ids.forEach(s=>{
      const el=qs(s);
      if (el && el.options.length){
        el.selectedIndex = Math.floor(Math.random()*el.options.length);
        if (el.options.length > 1 && el.value === "") {
          el.selectedIndex = firstNonBlankIndex(el);
        }
      }
    });
  }

  //-----------------------------------------------------------------------------

  function firstNonBlankIndex(selectEl){
    if (!selectEl || !selectEl.options.length) return 0;
    for (let i = 0; i < selectEl.options.length; i++) {
      if ((selectEl.options[i].value || "").trim() !== "") return i;
    }
    return 0;
  }

  //-----------------------------------------------------------------------------

  function flash(el, msg){
    if(!el) return;
    const old=el.textContent;
    el.textContent=msg;
    el.setAttribute("aria-live","polite");
    setTimeout(()=>{ el.textContent=old; el.removeAttribute("aria-live"); }, 900);
  }

  //-----------------------------------------------------------------------------

  function fallbackCopy(text){
    const ta=document.createElement("textarea");
    ta.value=text;
    ta.setAttribute("readonly","");
    ta.style.position="absolute";
    ta.style.left="-9999px";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }

  //-----------------------------------------------------------------------------

  function escapeHtml(s){
    return String(s)
      .replaceAll("&","&amp;")
      .replaceAll("<","&lt;")
      .replaceAll(">","&gt;")
      .replaceAll('"',"&quot;")
      .replaceAll("'","&#39;");
  }

  //-----------------------------------------------------------------------------

  function rid(){
    try {
      const a=new Uint8Array(16);
      crypto.getRandomValues(a);
      return Array.from(a,b=>b.toString(16).padStart(2,"0")).join("");
    } catch {
      return "id_"+Math.random().toString(36).slice(2);
    }
  }

  //-----------------------------------------------------------------------------

  const iso = () => new Date().toISOString();

  //=============================================================================
  // End IIFE
  //=============================================================================
})();

//#region Misc functions

function changeGender(gender, facialHair) {
  if (!gender || !facialHair) return;
  if (gender.value == "male") {
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
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                copy[key] = (obj[key] && typeof obj[key] === 'object') ? 
                    (Array.isArray(obj[key]) ? deepCopyArray(obj[key]) : deepCopyObject(obj[key])) : obj[key];
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
// --- prompt builder for image generation ---
function buildImagePrompt({ kind, features, baseTags = [], extraTags = [], negative = "" }) {
  const f = features || {};
  // Core subject tokens (trim empties)
  const subjectBits = [
    f.gender, f.ethnicity, f.eyeColor, f.skinColor, f.hair, f.facialHair,
    f.faceShape, f.faceLength, f.hairline, f.forehead, f.eyebrows, f.browRidge,
    f.eyeShape, f.eyeSet, f.nose, f.cheekBones, f.lips, f.chin, f.jawline,
    // body
    f.bodyType, f.bodyComp, f.muscularity, f.height, f.bustSize,
    // extras
    f.ears, f.glasses, f.freckles, f.clothing
  ].filter(Boolean);

  const allPos = [...baseTags, ...subjectBits, ...extraTags].filter(Boolean);
  const positive = allPos.join(', ');

  return {
    positive,
    negative: negative || "",
    kind
  };
}

//#endregion

//#region Set functions

    function setFeatureText(Obj, allFeatures) {
        let nonEmptyEnteries = Object.entries(allFeatures).filter(([key, value]) => value !== "" && value !== null);
        let nonEmptyValues = nonEmptyEnteries.map(([key, value]) => value)
        let result = nonEmptyValues.join(", ");
        Obj.innerHTML = result;
    }

    function setFeature(featureType, selectedIndex, allFeatures, pText) {
        allFeatures[featureType] = selectedIndex;
        setFeatureText(pText, allFeatures);
        persistSelections();
    }

    function setHairElement(feature, hairSelect, hairEls, allFeatures, pText) {
        hairEls[hairSelect.value] = feature;
        let nonEmptyEnteries = Object.entries(hairEls).filter(([key, value]) => value !== "" && value !== null);
        let nonEmptyValues = nonEmptyEnteries.map(([key, value]) => value)
        let result = nonEmptyValues.join(" "); 
        allFeatures["hair"] = result;
        setFeatureText(pText, allFeatures);
        persistSelections();
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
  hairType.innerHTML = "";
  let feat = [];
  switch (feature) {
    case "hairColor": feat = hColorList; break;
    case "highlights": feat = hlList; break;
    case "hairStyle":
      feat = (gender.value === "male") ? mHair : fHair;
      break;
    default: feat = [];
  }
  feat.forEach(type => {
    const option = document.createElement("option");
    option.value = type.value;
    option.textContent = type.text;
    hairType.appendChild(option);
  });
}

    // function populateHair(feature, hairType, gender, hColorList, hlList, mHair, fHair) {
    //     hairType.innerHTML = "";
    //     var feat = [];
    //     switch (feature) {
    //         case "hairColor":
    //             feat = hColorList;
    //             break;
    //         case "highlights":
    //             feat = hlList;
    //             break;
    //         case "hairStyle":
    //             if (gender.value == "(male:1.2)") {
    //                 feat = mHair;
    //                 isMale = true;
    //             }
    //             else {
    //                 feat = fHair;
    //                 isMale = true;
    //             }
    //             break;
    //     }
    //     feat.forEach((type, index) => {
    //         let option = document.createElement("option");
    //         option.value = type.value;
    //         option.textContent = type.text;
    //         hairType.appendChild(option);
    //     });
    // }

    function populateModifier(group, bridge, mods, ebrowList, noseList, lipList, jawList){
        switch(group){
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

    
    function addToArray(presetName, preset, arrayOfFeatures, feats, pText){
        if(presetName.value == ""){
            presetName.style.background="yellow";
            return;
        }

        feats["name"] = presetName.value;
        let item = document.createElement("option");
        item.value=presetName.value;
        item.text=presetName.value;
        preset.appendChild(item);
        arrayOfFeatures.push(deepCopyObject(feats));
        reset(pText, feats);
        presetName.value = "";
    }

//#endregion


//#region GPT code
// --- central config & one-time init ---
window.FBG = window.FBG || {
  version: '0.2.0',
  flags: { debug: false, showAIDescription: true, showImages: true },
  model: { widthFace: 512, heightFace: 512, widthBody: 768, heightBody: 1024, guidance: 7.0, steps: 28 },
  a11y: { announceChanges: true },
  storageKey: 'fbg:last'
};

function initFBG() {
  try { hydrateSelections(); } catch {}
  // Example: wire buttons once (IDs from your HTML)
  const genBtn = document.getElementById('gen');
  const randBtn = document.getElementById('random');
  const resetBtn = document.getElementById('reset');

  if (genBtn) genBtn.addEventListener('click', () => {
    const pics = document.getElementById('pics');
    if (pics) pics.style.display = 'inline';
    if (typeof update === 'function') update(); // your existing update()
  });

  if (randBtn) randBtn.addEventListener('click', () => {
    if (typeof genRandomFeatures === 'function') genRandomFeatures(); // existing randomizer
    persistSelections();
  });

  if (resetBtn) resetBtn.addEventListener('click', () => {
    // use your existing reset(allFeaturesTextEl, features)
    // then persist
    persistSelections();
  });
}

document.addEventListener('DOMContentLoaded', initFBG);
//#endregion
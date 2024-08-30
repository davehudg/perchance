//#region Misc functions

function changeGender(gender, facialHair) {
        if (gender.value == "(male:1.2)") {
            facialHair.style.display = "inline";
        }
        else {
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

    async function writeFileToDisk(arrayOfFeatures) {
        const fileHandle = await window.showSaveFilePicker();
        const fileStream = await fileHandle.createWritable();
        await fileStream.write(new Blob([JSON.stringify(arrayOfFeatures)], {type: "text/plain"}));
        await fileStream.close();
    }

    async function readFileFromDisk(file, arrayOfFeatures, preset) {
        let fileContent = await file.text();
        let dump = new Array();
        dump.push(JSON.parse(fileContent));
        arrayOfFeatures = dump[0];

        listFeatures.forEach(featureSet =>{
            let item = document.createElement("option");
            item.value=featureSet.name;
            item.text=featureSet.name;
            presetObj.appendChild(item);
        });
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

    function genDescriptionOutput(aiFace, responseEl, loaderEl){
        aiFace.style.display = "none";
        responseEl.style.display = "inline-block";
        loaderEl.innerHTML=output.evaluateItem;
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
    }

    function setHairElement(feature, hairSelect, hairEls, allFeatures, pText) {
        hairEls[hairSelect.value] = feature;
        let nonEmptyEnteries = Object.entries(hairEls).filter(([key, value]) => value !== "" && value !== null);
        let nonEmptyValues = nonEmptyEnteries.map(([key, value]) => value)
        let result = nonEmptyValues.join(" ");
        allFeatures["hair"] = result;
        setFeatureText(pText, allFeatures);
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
        var feat = [];
        switch (feature) {
            case "hairColor":
                feat = hColorList;
                break;
            case "highlights":
                feat = hlList;
                break;
            case "hairStyle":
                if (gender.value == "(male:1.2)") {
                    feat = mHair;
                    isMale = true;
                }
                else {
                    feat = fHair;
                    isMale = true;
                }
                break;
        }
        feat.forEach((type, index) => {
            let option = document.createElement("option");
            option.value = type.value;
            option.textContent = type.text;
            hairType.appendChild(option);
        });
    }

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

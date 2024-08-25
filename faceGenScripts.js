
    //#region Misc

    function changeGender() {
        let x = document.getElementById("facialHair");
        let genSwitch = document.getElementById("gender");
        if (genSwitch.value == "(male:1.2)") {
            x.style.display = "inline";
        }
        else {
            x.value = "";
            x.style.display = "none";
        }
    }

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

    //#endregion

    //#region Random

    function genRandomFeatures() {
        features["gender"] = ["(male:1.2)", "female"][getRandomInt(0, 2)];
        features["eyeColor"] = eyeColorVt[getRandomInt(0, eyeColorVt.length)].value;
        features["skinColor"] = skinColorVt[getRandomInt(0, skinColorVt.length)].value;
        features["age"] = ageVt[7].value;
        //features["hasGlasses"] = glassesVt[getRandomInt(0, glassesVt.length)].value;
        features["freckles"] = frecklesVt[getRandomInt(0, frecklesVt.length)].value;
        let hair = hairColorVt[getRandomInt(1, hairColorVt.length)].value;
        if (features["gender"] == "(male:1.2)") {
            features["facialHair"] = facialHairVt[getRandomInt(0, facialHairVt.length)].value;
            features["hair"] = hair + " " + maleHairStyles[getRandomInt(0, maleHairStyles.length)].value;
            // + " " + highlightVt[getRandomInt(0, highlightVt.length)].value;
        }
        else {
            features["facialHair"] = "";
            features["hair"] = hair + " " + femaleHairStyles[getRandomInt(0, femaleHairStyles.length)].value;
            // + " " + highlightVt[getRandomInt(0, highlightVt.length)].value;
        }
        faceFeatsVt.forEach(item => {
            let dArr = eval(`${item.value}Vt`);
            let numItems = dArr.length;
            features[item.value] = dArr[getRandomInt(1, numItems)].value;
        });
        bodyFeatsVt.forEach(item => {
            let dArr = eval(`${item.value}Vt`);
            let numItems = dArr.length;
            features[item.value] = dArr[getRandomInt(1, numItems)].value;
        });
        if (features["gender"] == "(male:1.2)") {
            features["bustSize"] = "";
        }
        setFeatureText();
        update();
    }

    function reset() {
        let temp = Object.entries(features).filter(([key, value]) => key);
        temp.forEach(item => {
            console.log(item[0]);
            features[item[0]] = "";
        });
        setFeatureText();
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    //#endregion

    //#region Chat

    const prompt = [`I want you to describe the physical appearance of a person using the following attributes: "name", "gender", "hairColor", "hairStyle", "eyeColor", "skinColor", "freckles" 
        - in terms of none, some on the bridge of their nose, light body freckles, a lot of body freckles, "age" - in terms of stage of life Child, Pre-Teen, Teenager, Young Adult, "faceShape", "faceLength", "hairline",
        "eyebrows", "browRidge", "eyeShape", "eyeSet", "nose", "cheekBones", "lips", "chin", "bodyType", "muscularity", "bodyComposition", "height" - in terms of relation to the general population small, 
        average, tall, very tall "bustSize" - if female, in terms of relation to their body proportions flat, small, proportional, large, huge. The output of the attributes should be in a list as 
        follows: attributeName: attribute description. attribute names should appear as they are listed. Each attribute should be on it's own line. No descriptions should contain flowery language, and should be succinct and matter of fact.`];

    function genDescriptionOutput(){
        document.getElementById("aiFace").style.display = "none";
        document.getElementById("responseEl").style.display = "inline-block";
        document.getElementById("loaderEl").innerHTML=output.evaluateItem;
    }

    function parseOutput() {
        let textDump = document.getElementById("responseEl");
        let text = textDump.value;
        let pattern = /- (?<key>[\w\s]+): (?<val>[^\n]+)/gi;
        for (const match of text.matchAll(pattern)) {
            console.log("parse loop started");
            let key = match.groups.key;
            let nout = document.getElementById("pName");
            if (key == "name") {
                nout.innerHTML = match.groups.val;
                console.log("name set");
                console.log(nout.textContent);
                continue;
            }
            if (key == "age") {
                nout.innerHTML = nout.innerHTML + ", " + match.groups.val;
                console.log(nout.textContent);
                continue;
            }
            if (key.includes("hair")) {
                console.log("entered hair");
                if (key.includes("color")) {
                    let val = match.groups.val.toLowerCase();
                    let idx = hairColorVt.findIndex(obj => obj.value.includes(val))
                    if (hidx > -1) {
                        console.log(hairColorVt[idx].value);
                        features["hairColor"] = hairColorVt[idx].value;;
                        features["eyebrowColor"] = hairColorVt[idx].value;;
                        features["bodyHairColor"] = hairColorVt[idx].value;;
                    }
                    else {
                        console.log(match.groups.val);
                        features["hairColor"] = match.groups.val;
                        features["eyebrowColor"] = match.groups.val;
                        features["bodyHairColor"] = match.groups.val;
                    }
                    continue;
                }
                else {
                    console.log(match.groups.val);
                    features["hair"] = features["hair"] + " " + match.groups.val;;
                    console.log(features["hair"]);
                    continue;
                }
            }
            if (features.hasOwnProperty(key)) {
                console.log("has feature", key);
                let dArr = eval(`${key}Vt`);
                let val = match.groups.val.toLowerCase();
                let idx = dArr.findIndex(obj => obj.value.includes(val))
                if (idx > -1) {
                    features[key] = dArr[idx].value;
                    console.log(features[key]);
                }
                else {
                    features[key] = val + " " + key;
                    console.log(features[key]);
                }
            }
            else{
                console.log("no property", match.groups.val);
            }
        }
        setFeatureText();
        document.getElementById("responseEl").style.display = "none";
        document.getElementById("aiFace").style.display = "inline";

        update();
    }

    Object.prototype.hasOwnPropertyCI = function (prop) {
        return Object.keys(this).some(key => key.toLowerCase() === prop.toLowerCase());
    };

    //#endregion

    //#region Form interaction functions

    document.querySelectorAll("select").forEach(select => {
        select.addEventListener("change", function () {
            switch (this.id) {
                case "facialFeature":
                    populateFaceFeature(this.value);
                    populateModifier(this.value);
                    setToolTip("none", this.value);
                    break;
                case "facialFeatureType":
                    setFeatureType("facial", this.value);
                    setToolTip("facial", this.value);
                    break;
                case "bodyFeature":
                    populateBodyFeature(this.value);
                    setToolTip("none", this.value);
                    break;
                case "bodyFeatureType":
                    setFeatureType("body", this.value);
                    setToolTip("body", this.value);
                    break;
                case "hair":
                    populateHair(this.value);
                    setToolTip("none", this.value);
                    break;
                case "hairType":
                    setHairElement(this.value);
                    setToolTip("none", this.value);
                    break;
                case "modifiers":
                case "bridges":
                    setFeatureTypeWithMod(this.value);
                    break;
                default:
                    setFeature(this.id.split('FeatureType')[0], this.value);
                    setToolTip("none", this.value);
                    break;
            }
        });
    });

    //#region populate functions - fills selects

    function populateSelect(header, parentId, list) {
        let selectItem = document.getElementById(parentId);
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

    function populateFaceFeature(feature) {
        let faceFeatSelect = document.getElementById("facialFeatureType");
        faceFeatSelect.innerHTML = "";
        let dVar = eval(`${feature}Vt`);
        dVar.forEach((type, index) => {
            let option = document.createElement("option");
            option.value = type.value;
            option.textContent = type.text;
            faceFeatSelect.appendChild(option);
        });
    }

    function populateBodyFeature(feature) {
        let bodyFeatSelect = document.getElementById("bodyFeatureType");
        bodyFeatSelect.innerHTML = "";
        let dVar = eval(`${feature}Vt`);
        dVar.forEach((type, index) => {
            let option = document.createElement("option");
            option.value = type.value;
            option.textContent = type.text;
            bodyFeatSelect.appendChild(option);
        });
    }

    function populateHair(feature) {
        let hairFeatSelect = document.getElementById("hairType");
        hairFeatSelect.innerHTML = "";
        var feat = [];
        switch (feature) {
            case "hairColor":
                feat = hairColorVt;
                break;
            case "highlights":
                feat = highlightVt;
                break;
            case "hairStyle":
                let genderSelect = document.getElementById("gender");

                if (genderSelect.value == "(male:1.2)") {
                    feat = maleHairStyles;
                    isMale = true;
                }
                else {
                    feat = femaleHairStyles;
                    isMale = true;
                }
                break;
        }
        feat.forEach((type, index) => {
            let option = document.createElement("option");
            option.value = type.value;
            option.textContent = type.text;
            hairFeatSelect.appendChild(option);
        });
    }

    function populateModifier(group){
        let bridge = document.getElementById("bridges");
        let mods = document.getElementById("modifiers");
        switch(group){
            case "eyebrows":
                populateSelect("Eyebrow Modifiers", "modifiers", eyebrowModVt)
                bridge.style.display = "none";
                break;
            case "nose":
                populateSelect("Nose Modifiers", "modifiers", noseModVt)
                bridge.style.display = "inline";
                break;
            case "lips":
                populateSelect("Lip Modifiers", "modifiers", lipModVt)
                bridge.style.display = "none";
                break;
            case "chin":
                populateSelect("Jawlines", "modifiers", jawlineVt)
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

    //#region set functions - sets values
    
    function setFeature(featureType, selectedIndex) {
        features[featureType] = selectedIndex;
        setFeatureText();
    }

    function setFeatureType(type, value) {
        if (type === "facial") {
            let faceSelect = document.getElementById("facialFeature");
            let modbox = document.getElementById("modifiers");
            let nosebridge = document.getElementById("bridges");
            let color = hairElements["hairColor"];
            if (faceSelect.value == "nose" && nosebridge.value != ""){
                value = `${value} ${nosebridge.value}`;
            }
            if(["nose", "eyebrows", "lips", "chin"].includes(faceSelect.value) &&
                modbox.value != "") {
                value = `${modbox.value} ${value}`;
            }
            if (faceSelect.value == "eyebrows" && (color != "" && color != undefined)){
                color = color.substring(0, color.length - 5);
                value = `${color} ${value}`;
            }
            features[faceSelect.value] = value;
        }
        else {
            let bodySelect = document.getElementById("bodyFeature");
            features[bodySelect.value] = value;
        }
        setFeatureText();
    }

    function setFeatureText() {
        let nonEmptyEnteries = Object.entries(features).filter(([key, value]) => value !== "" && value !== null);
        let nonEmptyValues = nonEmptyEnteries.map(([key, value]) => value)
        let result = nonEmptyValues.join(", ");
        document.getElementById("pText").innerHTML = result;
    }

    function setToolTip(type, value) {
        let feature = "";
        if (type == "none") {
            document.getElementById("toolTip").textContent = "";
            return;
        }
        if (type == "facial") {
            feature = document.getElementById("facialFeature");
        }
        else {
            feature = document.getElementById("bodyFeature");
        }
        let dVar = eval(`${feature.value}Vt`);
        result = dVar.find(item => item.value == value);
        if (result.hasOwnProperty("toolTip")) {
            document.getElementById("toolTip").textContent = result.toolTip;
        }
        else {
            document.getElementById("toolTip").textContent = "";
        }
    }

    function setHairElement(feature) {
        let hairSelect = document.getElementById("hair");
        hairElements[hairSelect.value] = feature;
        let nonEmptyEnteries = Object.entries(hairElements).filter(([key, value]) => value !== "" && value !== null);
        let nonEmptyValues = nonEmptyEnteries.map(([key, value]) => value)
        let result = nonEmptyValues.join(" ");
        features["hair"] = result;
        setFeatureText();
    }

    function setFeatureTypeWithMod(modifier){
        let faceSelect = document.getElementById("facialFeature");
        let feature = document.getElementById("facialFeatureType");
        let color = hairElements["hairColor"];
        switch(faceSelect.value){
            default :
                break;
            case "lips":
            case "chin":
            case "eyebrows":
                let value = `${modifier} ${feature.value}`;
                if (faceSelect.value == "eyebrows" && (color != "" && color != undefined)){
                    color = color.substring(0, color.length - 5);
                    value = `${color} ${value}`;
                }
                features[faceSelect.value] = value;
                // add tool tip
                break;
            case "nose":
                let mod = document.getElementById("modifiers");
                let nosebridge = document.getElementById("bridges")
                features[faceSelect.value] = `${mod.value} ${feature.value} ${nosebridge.value}`;
                break;
        }
        setFeatureText();
    }

    //#endregion


    //#endregion

    //#region page setup

    function setupSelects() {
        populateSelect("Skin Tone", "skinColor", skinColorVt);
        populateSelect("Eye Color", "eyeColor", eyeColorVt);
        populateSelect("Age", "age", ageVt);
        populateSelect("Glasses", "glasses", glassesVt);
        populateSelect("Freckles", "freckles", frecklesVt);
        populateSelect("Facial Hair", "facialHair", facialHairVt);
        populateSelect("Facial Features", "facialFeature", faceFeatsVt);
        populateSelect("Body Features", "bodyFeature", bodyFeatsVt);
        populateSelect("Hair", "hair", hairVt);
        populateSelect("Bridge", "bridges", noseBridgeVt);
    }

    //#endregion

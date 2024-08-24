    //#region variables
    var features = {
        gender: "", hair: "", eyeColor: "", skinColor: "", hasGlasses: "", freckles: "", age: "", 
        facialHair: "", faceShape: "", faceLength: "", hairline: "", forehead: "", eyebrows: "",
        browRidge: "", eyeShape: "", eyeSet: "", nose: "", cheekBones: "", lips: "", chin: "",
        bodyType: "", bodyComp: "", muscularity: "", height: "", bustSize: ""
    };

    var hairElements = { hairColor: "", hairStyle: "", highlights: "" };

    //#endregion

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

    const prompt = ["I want you to describe the physical appearance of a person using the following attributes: person's name, 'gender', 'hairColor', 'hairStyle', 'eyeColor', 'skinColor', 'freckles' " +
        "- in terms of none, some on the bridge of their nose, light body freckles, a lot of body freckle, 'age' - in terms of stage of life Child, Pre-Teen, Teenager, Young Adult, 'faceShape', 'faceLength', 'hairline', " + //" 'forehead', " +
        "'eyebrows', 'browRidge', 'eyeShape', 'eyeSet', 'nose', 'cheekBones', 'lips', 'chin', 'bodyType', 'muscularity', 'bodyComposition', 'height' - in terms of relation to the general population small, " +
        "average, tall, very tall 'bustSize' - if female, in terms of relation to their body proportions flat, small, proportional, large, huge. The output of the attributes should be in a list as " +
        "follows: attributeName: attribute description. Each attribute shoul be on their own line. All descriptions should not contain flowery language, and should be succinct and matter of fact."];

    function parseOutput() {
        let textDump = document.getElementById("responseEl");
        let text = textDump.value;
        let pattern = /- (?<key>[\w\s]+): (?<val>[^\n]+)/gi;
        for (const match of text.matchAll(pattern)) {
            let key = match.groups.key;
            if (features.hasOwnProperty(key)) {
                let val = match.groups.val.toLowerCase();
                features[key] = val + " " + key;
            }
        }
        setFeatureText();
        update();
    }

    Object.prototype.hasOwnPropertyCI = function (prop) {
        return Object.keys(this).some(key => key.toLowerCase() === prop.toLowerCase());
    };

    //#endregion

    //#region Populate functions

    document.querySelectorAll("select").forEach(select => {
        select.addEventListener("change", function () {
            switch (this.id) {
                case "facialFeature":
                    populateFaceFeature(this.value);
                    break;
                case "facialFeatureType":
                    updateFeatureType("facial", this.value);
                    setToolTip("facial", this.value);
                    break;
                case "bodyFeature":
                    populateBodyFeature(this.value);
                    break;
                case "bodyFeatureType":
                    updateFeatureType("body", this.value);
                    setToolTip("body", this.value);
                    break;
                case "hair":
                    populateHair(this.value);
                    break;
                case "hairType":
                    populateHairElement(this.value);
                    break;
                default:
                    updateFeature(this.id.split('FeatureType')[0], this.value);
                    break;
            }
        });
    });

    function setToolTip(type, value) {
        let feature = "";
        if (type == "facial") {
            feature = document.getElementById("facialFeature");
        }
        else {
            feature = document.getElementById("bodyFeatureType");
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

    function setFeatureText() {
        let nonEmptyEnteries = Object.entries(features).filter(([key, value]) => value !== "" && value !== null);
        let nonEmptyValues = nonEmptyEnteries.map(([key, value]) => value)
        let result = nonEmptyValues.join(", ");
        document.getElementById("text").innerHTML = result;
    }

    function populateHairElement(feature) {
        let hairSelect = document.getElementById("hair");
        console.log(hairSelect.value);
        console.log(hairElements);
        hairElements[hairSelect.value] = feature;
        console.log(hairElements);
        let nonEmptyEnteries = Object.entries(hairElements).filter(([key, value]) => value !== "" && value !== null);
        let nonEmptyValues = nonEmptyEnteries.map(([key, value]) => value)
        let result = nonEmptyValues.join(" ");
        console.log(result);
        features["hair"] = result;
        setFeatureText();
    }

    function updateFeatureType(type, value) {
        if (type === "facial") {
            let faceSelect = document.getElementById("facialFeature");
            features[faceSelect.value] = value;
        }
        else {
            let bodySelect = document.getElementById("bodyFeature");
            features[bodySelect.value] = value;
        }
        setFeatureText();
    }

    function updateFeature(featureType, selectedIndex) {
        features[featureType] = selectedIndex;
        setFeatureText();
    }

    //#endregion

    //#region page setup

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
    }
    
  //#endregion

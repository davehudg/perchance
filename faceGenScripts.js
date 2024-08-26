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


//#endregion

//#region Set functions

    function setFeatureText(Obj, allFeatures) {
        let nonEmptyEnteries = Object.entries(allFeatures).filter(([key, value]) => value !== "" && value !== null);
        let nonEmptyValues = nonEmptyEnteries.map(([key, value]) => value)
        let result = nonEmptyValues.join(", ");
        Obj.innerHTML = result;
    }

//#endregion

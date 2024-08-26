//#region Misc functions

function changeGender(genderSel, facialHairSel) {
        if (genderSel.value == "(male:1.2)") {
            facialHairSel.style.display = "inline";
        }
        else {
            facialHairSel.value = "";
            facialHairSel.style.display = "none";
        }
    }


//#endregion

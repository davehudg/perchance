angular.module('personApp', [])
    .controller('PersonContorller', function($scope) {
        $scope.features = {
            name: "Test", gender: "", ethnicity: "", skinColor: "", age: "", freckles: "",
            hasGlasses: "", eyeColor: "", 
            hairStyle: "", face: "", body: "", clothing: ""

        };

        $scope.hair = {
            hairStyle: "", 
            hairColor: "", hairline: "",  hairMods: "", facialHair: ""
            //facialHairColor: "", bodyHairColor: "", eyeBrowColor: "",
        };

        var face = {
            faceShape: "", faceLength: "", forehead: "", browRidge: "", eyebrows: "", eyeShape: "", eyeSet: "", nose: "", cheekBones: "", lips: "", chin: "", jaw: "",
        };

        var body = {
            bodyType: "", bodyComp: "", muscularity: "", height: "", bustSize: "", // F
        };


        //#region Feature lists

        $scope.age = [{ value: "infant", text: "Infant" }, { value: "toddler", text: "Toddler" }, { value: "preschooler", text: "Preschooler" }, 
            { value: "child", text: "Child" }, { value: "pre-teen", text: "Pre-Teen" }, { value: "teenager", text: "Teenager" }, 
            { value: "young adult", text: "Young Adult" }, { value: "adult", text: "Adult" }, { value: "middle-aged", text: "Middle-Aged" }, 
            { value: "senior", text: "Senior" }, { value: "elderly", text: "Elderly" }, { value: "geriatric", text: "Geriatric" }];
        $scope.ethnicity = [{value: "caucasian", text: "Caucasian"}, {value: "black", text: "Black"}, {value: "latino", text: "Latino"}, {value: "asian", text: "Asian"}, 
            {value: "middle eastern", text: "Middle eastern"}, {value: "indian", text: "Indian"}, {value: "elven", text: "Elven"},  { value: "dwarven", text: "Dwarven"}];
        $scope.skinColor =  [{ value: "fair skin", text: "Fair" }, { value: "Ivory colored skin", text: "Ivory" }, { value: "olive skin", text: "Olive" }, 
            { value: "Beige colored skin", text: "Beige" }, { value: "Caramel colored skin", text: "Caramel" }, { value: "Honey colored skin", text: "Honey" }, 
            { value: "Toffee colored skin", text: "Toffee" }, { value: "Chestnut colored skin", text: "Chestnut" }, { value: "Walnut colored skin", text: "Walnut" }, 
            { value: "Mocha colored skin", text: "Mocha" }, { value: "Cocoa colored skin", text: "Cocoa" }, { value: "chocolate colored skin", text: "Chocolate" }, 
            { value: "dark chocolate colored skin", text: "Dark Chocolate" }, { value: " light green skin", text: "Green" }, { value: "light blue skin", text: "Blue" }];
        $scope.freckles = [{ value: "light freckles", text: "Light freckles" }, { value: "freckles on the bridge of nose", text: "bridge of nose" }, 
            { value: "heavy freckles", text: "Heavy freckles" }];
        $scope.gender = [{ value: "male", text: "male" }, { value: "female", text: "female" }];
        $scope.glasses = [{ value: "cat eye glasses", text: "Cat Eye" }, { value: "browline glasses", text: "Browline" }, { value: "oval glasses", text: "Oval" }, 
            { value: "rectangle glasses", text: "Rectangle" }, { value: "round glasses", text: "Round" }, { value: "aviator glasses", text: "Aviators" }, 
            { value: "sunglasses", text: "Sunglasses" }];
        $scope.eyeColor = [{ value: "grey eyes", text: "Grey" }, { value: "blue eyes", text: "Blue" }, { value: "green eyes", text: "Green" }, 
            { value: "brown eyes", text: "Brown" }, { value: "hazel eyes", text: "Hazel" }, { value: "amber eyes", text: "Amber eyes"}];
    
        //#endregion

        $scope.height =  [{ value: "short", text: "short" }, { value: "average height", text: "average height" }, { value: "tall", text: "tall" }];
        
        $scope.clothing = [
            { value: "casual attire", text: "Casual" }, { value: "formal attire", text: "Formal" }, { value: "business attire", text: "Business" },
            { value: "nude", text: "None" }, { value: "underwear", text: "Underwear" }, { value: "swimwear", text: "Swimwear" }, 
            { value: "sleepwear", text: "Sleepwear" }, { value: "activewear", text: "Activewear" }];        
        
        //#region Face lists
        
        $scope.faceFeats = ["faceShape", "faceLength", "hairline", "forehead", "eyebrows", "browRidge", "eyeShape", "eyeSet", "nose", "cheekBones", "lips", "chin"];
        $scope.bodyFeats = ["bodyType", "bodyComp", "muscularity", "height", "bustSize"]; // lump these together
        $scope.ears = ["pointed ears", "long and pointed ears"]; // shape

        //#endregion

        //#region Hair lists

        $scope.maleHairStyles = [{ value: "comb over", text: "Comb Over", order: 9 }, { value: "quiff", text: "Quiff", order: 9 }, { value: "buzz cut", text: "Buzz Cut", order: 9 },
            { value: "crew cut", text: "Crew Cut", order: 9 }, { value: "short afro", text: "Short Afro", order: 9 }, { value: "afro", text: "Afro", order: 9 },
            { value: "side part with short hair", text: "Side Part With Short Hair", order: 9 }, { value: "ivy league haircut", text: "Ivy League Haircut", order: 9 },
            { value: "fade", text: "Fade", order: 9 }, { value: "slicked back", text: "Slicked Back", order: 9 }, { value: "textured crop", text: "Textured Crop", order: 9 }];
        $scope.femaleHairStyles = [{ value: "pixie cut", text: "Pixie Cut", order: 9 }, { value: "undercut", text: "Undercut", order: 9 }, { value: "crew cut", text: "Crew Cut", order: 9 }, 
            { value: "buzz cut", text: "Buzz Cut", order: 9 }, { value: "bob", text: "Bob", order: 9 }, { value: "braids", text: "Braids", order: 9 },
            { value: "dutch braids", text: "Dutch Braids", order: 9 }, { value: "french braids", text: "French Braids", order: 9 }, 
            { value: "bob", text: "Bob", order: 9 }, { value: "side-swept bangs", text: "Side-Swept Bangs" }, { value: "rachel hair style", text: "Rachel Hair Style", order: 9 },
            { value: "balayage highlights", text: "Balayage Highlights", order: 9 }, { value: "loose waves", text: "Loose Waves", order: 9 }, { value: "braids", text: "Braids", order: 9 },
            { value: "updo", text: "Updo", order: 9 }, { value: "ponytail", text: "Ponytail", order: 9 }, { value: "hair with bangs", text: "Hair With Bangs", order: 9 }];
        $scope.facialHair = [{ value: "clean-shaven", text: "Clean-shaven" }, { value: "stubble", text: "Stubble" }, { value: "short beard", text: "Short Beard" }, 
            { value: "medium beard", text: "Medium Beard" }, { value: "long beard", text: "Long Beard" }, { value: "very long beard", text: "Very Long Beard" }, 
            { value: "mustache", text: "Mustache" }, { value: "goatee", text: "Goatee" }, { value: "van dyke", text: "Van Dyke" }, 
            { value: "soul patch", text: "Soul Patch" }, { value: "chin strap", text: "Chin Strap" }, { value: "mutton chops", text: "Mutton Chops" }, 
            { value: "beardstache", text: "Beardstache" }, { value: "ducktail", text: "Ducktail" }, { value: "balbo", text: "Balbo" }, { value: "verdi", text: "Verdi" }];
        
        $scope.hairMods = [{ value: "short", text: "Short", order: 1 }, { value: "chin-length", text: "Chin-length", order: 1}, { value: "shoulder-length", text: "Shoulder-length", order: 1}, 
            { value:"long", text: "Long", order: 1}, { value: "thin", text: "Thin", order: 2}, {value: "thick", text: "Thick", order: 2 }, {value: "curly", text: "Curly", order: 2 },
            {value: "wavy", text: "Wavy", order: 2}, {value: "straight", text: "Straight", order: 2}, {value: "braided", text: "Braided", order: 8}, {value: "layered", text: "Layered", order: 2},
            {value: "textured", text: "Textured", order: 2 }, {value: "tousled", text: "Tousled", order: 2 }, {value: "spiky", text: "Spiky", order: 2 }];
        $scope.hairColor = [ { value: "black", text: "Black", order: 6 }, { value: "dark brown", text: "Dark Brown", order: 6 }, 
            { value: "brown", text: "Brown", order: 6 }, { value: "sandy brown", text: "Sandy Brown", order: 6 }, { value: "blonde", text: "Blonde", order: 6 }, 
            { value: "strawberry blonde", text: "Strawberry Blonde", order: 6 }, { value: "red", text: "Red", order: 6 }, { value: "copper colored", text: "Copper", order: 6 },
            { value: "auburn", text: "Auburn", order: 6 }, { value: "grey", text: "Grey", order: 6 }, { value: "white hair", text: "White", order: 6 }, 
            { value: "salt and pepper hair", text: "Salt and Pepper", order: 6 }, { value: "bald", text: "Bald", order: 6 },
            { value: "gold colored hair", text: "Gold Hair", order: 6 }, { value: "platinum blonde hair", text: "Platinum Blonde Hair", order: 6 }];
        
            //#endregion


            $scope.GetHairStyle = function (){
                let arr = new Array();
                if (!$scope.hair) {
                    return;
                }
                if ($scope.hair.hairColor !== undefined && $scope.hair.hairColor !== "") {
                    arr.push($scope.hair.hairColor);
                }                
                if ($scope.hair.hairStyle !== undefined && $scope.hair.hairStyle !== "") {
                    arr.push($scope.hair.hairStyle);
                }
                if ($scope.hair.hairMods !== undefined) {
                    $scope.hair.hairMods.forEach(element => {
                        arr.push(element);
                    });
                }
    
                let desc = arr.sort((a, b) => a.order - b.order | a.value - b.value);
                let nonEmptyValues = desc.map(a => a.value);
                $scope.features.hairStyle = nonEmptyValues.join(" ");
            }
    
    });
/*
1	opinion	            unusual, lovely, beautiful
2	size	            big, small, tall
3	physical quality	thin, rough, untidy
4	shape	            round, square, rectangular
5	age	                young, old, youthful
6	colour	            blue, red, pink
7	origin	            Dutch, Japanese, Turkish
8	material	        metal, wood, plastic
9	type	            general-purpose, four-sided, U-shaped
10	purpose	            cleaning, hammering, cooking
*/

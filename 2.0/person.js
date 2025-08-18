angular.module('personApp', [])
    .controller('PersonContorller', function($scope) {
        
        $scope.person ={
            Name: "",
            
            Ethnicity: "",
            Gender: "",
            Orientation: "",
            Height: "",
            Age: "",
            Body: "",
                BodyType: "",
                BodyModifiers: "",

            // HairStyle: "",
            // HairMods: "",
            FacialHair: "",
            Clothing: "",

            Hair: "",
                HairColor: "",
                HairTexture: "",
            
            SkinColor: "",
                Freckles: "",
            
            FaceShape: "",
            EyeBrows: "",
                EyebrowThickness: "",
                EyeBrowsShape: "",
                EyebrowLength: "",
                EyebrowDefinition: "",
           
            Eyes: "", // description
                EyeColor: "",
                EyeShape: "",
                EyeTilt: "",
                EyeDepth: "",
                EyeSpacing: "",
            Glasses: "",

            Nose: "",
                NoseShape: "",
                NoseTip: "",
                NoseWidth: "",

            CheekBones: "",
            
            Lips: "",
                LipShape: "",
                LipDefinition: "",

            Chin: "",
                ChinShape: "",
                ChinSize: "",
                ChinProminence: "",
            
            Jaw: "",
                JawShape: "",
                JawlineDefinition: "",

            
        };
        
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

        $scope.ethnicity = traitClusters;
        $scope.gender = genderTooltips;
        $scope.skinColor = skinToneTooltips;
        $scope.eyeColor = eyeColorTooltips;
        $scope.hairColor = hairColorTooltips;
        $scope.hairTexture = hairTextures;
        $scope.eyes = eyes;
        $scope.faceShapes = faceShapes;
        $scope.cheekBones = cheekbones;


        $scope.age = [{ value: "infant", weight: 1, text: "Infant" }, { value: "toddler", weight: 1, text: "Toddler" }, { value: "preschooler", weight: 1, text: "Preschooler" }, 
            { value: "child", weight: 1, text: "Child" }, { value: "pre-teen", weight: 1, text: "Pre-Teen" }, { value: "teenager", weight: 1, text: "Teenager" }, 
            { value: "young adult", weight: 1, text: "Young Adult" }, { value: "adult", weight: 1, text: "Adult" }, { value: "middle-aged", weight: 1, text: "Middle-Aged" }, 
            { value: "senior", weight: 1, text: "Senior" }, { value: "elderly", weight: 1, text: "Elderly" }, { value: "geriatric", weight: 1, text: "Geriatric" }];
    
            function generatePersonality(gender) {
                const roll = Math.floor(Math.random() * 1000) + 1;
        
                if (gender === "male") {
                    if (roll <= 160) return "ISTJ";
                    else if (roll <= 240) return "ISFJ";
                    else if (roll <= 270) return "INFJ";
                    else if (roll <= 300) return "INTJ";
                    else if (roll <= 390) return "ISTP";
                    else if (roll <= 440) return "ISFP";
                    else if (roll <= 460) return "INFP";
                    else if (roll <= 510) return "INTP";
                    else if (roll <= 570) return "ESTP";
                    else if (roll <= 620) return "ESFP";
                    else if (roll <= 680) return "ENFP";
                    else if (roll <= 720) return "ENTP";
                    else if (roll <= 830) return "ESTJ";
                    else if (roll <= 900) return "ESFJ";
                    else if (roll <= 940) return "ENFJ";
                    else return "ENTJ";
                } else if (gender === "female") {
                    if (roll <= 70) return "ISTJ";
                    else if (roll <= 260) return "ISFJ";
                    else if (roll <= 290) return "INFJ";
                    else if (roll <= 300) return "INTJ";
                    else if (roll <= 320) return "ISTP";
                    else if (roll <= 420) return "ISFP";
                    else if (roll <= 470) return "INFP";
                    else if (roll <= 480) return "INTP";
                    else if (roll <= 510) return "ESTP";
                    else if (roll <= 610) return "ESFP";
                    else if (roll <= 710) return "ENFP";
                    else if (roll <= 730) return "ENTP";
                    else if (roll <= 790) return "ESTJ";
                    else if (roll <= 950) return "ESFJ";
                    else if (roll <= 980) return "ENFJ";
                    else return "ENTJ";
                }
        
                return "Unknown";
            }
            
            class WeightedRandomGenerator {
                constructor(items) {
                    this.pool = this.createPool(items);
                    this.index = 0;
                }
            
                createPool(items) {
                    let pool = [];
                    items.forEach(({ value, weight }) => {
                        pool.push(...Array(weight).fill(value));
                    });
                    return this.shuffle(pool);
                }
            
                shuffle(array) {
                    for (let i = array.length - 1; i > 0; i--) {
                        let j = Math.floor(Math.random() * (i + 1));
                        [array[i], array[j]] = [array[j], array[i]];
                    }
                    return array;
                }
            
                getNext() {
                    if (this.index >= this.pool.length) {
                        this.index = 0;
                        this.pool = this.shuffle(this.pool);
                    }
                    return this.pool[this.index++];
                }
            }

            $scope.generateRandomPerson = function(){
                if(!$scope.person){
                    $scope.person = {};
                }
                var generator = new WeightedRandomGenerator(traitClusters);

                if ($scope.person.Ethnicity === undefined || $scope.person.Ethnicity === "") {
                    $scope.person.Cluster = generator.getNext();
                }
                if ($scope.person.SkinColor === undefined || $scope.person.SkinColor === "") {
                    generator = new WeightedRandomGenerator(skinTones.find(s => s.cluster === $scope.person.Cluster).values);
                    $scope.person.SkinColor = generator.getNext();
                }
                if($scope.person.Gender === undefined || $scope.person.Gender === ""){
                    generator = new WeightedRandomGenerator(gender.find(g => g.cluster === $scope.person.Cluster).values);
                    $scope.person.Gender = generator.getNext();
                }
                if ($scope.person.Eye === undefined || $scope.person.Eye === "") {
                    generator = new WeightedRandomGenerator(eyes.find(e => e.cluster === $scope.person.Cluster).values);
                    $scope.person.Eye = generator.getNext();
                }





                if ($scope.person.Hair === undefined || $scope.person.Hair === "") {
                    generator = new WeightedRandomGenerator(hairColors.find(h => h.cluster === $scope.person.Cluster).values);
                    $scope.person.Hair = generator.getNext();
                }
                if ($scope.person.Freckles === undefined || $scope.person.Freckles === "") {
                    generator = new WeightedRandomGenerator($scope.freckles);
                    $scope.person.Freckles = generator.getNext();
                }
                if ($scope.person.Glasses === undefined || $scope.person.Glasses === "") {
                    generator = new WeightedRandomGenerator($scope.glasses);
                    $scope.person.Glasses = generator.getNext();
                }
                if ($scope.person.EyeShape === undefined || $scope.person.EyeShape === "") {
                    generator = new WeightedRandomGenerator($scope.eyeShapes.find(e => e.cluster === $scope.person.Cluster).values);
                    $scope.person.EyeShape = generator.getNext();
                }
                if ($scope.person.EyeSet === undefined || $scope.person.EyeSet === "") {
                    generator = new WeightedRandomGenerator($scope.eyeSets.find(e => e.cluster === $scope.person.Cluster).values);
                    $scope.person.EyeSet = generator.getNext();
                }
                if ($scope.person.Nose === undefined || $scope.person.Nose === "") {
                    generator = new WeightedRandomGenerator($scope.noses.find(n => n.cluster === $scope.person.Cluster).values);
                    $scope.person.Nose = generator.getNext();
                }
                if ($scope.person.CheekBones === undefined || $scope.person.CheekBones === "") {
                    generator = new WeightedRandomGenerator($scope.cheekBones.find(c => c.cluster === $scope.person.Cluster).values);
                    $scope.person.CheekBones = generator.getNext();
                }
                if ($scope.person.BodyType === undefined || $scope.person.BodyType === "") {
                    generator = new WeightedRandomGenerator($scope.bodyTypes.find(b => b.cluster === $scope.person.Cluster).values);
                    $scope.person.BodyType = generator.getNext();
                }
                


                $scope.person.Mbti = generatePersonality($scope.person.Gender);

                if ($scope.person.Orientation === undefined || $scope.person.Orientation === "") {
                    generator = new WeightedRandomGenerator(orientation);
                    $scope.person.Orientation = generator.getNext();
                }
                if ($scope.person.Gender === "male") {
                    generator = new WeightedRandomGenerator(maleSexTrait);
                    $scope.person.SexTrait = generator.getNext();
                }
                else{
                    generator = new WeightedRandomGenerator(femaleSexTrait);
                    $scope.person.SexTrait = generator.getNext();
                }
            }
            

            const femaleSexTrait = [{ value: "34B", weight: 15 }, { value: "36C", weight: 12 }, { value: "34C", weight: 10 }, { value: "36B", weight: 9 }, { value: "32C", weight: 8 }, { value: "34D", weight: 8 }, { value: "32B", weight: 7 }, { value: "34DD", weight: 6 }, { value: "36D", weight: 6 }, { value: "38C", weight: 5 }];
        
            const maleSexTrait = [{ value: "4 inches", weight: 5 }, { value: "5 inches", weight: 15 }, { value: "6 inches", weight: 55 }, { value: "7 inches", weight: 15 }, { value: "8 inches", weight: 10 }];
        
            const orientation = [{ value: "straight", weight: 94 }, { value: "bi-sexual", weight: 2 }, { value: "gay", weight: 3 }, { value: "pan-sexual", weight: 1 }];
        
            $scope.hairMods = [{ value: "short", weight: 1, text: "Short", order: 1 }, { value: "chin-length", weight: 1, text: "Chin-length", order: 1}, { value: "shoulder-length", weight: 1, text: "Shoulder-length", order: 1}, 
            { value:"long", text: "Long", order: 1}, { value: "thin", weight: 1, text: "Thin", order: 2}, {value: "thick", weight: 1, text: "Thick", order: 2 }, {value: "curly", weight: 1, text: "Curly", order: 2 },
            {value: "wavy", weight: 1, text: "Wavy", order: 2}, {value: "straight", weight: 1, text: "Straight", order: 2}, {value: "braided", weight: 1, text: "Braided", order: 8}, {value: "layered", weight: 1, text: "Layered", order: 2},
            {value: "textured", weight: 1, text: "Textured", order: 2 }, {value: "tousled", weight: 1, text: "Tousled", order: 2 }, {value: "spiky", weight: 1, text: "Spiky", order: 2 }];
            
            $scope.clothing = [
            { value: "casual attire", weight: 1, text: "Casual" }, { value: "formal attire", weight: 1, text: "Formal" }, { value: "business attire", weight: 1, text: "Business" },
            { value: "nude", weight: 1, text: "None" }, { value: "underwear", weight: 1, text: "Underwear" }, { value: "swimwear", weight: 1, text: "Swimwear" }, 
            { value: "sleepwear", weight: 1, text: "Sleepwear" }, { value: "activewear", weight: 1, text: "Activewear" }];        
        
            $scope.glasses = [{ value: "cat eye glasses", weight: 1, text: "Cat Eye" }, { value: "browline glasses", weight: 1, text: "Browline" }, { value: "oval glasses", weight: 1, text: "Oval" }, 
            { value: "rectangle glasses", weight: 1, text: "Rectangle" }, { value: "round glasses", weight: 1, text: "Round" }, { value: "aviator glasses", weight: 1, text: "Aviators" }, 
            { value: "sunglasses", weight: 1, text: "Sunglasses" }];


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

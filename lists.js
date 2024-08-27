var faceShapeVt = [{ value: "", text: "", toolTip: "" }, { value: "flat face", text: "Flat Face", toolTip: "A face shape with minimal angles, a broad forehead, and a softly rounded jawline, creating a generally uniform appearance." },
    { value: "oval shaped face", text: "Oval Shaped Face", toolTip: "An elegant, balanced face with a gently curving jawline and forehead, slightly narrower than the cheekbones." },
    { value: "round shaped face", text: "Round Shaped Face", toolTip: "Full cheeks and a face that is equally wide at the cheekbones and jaw, with a soft, rounded jawline and forehead." },
    { value: "square shaped face", text: "Square Shaped Face", toolTip: "Angular features with a strong, broad jawline and forehead that are roughly the same width as the cheekbones." },
    { value: "heart shaped face", text: "Heart Shaped Face", toolTip: "A face that narrows at the chin and widens at the forehead and cheekbones, resembling the shape of a heart." },
    { value: "diamond shaped face", text: "Diamond Shaped Face", toolTip: "A face that is narrow at the forehead and jawline, with the cheekbones being the widest point, forming a diamond silhouette." }];
    const faceLengthVt = [{ value: "", text: "", toolTip: "" }, { value: "short face", text: "Short Face", toolTip: "A face where the distance from the forehead to the chin is less than the distance from ear to ear, often associated with a more rounded or heart-shaped face." },
    { value: "average face length", text: "Average Face Length", toolTip: " face where the distance from the forehead to the chin is approximately equal to the distance from ear to ear, with balanced proportions and features that are neither too compact nor overly elongated." },
    { value: "long face", text: "Long Face", toolTip: "A face where the distance from the forehead to the chin is greater than the distance from ear to ear, resulting in a more elongated, rectangular appearance." }];
    const hairlineVt = [{ value: "", text: "", toolTip: "" }, { value: "natural hairline", text: "Natural Hairline", toolTip: "A hairline that follows the natural growth pattern without significant alteration." },
    { value: "center-parted hairline", text: "Center-Parted Hairline", toolTip: "A hairline that has a clear middle part, dividing the hair into two symmetrical sections." },
    { value: "receding hairline", text: "Receding Hairline", toolTip: "A hairline that is gradually moving back from the forehead, often associated with male pattern baldness." },
    { value: "widow's peak", text: "Widow's Peak", toolTip: "A V-shaped hairline that points down towards the forehead." },
    { value: "m-shaped hairline", text: "M-Shaped Hairline", toolTip: "A hairline that forms an 'M' shape due to a widow's peak and a receding hairline at the temples." },
    { value: "high hairline", text: "High Hairline", toolTip: "A hairline that sits further up on the forehead, exposing more skin." },
    { value: "low hairline", text: "Low Hairline", toolTip: "A hairline that starts closer to the eyebrows, creating a smaller forehead." },
    { value: "defined hairline", text: "Defined Hairline", toolTip: "A clear and distinct line where the hair starts growing from the skin." },
    { value: "full hairline", text: "Full Hairline", toolTip: "A complete, unbroken line of hair around the forehead without any significant thinning or balding." },
    { value: "high sharp hairline", text: "High Sharp Hairline", toolTip: "A high hairline that is sharply defined, creating a more dramatic look." },
    { value: "side-parted hairline", text: "Side-Parted Hairline", toolTip: "A hairline that naturally falls to one side, creating a part that starts closer to the ear." },
    { value: "wavy hairline", text: "Wavy Hairline", toolTip: "An irregular, wavy pattern where the hair starts growing, often seen in people with naturally wavy or curly hair." },
    { value: "arched hairline", text: "Arched Hairline", toolTip: "A hairline that curves upwards at the temples, creating a high, arching look." },
    { value: "high rounded hairline", text: "High Rounded Hairline", toolTip: "A hairline that is high on the forehead and curves gently at the temples, creating a rounded shape." }];
    const eyebrowsVt = [{ value: "", text: "", toolTip: "" }, { value: "arched eyebrows", text: "Arched Eyebrows", toolTip: "These eyebrows have a high, curved shape that peaks in the middle, creating a dramatic and often sophisticated look." },
    { value: "straight eyebrows", text: "Straight Eyebrows", toolTip: "Eyebrows that maintain a consistent, horizontal line without any significant arch, giving a clean and minimalist appearance." },
    { value: "slopped eyebrows", text: "Slopped Eyebrows", toolTip: "Also known as 'droopy' or 'relaxed' eyebrows, these have a gentle downward curve, lending a natural and sometimes solemn expression to the face." },
    { value: "thick eyebrows", text: "Thick Eyebrows", toolTip: "Bold and dense, these eyebrows are characterized by a substantial amount of hair that can be quite expressive." },
    { value: "thin eyebrows", text: "Thin Eyebrows", toolTip: "These are delicate and fine, often associated with a youthful or elegant look." },
    { value: "feathered eyebrows", text: "Feathered Eyebrows", toolTip: "Feathered eyebrows have a soft, textured look with small hairs growing in multiple directions, resembling feathers." },
    { value: "rounded eyebrows", text: "Rounded Eyebrows", toolTip: "With a smooth, rounded shape, these eyebrows frame the eyes and can appear soft and approachable." }];
    const eyebrowModVt = [{ value: "thick", text: "Thick", toolTip: "" },
    { value: "thin", text: "Thin", toolTip: "" },
    { value: "Full", text: "Full", toolTip: "" },
    { value: "sloped", text: "Sloped", toolTip: "" },
    { value: "feathered", text: "Feathered", toolTip: "" },
    { value: "rounded", text: "Rounded", toolTip: "" },
    { value: "well-defined", text: "Well-Defined", toolTip: "" },
    { value: "slightly arched", text: "Slightly Arched", toolTip: "These eyebrows have a subtle curve that's not as pronounced as the arched brows, offering a more relaxed yet still defined look." },
    { value: "slightly sloped", text: "Slightly Sloped", toolTip: "" },
    { value: "slightly rounded", text: "Slightly Rounded", toolTip: "" }];
    const browRidgeVt = [{ value: "", text: "", toolTip: "" }, { value: "faint brow ridge", text: "Faint", toolTip: "The brow ridge is barely perceptible, almost blending into the forehead for a very smooth look." },
    { value: "slight brow ridge", text: "Slight", toolTip: "A delicate and gently defined ridge that adds a hint of structure without being overpowering." },
    { value: "soft brow ridge", text: "Soft", toolTip: "The brow ridge is not sharply defined, having a gentle curve that's pleasing to the eye and often associated with a more youthful appearance." },
    { value: "arched brow ridge", text: "Arched", toolTip: "The brow ridge has a graceful curve, emphasizing the natural arch of the eyebrow and adding an element of elegance." },
    { value: "distinctive brow ridge", text: "Distinctive", toolTip: "The brow ridge has a clear definition, setting the eyebrows apart and framing the eyes in a notable way." },
    { value: "high brow ridge", text: "High", toolTip: "The brow ridge is situated higher on the forehead, contributing to a more dramatic look and potentially making the face appear more elongated." },
    { value: "strong brow ridge", text: "Strong", toolTip: "A prominent brow ridge that gives a sense of power and intensity to the facial features." },
    { value: "prominent brow ridge", text: "Prominent", toolTip: "The brow ridge stands out significantly, creating a strong, angular look that can be quite striking." },
    { value: "pronounced brow ridge", text: "Pronounced", toolTip: "The most noticeable of all, a pronounced brow ridge is bold and can be seen as a defining characteristic of the face." }];
    const eyeShapeVt = [{ value: "", text: "", toolTip: "" }, { value: "almond shaped eyes", text: "Almond Eye", toolTip: "An eye shape that is longer than it is wide, with a slight curve at the outer corners, resembling an almond." },
    { value: "round shaped eyes", text: "Round Eye", toolTip: "Eyes that are fully rounded, often associated with a youthful and innocent appearance." },
    { value: "large eyes", text: "Large Eyes", toolTip: "Eyes that are significantly larger than average, often making a person appear more open and expressive." },
    { value: "large almond-shaped eyes", text: "Large Almond-shaped Eyes", toolTip: "Almond-shaped eyes that are larger in size, which can be quite captivating and dramatic." },
    { value: "large round eyes", text: "Large Round Eyes", toolTip: "Round eyes that are larger than usual, adding a touch of softness and gentleness to the face." },
    { value: "monolid eyes", text: "Monolid Eye", toolTip: "A single eyelid without a visible crease, commonly found in East Asian individuals, giving a sleek and mysterious look." },
    { value: "upturned eyes", text: "Upturned Eye", toolTip: "Eyes that have an upward tilt at the outer corners, sometimes called 'cat eyes,' which can make the person appear more playful or seductive." },
    { value: "downturned eyes", text: "Downturned Eye", toolTip: "Eyes with a downward slope at the outer corners, often associated with a more serious or contemplative expression." },
    { value: "hooded eyes", text: "Hooded Eye", toolTip: "Eyes with a heavy brow bone that partially covers the eyelid, which can give the appearance of a more relaxed or sleepy look." }];
    const eyeSetVt = [{ value: "", text: "", toolTip: "" }, { value: "wide eye set", text: "Wide Eye Set", toolTip: "Eyes that are spaced farther apart on the face, often contributing to a more open and friendly expression." },
    { value: "close eye set", text: "Close Eye Set", toolTip: "Eyes that are closer together, which can sometimes create a more intense or focused look." },
    { value: "slightly wide-set eyes", text: "Slightly Wide-set Eyes", toolTip: "A subtle variation of the wide eye set, providing a balanced and harmonious facial appearance." },
    { value: "deep set eyes", text: "Deep Set Eyes", toolTip: "Eyes that are set back into the skull, often shadowed by the brow bone, which can make the face appear more mature or intense." }];
    const noseVt = [{ value: "", text: "", toolTip: "" }, { value: "straight nose", text: "Straight Nose", toolTip: "A nose that runs in a straight line from the bridge to the tip." },
    { value: "curved nose", text: "Curved Nose", toolTip: "A nose that has a gentle curve, often starting at the bridge and curving towards the tip." },
    { value: "button nose", text: "Button Nose", toolTip: "A small, slightly upturned nose with a rounded tip." },
    { value: "aquiline nose", text: "Aquiline Nose", toolTip: "A nose that has a high, curved bridge and a sharp, hooked tip, reminiscent of an eagle's beak." },
    { value: "bulbous nose", text: "Bulbous Nose", toolTip: "A nose that is wide at the tip and often rounded, creating a prominent feature." },
    { value: "rounded tip nose", text: "Rounded Tip Nose", toolTip: "A nose with a rounded tip, which can appear softer and more youthful." },
    { value: "pointed nose", text: "Pointed nose" }];
    const noseModVt = [{ value: "broad", text: "Broad", toolTip: "A nose that is wider at the bridge and can give a strong, bold look." },
    { value: "upturned", text: "Upturned", toolTip: "Nostrils that face upwards, often associated with a cheerful or playful expression." },
    { value: "slightly upturned", text: "Slightly Upturned", toolTip: "A subtle upturn that adds a touch of charm without being overly pronounced." },
    { value: "high bridge", text: "High Bridge", toolTip: "A nose with a distinct, raised bridge that can make the nose appear more prominent." },
    { value: "narrow", text: "Narrow", toolTip: "A nose that is slender and less wide." },
    { value: "downturned", text: "Downturned", toolTip: "Nostrils that face downwards, often linked to a more solemn or serious look." },
    { value: "sloped", text: "Sloped", toolTip: "A nose that gradually narrows from the bridge to the tip." }];
    const noseBridgeVt = [{ value: "with flat nose bridge", text: "Flat Nose Bridge", toolTip: "A nose with a minimal to non-existent ridge between the eyes." },
    { value: "with high nose bridge", text: "High Nose Bridge", toolTip: "A pronounced ridge that creates a sharp angle between the eyes and the nose." },
    { value: "with low nose bridge", text: "Low Nose Bridge", toolTip: "A gently curved bridge that sits closer to the face." },
    { value: "with defined nose bridge", text: "Defined Nose Bridge", toolTip: "A clear, visible ridge that provides structure to the nose." },
    { value: "with sloped nose bridge", text: "Sloped Nose Bridge", toolTip: "A bridge that slopes down from the forehead to the tip of the nose." }];
    const cheekBonesVt = [{ value: "", text: "", toolTip: "" }, { value: "high cheekbones", text: "High Cheekbones", toolTip: "The most prominent of all, high cheekbones create a sharp, angular face with a dramatic contour that can make the face appear chiseled and elegant." },
    { value: "pronounced cheekbones", text: "Pronounced Cheekbones", toolTip: "These cheekbones are very noticeable, providing a strong structure to the face without being as extreme as the high cheekbone type." },
    { value: "prominent cheekbones", text: "Prominent Cheekbones", toolTip: "Cheekbones that stand out and contribute to a distinctive facial profile, striking a balance between high and pronounced." },
    { value: "defined cheekbones", text: "Defined Cheekbones", toolTip: "Offering a clear outline of the cheek structure, defined cheekbones give a face a more sculpted look without the dramatic effect of high or pronounced cheekbones." },
    { value: "full cheeks", text: "Full Cheeks", toolTip: "Cheeks that are rounded and plump, which can add a sense of youthfulness and warmth to the face, sometimes obscuring the cheekbone structure." },
    { value: "low cheekbones", text: "Low Cheekbones", toolTip: "The least pronounced, low cheekbones are closer to the jawline, offering a softer and more delicate look to the face." }];
    const lipsVt = [{ value: "", text: "", toolTip: "" }, { value: "full lips", text: "Full Lips", toolTip: "Lips that are naturally plump and fill the space between the nose and chin, often associated with sensuality and beauty." },
    { value: "thin lips", text: "Thin Lips", toolTip: "Lips that are less plump, closer to the natural line of the mouth, which can give a more refined and elegant appearance." },
    { value: "heart-shaped lips", text: "Heart-shaped Lips", toolTip: "An upper lip that is shorter and curves inward to create a heart-like shape when viewed from the side." }];
    const lipModVt = [{ value: "pouty", text: "Pouty", toolTip: "Lips that have a natural or exaggerated fullness to the lower lip, creating a pouting or kissable look." },
    { value: "well-defined", text: "Well-defined", toolTip: "Lips that have a clear and distinct border, which can make the mouth appear smaller and more precise." },
    { value: "cupid's bow", text: "Cupid's Bow", toolTip: "A distinctive upper lip shape with a peaked bow in the center, often considered a symbol of beauty." },
    { value: "sensual", text: "Sensual", toolTip: "Lips that are full and shaped in a way that suggests warmth and passion." },
    { value: "luscious", text: "Luscious", toolTip: "A term used to describe full, inviting, and appealing lips that seem to be bursting with vitality." },
    { value: "thick", text: "Thick", toolTip: "Lips that are more substantial and pronounced, adding volume and character to the face." }];
    const chinVt = [{ value: "", text: "", toolTip: "" }, { value: "pointed chin", text: "Pointed Chin", toolTip: "A chin that tapers to a sharp point, often giving the face a more elongated and angular appearance." },
    { value: "soft chin", text: "Soft Chin", toolTip: "A gently rounded chin that is not as pronounced as other chin types, contributing to a more delicate look." },
    { value: "strong chin", text: "Strong Chin", toolTip: "A chin with a defined and protruding point, often associated with determination and confidence." },
    { value: "round chin", text: "Round Chin", toolTip: "A chin that is fully rounded, which can balance out a square jawline and add a touch of softness to the face." },
    { value: "square chin", text: "Square Chin", toolTip: "A chin that has a 90-degree angle at the tip, aligning with a square jawline for a more robust and structured look." },
    { value: "cleft chin", text: "Cleft Chin", toolTip: "A chin with a distinct groove in the center, which can be found on any of the base chin types, adding a unique and often attractive feature." }];
    const jawlineVt = [{ value: "strong jawline with ", text: "Strong Jawline", toolTip: "A jawline that is well-defined and angular." },
    { value: "round jawline with ", text: "Round Jawline", toolTip: "A jawline that is gently curved and soft." },
    { value: "square jawline with ", text: "Square Jawline", toolTip: "A powerful, structured jawline that emphasizes the chin." }];
    const bodyTypeVt = [{ value: "", text: "", toolTip: "" }, { value: "inverted triangle body shape", text: "Inverted Triangle", toolTip: "Broad shoulders and a full bust that narrows down to smaller hips and thighs." },
    { value: "apple body shape", text: "Apple", toolTip: "A substantial upper body with a larger midriff and less pronounced waist, leading to narrower hips and thighs." },
    { value: "rectangle body shape", text: "Rectangle", toolTip: "A balanced, straight silhouette with similar measurements for the bust, waist, and hips." },
    { value: "banana body shape", text: "Banana", toolTip: "Minimal curves and a straight figure, with the upper body being slightly broader than the lower body." },
    { value: "spoon body shape", text: "Spoon", toolTip: "A smaller bust compared to the pear, with a more pronounced lower body that emphasizes hips and thighs." },
    { value: "pear body shape", text: "Pear", toolTip: "A smaller upper body that flares out to wider hips and thighs, with a more defined waist." },
    { value: "hourglass body shape", text: "Hourglass", toolTip: "Equal measurements for the bust and hips, with a narrow waist, creating a balanced and curvy figure." }];
    const bodyCompVt = [{ value: "", text: "", toolTip: "" }, { value: "ectomorph build", text: "Ectomorph", toolTip: "Thin, with low body fat and minimal muscle definition." },
    { value: "petite build", text: "Petite", toolTip: "Small, delicate frame with shorter limbs." },
    { value: "slim build", text: "Slim", toolTip: "Straight body shape with little fat and minimal curves." },
    { value: "curvy build", text: "Curvy", toolTip: "Pronounced bust and hips with a defined waist." },
    { value: "voluptuous build", text: "Voluptuous", toolTip: "Fuller figure with significant curves and a larger midsection." },
    { value: "endomorph build", text: "Endomorph", toolTip: "Higher body fat percentage and a softer, rounded shape." },
    { value: "stocky build", text: "Stocky", toolTip: "Robust frame, often shorter in stature." },
    { value: "mesomorph build", text: "Mesomorph", toolTip: "Moderate muscle definition and body fat, often considered athletic." },
    { value: "athletic build", text: "Athletic", toolTip: "Well-defined muscles and a toned physique." },
    { value: "lean build", text: "Lean", toolTip: "Low body fat with visible muscle tone, emphasizing sleek lines." }];
    const muscularityVt = [{ value: "", text: "", toolTip: "" }, { value: "low muscle definition", text: "Low Muscle Definition", toolTip: "A body with minimal visible muscle tone and a higher body fat percentage that obscures the muscles." },
    { value: "average muscle definition", text: "Average Muscle Definition", toolTip: "A body with some visible muscle tone and a moderate body fat percentage that allows for basic distinctions between muscle groups without being overly pronounced." },
    { value: "moderate muscle definition", text: "Moderate Muscle Definition", toolTip: "Some visible muscle tone, with the body showing a clear distinction between muscle groups, but not overly pronounced." },
    { value: "high muscle definition", text: "High Muscle Definition", toolTip: "Clearly visible muscles with very low body fat, allowing for sharp distinctions between muscle groups and vivid vascularity." }];
    const bustSizeVt = [{ value: "", text: "", toolTip: "" }, { value: "flat bust", text: "Flat Bust", toolTip: "A minimal amount of breast tissue, resulting in a chest that is almost level with the rest of the torso." },
    { value: "proportionally small bust", text: "Proportionally Small Bust", toolTip: "Slightly protruding breasts that are in harmony with a smaller body frame or less developed physique." },
    { value: "proportional bust", text: "Proportional Bust", toolTip: "Breasts that are balanced with the rest of the body, fitting standard sizing for most clothing." },
    { value: "proportionally large bust", text: "Proportionally Large Bust", toolTip: "Full, substantial breasts that are proportionate to the body, potentially requiring specialized support." },
    { value: "proportionally huge bust", text: "Proportionally Huge Bust", toolTip: "Extremely large breasts that are significantly larger than the average, dominating the torso." }];


    const foreheadVt = [{ value: "", text: "" }, { value: "high forehead", text: "high forehead" }, { value: "low forehead", text: "low forehead" }, 
    { value: "broad forehead", text: "broad forehead" }, { value: "narrow forehead", text: "narrow forehead" }];
    const heightVt = [{ value: "", text: "" }, { value: "short", text: "short" }, { value: "average height", text: "average height" }, 
    { value: "tall", text: "tall" }];
    const maleHairStyles = [{ value: "comb over", text: "Comb Over" }, { value: "quiff", text: "Quiff" }, { value: "buzz cut", text: "Buzz Cut" },
    { value: "crew cut", text: "Crew Cut" }, { value: "short afro", text: "Short Afro" }, { value: "afro", text: "Afro" },
    { value: "side part with short hair", text: "Side Part With Short Hair" }, { value: "ivy league haircut", text: "Ivy League Haircut" },
    { value: "fade", text: "Fade" }, { value: "slicked back", text: "Slicked Back" }, { value: "textured crop", text: "Textured Crop" }];
    const femaleHairStyles = [{ value: "pixie cut", text: "Pixie Cut" }, { value: "textured pixie cut", text: "Textured Pixie Cut" }, 
    { value: "undercut", text: "Undercut" }, { value: "buzz cut", text: "Buzz Cut" }, { value: "spiky short hair", text: "Spiky Short Hair" }, 
    { value: "layered bob", text: "Layered Bob" }, { value: "tousled short hair", text: "Tousled Short Hair" }, { value: "short braids", text: "Short Braids" },
    { value: "shoulder-length layers", text: "Shoulder-Length Layers" }, { value: "medium curly hair", text: "Medium Curly Hair" }, { value: "wavy medium hair", text: "Wavy Medium Hair" },
    { value: "dutch braids", text: "Dutch Braids" }, { value: "french braids", text: "French Braids" }, { value: "straight long hair", text: "Straight Long Hair" },
    { value: "bob", text: "Bob" }, { value: "side-swept bangs", text: "Side-Swept Bangs" }, { value: "rachel hair style", text: "Rachel Hair Style" },
    { value: "balayage highlights", text: "Balayage Highlights" }, { value: "loose waves", text: "Loose Waves" }, { value: "braids", text: "Braids" },
    { value: "updo", text: "Updo" }, { value: "high ponytail", text: "High Ponytail" }, { value: "long layered hair", text: "Long Layered Hair" },
    { value: "long hair with bangs", text: "Long Hair With Bangs" }];
    const ageVt = [{ value: "infant", text: "Infant" }, { value: "toddler", text: "Toddler" }, { value: "preschooler", text: "Preschooler" }, 
    { value: "child", text: "Child" }, { value: "pre-teen", text: "Pre-Teen" }, { value: "teenager", text: "Teenager" }, 
    { value: "young adult", text: "Young Adult" }, { value: "adult", text: "Adult" }, { value: "middle-aged", text: "Middle-Aged" }, 
    { value: "senior", text: "Senior" }, { value: "elderly", text: "Elderly" }, { value: "geriatric", text: "Geriatric" }];
    const skinColorVt = [{ value: "fair skin", text: "Fair" }, { value: "Ivory colored skin", text: "Ivory" }, { value: "olive skin", text: "Olive" }, 
    { value: "Beige colored skin", text: "Beige" }, { value: "Caramel colored skin", text: "Caramel" }, { value: "Honey colored skin", text: "Honey" }, 
    { value: "Toffee colored skin", text: "Toffee" }, { value: "Chestnut colored skin", text: "Chestnut" }, { value: "Walnut colored skin", text: "Walnut" }, 
    { value: "Mocha colored skin", text: "Mocha" }, { value: "Cocoa colored skin", text: "Cocoa" }, { value: "chocolate colored skin", text: "Chocolate" }, 
    { value: "dark chocolate colored skin", text: "Dark Chocolate" }, { value: " light green skin", text: "Green" }, { value: "light blue skin", text: "Blue" }];
    const eyeColorVt = [{ value: "grey eyes", text: "Grey" }, { value: "blue eyes", text: "Blue" }, { value: "green eyes", text: "Green" }, 
    { value: "brown eyes", text: "Brown" }, { value: "hazel eyes", text: "Hazel" }, { value: "amber eyes", text: "Amber eyes"}];
    const glassesVt = [{ value: "cat eye glasses", text: "Cat Eye" }, { value: "browline glasses", text: "Browline" }, { value: "oval glasses", text: "Oval" }, 
    { value: "rectangle glasses", text: "Rectangle" }, { value: "round glasses", text: "Round" }, { value: "aviator glasses", text: "Aviators" }, 
    { value: "sunglasses", text: "Sunglasses" }];
    const frecklesVt = [{ value: "light freckles", text: "Light freckles" }, { value: "freckles on the bridge of nose", text: "bridge of nose" }, 
    { value: "heavy freckles", text: "Heavy freckles" }];
    const facialHairVt = [{ value: "clean-shaven", text: "Clean-shaven" }, { value: "stubble", text: "Stubble" }, { value: "short beard", text: "Short Beard" }, 
    { value: "medium beard", text: "Medium Beard" }, { value: "long beard", text: "Long Beard" }, { value: "very long beard", text: "Very Long Beard" }, 
    { value: "mustache", text: "Mustache" }, { value: "goatee", text: "Goatee" }, { value: "van dyke", text: "Van Dyke" }, 
    { value: "soul patch", text: "Soul Patch" }, { value: "chin strap", text: "Chin Strap" }, { value: "mutton chops", text: "Mutton Chops" }, 
    { value: "beardstache", text: "Beardstache" }, { value: "ducktail", text: "Ducktail" }, { value: "balbo", text: "Balbo" }, { value: "verdi", text: "Verdi" }];
    const faceFeatsVt = [{ value: "faceShape", text: "Face Shape" }, { value: "faceLength", text: "Face Length" }, { value: "hairline", text: "Hairline" }, 
    { value: "forehead", text: "Forehead" }, { value: "eyebrows", text: "Eyebrows" }, { value: "browRidge", text: "Brow Ridge" }, 
    { value: "eyeShape", text: "Eye Shape" }, { value: "eyeSet", text: "Eye Set" }, { value: "nose", text: "Nose" }, { value: "cheekBones", text: "Cheek Bones" }, 
    { value: "lips", text: "Lips" }, { value: "chin", text: "Chin" }];
    const bodyFeatsVt = [{ value: "bodyType", text: "Body Type" }, { value: "bodyComp", text: "Body Composition" }, { value: "muscularity", text: "Muscularity" }, 
    { value: "height", text: "Height" }, { value: "bustSize", text: "Bust Size" }];
    const hairColorVt = [{ value: "", text: "" }, { value: "black hair", text: "Black" }, { value: "dark brown hair", text: "Dark Brown" }, 
    { value: "brown hair", text: "Brown" }, { value: "sandy brown hair", text: "Sandy Brown" }, { value: "blonde hair", text: "Blonde" }, 
    { value: "strawberry blonde hair", text: "Strawberry Blonde" }, { value: "red hair", text: "Red" }, { value: "auburn hair", text: "Auburn" }, 
    { value: "grey hair", text: "Grey" }, { value: "white hair", text: "White" }, { value: "salt and pepper hair", text: "Salt and Pepper" }, { value: "bald", text: "Bald" },
    { value: "gold colored hair", text: "Gold Hair" }, { value: "platinum blonde hair", text: "Platinum Blonde Hair" }];
    const highlightVt = [{ value: "", text: "None" }, { value: "with blonde highlights", text: "Blonde" }, { value: "with auburn highlights", text: "Auburn" }, 
    { value: "with red highlights", text: "Red" }, { value: "with orange highlights", text: "Orange" }, { value: "with yellow highlights", text: "Yellow" }, 
    { value: "with green highlights", text: "Green" }, { value: "with blue highlights", text: "Blue" }, { value: "with violet highlights", text: "Violet" },
    { value: "with indigo highlights", text: "Indigo" }, { value: "with white highlights", text: "White" }, { value: "with black highlights", text: "Black" }];
    const hairVt = [{ value: "hairColor", text: "Hair Color" }, { value: "highlights", text: "Highlights" }, { value: "hairStyle", text: "Hair Style" }];
    const genderVt = [{ value: "male", text: "male" }, { value: "female", text: "female" }];
    const ethnicityVt = [{ value: "white", text: "White" }, { value: "black", text: "Black" }, { value: "latino", text: "Latino" }, { value: "asian", text: "Asian" }, { value: "middle eastern", text: "Middle Eastern" }, { value: "indian", text: "Indian" }, { value: "elven", text: "Elven" }, { value: "dwarven", text: "Dwarven"}];
    const earsVt = [{ value: "pointed", text: "Pointed" }, { value: "long and pointed", text: "Long and Pointed" }];

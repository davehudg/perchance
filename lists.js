const prompt = [`I want you to describe the physical appearance of a person using the following attributes: "name", "gender", "hairColor", "hairStyle", "eyeColor", "skinColor", "freckles" 
    - in terms of none, no freckles, some on the bridge of their nose, light body freckles, a lot of body freckles, "age" - in terms of stage of life Child, Pre-Teen, Teenager, Young Adult, "faceShape", "faceLength", "hairline",
    "eyebrows", "browRidge", "eyeShape", "eyeSet", "nose", "cheekBones", "lips", "chin", "bodyType", "muscularity", "bodyComposition", "height" - in terms of relation to the general population small, 
    average, tall, very tall "bustSize" - if female, in terms of relation to their body proportions flat, small, proportional, large, huge. The output of the attributes should be in a list as 
    follows: attributeName: attribute description. attribute names should appear as they are listed. Each attribute should be on it's own line. No descriptions should contain flowery language, and should be succinct and matter of fact.`];

const faceShapeVt = [{ value: "", text: "", toolTip: "" }, 
    { value: "flat face", weight: 1, text: "Flat Face", toolTip: "A face shape with minimal angles, a broad forehead, and a softly rounded jawline, creating a generally uniform appearance." },
    { value: "oval shaped face", weight: 1, text: "Oval Shaped Face", toolTip: "An elegant, balanced face with a gently curving jawline and forehead, slightly narrower than the cheekbones." },
    { value: "round shaped face", weight: 1, text: "Round Shaped Face", toolTip: "Full cheeks and a face that is equally wide at the cheekbones and jaw, with a soft, rounded jawline and forehead." },
    { value: "square shaped face", weight: 1, text: "Square Shaped Face", toolTip: "Angular features with a strong, broad jawline and forehead that are roughly the same width as the cheekbones." },
    { value: "heart shaped face", weight: 1, text: "Heart Shaped Face", toolTip: "A face that narrows at the chin and widens at the forehead and cheekbones, resembling the shape of a heart." },
    { value: "diamond shaped face", weight: 1, text: "Diamond Shaped Face", toolTip: "A face that is narrow at the forehead and jawline, with the cheekbones being the widest point, forming a diamond silhouette." }];
const faceLengthVt = [{ value: "", text: "", toolTip: "" }, 
    { value: "short face", weight: 1, text: "Short Face", toolTip: "A face where the distance from the forehead to the chin is less than the distance from ear to ear, often associated with a more rounded or heart-shaped face." },
    { value: "average face length", weight: 1, text: "Average Face Length", toolTip: " face where the distance from the forehead to the chin is approximately equal to the distance from ear to ear, with balanced proportions and features that are neither too compact nor overly elongated." },
    { value: "long face", weight: 1, text: "Long Face", toolTip: "A face where the distance from the forehead to the chin is greater than the distance from ear to ear, resulting in a more elongated, rectangular appearance." }];
const hairlineVt = [{ value: "", text: "", toolTip: "" }, 
    { value: "natural hairline", weight: 1, text: "Natural Hairline", toolTip: "A hairline that follows the natural growth pattern without significant alteration." },
    { value: "center-parted hairline", text: "Center-Parted Hairline", toolTip: "A hairline that has a clear middle part, dividing the hair into two symmetrical sections." },
    { value: "receding hairline", weight: 1, text: "Receding Hairline", toolTip: "A hairline that is gradually moving back from the forehead, often associated with male pattern baldness." },
    { value: "widow's peak", text: "Widow's Peak", toolTip: "A V-shaped hairline that points down towards the forehead." },
    { value: "m-shaped hairline", text: "M-Shaped Hairline", toolTip: "A hairline that forms an 'M' shape due to a widow's peak and a receding hairline at the temples." },
    { value: "high hairline", weight: 1, text: "High Hairline", toolTip: "A hairline that sits further up on the forehead, exposing more skin." },
    { value: "low hairline", weight: 1, text: "Low Hairline", toolTip: "A hairline that starts closer to the eyebrows, creating a smaller forehead." },
    { value: "defined hairline", weight: 1, text: "Defined Hairline", toolTip: "A clear and distinct line where the hair starts growing from the skin." },
    { value: "full hairline", weight: 1, text: "Full Hairline", toolTip: "A complete, unbroken line of hair around the forehead without any significant thinning or balding." },
    { value: "high sharp hairline", weight: 1, text: "High Sharp Hairline", toolTip: "A high hairline that is sharply defined, creating a more dramatic look." },
    { value: "side-parted hairline", text: "Side-Parted Hairline", toolTip: "A hairline that naturally falls to one side, creating a part that starts closer to the ear." },
    { value: "wavy hairline", weight: 1, text: "Wavy Hairline", toolTip: "An irregular, wavy pattern where the hair starts growing, often seen in people with naturally wavy or curly hair." },
    { value: "arched hairline", weight: 1, text: "Arched Hairline", toolTip: "A hairline that curves upwards at the temples, creating a high, arching look." },
    { value: "high rounded hairline", weight: 1, text: "High Rounded Hairline", toolTip: "A hairline that is high on the forehead and curves gently at the temples, creating a rounded shape." }];
const eyebrowsVt = [{ value: "", text: "", toolTip: "" }, 
    { value: "arched eyebrows", weight: 1, text: "Arched Eyebrows", toolTip: "These eyebrows have a high, curved shape that peaks in the middle, creating a dramatic and often sophisticated look." },
    { value: "straight eyebrows", weight: 1, text: "Straight Eyebrows", toolTip: "Eyebrows that maintain a consistent, horizontal line without any significant arch, giving a clean and minimalist appearance." },
    { value: "slopped eyebrows", weight: 1, text: "Slopped Eyebrows", toolTip: "Also known as 'droopy' or 'relaxed' eyebrows, these have a gentle downward curve, lending a natural and sometimes solemn expression to the face." },
    { value: "thick eyebrows", weight: 1, text: "Thick Eyebrows", toolTip: "Bold and dense, these eyebrows are characterized by a substantial amount of hair that can be quite expressive." },
    { value: "thin eyebrows", weight: 1, text: "Thin Eyebrows", toolTip: "These are delicate and fine, often associated with a youthful or elegant look." },
    { value: "feathered eyebrows", weight: 1, text: "Feathered Eyebrows", toolTip: "Feathered eyebrows have a soft, textured look with small hairs growing in multiple directions, resembling feathers." },
    { value: "rounded eyebrows", weight: 1, text: "Rounded Eyebrows", toolTip: "With a smooth, rounded shape, these eyebrows frame the eyes and can appear soft and approachable." }];
const eyebrowModVt = [{ value: "", text: "", toolTip: "" }, 
    { value: "thick", weight: 1, text: "Thick", toolTip: "" },
    { value: "thin", weight: 1, text: "Thin", toolTip: "" },
    { value: "Full", weight: 1, text: "Full", toolTip: "" },
    { value: "sloped", weight: 1, text: "Sloped", toolTip: "" },
    { value: "feathered", weight: 1, text: "Feathered", toolTip: "" },
    { value: "rounded", weight: 1, text: "Rounded", toolTip: "" },
    { value: "well-defined", text: "Well-Defined", toolTip: "" },
    { value: "slightly arched", weight: 1, text: "Slightly Arched", toolTip: "These eyebrows have a subtle curve that's not as pronounced as the arched brows, offering a more relaxed yet still defined look." },
    { value: "slightly sloped", weight: 1, text: "Slightly Sloped", toolTip: "" },
    { value: "slightly rounded", weight: 1, text: "Slightly Rounded", toolTip: "" }];
const browRidgeVt = [{ value: "", text: "", toolTip: "" }, 
    { value: "faint brow ridge", weight: 1, text: "Faint", toolTip: "The brow ridge is barely perceptible, almost blending into the forehead for a very smooth look." },
    { value: "slight brow ridge", weight: 1, text: "Slight", toolTip: "A delicate and gently defined ridge that adds a hint of structure without being overpowering." },
    { value: "soft brow ridge", weight: 1, text: "Soft", toolTip: "The brow ridge is not sharply defined, having a gentle curve that's pleasing to the eye and often associated with a more youthful appearance." },
    { value: "arched brow ridge", weight: 1, text: "Arched", toolTip: "The brow ridge has a graceful curve, emphasizing the natural arch of the eyebrow and adding an element of elegance." },
    { value: "distinctive brow ridge", weight: 1, text: "Distinctive", toolTip: "The brow ridge has a clear definition, setting the eyebrows apart and framing the eyes in a notable way." },
    { value: "high brow ridge", weight: 1, text: "High", toolTip: "The brow ridge is situated higher on the forehead, contributing to a more dramatic look and potentially making the face appear more elongated." },
    { value: "strong brow ridge", weight: 1, text: "Strong", toolTip: "A prominent brow ridge that gives a sense of power and intensity to the facial features." },
    { value: "prominent brow ridge", weight: 1, text: "Prominent", toolTip: "The brow ridge stands out significantly, creating a strong, angular look that can be quite striking." },
    { value: "pronounced brow ridge", weight: 1, text: "Pronounced", toolTip: "The most noticeable of all, a pronounced brow ridge is bold and can be seen as a defining characteristic of the face." }];
const eyeShapeVt = [{ value: "", text: "", toolTip: "" }, 
    { value: "almond shaped eyes", weight: 1, text: "Almond Eye", toolTip: "An eye shape that is longer than it is wide, with a slight curve at the outer corners, resembling an almond." },
    { value: "round shaped eyes", weight: 1, text: "Round Eye", toolTip: "Eyes that are fully rounded, often associated with a youthful and innocent appearance." },
    { value: "large eyes", weight: 1, text: "Large Eyes", toolTip: "Eyes that are significantly larger than average, often making a person appear more open and expressive." },
    { value: "large almond-shaped eyes", text: "Large Almond-shaped Eyes", toolTip: "Almond-shaped eyes that are larger in size, which can be quite captivating and dramatic." },
    { value: "large round eyes", weight: 1, text: "Large Round Eyes", toolTip: "Round eyes that are larger than usual, adding a touch of softness and gentleness to the face." },
    { value: "monolid eyes", weight: 1, text: "Monolid Eye", toolTip: "A single eyelid without a visible crease, commonly found in East Asian individuals, giving a sleek and mysterious look." },
    { value: "upturned eyes", weight: 1, text: "Upturned Eye", toolTip: "Eyes that have an upward tilt at the outer corners, sometimes called 'cat eyes,' which can make the person appear more playful or seductive." },
    { value: "downturned eyes", weight: 1, text: "Downturned Eye", toolTip: "Eyes with a downward slope at the outer corners, often associated with a more serious or contemplative expression." },
    { value: "hooded eyes", weight: 1, text: "Hooded Eye", toolTip: "Eyes with a heavy brow bone that partially covers the eyelid, which can give the appearance of a more relaxed or sleepy look." }];
const eyeSetVt = [{ value: "", text: "", toolTip: "" },
    { value: "wide eye set", weight: 1, text: "Wide Eye Set", toolTip: "Eyes that are spaced farther apart on the face, often contributing to a more open and friendly expression." },
    { value: "close eye set", weight: 1, text: "Close Eye Set", toolTip: "Eyes that are closer together, which can sometimes create a more intense or focused look." },
    { value: "slightly wide-set eyes", text: "Slightly Wide-set Eyes", toolTip: "A subtle variation of the wide eye set, providing a balanced and harmonious facial appearance." },
    { value: "deep set eyes", weight: 1, text: "Deep Set Eyes", toolTip: "Eyes that are set back into the skull, often shadowed by the brow bone, which can make the face appear more mature or intense." }];
const noseVt = [{ value: "", text: "", toolTip: "" }, 
    { value: "straight nose", weight: 1, text: "Straight Nose", toolTip: "A nose that runs in a straight line from the bridge to the tip." },
    { value: "curved nose", weight: 1, text: "Curved Nose", toolTip: "A nose that has a gentle curve, often starting at the bridge and curving towards the tip." },
    { value: "button nose", weight: 1, text: "Button Nose", toolTip: "A small, slightly upturned nose with a rounded tip." },
    { value: "aquiline nose", weight: 1, text: "Aquiline Nose", toolTip: "A nose that has a high, curved bridge and a sharp, hooked tip, reminiscent of an eagle's beak." },
    { value: "bulbous nose", weight: 1, text: "Bulbous Nose", toolTip: "A nose that is wide at the tip and often rounded, creating a prominent feature." },
    { value: "rounded tip nose", weight: 1, text: "Rounded Tip Nose", toolTip: "A nose with a rounded tip, which can appear softer and more youthful." },
    { value: "pointed nose", weight: 1, text: "Pointed nose" }];
const noseModVt = [{ value: "", text: "", toolTip: "" }, 
    { value: "broad", weight: 1, text: "Broad", toolTip: "A nose that is wider at the bridge and can give a strong, bold look." },
    { value: "upturned", weight: 1, text: "Upturned", toolTip: "Nostrils that face upwards, often associated with a cheerful or playful expression." },
    { value: "slightly upturned", weight: 1, text: "Slightly Upturned", toolTip: "A subtle upturn that adds a touch of charm without being overly pronounced." },
    { value: "high bridge", weight: 1, text: "High Bridge", toolTip: "A nose with a distinct, raised bridge that can make the nose appear more prominent." },
    { value: "narrow", weight: 1, text: "Narrow", toolTip: "A nose that is slender and less wide." },
    { value: "downturned", weight: 1, text: "Downturned", toolTip: "Nostrils that face downwards, often linked to a more solemn or serious look." },
    { value: "sloped", weight: 1, text: "Sloped", toolTip: "A nose that gradually narrows from the bridge to the tip." }];
const noseBridgeVt = [{ value: "", text: "", toolTip: "" }, 
    { value: "with flat nose bridge", weight: 1, text: "Flat Nose Bridge", toolTip: "A nose with a minimal to non-existent ridge between the eyes." },
    { value: "with high nose bridge", weight: 1, text: "High Nose Bridge", toolTip: "A pronounced ridge that creates a sharp angle between the eyes and the nose." },
    { value: "with low nose bridge", weight: 1, text: "Low Nose Bridge", toolTip: "A gently curved bridge that sits closer to the face." },
    { value: "with defined nose bridge", weight: 1, text: "Defined Nose Bridge", toolTip: "A clear, visible ridge that provides structure to the nose." },
    { value: "with sloped nose bridge", weight: 1, text: "Sloped Nose Bridge", toolTip: "A bridge that slopes down from the forehead to the tip of the nose." }];
const cheekBonesVt = [{ value: "", text: "", toolTip: "" }, 
    { value: "high cheekbones", weight: 1, text: "High Cheekbones", toolTip: "The most prominent of all, high cheekbones create a sharp, angular face with a dramatic contour that can make the face appear chiseled and elegant." },
    { value: "pronounced cheekbones", weight: 1, text: "Pronounced Cheekbones", toolTip: "These cheekbones are very noticeable, providing a strong structure to the face without being as extreme as the high cheekbone type." },
    { value: "prominent cheekbones", weight: 1, text: "Prominent Cheekbones", toolTip: "Cheekbones that stand out and contribute to a distinctive facial profile, striking a balance between high and pronounced." },
    { value: "defined cheekbones", weight: 1, text: "Defined Cheekbones", toolTip: "Offering a clear outline of the cheek structure, defined cheekbones give a face a more sculpted look without the dramatic effect of high or pronounced cheekbones." },
    { value: "full cheeks", weight: 1, text: "Full Cheeks", toolTip: "Cheeks that are rounded and plump, which can add a sense of youthfulness and warmth to the face, sometimes obscuring the cheekbone structure." },
    { value: "low cheekbones", weight: 1, text: "Low Cheekbones", toolTip: "The least pronounced, low cheekbones are closer to the jawline, offering a softer and more delicate look to the face." }];
const lipsVt = [{ value: "", text: "", toolTip: "" }, 
    { value: "full lips", weight: 1, text: "Full Lips", toolTip: "Lips that are naturally plump and fill the space between the nose and chin, often associated with sensuality and beauty." },
    { value: "thin lips", weight: 1, text: "Thin Lips", toolTip: "Lips that are less plump, closer to the natural line of the mouth, which can give a more refined and elegant appearance." },
    { value: "heart-shaped lips", text: "Heart-shaped Lips", toolTip: "An upper lip that is shorter and curves inward to create a heart-like shape when viewed from the side." }];
const lipModVt = [{ value: "", text: "", toolTip: "" }, 
    { value: "pouty", weight: 1, text: "Pouty", toolTip: "Lips that have a natural or exaggerated fullness to the lower lip, creating a pouting or kissable look." },
    { value: "well-defined", text: "Well-defined", toolTip: "Lips that have a clear and distinct border, which can make the mouth appear smaller and more precise." },
    { value: "cupid's bow", text: "Cupid's Bow", toolTip: "A distinctive upper lip shape with a peaked bow in the center, often considered a symbol of beauty." },
    { value: "sensual", weight: 1, text: "Sensual", toolTip: "Lips that are full and shaped in a way that suggests warmth and passion." },
    { value: "luscious", weight: 1, text: "Luscious", toolTip: "A term used to describe full, inviting, and appealing lips that seem to be bursting with vitality." },
    { value: "thick", weight: 1, text: "Thick", toolTip: "Lips that are more substantial and pronounced, adding volume and character to the face." }];
const chinVt = [{ value: "", text: "", toolTip: "" }, 
    { value: "pointed chin", weight: 1, text: "Pointed Chin", toolTip: "A chin that tapers to a sharp point, often giving the face a more elongated and angular appearance." },
    { value: "soft chin", weight: 1, text: "Soft Chin", toolTip: "A gently rounded chin that is not as pronounced as other chin types, contributing to a more delicate look." },
    { value: "strong chin", weight: 1, text: "Strong Chin", toolTip: "A chin with a defined and protruding point, often associated with determination and confidence." },
    { value: "round chin", weight: 1, text: "Round Chin", toolTip: "A chin that is fully rounded, which can balance out a square jawline and add a touch of softness to the face." },
    { value: "square chin", weight: 1, text: "Square Chin", toolTip: "A chin that has a 90-degree angle at the tip, aligning with a square jawline for a more robust and structured look." },
    { value: "cleft chin", weight: 1, text: "Cleft Chin", toolTip: "A chin with a distinct groove in the center, which can be found on any of the base chin types, adding a unique and often attractive feature." }];
const jawlineVt = [{ value: "", text: "", toolTip: "" }, 
    { value: "strong jawline with ", weight: 1, text: "Strong Jawline", toolTip: "A jawline that is well-defined and angular." },
    { value: "round jawline with ", weight: 1, text: "Round Jawline", toolTip: "A jawline that is gently curved and soft." },
    { value: "square jawline with ", weight: 1, text: "Square Jawline", toolTip: "A powerful, structured jawline that emphasizes the chin." }];
const bodyTypeVt = [{ value: "", text: "", toolTip: "" }, 
    { value: "inverted triangle body shape", weight: 1, text: "Inverted Triangle", toolTip: "Broad shoulders and a full bust that narrows down to smaller hips and thighs." },
    { value: "apple body shape", weight: 1, text: "Apple", toolTip: "A substantial upper body with a larger midriff and less pronounced waist, leading to narrower hips and thighs." },
    { value: "rectangle body shape", weight: 1, text: "Rectangle", toolTip: "A balanced, straight silhouette with similar measurements for the bust, waist, and hips." },
    { value: "banana body shape", weight: 1, text: "Banana", toolTip: "Minimal curves and a straight figure, with the upper body being slightly broader than the lower body." },
    { value: "spoon body shape", weight: 1, text: "Spoon", toolTip: "A smaller bust compared to the pear, with a more pronounced lower body that emphasizes hips and thighs." },
    { value: "pear body shape", weight: 1, text: "Pear", toolTip: "A smaller upper body that flares out to wider hips and thighs, with a more defined waist." },
    { value: "hourglass body shape", weight: 1, text: "Hourglass", toolTip: "Equal measurements for the bust and hips, with a narrow waist, creating a balanced and curvy figure." }];
const bodyCompVt = [{ value: "", text: "", toolTip: "" }, 
    { value: "ectomorph build", weight: 1, text: "Ectomorph", toolTip: "Thin, with low body fat and minimal muscle definition." },
    { value: "petite build", weight: 1, text: "Petite", toolTip: "Small, delicate frame with shorter limbs." },
    { value: "slim build", weight: 1, text: "Slim", toolTip: "Straight body shape with little fat and minimal curves." },
    { value: "curvy build", weight: 1, text: "Curvy", toolTip: "Pronounced bust and hips with a defined waist." },
    { value: "voluptuous build", weight: 1, text: "Voluptuous", toolTip: "Fuller figure with significant curves and a larger midsection." },
    { value: "endomorph build", weight: 1, text: "Endomorph", toolTip: "Higher body fat percentage and a softer, rounded shape." },
    { value: "stocky build", weight: 1, text: "Stocky", toolTip: "Robust frame, often shorter in stature." },
    { value: "mesomorph build", weight: 1, text: "Mesomorph", toolTip: "Moderate muscle definition and body fat, often considered athletic." },
    { value: "athletic build", weight: 1, text: "Athletic", toolTip: "Well-defined muscles and a toned physique." },
    { value: "lean build", weight: 1, text: "Lean", toolTip: "Low body fat with visible muscle tone, emphasizing sleek lines." }];
const muscularityVt = [{ value: "", text: "", toolTip: "" }, 
    { value: "low muscle definition", weight: 1, text: "Low Muscle Definition", toolTip: "A body with minimal visible muscle tone and a higher body fat percentage that obscures the muscles." },
    { value: "average muscle definition", weight: 1, text: "Average Muscle Definition", toolTip: "A body with some visible muscle tone and a moderate body fat percentage that allows for basic distinctions between muscle groups without being overly pronounced." },
    { value: "toned muscle definition", weight: 1, text: "Toned Muscle Definition", toolTip: "" },
    { value: "moderate muscle definition", weight: 1, text: "Moderate Muscle Definition", toolTip: "Some visible muscle tone, with the body showing a clear distinction between muscle groups, but not overly pronounced." },
    { value: "high muscle definition", weight: 1, text: "High Muscle Definition", toolTip: "Clearly visible muscles with very low body fat, allowing for sharp distinctions between muscle groups and vivid vascularity." }];
const bustSizeVt = [{ value: "", text: "", toolTip: "" }, 
    { value: "flat bust", weight: 1, text: "Flat Bust", toolTip: "A minimal amount of breast tissue, resulting in a chest that is almost level with the rest of the torso." },
    { value: "proportionally small bust", weight: 1, text: "Proportionally Small Bust", toolTip: "Slightly protruding breasts that are in harmony with a smaller body frame or less developed physique." },
    { value: "proportional bust", weight: 1, text: "Proportional Bust", toolTip: "Breasts that are balanced with the rest of the body, fitting standard sizing for most clothing." },
    { value: "proportionally large bust", weight: 1, text: "Proportionally Large Bust", toolTip: "Full, substantial breasts that are proportionate to the body, potentially requiring specialized support." },
    { value: "proportionally huge bust", weight: 1, text: "Proportionally Huge Bust", toolTip: "Extremely large breasts that are significantly larger than the average, dominating the torso." }];


const foreheadVt = [{ value: "", text: "" }, { value: "high forehead", weight: 1, text: "high forehead" }, { value: "low forehead", weight: 1, text: "low forehead" }, 
    { value: "broad forehead", weight: 1, text: "broad forehead" }, { value: "narrow forehead", weight: 1, text: "narrow forehead" }];
const heightVt = [{ value: "", text: "" }, { value: "short", weight: 1, text: "short" }, { value: "average height", weight: 1, text: "average height" }, 
    { value: "tall", weight: 1, text: "tall" }];
const maleHairStyles = [{ value: "", text: "", toolTip: "" }, { value: "comb over", weight: 1, text: "Comb Over" }, { value: "quiff", weight: 1, text: "Quiff" }, { value: "buzz cut", weight: 1, text: "Buzz Cut" },
    { value: "crew cut", weight: 1, text: "Crew Cut" }, { value: "short afro", weight: 1, text: "Short Afro" }, { value: "afro", weight: 1, text: "Afro" },
    { value: "side part with short hair", weight: 1, text: "Side Part With Short Hair" }, { value: "ivy league haircut", weight: 1, text: "Ivy League Haircut" },
    { value: "fade", weight: 1, text: "Fade" }, { value: "slicked back", weight: 1, text: "Slicked Back" }, { value: "textured crop", weight: 1, text: "Textured Crop" }];
const femaleHairStyles = [{ value: "", text: "", toolTip: "" }, { value: "pixie cut", weight: 1, text: "Pixie Cut" }, { value: "textured pixie cut", weight: 1, text: "Textured Pixie Cut" }, 
    { value: "undercut", weight: 1, text: "Undercut" }, { value: "crew cut", weight: 1, text: "Crew Cut" }, { value: "buzz cut", weight: 1, text: "Buzz Cut" }, { value: "spiky short hair", weight: 1, text: "Spiky Short Hair" }, 
    { value: "layered bob", weight: 1, text: "Layered Bob" }, { value: "tousled short hair", weight: 1, text: "Tousled Short Hair" }, { value: "short braids", weight: 1, text: "Short Braids" },
    { value: "shoulder-length layers", text: "Shoulder-Length Layers" }, { value: "medium curly hair", weight: 1, text: "Medium Curly Hair" }, { value: "wavy medium hair", weight: 1, text: "Wavy Medium Hair" },
    { value: "dutch braids", weight: 1, text: "Dutch Braids" }, { value: "french braids", weight: 1, text: "French Braids" }, { value: "straight long hair", weight: 1, text: "Straight Long Hair" },
    { value: "bob", weight: 1, text: "Bob" }, { value: "side-swept bangs", text: "Side-Swept Bangs" }, { value: "rachel hair style", weight: 1, text: "Rachel Hair Style" },
    { value: "balayage highlights", weight: 1, text: "Balayage Highlights" }, { value: "loose waves", weight: 1, text: "Loose Waves" }, { value: "braids", weight: 1, text: "Braids" },
    { value: "updo", weight: 1, text: "Updo" }, { value: "high ponytail", weight: 1, text: "High Ponytail" }, { value: "long layered hair", weight: 1, text: "Long Layered Hair" },
    { value: "long hair with bangs", weight: 1, text: "Long Hair With Bangs" }];
const ageVt = [{ value: "", text: "", toolTip: "" }, { value: "infant", weight: 1, text: "Infant" }, { value: "toddler", weight: 1, text: "Toddler" }, { value: "preschooler", weight: 1, text: "Preschooler" }, 
    { value: "child", weight: 1, text: "Child" }, { value: "pre-teen", text: "Pre-Teen" }, { value: "teenager", weight: 1, text: "Teenager" }, 
    { value: "young adult", weight: 1, text: "Young Adult" }, { value: "adult", weight: 1, text: "Adult" }, { value: "middle-aged", text: "Middle-Aged" }, 
    { value: "senior", weight: 1, text: "Senior" }, { value: "elderly", weight: 1, text: "Elderly" }, { value: "geriatric", weight: 1, text: "Geriatric" }];
const skinColorVt = [{ value: "", text: "", toolTip: "" }, { value: "fair skin", weight: 1, text: "Fair" }, { value: "Ivory colored skin", weight: 1, text: "Ivory" }, { value: "olive skin", weight: 1, text: "Olive" }, 
    { value: "Beige colored skin", weight: 1, text: "Beige" }, { value: "Caramel colored skin", weight: 1, text: "Caramel" }, { value: "Honey colored skin", weight: 1, text: "Honey" }, 
    { value: "Toffee colored skin", weight: 1, text: "Toffee" }, { value: "Chestnut colored skin", weight: 1, text: "Chestnut" }, { value: "Walnut colored skin", weight: 1, text: "Walnut" }, 
    { value: "Mocha colored skin", weight: 1, text: "Mocha" }, { value: "Cocoa colored skin", weight: 1, text: "Cocoa" }, { value: "chocolate colored skin", weight: 1, text: "Chocolate" }, 
    { value: "dark chocolate colored skin", weight: 1, text: "Dark Chocolate" }, { value: " light green skin", weight: 1, text: "Green" }, { value: "light blue skin", weight: 1, text: "Blue" }];
const eyeColorVt = [{ value: "", text: "", toolTip: "" }, { value: "grey eyes", weight: 1, text: "Grey" }, { value: "blue eyes", weight: 1, text: "Blue" }, { value: "green eyes", weight: 1, text: "Green" }, 
    { value: "brown eyes", weight: 1, text: "Brown" }, { value: "hazel eyes", weight: 1, text: "Hazel" }, { value: "amber eyes", weight: 1, text: "Amber eyes"}];
const glassesVt = [{ value: "", text: "", toolTip: "" }, { value: "cat eye glasses", weight: 1, text: "Cat Eye" }, { value: "browline glasses", weight: 1, text: "Browline" }, { value: "oval glasses", weight: 1, text: "Oval" }, 
    { value: "rectangle glasses", weight: 1, text: "Rectangle" }, { value: "round glasses", weight: 1, text: "Round" }, { value: "aviator glasses", weight: 1, text: "Aviators" }, 
    { value: "sunglasses", weight: 1, text: "Sunglasses" }];
const frecklesVt = [{ value: "", text: "", toolTip: "" }, { value: "light freckles", weight: 1, text: "Light freckles" }, { value: "freckles on the bridge of nose", weight: 1, text: "bridge of nose" }, 
    { value: "heavy freckles", weight: 1, text: "Heavy freckles" }];
const facialHairVt = [{ value: "", text: "", toolTip: "" }, { value: "clean-shaven", text: "Clean-shaven" }, { value: "stubble", weight: 1, text: "Stubble" }, { value: "short beard", weight: 1, text: "Short Beard" }, 
    { value: "medium beard", weight: 1, text: "Medium Beard" }, { value: "long beard", weight: 1, text: "Long Beard" }, { value: "very long beard", weight: 1, text: "Very Long Beard" }, 
    { value: "mustache", weight: 1, text: "Mustache" }, { value: "goatee", weight: 1, text: "Goatee" }, { value: "van dyke", weight: 1, text: "Van Dyke" }, 
    { value: "soul patch", weight: 1, text: "Soul Patch" }, { value: "chin strap", weight: 1, text: "Chin Strap" }, { value: "mutton chops", weight: 1, text: "Mutton Chops" }, 
    { value: "beardstache", weight: 1, text: "Beardstache" }, { value: "ducktail", weight: 1, text: "Ducktail" }, { value: "balbo", weight: 1, text: "Balbo" }, { value: "verdi", weight: 1, text: "Verdi" }];
const faceFeatsVt = [{ value: "", text: "", toolTip: "" }, { value: "faceShape", weight: 1, text: "Face Shape" }, { value: "faceLength", weight: 1, text: "Face Length" }, { value: "hairline", weight: 1, text: "Hairline" }, 
    { value: "forehead", weight: 1, text: "Forehead" }, { value: "eyebrows", weight: 1, text: "Eyebrows" }, { value: "browRidge", weight: 1, text: "Brow Ridge" }, 
    { value: "eyeShape", weight: 1, text: "Eye Shape" }, { value: "eyeSet", weight: 1, text: "Eye Set" }, { value: "nose", weight: 1, text: "Nose" }, { value: "cheekBones", weight: 1, text: "Cheek Bones" }, 
    { value: "lips", weight: 1, text: "Lips" }, { value: "chin", weight: 1, text: "Chin" }];
const bodyFeatsVt = [{ value: "", text: "", toolTip: "" }, { value: "bodyType", weight: 1, text: "Body Type" }, { value: "bodyComp", weight: 1, text: "Body Composition" }, { value: "muscularity", weight: 1, text: "Muscularity" }, 
    { value: "height", weight: 1, text: "Height" }, { value: "bustSize", weight: 1, text: "Bust Size" }];
const hairColorVt = [{ value: "", text: "" }, { value: "black hair", weight: 1, text: "Black" }, { value: "dark brown hair", weight: 1, text: "Dark Brown" }, 
    { value: "brown hair", weight: 1, text: "Brown" }, { value: "sandy brown hair", weight: 1, text: "Sandy Brown" }, { value: "blonde hair", weight: 1, text: "Blonde" }, 
    { value: "strawberry blonde hair", weight: 1, text: "Strawberry Blonde" }, { value: "red hair", weight: 1, text: "Red" }, { value: "auburn hair", weight: 1, text: "Auburn" }, 
    { value: "grey hair", weight: 1, text: "Grey" }, { value: "white hair", weight: 1, text: "White" }, { value: "salt and pepper hair", weight: 1, text: "Salt and Pepper" }, { value: "bald", weight: 1, text: "Bald" },
    { value: "gold colored hair", weight: 1, text: "Gold Hair" }, { value: "platinum blonde hair", weight: 1, text: "Platinum Blonde Hair" }];
const highlightVt = [{ value: "", text: "None" }, { value: "with blonde highlights", weight: 1, text: "Blonde" }, { value: "with auburn highlights", weight: 1, text: "Auburn" }, 
    { value: "with red highlights", weight: 1, text: "Red" }, { value: "with orange highlights", weight: 1, text: "Orange" }, { value: "with yellow highlights", weight: 1, text: "Yellow" }, 
    { value: "with green highlights", weight: 1, text: "Green" }, { value: "with blue highlights", weight: 1, text: "Blue" }, { value: "with violet highlights", weight: 1, text: "Violet" },
    { value: "with indigo highlights", weight: 1, text: "Indigo" }, { value: "with white highlights", weight: 1, text: "White" }, { value: "with black highlights", weight: 1, text: "Black" }];
const hairVt = [{ value: "hairColor", weight: 1, text: "Hair Color" }, { value: "highlights", weight: 1, text: "Highlights" }, { value: "hairStyle", weight: 1, text: "Hair Style" }];
const genderVt = [{ value: "male", weight: 1, text: "male" }, { value: "female", weight: 1, text: "female" }];
const ethnicityVt = [{ value: "caucasian", weight: 1, text: "White" }, { value: "black", weight: 1, text: "Black" }, { value: "latino", weight: 1, text: "Latino" }, { value: "asian", weight: 1, text: "Asian" }, 
    { value: "middle eastern", weight: 1, text: "Middle Eastern" }, { value: "indian", weight: 1, text: "Indian" }, { value: "elven", weight: 1, text: "Elven" }, { value: "dwarven", weight: 1, text: "Dwarven"}];
const earsVt = [{ value: "pointed ears", weight: 1, text: "Pointed" }, { value: "long and pointed ears", weight: 1, text: "Long and Pointed" }];
const clothingVt = [{ value: "", text: "" }, 
    { value: "casual", weight: 1, text: "Casual" }, { value: "formal", weight: 1, text: "Formal" }, { value: "business", weight: 1, text: "Business" },
    { value: "nude", weight: 1, text: "None" }, { value: "underware", weight: 1, text: "Underware" }, { value: "swimwear", weight: 1, text: "Swimwear" }, 
    { value: "sleepwear", weight: 1, text: "Sleepwear" }, { value: "activewear", weight: 1, text: "Activewear" }];

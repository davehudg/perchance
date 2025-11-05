// Trait Cluster Groups
const traitClusters = [
  { value: "Cluster 1", weight: 58, text: "Fair-skinned European", tooltip: "Fair to light skin tones, lighter hair and eye colors. Includes Northern Europeans, Scandinavians, Anglo-Americans." },
  { value: "Cluster 2", weight: 18, text: "Mediterranean/Latino/West Asian", tooltip: "Light olive to medium skin tones, dark hair, dark eyes. Includes Southern Europeans, Middle Easterners, some Latinos." },
  { value: "Cluster 3", weight: 6, text: "Sub-Saharan African", tooltip: "Medium to dark brown skin tones, dark hair, dark eyes. Includes African-Americans, Afro-Caribbeans, Sub-Saharan Africans." },
  { value: "Cluster 4", weight: 2, text: "Native / Indigenous American", tooltip: "Light to medium brown skin tones, diverse hair textures, dark eyes. Includes Latinos, Native Americans, mixed-heritage groups." },
  { value: "Cluster 5", weight: 13, text: "East Asian", tooltip: "Light to medium skin tones, straight dark hair, dark eyes. Includes East Asians (Chinese, Japanese, Koreans)." },
  { value: "Cluster 6", weight: 3, text: "South Asian", tooltip: "Medium brown to dark brown skin tones, wavy to curly hair. Includes South Asians (Indians, Pakistanis, Bangladeshis)." }
];

const gender = [
  {
    value: "Cluster 1",
    values: [
      { value: "female", weight: 50, text: "Female" },
      { value: "male", weight: 50, text: "Male" }
    ]
  },
  {
    cluster: "Cluster 2",
    values: [
      { value: "female", weight: 49, text: "Female" },
      { value: "male", weight: 51, text: "Male" }
    ]
  },
  {
    cluster: "Cluster 3",
    values: [
      { value: "female", weight: 48, text: "Female" },
      { value: "male", weight: 52, text: "Male" }
    ]
  },
  {
    cluster: "Cluster 4",
    values: [
      { value: "female", weight: 51, text: "Female" },
      { value: "male", weight: 49, text: "Male" }
    ]
  },
  {
    cluster: "Cluster 5",
    values: [
      { value: "female", weight: 50, text: "Female" },
      { value: "male", weight: 50, text: "Male" }
    ]
  },
  {
    cluster: "Cluster 6",
    values: [
      { value: "female", weight: 52, text: "Female" },
      { value: "male", weight: 48, text: "Male" }
    ]
  }
];

const genderTooltips = [ 
  { value: "Male", text: "Male", tooltip: "Typically associated with masculine traits, including body structure and facial features."},
  { value: "Female", text: "Female", tooltip: "Typically associated with feminine traits, including body structure and facial features."}
];
const bustTypesMale = [
  { value: "flat", weight: 0.50, text: "Flat" },
  { value: "defined", weight: 0.30, text: "Defined" },
  { value: "small", weight: 0.15, text: "Small" },
  { value: "medium", weight: 0.05, text: "Medium" }
];

const bustTypesFemale = [
  { value: "small", weight: 0.20, text: "Small" },
  { value: "medium", weight: 0.35, text: "Medium" },
  { value: "full", weight: 0.30, text: "Full" },
  { value: "large", weight: 0.10, text: "Large" },
  { value: "flat", weight: 0.03, text: "Flat" },
  { value: "defined", weight: 0.02, text: "Defined" }
];

const bustTooltipsMale = [
  { value: "flat", tooltip: "Chest is flat with minimal soft tissue; typical in many cisgender male and lean bodies." },
  { value: "small", tooltip: "Slight development of soft tissue; may be due to genetics, body fat, or hormones." },
  { value: "medium", tooltip: "Moderate chest prominence; may indicate higher body fat or mild gynecomastia." },
  { value: "defined", tooltip: "Muscular chest with visible pectoral definition; associated with athletic or trained physiques." }
];

const bustTooltipsFemale = [
  { value: "flat", text: "flat", tooltip: "Very little breast tissue; often seen in prepubescent, very lean, or athletic women." },
  { value: "small", text: "small", tooltip: "Small breasts with subtle curvature; common among petite or slim body types." },
  { value: "medium", text: "medium", tooltip: "Moderate breast size; natural curvature and projection common in average body types." },
  { value: "full", text: "full", tooltip: "Noticeably rounded and voluminous breasts with prominent projection." },
  { value: "large", text: "large", tooltip: "Very prominent breast volume; may affect posture or be emphasized in body shape." },
  { value: "defined", text: "defined", tooltip: "Firm and perky breasts with visible contour or muscular tone; rare, may suggest implants or athletic build." }
];

const genitalTypes = [
  { value: "none", weight: 1, text: "None" },
  { value: "male_small", weight: 5, text: "Male - Small" },
  { value: "male_average", weight: 20, text: "Male - Average" },
  { value: "male_large", weight: 6, text: "Male - Large" },
  { value: "female_small", weight: 6, text: "Female - Small" },
  { value: "female_average", weight: 20, text: "Female - Average" },
  { value: "female_large", weight: 5, text: "Female - Large" },
  { value: "intersex", weight: 2, text: "Intersex" }
];

const genitalTooltips = [
  { value: "none", tooltip: "No visible external genitalia; may be due to anatomical absence, injury, or intentional concealment." },

  { value: "male_small", tooltip: "Smaller-than-average penis size, typically under 4 inches erect; may reflect natural variation or age." },
  { value: "male_average", tooltip: "Penis size within average range (about 5–6 inches erect); most common male genital type." },
  { value: "male_large", tooltip: "Larger-than-average penis size, typically over 6.5 inches erect; less common but well within natural variation." },

  { value: "female_small", tooltip: "Small vulva with less prominent labia and clitoral hood; common in petite or younger individuals." },
  { value: "female_average", tooltip: "Vulva with average-sized labia and clitoral visibility; represents typical adult female anatomy." },
  { value: "female_large", tooltip: "Larger labia or pronounced anatomy; still within the range of normal female variation." },

  { value: "intersex", tooltip: "Ambiguous or mixed genital characteristics; may include features of both male and female anatomy." }
];


// Eye Colors
const eyeColors = [
  { cluster: "cluster1", values: [
    { value: "blue", weight: 30, text: "Blue" },
    { value: "green", weight: 15, text: "Green" },
    { value: "hazel", weight: 25, text: "Hazel" },
    { value: "amber", weight: 10, text: "Amber" },
    { value: "light brown", weight: 10, text: "Light Brown" },
    { value: "medium brown", weight: 5, text: "Medium Brown" },
    { value: "dark brown", weight: 5, text: "Dark Brown" }
  ]},
  { cluster: "cluster2", values: [
    { value: "light brown", weight: 20, text: "Light Brown" },
    { value: "medium brown", weight: 35, text: "Medium Brown" },
    { value: "dark brown", weight: 40, text: "Dark Brown" },
    { value: "hazel", weight: 5, text: "Hazel" }
  ]},
  { cluster: "cluster3", values: [
    { value: "medium brown", weight: 10, text: "Medium Brown" },
    { value: "dark brown", weight: 85, text: "Dark Brown" },
    { value: "black", weight: 5, text: "Black" }
  ]},
  { cluster: "cluster4", values: [
    { value: "light brown", weight: 15, text: "Light Brown" },
    { value: "medium brown", weight: 35, text: "Medium Brown" },
    { value: "dark brown", weight: 45, text: "Dark Brown" },
    { value: "hazel", weight: 5, text: "Hazel" }
  ]},
  { cluster: "cluster5", values: [
    { value: "dark brown", weight: 90, text: "Dark Brown" },
    { value: "medium brown", weight: 5, text: "Medium Brown" },
    { value: "black", weight: 5, text: "Black" }
  ]},
  { cluster: "cluster6", values: [
    { value: "dark brown", weight: 80, text: "Dark Brown" },
    { value: "medium brown", weight: 15, text: "Medium Brown" },
    { value: "hazel", weight: 5, text: "Hazel" }
  ]}
];

// Tooltips by Trait Type
const eyeColorTooltips = [
	{ value: "Brown", text: "Brown", tooltip: "From light brown to deep brown, most common eye color globally." },
	{ value: "Dark Brown", text: "Dark Brown", tooltip: "Very deep, dark brown, almost black." },
	{ value: "Amber", text: "Amber", tooltip: "Rich golden-brown or copper-toned eyes." },
	{ value: "Hazel", text: "Hazel", tooltip: "Light brown or greenish-brown with flecks of green or gold." },
	{ value: "Green", text: "Green", tooltip: "Light to dark green eyes." },
	{ value: "Blue", text: "Blue", tooltip: "From pale to deep blue." },
	{ value: "Gray", text: "Gray", tooltip: "Pale, cool eyes, often with blue undertones." },
	{ value: "Aqua", text: "Aqua", tooltip: "Light blue-green mix, often bright and vivid." },
	{ value: "Black", text: "Black", tooltip: "Very dark eyes, often appearing completely black in certain lighting." }
];

// Hair Colors
const hairColors = [
  { cluster: "cluster1", values: [
    { value: "blonde", weight: 40, text: "Blonde" },
    { value: "light brown", weight: 20, text: "Light Brown" },
    { value: "medium brown", weight: 15, text: "Medium Brown" },
    { value: "dark brown", weight: 10, text: "Dark Brown" },
    { value: "red", weight: 5, text: "Red" },
    { value: "strawberry blonde", weight: 5, text: "Strawberry Blonde" },
	{ value: "auburn", weight: 5, text: "Auburn" }
  ]},
  { cluster: "cluster2", values: [
    { value: "dark brown", weight: 40, text: "Dark Brown" },
    { value: "medium brown", weight: 30, text: "Medium Brown" },
    { value: "light brown", weight: 20, text: "Light Brown" },
    { value: "auburn", weight: 5, text: "Auburn" },
    { value: "sandy", weight: 5, text: "Sandy" }
  ]},
  { cluster: "cluster3", values: [
    { value: "black", weight: 70, text: "Black" },
    { value: "dark brown", weight: 15, text: "Dark Brown" },
    { value: "medium brown", weight: 10, text: "Medium Brown" },
    { value: "auburn", weight: 5, text: "Auburn" }
  ]},
  { cluster: "cluster4", values: [
    { value: "black", weight: 40, text: "Black" },
    { value: "medium brown", weight: 30, text: "Medium Brown" },
    { value: "dark brown", weight: 20, text: "Dark Brown" },
    { value: "light brown", weight: 5, text: "Light Brown" },
    { value: "auburn", weight: 5, text: "Auburn" }
  ]},
  { cluster: "cluster5", values: [
    { value: "black", weight: 85, text: "Black" },
    { value: "medium brown", weight: 10, text: "Medium Brown" },
    { value: "dark brown", weight: 5, text: "Dark Brown" }
  ]},
  { cluster: "cluster6", values: [
    { value: "black", weight: 75, text: "Black" },
    { value: "dark brown", weight: 15, text: "Dark Brown" },
    { value: "medium brown", weight: 10, text: "Medium Brown" }
  ]}
];

// Hair Texture
const hairTextures = [
  { cluster: "cluster1", values: [
    { value: "straight", weight: 30, text: "Straight" },
    { value: "wavy", weight: 40, text: "Wavy" },
    { value: "curly", weight: 20, text: "Curly" },
    { value: "curly/wavy mixed", weight: 10, text: "Curly/Wavy Mixed" }
  ]},
  { cluster: "cluster2", values: [
    { value: "wavy", weight: 50, text: "Wavy" },
    { value: "straight", weight: 30, text: "Straight" },
    { value: "curly", weight: 10, text: "Curly" },
    { value: "curly/wavy mixed", weight: 10, text: "Curly/Wavy Mixed" }
  ]},
  { cluster: "cluster3", values: [
    { value: "coiled", weight: 50, text: "Coiled (Afro-textured)" },
    { value: "kinky", weight: 40, text: "Kinky" },
    { value: "curly", weight: 10, text: "Curly" }
  ]},
  { cluster: "cluster4", values: [
    { value: "wavy", weight: 30, text: "Wavy" },
    { value: "straight", weight: 25, text: "Straight" },
    { value: "curly", weight: 20, text: "Curly" },
    { value: "curly/wavy mixed", weight: 15, text: "Curly/Wavy Mixed" },
    { value: "coarse", weight: 10, text: "Coarse" }
  ]},
  { cluster: "cluster5", values: [
    { value: "straight", weight: 70, text: "Straight" },
    { value: "wavy", weight: 20, text: "Wavy" },
    { value: "curly", weight: 5, text: "Curly" },
    { value: "fine", weight: 5, text: "Fine" }
  ]},
  { cluster: "cluster6", values: [
    { value: "kinky", weight: 60, text: "Kinky" },
    { value: "coiled", weight: 30, text: "Coiled (Afro-textured)" },
    { value: "curly", weight: 10, text: "Curly" }
  ]}
];

// Tooltips by Trait Type
const hairColorTooltips = [
	{ value: "Black", text: "Black", tooltip: "Deepest natural color, ranging from blue-black to softer black." },
	{ value: "Dark Brown", text: "Dark Brown", tooltip: "Rich, deep brown, sometimes with red or mahogany undertones." },
	{ value: "Medium Brown", text: "Medium Brown", tooltip: "Balanced brown, sometimes with subtle red, gold, or ash tones." },
	{ value: "Light Brown", text: "Light Brown", tooltip: "Lighter brown shades, with golden, neutral, or ash undertones." },
	{ value: "Blonde", text: "Blonde", tooltip: "From pale blonde to golden blonde, often lighter shades." },
	{ value: "Red", text: "Red", tooltip: "Copper to auburn tones, a natural hair color variation." },
	{ value: "Auburn", text: "Auburn", tooltip: "Red-brown mixture with rich reddish hues." },
	{ value: "Gray/Silver", text: "Gray/Silver", tooltip: "Hair that transitions to gray and silver with aging." },
	{ value: "White", text: "White", tooltip: "Hair that turns white, typically due to aging." },
	{ value: "Sandy", text: "Sandy", tooltip: "Muted light blonde with hints of brown, resembling sand." },
	{ value: "Strawberry Blonde", text: "Strawberry Blonde", tooltip: "A mix of blonde with reddish tones." }
];

const hairTextureTooltips = [
	{ value: "Straight", text: "Straight", tooltip: "Flat, smooth, no waves or curls." },
	{ value: "Wavy", text: "Wavy", tooltip: "Soft, gentle waves, between straight and curly." },
	{ value: "Curly", text: "Curly", tooltip: "Defined, bouncy curls, ranging from loose to tight." },
	{ value: "Coiled (Afro-textured)", text: "Coiled (Afro-textured)", tooltip: "Tight, compact curls often creating volume and an 'Afro' shape." },
	{ value: "Kinky", text: "Kinky", tooltip: "Very tight, zigzagged curls or coiled patterns." },
	{ value: "Fine", text: "Fine", tooltip: "Thin strands, delicate, may appear limp or flat." },
	{ value: "Thick", text: "Thick", tooltip: "Full, voluminous hair with more strands." },
	{ value: "Coarse", text: "Coarse", tooltip: "Rough, wiry strands, often more resistant to styling." },
	{ value: "Curly/Wavy Mixed", text: "Curly/Wavy Mixed", tooltip: "A hybrid texture with both loose curls and waves." }
];

// Skin Tones
const skinTones = [
  { cluster: "cluster1", values: [
    { value: "fair", weight: 15, text: "Fair" },
    { value: "ivory", weight: 25, text: "Ivory" },
    { value: "olive", weight: 5, text: "Olive" },
    { value: "almond", weight: 5, text: "Almond" }
  ]},
  { cluster: "cluster2", values: [
    { value: "olive", weight: 30, text: "Olive" },
    { value: "caramel", weight: 25, text: "Caramel" },
    { value: "toffee", weight: 20, text: "Toffee" },
    { value: "chestnut", weight: 10, text: "Chestnut" },
    { value: "almond", weight: 10, text: "Almond" }
  ]},
  { cluster: "cluster3", values: [
    { value: "mocha", weight: 40, text: "Mocha" },
    { value: "ebony", weight: 35, text: "Ebony" },
    { value: "chestnut", weight: 20, text: "Chestnut" },
    { value: "cocoa", weight: 5, text: "Cocoa" }
  ]},
  { cluster: "cluster4", values: [
    { value: "caramel", weight: 30, text: "Caramel" },
    { value: "toffee", weight: 20, text: "Toffee" },
    { value: "mocha", weight: 25, text: "Mocha" },
    { value: "chestnut", weight: 10, text: "Chestnut" },
    { value: "cocoa", weight: 10, text: "Cocoa" }
  ]},
  { cluster: "cluster5", values: [
    { value: "ivory", weight: 80, text: "Ivory" },
    { value: "fair", weight: 20, text: "Fair" }
  ]},
  { cluster: "cluster6", values: [
    { value: "mocha", weight: 35, text: "Mocha" },
    { value: "ebony", weight: 50, text: "Ebony" },
    { value: "cocoa", weight: 15, text: "Cocoa" }
  ]}
];

// Skin Tone Tooltips
const skinToneTooltips = [
  { value: "fair", text: "fair", tooltip: "Very pale skin tone, often with a cool or pink undertone." },
  { value: "ivory", text: "ivory", tooltip: "Pale skin with a neutral or warm undertone, slightly warmer than fair." },
  { value: "olive", text: "olive", tooltip: "Medium-light skin tone with a green or yellow undertone." },
  { value: "caramel", text: "caramel", tooltip: "Medium tan skin with warm golden or reddish undertones." },
  { value: "toffee", text: "toffee", tooltip: "Rich medium-brown color with reddish or golden undertones." },
  { value: "mocha", text: "mocha", tooltip: "Deep brown with warm undertones, often seen in African and South Asian populations." },
  { value: "ebony", text: "ebony", tooltip: "Very dark brown or black skin, often with a cool undertone." },
  { value: "chestnut", text: "chestnut", tooltip: "Deep brown skin with reddish undertones." },
  { value: "cocoa", text: "cocoa", tooltip: "Dark brown skin with reddish or yellow undertones." },
  { value: "almond", text: "almond", tooltip: "Light brown skin with golden or neutral undertones." }
];

// Face Shapes with commonality for each cluster
const faceShapes = [
  { cluster: "cluster1", values: [
    { value: "oval", weight: 35, text: "Oval" },
    { value: "round", weight: 30, text: "Round" },
    { value: "square", weight: 20, text: "Square" },
    { value: "heart", weight: 10, text: "Heart" },
    { value: "rectangle", weight: 5, text: "Rectangle" }
  ]},
  { cluster: "cluster2", values: [
    { value: "oval", weight: 30, text: "Oval" },
    { value: "square", weight: 25, text: "Square" },
    { value: "round", weight: 20, text: "Round" },
    { value: "heart", weight: 15, text: "Heart" },
    { value: "rectangle", weight: 10, text: "Rectangle" }
  ]},
  { cluster: "cluster3", values: [
    { value: "square", weight: 40, text: "Square" },
    { value: "round", weight: 30, text: "Round" },
    { value: "oval", weight: 20, text: "Oval" },
    { value: "heart", weight: 5, text: "Heart" },
    { value: "rectangle", weight: 5, text: "Rectangle" }
  ]},
  { cluster: "cluster4", values: [
    { value: "round", weight: 35, text: "Round" },
    { value: "oval", weight: 30, text: "Oval" },
    { value: "square", weight: 20, text: "Square" },
    { value: "heart", weight: 10, text: "Heart" },
    { value: "rectangle", weight: 5, text: "Rectangle" }
  ]},
  { cluster: "cluster5", values: [
    { value: "oval", weight: 50, text: "Oval" },
    { value: "round", weight: 25, text: "Round" },
    { value: "square", weight: 15, text: "Square" },
    { value: "heart", weight: 5, text: "Heart" },
    { value: "rectangle", weight: 5, text: "Rectangle" }
  ]},
  { cluster: "cluster6", values: [
    { value: "oval", weight: 40, text: "Oval" },
    { value: "square", weight: 25, text: "Square" },
    { value: "round", weight: 20, text: "Round" },
    { value: "rectangle", weight: 10, text: "Rectangle" },
    { value: "heart", weight: 5, text: "Heart" }
  ]}
];

// Face Shapes
const faceShapesTooltip = [
  { value: "round", text: "round", tooltip: "Full cheeks and soft, curved jawline, giving the face a circular appearance." },
  { value: "oval", text: "oval", tooltip: "Longer than wide, with balanced proportions and gently rounded edges." },
  { value: "square", text: "square", tooltip: "Strong, angular jawline with a broad forehead and defined cheekbones." },
  { value: "heart", text: "heart", tooltip: "Wide forehead and high cheekbones tapering down to a pointed chin." },
  { value: "diamond", text: "diamond", tooltip: "Narrow forehead and jaw with prominent, wide cheekbones." },
  { value: "rectangle", text: "rectangle", tooltip: "Long face with a straight jawline and almost equal width and length." },
  { value: "triangle", text: "triangle", tooltip: "Narrow forehead with a wide jawline, creating a V-shaped appearance." }
];

// Cheekbone Traits with percentage distribution for each cluster
const cheekbones = [
  { cluster: "cluster1", values: [
    { value: "height", distribution: { "high": 50, "moderate": 35, "low": 15 } },
    { value: "definition", distribution: { "defined": 60, "moderately defined": 30, "slightly defined": 10 } },
    { value: "width", distribution: { "wide": 45, "medium": 40, "narrow": 15 } },
    { value: "contour", distribution: { "strong": 50, "defined": 30, "soft": 20 } },
    { value: "fullness", distribution: { "full": 25, "moderate": 50, "slightly full": 25 } }
  ]},
  { cluster: "cluster2", values: [
    { value: "height", distribution: { "high": 40, "moderate": 45, "low": 15 } },
    { value: "definition", distribution: { "defined": 45, "moderately defined": 40, "slightly defined": 15 } },
    { value: "width", distribution: { "wide": 35, "medium": 50, "narrow": 15 } },
    { value: "contour", distribution: { "strong": 40, "defined": 40, "soft": 20 } },
    { value: "fullness", distribution: { "full": 30, "moderate": 50, "slightly full": 20 } }
  ]},
  { cluster: "cluster3", values: [
    { value: "height", distribution: { "high": 25, "moderate": 50, "low": 25 } },
    { value: "definition", distribution: { "defined": 20, "moderately defined": 45, "slightly defined": 35 } },
    { value: "width", distribution: { "wide": 20, "medium": 40, "narrow": 40 } },
    { value: "contour", distribution: { "strong": 20, "defined": 40, "soft": 40 } },
    { value: "fullness", distribution: { "full": 50, "moderate": 40, "slightly full": 10 } }
  ]},
  { cluster: "cluster4", values: [
    { value: "height", distribution: { "high": 30, "moderate": 60, "low": 10 } },
    { value: "definition", distribution: { "defined": 35, "moderately defined": 50, "slightly defined": 15 } },
    { value: "width", distribution: { "wide": 50, "medium": 40, "narrow": 10 } },
    { value: "contour", distribution: { "strong": 40, "defined": 40, "soft": 20 } },
    { value: "fullness", distribution: { "full": 25, "moderate": 50, "slightly full": 25 } }
  ]},
  { cluster: "cluster5", values: [
    { value: "height", distribution: { "high": 60, "moderate": 35, "low": 5 } },
    { value: "definition", distribution: { "defined": 70, "moderately defined": 20, "slightly defined": 10 } },
    { value: "width", distribution: { "wide": 20, "medium": 50, "narrow": 30 } },
    { value: "contour", distribution: { "strong": 65, "defined": 25, "soft": 10 } },
    { value: "fullness", distribution: { "full": 15, "moderate": 65, "slightly full": 20 } }
  ]},
  { cluster: "cluster6", values: [
    { value: "height", distribution: { "high": 50, "moderate": 45, "low": 5 } },
    { value: "definition", distribution: { "defined": 55, "moderately defined": 35, "slightly defined": 10 } },
    { value: "width", distribution: { "wide": 45, "medium": 40, "narrow": 15 } },
    { value: "contour", distribution: { "strong": 50, "defined": 35, "soft": 15 } },
    { value: "fullness", distribution: { "full": 25, "moderate": 50, "slightly full": 25 } }
  ]}
];

// Tooltips for cheekbone traits
const cheekboneTooltips = {
  height: [
    { value: "high", text: "high", tooltip: "Cheekbones are positioned higher on the face, often giving a more sculpted look." },
    { value: "moderate", text: "moderate", tooltip: "Cheekbones are positioned moderately on the face, giving a balanced appearance." },
    { value: "low", text: "low", tooltip: "Cheekbones are lower on the face, giving a softer or rounder look." }
  ],
  definition: [
    { value: "defined", text: "defined", tooltip: "Cheekbones have strong, prominent edges, creating a sharp look." },
    { value: "moderately defined", text: "moderately defined", tooltip: "Cheekbones are noticeable but not sharply prominent." },
    { value: "slightly defined", text: "slightly defined", tooltip: "Cheekbones are subtle, with less distinct definition." }
  ],
  width: [
    { value: "wide", text: "wide", tooltip: "Cheekbones are positioned far apart, giving a broader face shape." },
    { value: "medium", text: "medium", tooltip: "Cheekbones are moderately spaced apart, creating a balanced look." },
    { value: "narrow", text: "narrow", tooltip: "Cheekbones are positioned close together, giving a more angular or delicate appearance." }
  ],
  contour: [
    { value: "strong", text: "strong", tooltip: "The contour of the cheekbones is well-defined, adding structure to the face." },
    { value: "soft", text: "soft", tooltip: "The contour is gentle, giving a smooth and soft appearance." },
    { value: "defined", text: "defined", tooltip: "Cheekbones have a visible contour, creating shape without being overly sharp." }
  ],
  fullness: [
    { value: "full", text: "full", tooltip: "The cheekbones have a pronounced fullness, adding to the roundness or volume of the face." },
    { value: "moderate", text: "moderate", tooltip: "Cheekbones have a moderate amount of fullness, not too round but still visible." },
    { value: "slightly full", text: "slightly full", tooltip: "Cheekbones have a subtle fullness, creating a more refined appearance." }
  ]
};


// Eye Traits with percentage distribution for each cluster
const eyes = [
  { cluster: "cluster1", values: [
    { value: "shape", distribution: { "almond": 60, "round": 20, "upturned": 15, "downturned": 5 } },
    { value: "tilt/slant", distribution: { "slightly upturned": 40, "neutral": 50, "slightly downturned": 10 } },
    { value: "depth", distribution: { "deep-set": 30, "moderate": 50, "shallow": 20 } },
    { value: "spacing", distribution: { "wide-set": 35, "medium-set": 50, "close-set": 15 } }
  ]},
  { cluster: "cluster2", values: [
    { value: "shape", distribution: { "almond": 50, "round": 25, "upturned": 20, "downturned": 5 } },
    { value: "tilt/slant", distribution: { "slightly upturned": 50, "neutral": 40, "slightly downturned": 10 } },
    { value: "depth", distribution: { "deep-set": 40, "moderate": 45, "shallow": 15 } },
    { value: "spacing", distribution: { "wide-set": 30, "medium-set": 55, "close-set": 15 } }
  ]},
  { cluster: "cluster3", values: [
    { value: "shape", distribution: { "almond": 30, "round": 40, "upturned": 25, "downturned": 5 } },
    { value: "tilt/slant", distribution: { "slightly upturned": 45, "neutral": 45, "slightly downturned": 10 } },
    { value: "depth", distribution: { "deep-set": 20, "moderate": 60, "shallow": 20 } },
    { value: "spacing", distribution: { "wide-set": 25, "medium-set": 60, "close-set": 15 } }
  ]},
  { cluster: "cluster4", values: [
    { value: "shape", distribution: { "almond": 55, "round": 30, "upturned": 10, "downturned": 5 } },
    { value: "tilt/slant", distribution: { "slightly upturned": 60, "neutral": 30, "slightly downturned": 10 } },
    { value: "depth", distribution: { "deep-set": 35, "moderate": 55, "shallow": 10 } },
    { value: "spacing", distribution: { "wide-set": 40, "medium-set": 50, "close-set": 10 } }
  ]},
  { cluster: "cluster5", values: [
    { value: "shape", distribution: { "almond": 70, "round": 15, "upturned": 10, "downturned": 5 } },
    { value: "tilt/slant", distribution: { "slightly upturned": 50, "neutral": 40, "slightly downturned": 10 } },
    { value: "depth", distribution: { "deep-set": 45, "moderate": 45, "shallow": 10 } },
    { value: "spacing", distribution: { "wide-set": 30, "medium-set": 55, "close-set": 15 } }
  ]},
  { cluster: "cluster6", values: [
    { value: "shape", distribution: { "almond": 60, "round": 25, "upturned": 10, "downturned": 5 } },
    { value: "tilt/slant", distribution: { "slightly upturned": 50, "neutral": 40, "slightly downturned": 10 } },
    { value: "depth", distribution: { "deep-set": 30, "moderate": 50, "shallow": 20 } },
    { value: "spacing", distribution: { "wide-set": 35, "medium-set": 50, "close-set": 15 } }
  ]}
];

// Eye Shape Tooltips
const eyeShapeTooltips = [
  { value: "almond", text: "almond", tooltip: "Eyes that resemble the shape of an almond, with slightly pointed outer corners and a wider center. This shape is often associated with elegance and is seen in various ethnicities." },
  { value: "round", text: "round", tooltip: "Circular-shaped eyes, commonly giving a youthful and open look. This shape is usually more prominent and gives a sense of innocence or curiosity." },
  { value: "upturned", text: "upturned", tooltip: "Eyes that have an upward angle at the outer corners. This shape often provides a cat-like or lifted appearance, frequently associated with a more playful or dramatic look." },
  { value: "downturned", text: "downturned", tooltip: "Eyes that tilt downward at the outer corners. This can create a more melancholy or somber appearance, and is sometimes associated with a more tired or sad expression." }
];

// Eye Tilt/Slant Tooltips
const eyeTiltSlantTooltips = [
  { value: "slightly upturned", text: "slightly upturned", tooltip: "A small upward tilt at the outer corners, which can lend a youthful and lively appearance to the face, often giving the eyes a more flirtatious or bright look." },
  { value: "neutral", text: "neutral", tooltip: "Eyes that have no noticeable tilt, meaning they are more horizontally aligned. This is the most common eye shape and appears natural or neutral." },
  { value: "slightly downturned", text: "slightly downturned", tooltip: "A subtle downward tilt at the outer corners of the eyes. This often imparts a more serious or melancholic expression." }
];

// Eye Depth Tooltips
const eyeDepthTooltips = [
  { value: "deep-set", text: "deep-set", tooltip: "Eyes that are positioned deeper in the eye socket, creating a shadowed effect around the eyes. This depth can give the eyes a more mysterious or intense look." },
  { value: "moderate", text: "moderate", tooltip: "Eyes that are set at a balanced depth. This is the most common depth, offering a harmonious appearance where the eyes are neither too recessed nor protruding." },
  { value: "shallow", text: "shallow", tooltip: "Eyes that are set closer to the surface of the face, creating a more open or wide-eyed look. This can often give a youthful, alert, or surprised expression." }
];

// Eye Spacing Tooltips
const eyeSpacingTooltips = [
  { value: "wide-set", text: "wide-set", tooltip: "Eyes that are farther apart than usual, giving the face an open and relaxed appearance. This spacing is often associated with a sense of calmness or serenity." },
  { value: "medium-set", text: "medium-set", tooltip: "Eyes that are placed at a typical or average distance from one another. This is the most common eye spacing and tends to give a balanced, neutral expression." },
  { value: "close-set", text: "close-set", tooltip: "Eyes that are positioned closer together than average, which can create a more intense or focused appearance. This trait is often seen in individuals with a more striking or dramatic look." }
];


// Eyebrow Shape
const eyebrowShape = [
  {
    cluster: "cluster1",
    values: [
      { value: "arched", weight: 20, text: "Arched" },
      { value: "straight", weight: 50, text: "Straight" },
      { value: "curved", weight: 15, text: "Curved" },
      { value: "flat", weight: 15, text: "Flat" }
    ]
  },
  {
    cluster: "cluster2",
    values: [
      { value: "arched", weight: 25, text: "Arched" },
      { value: "straight", weight: 55, text: "Straight" },
      { value: "curved", weight: 10, text: "Curved" },
      { value: "flat", weight: 10, text: "Flat" }
    ]
  },
  {
    cluster: "cluster3",
    values: [
      { value: "arched", weight: 15, text: "Arched" },
      { value: "straight", weight: 60, text: "Straight" },
      { value: "curved", weight: 10, text: "Curved" },
      { value: "flat", weight: 15, text: "Flat" }
    ]
  },
  {
    cluster: "cluster4",
    values: [
      { value: "arched", weight: 20, text: "Arched" },
      { value: "straight", weight: 50, text: "Straight" },
      { value: "curved", weight: 15, text: "Curved" },
      { value: "flat", weight: 15, text: "Flat" }
    ]
  },
  {
    cluster: "cluster5",
    values: [
      { value: "arched", weight: 10, text: "Arched" },
      { value: "straight", weight: 60, text: "Straight" },
      { value: "curved", weight: 20, text: "Curved" },
      { value: "flat", weight: 10, text: "Flat" }
    ]
  },
  {
    cluster: "cluster6",
    values: [
      { value: "arched", weight: 10, text: "Arched" },
      { value: "straight", weight: 60, text: "Straight" },
      { value: "curved", weight: 20, text: "Curved" },
      { value: "flat", weight: 10, text: "Flat" }
    ]
  }
];

// Eyebrow Thickness
const eyebrowThickness = [
  {
    cluster: "cluster1",
    values: [
      { value: "thin", weight: 10, text: "Thin" },
      { value: "medium", weight: 70, text: "Medium" },
      { value: "thick", weight: 20, text: "Thick" }
    ]
  },
  {
    cluster: "cluster2",
    values: [
      { value: "thin", weight: 5, text: "Thin" },
      { value: "medium", weight: 65, text: "Medium" },
      { value: "thick", weight: 30, text: "Thick" }
    ]
  },
  {
    cluster: "cluster3",
    values: [
      { value: "thin", weight: 5, text: "Thin" },
      { value: "medium", weight: 60, text: "Medium" },
      { value: "thick", weight: 35, text: "Thick" }
    ]
  },
  {
    cluster: "cluster4",
    values: [
      { value: "thin", weight: 10, text: "Thin" },
      { value: "medium", weight: 70, text: "Medium" },
      { value: "thick", weight: 20, text: "Thick" }
    ]
  },
  {
    cluster: "cluster5",
    values: [
      { value: "thin", weight: 5, text: "Thin" },
      { value: "medium", weight: 55, text: "Medium" },
      { value: "thick", weight: 40, text: "Thick" }
    ]
  },
  {
    cluster: "cluster6",
    values: [
      { value: "thin", weight: 5, text: "Thin" },
      { value: "medium", weight: 60, text: "Medium" },
      { value: "thick", weight: 35, text: "Thick" }
    ]
  }
];

// Eyebrow Length
const eyebrowLength = [
  {
    cluster: "cluster1",
    values: [
      { value: "short", weight: 15, text: "Short" },
      { value: "medium", weight: 70, text: "Medium" },
      { value: "long", weight: 15, text: "Long" }
    ]
  },
  {
    cluster: "cluster2",
    values: [
      { value: "short", weight: 20, text: "Short" },
      { value: "medium", weight: 65, text: "Medium" },
      { value: "long", weight: 15, text: "Long" }
    ]
  },
  {
    cluster: "cluster3",
    values: [
      { value: "short", weight: 10, text: "Short" },
      { value: "medium", weight: 65, text: "Medium" },
      { value: "long", weight: 25, text: "Long" }
    ]
  },
  {
    cluster: "cluster4",
    values: [
      { value: "short", weight: 15, text: "Short" },
      { value: "medium", weight: 70, text: "Medium" },
      { value: "long", weight: 15, text: "Long" }
    ]
  },
  {
    cluster: "cluster5",
    values: [
      { value: "short", weight: 25, text: "Short" },
      { value: "medium", weight: 55, text: "Medium" },
      { value: "long", weight: 20, text: "Long" }
    ]
  },
  {
    cluster: "cluster6",
    values: [
      { value: "short", weight: 20, text: "Short" },
      { value: "medium", weight: 55, text: "Medium" },
      { value: "long", weight: 25, text: "Long" }
    ]
  }
];

// Eyebrow Definition
const eyebrowDefinition = [
  {
    cluster: "cluster1",
    values: [
      { value: "well-defined", weight: 40, text: "Well-Defined" },
      { value: "moderate", weight: 50, text: "Moderate" },
      { value: "soft", weight: 10, text: "Soft" }
    ]
  },
  {
    cluster: "cluster2",
    values: [
      { value: "well-defined", weight: 45, text: "Well-Defined" },
      { value: "moderate", weight: 50, text: "Moderate" },
      { value: "soft", weight: 5, text: "Soft" }
    ]
  },
  {
    cluster: "cluster3",
    values: [
      { value: "well-defined", weight: 50, text: "Well-Defined" },
      { value: "moderate", weight: 45, text: "Moderate" },
      { value: "soft", weight: 5, text: "Soft" }
    ]
  },
  {
    cluster: "cluster4",
    values: [
      { value: "well-defined", weight: 40, text: "Well-Defined" },
      { value: "moderate", weight: 50, text: "Moderate" },
      { value: "soft", weight: 10, text: "Soft" }
    ]
  },
  {
    cluster: "cluster5",
    values: [
      { value: "well-defined", weight: 35, text: "Well-Defined" },
      { value: "moderate", weight: 60, text: "Moderate" },
      { value: "soft", weight: 5, text: "Soft" }
    ]
  },
  {
    cluster: "cluster6",
    values: [
      { value: "well-defined", weight: 30, text: "Well-Defined" },
      { value: "moderate", weight: 65, text: "Moderate" },
      { value: "soft", weight: 5, text: "Soft" }
    ]
  }
];

// Eyebrow Shapes with Tooltips
const eyebrowShapeTooltip = [
  { value: "arched", text: "arched", tooltip: "Eyebrows with a distinct curve, often giving the face an expressive and dramatic look. Arched eyebrows can enhance the natural angles of the face." },
  { value: "straight", text: "straight", tooltip: "Eyebrows that follow a more horizontal line, providing a neutral and calm appearance. This shape is often associated with a balanced or harmonious look." },
  { value: "curved", text: "curved", tooltip: "Eyebrows that have a smooth, rounded curve, often giving a softer and more youthful look. Curved eyebrows create a friendly or approachable impression." },
  { value: "flat", text: "flat", tooltip: "Eyebrows with a minimal arch, generally horizontal with slight curves at the ends. This shape can give the face a calm or serious expression." }
];

// Eyebrow Thickness with Tooltips
const eyebrowThicknessTooltip = [
  { value: "thin", text: "thin", tooltip: "Narrow eyebrows with sparse hair, often associated with a delicate or more refined appearance. Thin eyebrows can also give a more youthful look." },
  { value: "medium", text: "medium", tooltip: "Eyebrows with a moderate amount of hair, providing a natural and balanced appearance. This is the most common eyebrow thickness." },
  { value: "thick", text: "thick", tooltip: "Full, dense eyebrows that provide a bold and defined look. Thick eyebrows are often associated with a strong or dramatic expression." }
];

// Eyebrow Length with Tooltips
const eyebrowLengthTooltip = [
  { value: "short", text: "short", tooltip: "Eyebrows that are shorter than average, often leading to a more compact or delicate look. Short eyebrows can give a more youthful appearance." },
  { value: "medium", text: "medium", tooltip: "Eyebrows with a balanced length that typically align with the natural bone structure. Medium length brows are common and provide a harmonious appearance." },
  { value: "long", text: "long", tooltip: "Eyebrows that extend past the natural brow bone, which can create a striking, bold look. Long eyebrows can be dramatic and give the face a more intense expression." }
];

// Eyebrow Definition with Tooltips
const eyebrowDefinitionTooltip = [
  { value: "well-defined", text: "well-defined", tooltip: "Eyebrows with clear, crisp lines that stand out. Well-defined eyebrows create a strong, polished appearance and are often seen in more dramatic or refined looks." },
  { value: "moderate", text: "moderate", tooltip: "Eyebrows with moderate definition, where the natural shape is visible but not overly emphasized. This gives a more natural and soft appearance." },
  { value: "soft", text: "soft", tooltip: "Eyebrows with a more subtle or blurred shape, often giving a gentler, more approachable expression. Soft eyebrows create a calm, understated look." }
];

const noseGeneralShape = [
  { cluster: "Cluster 1", values: [
    { value: "straight", weight: 50, text: "Straight" },
    { value: "convex", weight: 20, text: "Convex" },
    { value: "concave", weight: 15, text: "Concave" },
    { value: "button", weight: 15, text: "Button" },
  ]},
  { cluster: "Cluster 2", values: [
    { value: "straight", weight: 40, text: "Straight" },
    { value: "nubian", weight: 30, text: "Nubian" },
    { value: "flat", weight: 20, text: "Flat" },
    { value: "concave", weight: 10, text: "Concave" },
  ]},
  { cluster: "Cluster 3", values: [
    { value: "flat", weight: 50, text: "Flat" },
    { value: "nubian", weight: 25, text: "Nubian" },
    { value: "straight", weight: 20, text: "Straight" },
    { value: "button", weight: 5, text: "Button" },
  ]},
  { cluster: "Cluster 4", values: [
    { value: "button", weight: 40, text: "Button" },
    { value: "concave", weight: 30, text: "Concave" },
    { value: "straight", weight: 20, text: "Straight" },
    { value: "convex", weight: 10, text: "Convex" },
  ]},
  { cluster: "Cluster 5", values: [
    { value: "nubian", weight: 45, text: "Nubian" },
    { value: "flat", weight: 30, text: "Flat" },
    { value: "convex", weight: 15, text: "Convex" },
    { value: "straight", weight: 10, text: "Straight" },
  ]},
  { cluster: "Cluster 6", values: [
    { value: "button", weight: 50, text: "Button" },
    { value: "concave", weight: 25, text: "Concave" },
    { value: "straight", weight: 20, text: "Straight" },
    { value: "flat", weight: 5, text: "Flat" },
  ]},
];

const noseWidth = [
  { cluster: "Cluster 1", values: [
    { value: "narrow", weight: 60, text: "Narrow" },
    { value: "medium", weight: 30, text: "Medium" },
    { value: "wide", weight: 10, text: "Wide" },
  ]},
  { cluster: "Cluster 2", values: [
    { value: "medium", weight: 50, text: "Medium" },
    { value: "narrow", weight: 30, text: "Narrow" },
    { value: "wide", weight: 20, text: "Wide" },
  ]},
  { cluster: "Cluster 3", values: [
    { value: "wide", weight: 55, text: "Wide" },
    { value: "medium", weight: 30, text: "Medium" },
    { value: "narrow", weight: 15, text: "Narrow" },
  ]},
  { cluster: "Cluster 4", values: [
    { value: "narrow", weight: 50, text: "Narrow" },
    { value: "medium", weight: 40, text: "Medium" },
    { value: "wide", weight: 10, text: "Wide" },
  ]},
  { cluster: "Cluster 5", values: [
    { value: "wide", weight: 60, text: "Wide" },
    { value: "medium", weight: 30, text: "Medium" },
    { value: "narrow", weight: 10, text: "Narrow" },
  ]},
  { cluster: "Cluster 6", values: [
    { value: "medium", weight: 45, text: "Medium" },
    { value: "narrow", weight: 35, text: "Narrow" },
    { value: "wide", weight: 20, text: "Wide" },
  ]},
];

const noseTipShape = [
  { cluster: "Cluster 1", values: [
    { value: "pointed", weight: 50, text: "Pointed" },
    { value: "rounded", weight: 30, text: "Rounded" },
    { value: "upturned", weight: 15, text: "Upturned" },
    { value: "broad", weight: 5, text: "Broad" },
  ]},
  { cluster: "Cluster 2", values: [
    { value: "rounded", weight: 45, text: "Rounded" },
    { value: "broad", weight: 30, text: "Broad" },
    { value: "upturned", weight: 15, text: "Upturned" },
    { value: "pointed", weight: 10, text: "Pointed" },
  ]},
  { cluster: "Cluster 3", values: [
    { value: "broad", weight: 50, text: "Broad" },
    { value: "rounded", weight: 30, text: "Rounded" },
    { value: "drooping", weight: 15, text: "Drooping" },
    { value: "upturned", weight: 5, text: "Upturned" },
  ]},
  { cluster: "Cluster 4", values: [
    { value: "upturned", weight: 40, text: "Upturned" },
    { value: "pointed", weight: 30, text: "Pointed" },
    { value: "rounded", weight: 20, text: "Rounded" },
    { value: "drooping", weight: 10, text: "Drooping" },
  ]},
  { cluster: "Cluster 5", values: [
    { value: "broad", weight: 60, text: "Broad" },
    { value: "rounded", weight: 25, text: "Rounded" },
    { value: "drooping", weight: 10, text: "Drooping" },
    { value: "upturned", weight: 5, text: "Upturned" },
  ]},
  { cluster: "Cluster 6", values: [
    { value: "rounded", weight: 50, text: "Rounded" },
    { value: "upturned", weight: 30, text: "Upturned" },
    { value: "pointed", weight: 15, text: "Pointed" },
    { value: "broad", weight: 5, text: "Broad" },
  ]},
];

const noseGeneralShapeTooltip = [
	{ value: "straight", text: "straight", tooltip: "Nose bridge and tip form a straight line." },
	{ value: "convex", text: "convex", tooltip: "Bridge curves outward slightly (Roman nose)." },
	{ value: "concave", text: "concave", tooltip: "Bridge curves inward or is slightly scooped." },
	{ value: "nubian", text: "nubian", tooltip: "Longer nose with a wider base, often with downward tip." },
	{ value: "flat", text: "flat", tooltip: "Bridge is low and flatter, giving a broader look." },
	{ value: "button", text: "button", tooltip: "Small, rounded nose with a short bridge." }
];

const noseWidthTooltip = [
	{ value: "narrow", text: "narrow", tooltip: "Nose appears slim and narrow from bridge to nostrils." },
	{ value: "medium", text: "medium", tooltip: "Balanced nose width, neither too wide nor too narrow." },
	{ value: "wide", text: "wide", tooltip: "Broader nose across bridge and nostrils." }
];

const noseTipShapeTooltip = [
	{ value: "pointed", text: "pointed", tooltip: "Tip tapers sharply into a fine point." },
	{ value: "rounded", text: "rounded", tooltip: "Tip is softly rounded without sharp angles." },
	{ value: "broad", text: "broad", tooltip: "Tip is wide and spreads out more horizontally." },
	{ value: "drooping", text: "drooping", tooltip: "Tip points downward slightly or noticeably.", },
	{ value: "upturned", text: "upturned", tooltip: "Tip angles slightly upward, revealing nostrils." }
];


const lipShape = [
  {
    cluster: "Cluster 1",
    values: [
      { value: "full", weight: 40, text: "Full" },
      { value: "thin", weight: 30, text: "Thin" },
      { value: "bow", weight: 20, text: "Bow-shaped" },
      { value: "flat", weight: 10, text: "Flat" }
    ],
  },
  {
    cluster: "Cluster 2",
    values: [
      { value: "full", weight: 30, text: "Full" },
      { value: "thin", weight: 40, text: "Thin" },
      { value: "heart", weight: 20, text: "Heart-shaped" },
      { value: "flat", weight: 10, text: "Flat" }
    ],
  },
  {
    cluster: "Cluster 3",
    values: [
      { value: "full", weight: 50, text: "Full" },
      { value: "bow", weight: 30, text: "Bow-shaped" },
      { value: "thin", weight: 10, text: "Thin" },
      { value: "flat", weight: 10, text: "Flat" }
    ],
  },
  {
    cluster: "Cluster 4",
    values: [
      { value: "thin", weight: 45, text: "Thin" },
      { value: "flat", weight: 30, text: "Flat" },
      { value: "full", weight: 15, text: "Full" },
      { value: "heart", weight: 10, text: "Heart-shaped" }
    ],
  },
  {
    cluster: "Cluster 5",
    values: [
      { value: "full", weight: 35, text: "Full" },
      { value: "heart", weight: 30, text: "Heart-shaped" },
      { value: "bow", weight: 25, text: "Bow-shaped" },
      { value: "thin", weight: 10, text: "Thin" }
    ],
  },
  {
    cluster: "Cluster 6",
    values: [
      { value: "flat", weight: 35, text: "Flat" },
      { value: "thin", weight: 30, text: "Thin" },
      { value: "full", weight: 20, text: "Full" },
      { value: "bow", weight: 15, text: "Bow-shaped" }
    ],
  }
];

const lipDefinition = [
  {
    cluster: "Cluster 1",
    values: [
      { value: "wellDefined", weight: 60, text: "Well-defined" },
      { value: "softDefined", weight: 40, text: "Soft-defined" }
    ],
  },
  {
    cluster: "Cluster 2",
    values: [
      { value: "softDefined", weight: 55, text: "Soft-defined" },
      { value: "wellDefined", weight: 45, text: "Well-defined" }
    ],
  },
  {
    cluster: "Cluster 3",
    values: [
      { value: "wellDefined", weight: 70, text: "Well-defined" },
      { value: "softDefined", weight: 30, text: "Soft-defined" }
    ],
  },
  {
    cluster: "Cluster 4",
    values: [
      { value: "softDefined", weight: 65, text: "Soft-defined" },
      { value: "wellDefined", weight: 35, text: "Well-defined" }
    ],
  },
  {
    cluster: "Cluster 5",
    values: [
      { value: "wellDefined", weight: 50, text: "Well-defined" },
      { value: "softDefined", weight: 50, text: "Soft-defined" }
    ],
  },
  {
    cluster: "Cluster 6",
    values: [
      { value: "softDefined", weight: 60, text: "Soft-defined" },
      { value: "wellDefined", weight: 40, text: "Well-defined" }
    ],
  }
];


const lipShapeTooltip = [
	{ value: "full", text: "full", tooltip: "Naturally large and rounded lips with prominent volume." },
	{ value: "thin", text: "thin", tooltip: "Narrow lips with minimal fullness." },
	{ value: "heart", text: "heart", tooltip: "Upper lip has a pronounced peak at the center, forming a heart shape." },
	{ value: "bow", text: "bow", tooltip: "Lips with a clearly defined Cupid’s bow on the upper lip." },
	{ value: "flat", text: "flat", tooltip: "Lips with minimal contour or visible curvature." }
];

const  lipDefinitionTooltip = [
	{ value: "wellDefined", text: "wellDefined", tooltip: "Crisp, sharp lip edges that are clearly outlined." },
	{ value: "softDefined", text: "softDefined", tooltip: "Lip edges that blend softly into the surrounding skin." }
];


const chinShape = [
  {
    cluster: "Cluster 1",
    values: [
      { value: "rounded", weight: 40, text: "Rounded" },
      { value: "pointed", weight: 20, text: "Pointed" },
      { value: "square", weight: 30, text: "Square" },
      { value: "cleft", weight: 10, text: "Cleft" },
    ],
  },
  {
    cluster: "Cluster 2",
    values: [
      { value: "rounded", weight: 25, text: "Rounded" },
      { value: "pointed", weight: 35, text: "Pointed" },
      { value: "square", weight: 30, text: "Square" },
      { value: "cleft", weight: 10, text: "Cleft" },
    ],
  },
  {
    cluster: "Cluster 3",
    values: [
      { value: "rounded", weight: 30, text: "Rounded" },
      { value: "pointed", weight: 15, text: "Pointed" },
      { value: "square", weight: 45, text: "Square" },
      { value: "cleft", weight: 10, text: "Cleft" },
    ],
  },
  {
    cluster: "Cluster 4",
    values: [
      { value: "rounded", weight: 50, text: "Rounded" },
      { value: "pointed", weight: 20, text: "Pointed" },
      { value: "square", weight: 20, text: "Square" },
      { value: "cleft", weight: 10, text: "Cleft" },
    ],
  },
  {
    cluster: "Cluster 5",
    values: [
      { value: "rounded", weight: 30, text: "Rounded" },
      { value: "pointed", weight: 20, text: "Pointed" },
      { value: "square", weight: 40, text: "Square" },
      { value: "cleft", weight: 10, text: "Cleft" },
    ],
  },
  {
    cluster: "Cluster 6",
    values: [
      { value: "rounded", weight: 20, text: "Rounded" },
      { value: "pointed", weight: 30, text: "Pointed" },
      { value: "square", weight: 40, text: "Square" },
      { value: "cleft", weight: 10, text: "Cleft" },
    ],
  }
];

const chinSize = [
  {
    cluster: "Cluster 1",
    values: [
      { value: "small", weight: 40, text: "Small" },
      { value: "medium", weight: 45, text: "Medium" },
      { value: "large", weight: 15, text: "Large" },
    ],
  },
  {
    cluster: "Cluster 2",
    values: [
      { value: "small", weight: 30, text: "Small" },
      { value: "medium", weight: 50, text: "Medium" },
      { value: "large", weight: 20, text: "Large" },
    ],
  },
  {
    cluster: "Cluster 3",
    values: [
      { value: "small", weight: 20, text: "Small" },
      { value: "medium", weight: 40, text: "Medium" },
      { value: "large", weight: 40, text: "Large" },
    ],
  },
  {
    cluster: "Cluster 4",
    values: [
      { value: "small", weight: 45, text: "Small" },
      { value: "medium", weight: 45, text: "Medium" },
      { value: "large", weight: 10, text: "Large" },
    ],
  },
  {
    cluster: "Cluster 5",
    values: [
      { value: "small", weight: 25, text: "Small" },
      { value: "medium", weight: 50, text: "Medium" },
      { value: "large", weight: 25, text: "Large" },
    ],
  },
  {
    cluster: "Cluster 6",
    values: [
      { value: "small", weight: 20, text: "Small" },
      { value: "medium", weight: 40, text: "Medium" },
      { value: "large", weight: 40, text: "Large" },
    ],
  }
];

const chinProminence = [
  {
    cluster: "Cluster 1",
    values: [
      { value: "subtle", weight: 50, text: "Subtle" },
      { value: "moderate", weight: 40, text: "Moderate" },
      { value: "strong", weight: 10, text: "Strong" },
    ],
  },
  {
    cluster: "Cluster 2",
    values: [
      { value: "subtle", weight: 40, text: "Subtle" },
      { value: "moderate", weight: 45, text: "Moderate" },
      { value: "strong", weight: 15, text: "Strong" },
    ],
  },
  {
    cluster: "Cluster 3",
    values: [
      { value: "subtle", weight: 30, text: "Subtle" },
      { value: "moderate", weight: 50, text: "Moderate" },
      { value: "strong", weight: 20, text: "Strong" },
    ],
  },
  {
    cluster: "Cluster 4",
    values: [
      { value: "subtle", weight: 55, text: "Subtle" },
      { value: "moderate", weight: 35, text: "Moderate" },
      { value: "strong", weight: 10, text: "Strong" },
    ],
  },
  {
    cluster: "Cluster 5",
    values: [
      { value: "subtle", weight: 35, text: "Subtle" },
      { value: "moderate", weight: 50, text: "Moderate" },
      { value: "strong", weight: 15, text: "Strong" },
    ],
  },
  {
    cluster: "Cluster 6",
    values: [
      { value: "subtle", weight: 25, text: "Subtle" },
      { value: "moderate", weight: 50, text: "Moderate" },
      { value: "strong", weight: 25, text: "Strong" },
    ],
  }
];

const chinTooltips = {
  shape: {
    rounded: "A soft, curved chin with no sharp angles.",
    pointed: "A narrow, angular chin that tapers to a point.",
    square: "A broad, flat chin with a strong jawline.",
    cleft: "A chin with a visible dimple or indentation."
  },
  size: {
    small: "A petite and shorter chin.",
    medium: "A balanced chin size, fitting proportionally to the face.",
    large: "A more prominent, elongated, or wider chin."
  },
  prominence: {
    subtle: "Chin sits back slightly and does not project strongly.",
    moderate: "Chin projects moderately from the face.",
    strong: "Chin projects prominently and is highly noticeable."
  }
};

const jawlineShape = [
  {
    cluster: "Cluster 1",
    values: [
      { value: "angular", text: "angular", weight: 40, text: "Angular" },
      { value: "soft", text: "soft", weight: 30, text: "Soft" },
      { value: "square", text: "square", weight: 20, text: "Square" },
      { value: "tapered", text: "tapered", weight: 10, text: "Tapered" }
    ],
  },
  {
    cluster: "Cluster 2",
    values: [
      { value: "soft", text: "soft", weight: 40, text: "Soft" },
      { value: "tapered", text: "tapered", weight: 30, text: "Tapered" },
      { value: "angular", text: "angular", weight: 20, text: "Angular" },
      { value: "square", text: "square", weight: 10, text: "Square" }
    ],
  },
  {
    cluster: "Cluster 3",
    values: [
      { value: "square", text: "square", weight: 40, text: "Square" },
      { value: "angular", text: "angular", weight: 30, text: "Angular" },
      { value: "soft", text: "soft", weight: 20, text: "Soft" },
      { value: "tapered", text: "tapered", weight: 10, text: "Tapered" }
    ],
  },
  {
    cluster: "Cluster 4",
    values: [
      { value: "tapered", weight: 50, text: "Tapered" },
      { value: "soft", weight: 30, text: "Soft" },
      { value: "angular", weight: 15, text: "Angular" },
      { value: "square", weight: 5, text: "Square" }
    ],
  },
  {
    cluster: "Cluster 5",
    values: [
      { value: "soft", weight: 35, text: "Soft" },
      { value: "square", weight: 30, text: "Square" },
      { value: "tapered", weight: 20, text: "Tapered" },
      { value: "angular", weight: 15, text: "Angular" }
    ],
  },
  {
    cluster: "Cluster 6",
    values: [
      { value: "square", weight: 45, text: "Square" },
      { value: "angular", weight: 35, text: "Angular" },
      { value: "soft", weight: 15, text: "Soft" },
      { value: "tapered", weight: 5, text: "Tapered" }
    ],
  }
];

const jawlineDefinition = [
  {
    cluster: "Cluster 1",
    values: [
      { value: "sharp", weight: 70, text: "Sharp" },
      { value: "soft", weight: 30, text: "Soft" }
    ],
  },
  {
    cluster: "Cluster 2",
    values: [
      { value: "soft", weight: 60, text: "Soft" },
      { value: "sharp", weight: 40, text: "Sharp" }
    ],
  },
  {
    cluster: "Cluster 3",
    values: [
      { value: "sharp", weight: 65, text: "Sharp" },
      { value: "soft", weight: 35, text: "Soft" }
    ],
  },
  {
    cluster: "Cluster 4",
    values: [
      { value: "soft", weight: 70, text: "Soft" },
      { value: "sharp", weight: 30, text: "Sharp" }
    ],
  },
  {
    cluster: "Cluster 5",
    values: [
      { value: "soft", weight: 50, text: "Soft" },
      { value: "sharp", weight: 50, text: "Sharp" }
    ],
  },
  {
    cluster: "Cluster 6",
    values: [
      { value: "sharp", weight: 60, text: "Sharp" },
      { value: "soft", weight: 40, text: "Soft" }
    ],
  }
];

const jawlineshapeTooltips = [
	{ value: "angular", text: "angular", tooltip: "Jawline has strong, sharp angles and definition." },
	{ value: "soft", text: "soft", tooltip: "Jawline is rounded with smooth transitions, less angular." },
	{ value: "square", text: "square", tooltip: "Jawline is wide and squared, with less tapering." },
	{ value: "tapered", text: "tapered", tooltip: "Jawline narrows toward the chin, creating a V-shape." }
];

const jawlinedefinitionTooltips = [
	{ value: "sharp", text: "sharp", tooltip: "Jawline edges are clearly defined and prominent." },
	{ value: "soft", text: "soft", tooltip: "Jawline edges are smooth and less distinct." }
];


const maleHeightData = [
  {
    cluster: "Northern/Western European",
    values: [
      { percentile: 5, heightCm: 166 },
      { percentile: 10, heightCm: 168 },
      { percentile: 15, heightCm: 170 },
      { percentile: 25, heightCm: 173 },
      { percentile: 50, heightCm: 177 },
      { percentile: 75, heightCm: 182 },
      { percentile: 85, heightCm: 184 },
      { percentile: 90, heightCm: 186 },
      { percentile: 95, heightCm: 188 }
    ]
  },
  {
    cluster: "East Asian",
    values: [
      { percentile: 5, heightCm: 160 },
      { percentile: 10, heightCm: 162 },
      { percentile: 15, heightCm: 163 },
      { percentile: 25, heightCm: 165 },
      { percentile: 50, heightCm: 168 },
      { percentile: 75, heightCm: 172 },
      { percentile: 85, heightCm: 174 },
      { percentile: 90, heightCm: 175 },
      { percentile: 95, heightCm: 177 }
    ]
  },
  {
    cluster: "Sub-Saharan African",
    values: [
      { percentile: 5, heightCm: 167 },
      { percentile: 10, heightCm: 169 },
      { percentile: 15, heightCm: 170 },
      { percentile: 25, heightCm: 173 },
      { percentile: 50, heightCm: 176 },
      { percentile: 75, heightCm: 181 },
      { percentile: 85, heightCm: 183 },
      { percentile: 90, heightCm: 185 },
      { percentile: 95, heightCm: 187 }
    ]
  },
  {
    cluster: "South Asian",
    values: [
      { percentile: 5, heightCm: 158 },
      { percentile: 10, heightCm: 160 },
      { percentile: 15, heightCm: 161 },
      { percentile: 25, heightCm: 164 },
      { percentile: 50, heightCm: 167 },
      { percentile: 75, heightCm: 171 },
      { percentile: 85, heightCm: 173 },
      { percentile: 90, heightCm: 174 },
      { percentile: 95, heightCm: 176 }
    ]
  },
  {
    cluster: "Southeast Asian / Pacific Islander",
    values: [
      { percentile: 5, heightCm: 159 },
      { percentile: 10, heightCm: 160 },
      { percentile: 15, heightCm: 162 },
      { percentile: 25, heightCm: 164 },
      { percentile: 50, heightCm: 167 },
      { percentile: 75, heightCm: 171 },
      { percentile: 85, heightCm: 173 },
      { percentile: 90, heightCm: 174 },
      { percentile: 95, heightCm: 176 }
    ]
  },
  {
    cluster: "Middle Eastern / North African",
    values: [
      { percentile: 5, heightCm: 165 },
      { percentile: 10, heightCm: 167 },
      { percentile: 15, heightCm: 169 },
      { percentile: 25, heightCm: 171 },
      { percentile: 50, heightCm: 175 },
      { percentile: 75, heightCm: 179 },
      { percentile: 85, heightCm: 181 },
      { percentile: 90, heightCm: 183 },
      { percentile: 95, heightCm: 185 }
    ]
  }
];

const femaleHeightData = [
  {
    cluster: "Northern/Western European",
    values: [
      { percentile: 5, heightCm: 154 },
      { percentile: 10, heightCm: 156 },
      { percentile: 15, heightCm: 157 },
      { percentile: 25, heightCm: 160 },
      { percentile: 50, heightCm: 164 },
      { percentile: 75, heightCm: 168 },
      { percentile: 85, heightCm: 170 },
      { percentile: 90, heightCm: 172 },
      { percentile: 95, heightCm: 174 }
    ]
  },
  {
    cluster: "East Asian",
    values: [
      { percentile: 5, heightCm: 150 },
      { percentile: 10, heightCm: 151 },
      { percentile: 15, heightCm: 152 },
      { percentile: 25, heightCm: 154 },
      { percentile: 50, heightCm: 157 },
      { percentile: 75, heightCm: 160 },
      { percentile: 85, heightCm: 162 },
      { percentile: 90, heightCm: 163 },
      { percentile: 95, heightCm: 165 }
    ]
  },
  {
    cluster: "Sub-Saharan African",
    values: [
      { percentile: 5, heightCm: 155 },
      { percentile: 10, heightCm: 156 },
      { percentile: 15, heightCm: 158 },
      { percentile: 25, heightCm: 160 },
      { percentile: 50, heightCm: 164 },
      { percentile: 75, heightCm: 168 },
      { percentile: 85, heightCm: 170 },
      { percentile: 90, heightCm: 172 },
      { percentile: 95, heightCm: 174 }
    ]
  },
  {
    cluster: "South Asian",
    values: [
      { percentile: 5, heightCm: 148 },
      { percentile: 10, heightCm: 150 },
      { percentile: 15, heightCm: 151 },
      { percentile: 25, heightCm: 153 },
      { percentile: 50, heightCm: 156 },
      { percentile: 75, heightCm: 159 },
      { percentile: 85, heightCm: 160 },
      { percentile: 90, heightCm: 162 },
      { percentile: 95, heightCm: 164 }
    ]
  },
  {
    cluster: "Southeast Asian / Pacific Islander",
    values: [
      { percentile: 5, heightCm: 149 },
      { percentile: 10, heightCm: 150 },
      { percentile: 15, heightCm: 151 },
      { percentile: 25, heightCm: 153 },
      { percentile: 50, heightCm: 156 },
      { percentile: 75, heightCm: 159 },
      { percentile: 85, heightCm: 160 },
      { percentile: 90, heightCm: 162 },
      { percentile: 95, heightCm: 164 }
    ]
  },
  {
    cluster: "Middle Eastern / North African",
    values: [
      { percentile: 5, heightCm: 153 },
      { percentile: 10, heightCm: 154 },
      { percentile: 15, heightCm: 155 },
      { percentile: 25, heightCm: 157 },
      { percentile: 50, heightCm: 161 },
      { percentile: 75, heightCm: 165 },
      { percentile: 85, heightCm: 167 },
      { percentile: 90, heightCm: 168 },
      { percentile: 95, heightCm: 170 }
    ]
  }
];

const bodyTypes = [
  { value: "athletic", text: "athletic", weight: 10, tooltip: "Strong, muscular build with broad shoulders and low body fat" },
  { value: "toned", text: "toned", weight: 10, tooltip: "Fit with visible muscle tone and low body fat" },
  { value: "lean", text: "lean", weight: 12, tooltip: "Slim but with some athleticism and muscle tone" },
  { value: "average", text: "average", weight: 20, tooltip: "Balanced weight and muscle, neither thin nor heavy" },
  { value: "broad", text: "broad", weight: 5, tooltip: "Large frame or wide-set bones, especially in shoulders or chest" },
  { value: "curvy", text: "curvy", weight: 10, tooltip: "Full hips and/or bust, typically with a soft or rounded figure" },
  { value: "stocky", text: "stocky", weight: 8, tooltip: "Shorter, thickset body with sturdy limbs" },
  { value: "soft", text: "soft", weight: 10, tooltip: "Some excess fat and less visible muscle tone" },
  { value: "heavyset", text: "heavyset", weight: 10, tooltip: "Heavier body mass with fat and/or muscle" },
  { value: "slender", text: "slender", weight: 5, tooltip: "Very thin, narrow frame with little visible fat or muscle" }
];

const bodyModifiers = [
  { value: "tall", text: "tall", weight: 10, tooltip: "Above-average height for their gender and age" },
  { value: "lanky", text: "lanky", weight: 7, tooltip: "Tall and thin, with long limbs and little bulk" },
  { value: "willowy", text: "willowy", weight: 5, tooltip: "Tall, slim, and delicate-looking" },
  { value: "muscular", text: "muscular", weight: 8, tooltip: "Notably muscular, often from strength or sport training" },
  { value: "husky", text: "husky", weight: 8, tooltip: "Broad and strong build, often with a soft layer of fat" },
  { value: "petite", text: "petite", weight: 10, tooltip: "Short and slender, with a delicate frame" },
  { value: "voluptuous", text: "voluptuous", weight: 7, tooltip: "Full-figured with pronounced curves" }
];

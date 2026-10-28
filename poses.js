(()=>{
const originalLabels=[...document.querySelectorAll('input[name=pose]')].map(input=>input.closest('label').textContent.trim());
// Poses specify the body and gesture; camera controls own the viewpoint and framing.
poseDescriptions[3]='Walking naturally mid-stride, arms swinging and feet offset.';
poseDescriptions[6]='Sitting upright on a simple stool with knees apart and both feet planted.';
poseDescriptions[7]='Kneeling on one knee with the other foot planted forward and the legs slightly offset.';
poseDescriptions[8]='Crouching with bent knees and feet separated.';
poseDescriptions[9]='Standing in a poised ballet stance with arms softly curved outward and both feet on the ground.';
poseDescriptions[11]='Standing with the torso gently rotated away, turning the head back over one shoulder.';
poseDescriptions[12]=poseDescriptions[12].replace('Standing with the body turned approximately 30–45 degrees sideways to the camera.','Standing with the torso turned slightly sideways.').replace('Looking directly at the camera','Looking ahead');
poseDescriptions[13]=poseDescriptions[13].replace('Standing with the back and left side facing the camera, the body rotated approximately 135 degrees away from the viewer.','Standing with the torso rotated partly away and the left shoulder set back.').replace('toward the camera, maintaining direct eye contact with a subtle, confident smile','with a steady gaze and a subtle, confident smile');
poseDescriptions[14]=poseDescriptions[14].replace('facing the camera','looking ahead').replace(' Use a front three-quarter view of the chair to make the crossed-leg position clear.','');
const originalCategories=['Standing','Standing','Standing','Walking & running','Gestures','Standing','Sitting','Kneeling & crouching','Kneeling & crouching','Dance & exercise','Gestures','Standing','Standing','Standing','Sitting'];
const additions=[
['Standing','Weight on one leg','Standing naturally with weight on one leg, the other knee relaxed and arms resting at the sides.'],
['Standing','Hands behind back','Standing upright with both hands loosely clasped behind the back and shoulders relaxed.'],
['Standing','Hands in pockets','Standing casually with both hands in clothing pockets, elbows relaxed and feet comfortably apart.'],
['Standing','Leaning against a wall','Leaning the upper back against a wall, with one knee bent and that foot resting lightly against the wall.'],
['Standing','Side profile','Standing in a clear side profile with an upright posture, arms relaxed and feet slightly staggered.'],
['Standing','Looking upward','Standing with the chin gently lifted and gaze directed upward, hands relaxed beside the body.'],
['Walking & running','Confident stride','Walking forward with a confident long stride, upright shoulders and a natural opposing arm swing.'],
['Walking & running','Walking away, looking back','Walking away while turning the head over one shoulder toward the camera, caught mid-step.'],
['Walking & running','Brisk walking','Walking briskly with bent elbows and purposeful forward motion, one foot stepping past the other.'],
['Walking & running','Running','Running mid-stride with one knee driving forward, the other leg extended behind and arms pumping naturally.'],
['Walking & running','Jogging','Jogging at an easy pace with relaxed shoulders, bent elbows and short springy strides.'],
['Walking & running','Climbing stairs','Stepping up a staircase with one foot on the next tread, the other pushing off below and the torso balanced forward.'],
['Walking & running','Descending stairs','Stepping down a staircase carefully with one foot reaching toward a lower tread and one hand lightly near the railing.'],
['Sitting','Chair, ankles crossed','Sitting upright on a chair with knees together, ankles crossed below the knees and hands resting in the lap.'],
['Sitting','Chair, leaning forward','Sitting on the front edge of a chair, leaning forward with elbows on the thighs and hands loosely together.'],
['Sitting','Chair, sideways','Sitting sideways on a chair with the torso gently turned toward the camera and one forearm resting along the chair back.'],
['Sitting','Bench, relaxed','Sitting comfortably on a bench with legs naturally apart, feet resting on the ground and hands beside the hips.'],
['Sitting','Floor, cross-legged','Sitting cross-legged on the floor with an upright spine, relaxed shoulders and hands resting on the knees.'],
['Sitting','Floor, knees drawn up','Sitting on the floor with both knees drawn toward the chest, arms resting loosely around the shins.'],
['Sitting','Perched on a ledge','Sitting on a low ledge with both lower legs hanging naturally and hands resting on either side for balance.'],
['Kneeling & crouching','Both knees down','Kneeling upright on both knees with the torso straight and hands resting gently on the thighs.'],
['Kneeling & crouching','Sitting back on heels','Kneeling with the hips resting on the heels, spine upright and hands relaxed in the lap.'],
['Kneeling & crouching','Low squat','Holding a balanced low squat with feet apart, heels grounded and elbows resting lightly inside the knees.'],
['Kneeling & crouching','One knee, reaching down','Lowering onto one knee while reaching one hand toward an object on the ground, with the opposite foot firmly planted.'],
['Reclining','Reclining on a sofa','Reclining along a sofa with the upper back supported by cushions, legs extended comfortably and one arm resting along the backrest.'],
['Reclining','Lying on back','Lying on the back on a flat surface with legs extended, head supported naturally and arms resting beside the torso.'],
['Reclining','Side-lying, propped on elbow','Lying on one side, supporting the upper body on a bent elbow, with the legs extended and slightly offset.'],
['Reclining','Relaxed on a lounger','Resting on a reclining lounge chair with the back supported, legs extended and arms comfortably on the armrests.'],
['Fighting','Boxing guard','Standing in a balanced boxing guard, feet staggered, knees softly bent, fists raised near the cheeks and elbows close to the ribs.'],
['Fighting','Straight punch','Throwing a controlled straight punch with one arm extended, the other fist guarding the face, hips rotated and feet planted in a stable stance.'],
['Fighting','Front kick','Performing a controlled front kick with one leg extended forward, the supporting knee slightly bent and hands held in a defensive guard.'],
['Fighting','Side kick','Performing a balanced side kick with one leg extended sideways at waist height, supporting foot turned out and arms held for balance.'],
['Fighting','Defensive block','Holding a defensive martial-arts stance with one forearm raised to block, the other hand near the torso and knees bent.'],
['Fighting','Low fighting stance','Holding a low martial-arts stance with feet wide apart, knees bent, torso upright and both hands in a ready guard.'],
['Fighting','Dodging','Leaning the torso sideways to evade an imagined strike, knees flexed, feet staggered and hands protecting the head.'],
['Fighting','Sword-ready stance','Holding a training sword in both hands in front of the body, with feet staggered and knees softly bent in a composed ready stance.'],
['Dance & exercise','Dance turn','Turning gracefully on one supporting leg with the other foot lightly lifted, torso elongated and arms open for balance.'],
['Dance & exercise','Ballet arabesque','Balancing on one straight supporting leg with the other leg extended behind, torso gently inclined forward and arms reaching outward.'],
['Dance & exercise','Dance lunge','Holding a graceful dance lunge with the front knee bent, back leg long and both arms sweeping diagonally upward.'],
['Dance & exercise','Jumping','Captured in a natural upward jump with both feet off the ground, knees slightly bent and arms raised for balance.'],
['Dance & exercise','Overhead stretch','Standing tall and stretching both arms overhead with fingers loosely interlaced and shoulders relaxed.'],
['Dance & exercise','Side stretch','Standing with feet comfortably apart, one arm reaching overhead while the torso bends gently to the opposite side.'],
['Dance & exercise','Yoga tree pose','Balancing on one leg with the opposite foot resting against the inner calf or thigh, hands together at the chest and spine upright.'],
['Gestures','Pointing','Standing and pointing toward something to one side with one arm extended, following the gesture with the eyes.'],
['Gestures','Offering an object','Standing with one hand extended forward, palm upward, offering a small object while the other arm rests naturally.'],
['Gestures','Holding a book','Standing with an open book held comfortably in both hands at mid-torso, head tilted slightly down to read.'],
['Gestures','Looking at a phone','Standing naturally with a phone held in one hand at chest height and the gaze directed toward its screen.'],
['Gestures','Welcoming, open arms','Standing with both arms opened outward in a friendly welcoming gesture, palms visible and shoulders relaxed.'],
['Gestures','Hand on chin','Standing thoughtfully with one hand touching the chin, the opposite forearm supporting that elbow and the gaze slightly averted.']
];
additions.push(...[
  [
    "Model poses",
    "Classic S-curve",
    "Standing in a fashion S-curve with weight on the back leg, the free knee softly bent, hips angled one way and shoulders gently counterbalanced. Arms rest naturally and the chin stays level."
  ],
  [
    "Model poses",
    "Runway crossover step",
    "Walking toward the camera in a deliberate runway stride, the leading foot placed just across the center line, hips moving naturally and arms swinging subtly. Shoulders stay back and the gaze is confident."
  ],
  [
    "Model poses",
    "Runway end-of-walk",
    "Paused at the end of a runway with one foot forward, weight settled into the back hip, shoulders square and one hand resting lightly on the waist. Looking directly ahead."
  ],
  [
    "Model poses",
    "Three-quarter fashion stance",
    "Standing at a three-quarter angle to the camera with the front knee relaxed, one foot slightly forward and the shoulders turned gently toward the lens to show the outfit silhouette."
  ],
  [
    "Model poses",
    "Crossed-ankle standing",
    "Standing with ankles lightly crossed, weight supported by the rear leg, torso elongated and hands resting loosely beside the body. Keep the feet slightly offset so the footwear is distinguishable."
  ],
  [
    "Model poses",
    "One leg extended",
    "Standing on one supporting leg with the other leg extended diagonally to the side, toe touching the floor, torso tall and one hand resting lightly at the waist."
  ],
  [
    "Model poses",
    "Jacket over shoulder",
    "Standing with a jacket draped over one shoulder and held at its collar by the same-side hand. The other hand rests at the hip, with feet staggered and head turned slightly toward the camera."
  ],
  [
    "Model poses",
    "Holding lapels",
    "Standing with feet comfortably staggered and both hands lightly holding the lapels or front edges of the selected top. Elbows angle outward slightly and the torso remains upright."
  ],
  [
    "Model poses",
    "Hands framing the waist",
    "Standing with both hands placed lightly at the sides of the waist, elbows angled back, one hip shifted outward and one knee relaxed to emphasize the garment silhouette."
  ],
  [
    "Model poses",
    "Collarbone touch",
    "Standing at a slight angle with one hand resting lightly near the collarbone, the opposite arm relaxed and the head tilted subtly toward the raised hand. Shoulders stay low."
  ],
  [
    "Model poses",
    "Hand through hair",
    "Standing with one hand lifted into or over the hair near the crown, elbow angled outward, opposite hand relaxed and weight shifted naturally onto one leg."
  ],
  [
    "Model poses",
    "Editorial asymmetric arms",
    "Standing in an angular editorial pose with one elbow raised beside the head, the other forearm crossing loosely in front of the waist, feet apart and hips subtly counterbalanced."
  ],
  [
    "Model poses",
    "Back view, outfit reveal",
    "Standing with the back facing the camera to show the rear of the outfit, feet staggered, one hand resting at the waist and head turned gently into a three-quarter profile."
  ],
  [
    "Model poses",
    "Seated editorial, long leg line",
    "Sitting near the front of a chair at a three-quarter angle, one knee bent with the foot grounded and the other leg extended diagonally forward. One hand rests on the chair edge and the other on the thigh."
  ],
  [
    "Model poses",
    "Seated sideways, shoulder turn",
    "Sitting sideways on a simple stool with feet offset on the floor, torso turned toward the camera and one shoulder slightly lowered. Hands rest lightly together on the upper thigh."
  ],
  [
    "Model poses",
    "Wall lean, bent knee",
    "Leaning one shoulder against a wall with the outside leg straight, the other knee bent and its toe resting on the floor. One hand rests near the waist while the other hangs loosely, creating a relaxed fashion silhouette."
  ]
]);
additions.push(...[
  [
    "Dominant poses",
    "Commanding stance",
    "Standing squarely with feet shoulder-width apart, shoulders back, spine tall and chin level. Both arms rest firmly at the sides, with a steady, direct gaze and a composed, authoritative expression."
  ],
  [
    "Dominant poses",
    "Hands-on-hips power stance",
    "Standing with feet planted wide, both hands resting firmly on the hips and elbows angled outward. The chest is open, shoulders relaxed and gaze unwavering."
  ],
  [
    "Dominant poses",
    "Arms crossed, steady gaze",
    "Standing with arms firmly crossed over the chest, feet slightly apart and weight evenly balanced. The head remains level with a direct, measured gaze and a calm, assertive expression."
  ],
  [
    "Dominant poses",
    "Hands clasped behind back",
    "Standing tall with feet comfortably apart and both hands clasped behind the lower back. Shoulders are drawn gently back, chin slightly lifted and expression controlled and confident."
  ],
  [
    "Dominant poses",
    "One hand on waist",
    "Standing with one hand placed firmly at the waist, the opposite arm relaxed and one foot slightly forward. The torso faces the viewer with a poised, self-assured expression."
  ],
  [
    "Dominant poses",
    "Leaning on a desk",
    "Standing behind a desk with both palms braced on its edge, arms extended and torso leaning slightly forward. Feet remain firmly planted while the head stays raised with a focused, commanding gaze."
  ],
  [
    "Dominant poses",
    "One hand braced on a table",
    "Standing beside a table with one palm resting firmly on its surface, the other hand at the hip and feet staggered. The body is upright with a slight forward inclination and a composed, assertive expression."
  ],
  [
    "Dominant poses",
    "Chair, authoritative posture",
    "Sitting squarely in a chair with the back upright, knees comfortably apart and both feet planted. Forearms rest on the armrests, shoulders remain open and the gaze is direct and composed."
  ],
  [
    "Dominant poses",
    "Chair, crossed legs and armrest",
    "Sitting back in a chair with legs crossed at the knees, one forearm resting along an armrest and the other hand relaxed on the upper knee. The head is held high with a calm, self-assured expression."
  ],
  [
    "Dominant poses",
    "Chair, leaning forward",
    "Sitting on the front edge of a chair with feet firmly planted, elbows resting on the thighs and hands loosely clasped between the knees. The head is raised with an attentive, intense gaze."
  ],
  [
    "Dominant poses",
    "Steepled fingers",
    "Sitting upright in a chair with elbows supported on the armrests and fingertips lightly touching in a steeple at mid-chest. Shoulders remain relaxed and the expression thoughtful, controlled and authoritative."
  ],
  [
    "Dominant poses",
    "Stop gesture",
    "Standing firmly with one arm extended forward at chest height, palm open and facing outward in a clear stop gesture. The opposite hand rests at the side and the face shows calm determination."
  ],
  [
    "Dominant poses",
    "Pointing with authority",
    "Standing in a stable stance with one arm extended to indicate a direction, index finger pointing clearly and the opposite hand resting at the waist. The gaze follows the gesture with a decisive expression."
  ],
  [
    "Dominant poses",
    "Beckoning gesture",
    "Standing upright with one hand held forward at waist height, palm upward and fingers gently curled in a deliberate beckoning gesture. The opposite arm rests naturally, with a steady gaze and confident posture."
  ],
  [
    "Dominant poses",
    "Purposeful approach",
    "Walking forward with a deliberate, measured stride, shoulders back and arms moving minimally at the sides. The head remains level, gaze fixed ahead and expression resolute."
  ],
  [
    "Dominant poses",
    "Side-on, commanding shoulder turn",
    "Standing mostly side-on with feet staggered and one hand behind the back, turning the shoulders and head toward the viewer. The posture is tall and still, with a steady, self-possessed gaze."
  ]
]);
additions.push(["Standing","Forward bend, crossed legs, hands behind back","Standing with both legs straight and crossed, one leg placed diagonally in front of the other, with both feet resting on the floor. Keep the knees straight without locking them. Bend the upper body forward from the hips while maintaining the crossed-leg position and a long, aligned spine. Hold both hands together behind the lower back, with the arms kept behind the torso throughout the pose. Keep the shoulders relaxed and the head naturally aligned with the spine."]);
originalCategories[13]='Riding crop';
additions.push(...[
  [
    "Riding crop",
    "Crop held at the side",
    "Standing upright with feet slightly staggered, holding a riding crop loosely by its handle in one hand beside the thigh, with the shaft pointing down toward the ground. The opposite arm rests naturally and the gaze is composed."
  ],
  [
    "Riding crop",
    "Crop across both palms",
    "Standing squarely with shoulders relaxed, holding a riding crop horizontally across both open palms at waist height. Hands are spaced along the shaft so its handle, slender length, and flat tip are clearly distinguishable."
  ],
  [
    "Riding crop",
    "Crop behind back, square stance",
    "Standing with feet shoulder-width apart and both hands behind the lower back, holding a riding crop horizontally in both hands. Turn the body to a rear three-quarter angle so the crop and hand placement are clearly visible, with the head turned gently toward the viewer."
  ],
  [
    "Riding crop",
    "Crop over one shoulder",
    "Standing in a relaxed three-quarter stance with a riding crop held by its handle near one shoulder. The shaft rests lightly across that shoulder, extending behind the upper back, while the opposite hand rests at the waist."
  ],
  [
    "Riding crop",
    "Upright crop, hands together",
    "Standing tall with both hands loosely together around the handle of a riding crop at mid-torso, the shaft held upright beside the shoulder and its flat tip pointing upward. Elbows stay close to the body and shoulders remain relaxed."
  ],
  [
    "Riding crop",
    "Crop held diagonally across torso",
    "Standing with weight on one leg, holding a riding crop diagonally across the front of the torso. One hand grips the handle near the hip and the other lightly supports the shaft near chest height, without bending it."
  ],
  [
    "Riding crop",
    "One hand on hip, crop lowered",
    "Standing with one hand firmly at the hip and the opposite hand holding a riding crop beside the outer thigh, shaft angled slightly away from the leg and tip pointing downward. Keep the chin level and the expression self-assured."
  ],
  [
    "Riding crop",
    "Walking with crop at side",
    "Walking in a measured natural stride with a riding crop held low beside one thigh, handle gripped lightly and tip angled downward. The free arm swings naturally and the shoulders remain upright."
  ],
  [
    "Riding crop",
    "Chair, crop across lap",
    "Sitting upright in a chair with both feet planted and a riding crop resting horizontally across the lap. Both hands rest lightly on the crop near its ends, with relaxed shoulders and a direct, composed gaze."
  ],
  [
    "Riding crop",
    "Chair, crossed legs and crop",
    "Sitting in a chair with legs crossed at the knees and a riding crop held horizontally just above the upper thigh. One hand grips its handle and the other lightly supports the shaft, while the torso stays comfortably upright."
  ],
  [
    "Riding crop",
    "Seated sideways, crop lowered",
    "Sitting sideways on a stool with feet offset on the floor, turning the shoulders toward the viewer. Hold a riding crop in the near hand beside the stool, shaft pointing downward, while the opposite hand rests on the upper thigh."
  ],
  [
    "Riding crop",
    "Wall lean with crop",
    "Leaning one shoulder lightly against a wall with one knee relaxed, holding a riding crop by the handle at hip height with its shaft angled downward across the front of the legs. The other hand rests near the waist and the gaze is calm."
  ]
]);
additions.push(...[
  [
    "Shoe-focused poses",
    "One foot forward, shoe display",
    "Standing with weight on the back leg and the other foot placed slightly forward and turned outward. Keep the forward sole resting on the ground, with arms relaxed, so the selected shoe’s toe shape, upper, and fastening can be seen clearly."
  ],
  [
    "Shoe-focused poses",
    "Three-quarter footwear stance",
    "Standing at a three-quarter angle with feet offset and a small gap between them. Angle one foot toward the viewer and the other sideways to show the front and side profiles of the selected footwear. Keep the posture tall and natural."
  ],
  [
    "Shoe-focused poses",
    "Side profile, heel silhouette",
    "Standing side-on with one foot half a step ahead of the other and both soles grounded. Keep the legs visually separated so the footwear’s heel height, heel shape, sole, and side profile can be distinguished."
  ],
  [
    "Shoe-focused poses",
    "Crossed ankles, offset shoes",
    "Standing with ankles loosely crossed and the front foot angled outward, keeping a small offset between the shoes so neither fully conceals the other. Rest one hand at the waist and keep the shoulders relaxed."
  ],
  [
    "Shoe-focused poses",
    "Toe resting behind",
    "Standing on one supporting leg while placing the other foot slightly behind, heel gently raised and toe resting on the floor. Turn the raised heel slightly outward to reveal the back and heel construction of the selected shoe."
  ],
  [
    "Shoe-focused poses",
    "Rear three-quarter shoe view",
    "Standing at a rear three-quarter angle with feet slightly apart and one heel gently lifted. Let the arms rest at the sides to reveal the rear shape, heel counters, and heel details of the selected footwear."
  ],
  [
    "Shoe-focused poses",
    "Foot on a low step",
    "Standing beside a low step with one foot planted on it and the other on the floor. Keep the raised knee naturally bent, torso upright and hands clear of the shoe, presenting its upper, fastening, and side profile."
  ],
  [
    "Shoe-focused poses",
    "Foot on a low rail",
    "Standing with one foot resting on a low sturdy rail and the other firmly grounded, knee bent comfortably. Angle the raised foot outward and keep the hands relaxed at the waist to show the shoe or boot’s construction."
  ],
  [
    "Shoe-focused poses",
    "Seated, one leg extended",
    "Sitting near the front of a chair with one foot grounded and the other leg extended diagonally forward, heel resting on the floor. Turn the extended foot slightly outward to show the selected shoe’s toe, upper, and side profile."
  ],
  [
    "Shoe-focused poses",
    "Seated, ankles crossed",
    "Sitting upright with lower legs angled gently forward and ankles crossed loosely. Keep the shoes slightly offset and hands in the lap, making their contrasting front and side angles easy to distinguish."
  ],
  [
    "Shoe-focused poses",
    "Seated, foot lifted slightly",
    "Sitting upright on a chair with one foot grounded and the other lifted a short distance above the floor, knee bent naturally. Angle the lifted foot sideways to reveal its sole edge and heel without forcing the ankle."
  ],
  [
    "Shoe-focused poses",
    "Seated, figure-four shoe display",
    "Sitting on a sturdy chair with one ankle resting comfortably across the opposite thigh. Keep the lifted foot relaxed and one hand resting lightly on the shin, leaving the shoe’s upper, side, and sole edge unobstructed."
  ],
  [
    "Shoe-focused poses",
    "Seated sideways, boot silhouette",
    "Sitting sideways on a low bench with feet staggered on the floor and knees comfortably bent. Keep the legs separated in profile and hands on the bench beside the hips to reveal the selected boots’ shafts, folds, and heel silhouettes."
  ],
  [
    "Shoe-focused poses",
    "Paused mid-step",
    "Pausing in a natural walking step with the front heel touching the floor and the back heel lifted. Keep the feet offset rather than overlapping, showing the front shoe’s upper and the back shoe’s heel and sole edge."
  ],
  [
    "Shoe-focused poses",
    "Stepping onto a platform",
    "Stepping onto a low platform with the leading foot planted on top and the trailing foot pushing off the floor. Keep the torso balanced and arms naturally positioned, showing the footwear from two complementary angles."
  ],
  [
    "Shoe-focused poses",
    "Kneeling, adjusting a fastening",
    "Kneeling on one knee with the opposite foot planted forward, bending slightly to adjust the selected shoe’s actual fastening or upper. Keep the hands lightly placed so most of the forward shoe remains unobstructed; do not add laces or straps that the chosen shoe does not have."
  ]
]);
additions.push(...[
  [
    "Feminine anime poses",
    "Raised knee, wink and double peace signs",
    "Balancing on one leg with the other knee lifted high in front and bent comfortably. Hold both hands beside the face with index and middle fingers forming outward-facing V-shaped peace signs. Wink one eye, smile playfully and lean the torso slightly toward the supporting leg for balance. Keep the raised foot relaxed and clearly separated from the supporting leg."
  ],
  [
    "Feminine anime poses",
    "Wink with peace sign by eye",
    "Standing with weight shifted onto one leg, the free knee softly bent and one hand forming a V-shaped peace sign beside the open eye. Wink the other eye and smile, with the opposite hand resting lightly at the hip. Keep the fingers clear of the eyes."
  ],
  [
    "Feminine anime poses",
    "Double peace signs, heel kicked back",
    "Balancing on one supporting leg while bending the other knee so that heel lifts behind the body. Raise both hands beside the shoulders in V-shaped peace signs, tilt the head gently and smile brightly. Keep the feet visually separated."
  ],
  [
    "Feminine anime poses",
    "Idol pose, one knee raised",
    "Balancing with one knee raised in front, pointing one index finger upward beside the head while the opposite hand rests at the waist. Lift the chin slightly and smile confidently, keeping the shoulders relaxed and the supporting leg stable."
  ],
  [
    "Feminine anime poses",
    "Hands making a heart",
    "Standing with knees gently angled together and one foot slightly forward, forming a heart shape with both hands at chest height. Tilt the head subtly and give a warm, cheerful smile."
  ],
  [
    "Feminine anime poses",
    "Finger heart and wink",
    "Standing in a relaxed three-quarter stance with one hand extended gently forward, crossing the thumb and index finger into a small finger-heart gesture. Wink and smile while the opposite hand rests near the waist."
  ],
  [
    "Feminine anime poses",
    "Shy clasped hands",
    "Standing with feet close together and one knee softly bent, both hands loosely clasped in front of the chest. Draw the shoulders gently inward, tilt the head slightly down and glance upward with a shy, gentle smile."
  ],
  [
    "Feminine anime poses",
    "Hands framing cheeks",
    "Standing with elbows bent and both open hands held beside the cheeks, palms angled inward without covering the face. Tilt the head slightly and smile with a playful, surprised expression, keeping one foot slightly forward."
  ],
  [
    "Feminine anime poses",
    "Playful cat-paw hands",
    "Standing with knees softly bent and one hip shifted sideways, both hands loosely curled near the shoulders in a playful cat-paw gesture. Keep wrists relaxed, elbows bent and the head tilted, with a cheerful smile."
  ],
  [
    "Feminine anime poses",
    "Magical heroine stance",
    "Standing in a confident, stylized heroine pose with feet staggered, one hand at the hip and the opposite arm extended diagonally upward with an open palm. Turn the shoulders slightly toward the viewer and wear a determined, upbeat expression."
  ],
  [
    "Feminine anime poses",
    "Joyful jump with peace signs",
    "Captured during a small joyful jump with both knees bent, lower legs angled backward and feet separated. Hold both hands beside the head in V-shaped peace signs, with an open, delighted smile and relaxed shoulders."
  ],
  [
    "Feminine anime poses",
    "Playful turn, looking back",
    "Turning the torso in a light, playful half-spin, with one foot supporting the body and the other toe touching down slightly behind. Look back over one shoulder with a cheerful smile, one hand lifted in a small wave and the other arm softly extended for balance."
  ],
  [
    "Sitting",
    "Feet resting on a desk",
    "Sitting comfortably back in a sturdy chair behind a desk, with the back supported and both legs extended forward so that both shoe heels rest on the desktop. Keep the ankles uncrossed and the feet slightly apart, showing each shoe distinctly. Rest one forearm on a chair armrest and the other hand loosely in the lap. Leave space between the chair and desk so the extended legs rest comfortably on the desktop."
  ]
]);
// Appended to preserve every previously saved numeric pose ID.
additions.push(...[
  [
    "Cat o nine",
    "Cat o nine — crossed legs, looking back",
    "Standing with the torso rotated partly away and the left shoulder set back. Keep both legs straight and crossed, with one foot placed diagonally behind the other and both feet resting on the floor. Shift the hips gently backward while inclining the upper body slightly forward. Hold a cat-o'-nine-tails whip with a short handle and nine flexible leather tails behind the lower back at the upper hips. Keep both hands separated along a horizontal line behind the body: one grips the handle while the other loosely gathers the tails, with their free lengths hanging naturally below the hands. Turn the head back over the left shoulder with a steady gaze and a subtle, confident smile."
  ],
  [
    "Cat o nine",
    "Cat o nine — low across the back",
    "Standing tall with feet comfortably apart, shoulders gently drawn back and both elbows softly bent. Hold a cat-o'-nine-tails whip with a short handle and nine flexible leather tails behind the lower back. Grip the handle near one hip and loosely gather the folded tails with the other hand near the opposite hip, allowing their loose lengths to drape downward. Keep the torso upright and the chin level."
  ],
  [
    "Cat o nine",
    "Cat o nine — resting on shoulder",
    "Standing with weight on the back leg and the front knee relaxed. Hold the short handle of a cat-o'-nine-tails whip beside one shoulder, with its nine flexible leather tails draped loosely over that shoulder and down the upper back, clear of the face. Rest the free hand at the waist, with the head turned slightly toward the raised hand."
  ],
  [
    "Cat o nine",
    "Cat o nine — diagonal across torso",
    "Standing with feet staggered and shoulders relaxed. Hold a cat-o'-nine-tails whip with a short handle and nine flexible leather tails diagonally across the front of the torso. Grip the handle near one hip while the other hand supports a loose bundle of tails below the opposite shoulder, letting their free lengths curve and hang naturally rather than forming a rigid line. Keep the elbows comfortably bent and the gaze directed ahead."
  ],
  [
    "Cat o nine",
    "Cat o nine — hanging beside thigh",
    "Standing mostly side-on with one foot half a step forward and the torso gently turned outward. Hold a cat-o'-nine-tails whip by its short handle at hip height beside the outer thigh, with its nine flexible leather tails hanging loosely along the outer leg. Rest the free hand behind the opposite hip and keep the whip relaxed and still."
  ],
  [
    "Cat o nine",
    "Cat o nine — inspecting the tails",
    "Standing with feet close but not crossed, holding a cat-o'-nine-tails whip with a short handle and nine flexible leather tails at lower-chest height. Grip the handle in one hand and lift a loose bundle of the tails with the other, looking down at the separate strands with a thoughtful, composed expression. Let the unsupported ends hang naturally."
  ],
  [
    "Cat o nine",
    "Cat o nine — walking shoulder turn",
    "Taking a measured step with the rear heel beginning to lift, turning the head and upper torso back over one shoulder. Hold a cat-o'-nine-tails whip by its short handle low behind the outer hip in the same-side hand, with its nine flexible leather tails gathered loosely and hanging clear of the moving legs. Let the free arm counterbalance the walking motion naturally."
  ],
  [
    "Cat o nine",
    "Cat o nine — wall lean, crossed ankles",
    "Resting the upper back lightly against a wall, with one ankle crossed loosely in front of the supporting leg and both feet grounded. Hold a cat-o'-nine-tails whip with a short handle and nine flexible leather tails in front of the body at waist height. Rest one hand around the handle and the other lightly over that hand, letting all nine tails hang loosely in front of the legs. Keep the shoulders low and the expression relaxed."
  ],
  [
    "Cat o nine",
    "Cat o nine — seated, crossed legs",
    "Sitting comfortably in a chair with one leg crossed over the other at the knee. Hold the short handle of a cat-o'-nine-tails whip diagonally along the upper thigh with one hand, allowing its nine flexible leather tails to drape over the thigh and down beside the chair. Rest the other forearm on an armrest. Sit back with the spine comfortably upright and the head turned slightly to one side."
  ],
  [
    "Cat o nine",
    "Cat o nine — chair back, folded arms",
    "Sitting facing the backrest of a sturdy chair, with one foot planted on either side and the torso upright. Rest both forearms lightly across the top of the backrest. Hold the short handle of a cat-o'-nine-tails whip beneath one relaxed hand, with its nine flexible leather tails draped loosely over the forearms and hanging down the front of the backrest."
  ],
  [
    "Cat o nine",
    "Cat o nine — stool, one foot raised",
    "Sitting upright on a low stool with one foot resting on its support rung and the other foot planted slightly forward on the floor. Hold the short handle of a cat-o'-nine-tails whip loosely in one hand across the lap, with its nine flexible leather tails resting in relaxed folds over the thighs and hanging beside the raised knee. Rest the free hand on the stool edge for balance."
  ],
  [
    "Cat o nine",
    "Cat o nine — kneeling upright",
    "Kneeling upright on both knees with the hips lifted away from the heels, shoulders relaxed and lower legs resting naturally behind. Hold a cat-o'-nine-tails whip with a short handle and nine flexible leather tails across the fronts of the thighs: one hand holds the handle, while the other loosely supports the gathered tails. Let the free lengths drape over the thighs. Keep the chin level and the gaze calm."
  ],
  [
    "Cat o nine",
    "Cat o nine — one-knee presentation",
    "Resting on one knee with the other foot planted forward and the raised knee comfortably bent. Present a cat-o'-nine-tails whip with a short handle and nine flexible leather tails across the raised thigh. Hold the handle in one hand and a loose bundle of tails in the other, letting the remaining lengths curve and drape over the knee. Keep the back long and the head raised."
  ],
  [
    "Cat o nine",
    "Cat o nine — low ready stance",
    "Holding a balanced low stance with feet wide apart, one knee bent and the other leg extended comfortably to the side. Hold a cat-o'-nine-tails whip by its short handle in one hand low beside the bent knee, with its nine flexible leather tails gathered loosely and drooping outward beside that leg. Extend the free hand slightly forward for balance, with a focused, steady gaze."
  ],
  [
    "Cat o nine",
    "Cat o nine — forward bow, hands behind back",
    "Standing with both legs straight, feet parallel and comfortably separated. Hinge the upper body forward from the hips while maintaining a long spine and keeping the head raised. Hold a cat-o'-nine-tails whip with a short handle and nine flexible leather tails behind the lower back. Keep the hands apart behind the upper hips, one gripping the handle and the other supporting a loose bundle of tails, with the free ends hanging naturally. Extend the arms gently backward and keep the shoulders relaxed."
  ]
]);
const poses=originalLabels.map((label,id)=>({id:String(id),label,category:originalCategories[id],description:poseDescriptions[id]}));
for(const [category,label,description] of additions){const id=String(poseDescriptions.length);poseDescriptions.push(description);poses.push({id,label,category,description});}
const categories=['Standing','Walking & running','Sitting','Kneeling & crouching','Reclining','Fighting','Dance & exercise','Gestures','Model poses','Dominant poses','Riding crop','Cat o nine','Shoe-focused poses','Feminine anime poses'];
const field=document.querySelector('.poses'),grid=field.querySelector('.pose-grid');field.querySelector('.note').textContent='Browse a category or search by name. Your selected pose stays selected while you browse.';
const filters=document.createElement('div');filters.className='pose-filters fields';filters.innerHTML='<div><label for="poseCategory">Pose category</label><select id="poseCategory"></select></div><div><label for="poseSearch">Find a pose</label><input id="poseSearch" type="search" placeholder="e.g. crossed legs, boxing, leaning"></div>';grid.before(filters);
const category=document.getElementById('poseCategory'),search=document.getElementById('poseSearch');category.add(new Option('All categories',''));for(const name of categories)category.add(new Option(name,name));category.value='Standing';
const current=document.createElement('p');current.id='selectedPoseDescription';current.className='note pose-description';current.setAttribute('aria-live','polite');grid.after(current);const empty=document.createElement('p');empty.className='note';empty.textContent='No poses match. Try another category or search.';grid.after(empty);
grid.replaceChildren();for(const pose of poses){const label=document.createElement('label');label.className='pose-card';label.title=pose.description;const radio=document.createElement('input');radio.type='radio';radio.name='pose';radio.value=pose.id;radio.setAttribute('value',pose.id);radio.checked=pose.id==='0';radio.defaultChecked=pose.id==='0';const content=document.createElement('span');content.className='pose-content';content.textContent=pose.label;label.append(radio,content);pose.element=label;grid.append(label);}
function filter(){const term=search.value.trim().toLowerCase();let count=0;for(const pose of poses){const visible=(!category.value||pose.category===category.value)&&(!term||(pose.label+' '+pose.category+' '+pose.description).toLowerCase().includes(term));pose.element.hidden=!visible;if(visible)count++;}empty.hidden=count>0;}
category.onchange=filter;search.oninput=filter;
let lastSelected='';function sync(){const selected=poses.find(p=>p.element.querySelector('input').checked);if(!selected)return;if(lastSelected!==selected.id){lastSelected=selected.id;category.value=selected.category;search.value='';filter();}current.textContent='Selected: '+selected.label+' · '+selected.category+'. '+selected.description;}
const previous=generate;generate=function(){previous();sync();};
window.poseLibrary={poses,categories,fill(select,categoryName='',selected='0'){select.replaceChildren();for(const pose of poses)if(!categoryName||pose.category===categoryName)select.add(new Option(pose.label,pose.id));select.value=selected;},get:id=>poses.find(p=>p.id===String(id)),filter,sync};
const style=document.createElement('style');style.textContent='.pose-filters{margin-bottom:14px}.pose-description{padding:10px 12px;border:1px solid #485347;border-radius:8px;line-height:1.65}.builder-deck .pose-grid,.pose-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.builder-deck .pose-content,.pose-content{padding:12px;text-align:left;align-items:flex-start;justify-content:center;min-height:48px;font-size:12px}.pose-card:has(input:checked){order:-1}.pose-filters input{min-width:0}@media(min-width:1200px){.builder-deck .pose-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}';document.head.append(style);filter();sync();
})();

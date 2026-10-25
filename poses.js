(()=>{
const originalLabels=[...document.querySelectorAll('input[name=pose]')].map(input=>input.closest('label').textContent.trim());
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
const poses=originalLabels.map((label,id)=>({id:String(id),label,category:originalCategories[id],description:poseDescriptions[id]}));
for(const [category,label,description] of additions){const id=String(poseDescriptions.length);poseDescriptions.push(description);poses.push({id,label,category,description});}
const categories=['Standing','Walking & running','Sitting','Kneeling & crouching','Reclining','Fighting','Dance & exercise','Gestures','Model poses'];
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

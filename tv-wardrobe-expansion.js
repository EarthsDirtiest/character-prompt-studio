/* Extra screen wardrobes, appended by stable look ID to preserve installed closets. */
(()=>{
const palette={Black:'#202125',White:'#eeeae3',Cream:'#e9ddc4',Gray:'#75767b',Blue:'#426e9b',Navy:'#26364f',Red:'#a63843',Burgundy:'#653044',Pink:'#d5a2b5',Green:'#476d4d',Brown:'#76543d',Tan:'#b69672',Yellow:'#dbbd57',Orange:'#c88243',Purple:'#754d85',Gold:'#bf9b51'};
const g=(style,color,details,material='Woven fabric')=>({name:color+' '+style,style,color,hex:palette[color]||'#68646c',material,details});
const foot=(style='Ankle boots',color='Black',height='Mid heel (4–6 cm)')=>({...g(style,color,'Closed '+color.toLowerCase()+' '+style.toLowerCase()+' with '+(height.startsWith('Flat')?'flat soles.':height.startsWith('Low')?'low heels.':'plain raised heels.'),'Smooth leather'),heelHeight:height,decoration:'Plain '+color.toLowerCase()+' '+style.toLowerCase()+'.'});
const pumps=()=>foot('Pumps','Black','High heel (7–9 cm)'),boots=()=>foot('Ankle boots'),flat=()=>foot('Oxford shoes','Brown','Flat / no raised heel');
const sneakers=()=>({...foot('Sneakers','White','Flat / no raised heel'),material:'Canvas'});
const jeans=()=>g('Jeans','Blue','Fitted blue full-length denim jeans.','Denim'),blackJeans=()=>g('Jeans','Black','Fitted black full-length denim jeans.','Denim'),pants=(color='Black')=>g('Trousers',color,'Tailored '+color.toLowerCase()+' full-length trousers.','Woven suiting');
const extra=(name,type,color,material,details)=>({name,type,color,hex:palette[color]||'#68646c',material,placement:type==='Hat'?'On the head':type==='Tights'?'On both legs':type==='Necklace'?'Around the neck':'Over the main clothing',details});
const coat=(name,color,details,material='Wool')=>extra(name,'Coat',color,material,details);
const jacket=(name,color,details,material='Leather')=>extra(name,'Jacket',color,material,details);
const blouse=(color,details)=>g('Blouse',color,details,'Woven fabric'),knit=(color,details)=>g('Knit sweater',color,details,'Knit fabric');
const modern='Once Upon a Time · Storybrooke wardrobe',rd='Riverdale · screen wardrobe';
function look(id,name,origin,top,bottom,shoes,layers=[],accessories=[]){return {id,name,era:origin,origin,canonical:true,top,bottom,shoes,layers,accessories};}
const profiles=window.characterPresetCatalog.categories.flatMap(c=>c.characters||[]);
function add(id,outfits,url){const p=profiles.find(p=>p.id==='tv-'+id);if(!p)throw Error('Missing TV profile: '+id);for(const o of outfits){if(p.outfits.some(old=>old.id===o.id))throw Error('Duplicate TV look: '+id+'/'+o.id);p.outfits.push(o);}if(p.outfits.length!==5)throw Error('Expected five looks for '+id);if(url&&!p.sources.some(s=>s.url===url))p.sources.push({title:'Additional screen wardrobe references',url});}
add('regina-mills',[
 look('split-neck-dress','Storybrooke · black-and-white split-neck dress',modern,g('Dress','Black','A fitted knee-length black-and-white color-block dress with a split neckline and a shaped waist.'),null,pumps()),
 look('blue-zip-dress','Storybrooke · blue zip-front dress and leather jacket',modern,g('Dress','Blue','A fitted dark-blue knee-length dress with an exposed front zipper and a defined waist.'),null,pumps(),[jacket('Cropped black leather jacket','Black','A fitted cropped black leather jacket with a zip front.')])
],'https://wornontv.net/once-upon-a-time/regina/');
add('emma-swan',[
 look('blue-leather','Storybrooke · embroidered top and blue leather jacket',modern,blouse('White','A white top with small embroidered motifs and a softly open neckline.'),jeans(),boots(),[jacket('Blue fitted leather jacket','Blue','A fitted blue leather motorcycle jacket with narrow lapels and a front zipper.')]),
 look('floral-gray-coat','Storybrooke · red floral dress and gray coat',modern,g('Dress','Red','A red floral-print dress with a shaped waist and a softly flared skirt.'),null,boots(),[coat('Gray tailored coat','Gray','A gray tailored wool coat with a simple collar and straight lower panels.')]),
 look('cable-knit-coat','Storybrooke · cable-knit sweater and gray coat',modern,knit('Cream','A cream cable-knit sweater with a rounded neckline and long sleeves.'),jeans(),foot('Ankle boots','Brown'),[coat('Gray wool coat','Gray','A gray wool coat with broad lapels and a tailored waist.')])
],'https://wornontv.net/once-upon-a-time/emma/');
add('mary-margaret',[
 look('elbow-patch-dress','Storybrooke · gray elbow-patch sweater dress',modern,g('Sweater dress','Gray','A soft gray long-sleeved knit dress with contrasting elbow patches and a knee-length hem.','Fine knit'),null,foot('Ankle boots','Brown'),[],[extra('Dark opaque tights','Tights','Black','Nylon','Plain dark opaque tights.')]),
 look('dotted-dress-coat','Storybrooke · dotted dress and blue coat',modern,g('Dress','Black','A black dress with tiny pale dots, a white scalloped collar and a softly flared knee-length skirt.'),null,foot('Pumps','Black'),[coat('Blue swing coat','Blue','A blue coat with a rounded collar, front buttons and a loose lower shape.')]),
 look('navy-polo-midi','Storybrooke · navy pearl-button polo and printed skirt',modern,g('Polo shirt','Navy','A navy mesh-knit polo top with a neat collar and small pearl-like front buttons.','Fine knit'),g('Midi skirt','Blue','A patterned blue-toned mid-calf skirt with a fitted waistband.'),foot('Pumps','Black'))
],'https://wornontv.net/once-upon-a-time/mary/');
add('belle-french',[
 look('lace-green-skirt','Storybrooke · white lace, green skirt and pink coat',modern,blouse('White','A fitted white lace top with a softly rounded neckline.'),g('Skirt','Green','A green fitted skirt with a visible front zipper and a short hem.'),pumps(),[coat('Light pink coat','Pink','A light-pink tailored coat with a fitted waist and simple collar.')]),
 look('blue-lace-set','Storybrooke · blue lace top and matching skirt',modern,g('Crop top','Blue','A blue lace cropped top with a fitted bodice and delicate openwork texture.','Lace'),g('Skirt','Blue','A matching blue lace skirt with a shaped waist and opaque lining.','Lace'),pumps()),
 look('purple-jacket-set','Storybrooke · purple jacket and black lace top',modern,blouse('Black','A black lace top with a fitted opaque lining.'),g('Skirt','Gray','A textured fitted skirt with a short hem and a neat waistband.'),pumps(),[jacket('Purple cropped jacket','Purple','A fitted short purple jacket with shaped seams.','Woven fabric')])
],'https://wornontv.net/once-upon-a-time/belle/');
add('killian-jones',[
 look('wedding-velvet','Modern · black velvet wedding tuxedo','Once Upon a Time · S6 E20 “The Song in Your Heart”',g('Button-down shirt','Black','A black formal shirt beneath a dark waistcoat and dark tie.','Cotton'),pants(),foot('Oxford shoes','Black','Low heel (1–3 cm)'),[jacket('Black velvet wedding jacket','Black','A tailored black velvet tuxedo jacket with dark satin lapels.','Velvet')]),
 look('naval-uniform','Naval officer uniform','Once Upon a Time · S3 E5 “Good Form”',g('Button-down shirt','White','A white high-collared naval shirt with a dark neckcloth.','Cotton'),g('Trousers','White','Straight white naval uniform trousers.','Woven cotton'),foot('Knee-high boots','Black','Low heel (1–3 cm)'),[jacket('Navy officer tailcoat','Navy','A structured dark-navy officer coat with mustard-gold standing collar, epaulets and rows of gold-colored front and cuff buttons.','Wool')]),
 look('modern-collared-shirt','Storybrooke · leather jacket and open-collar shirt',modern,g('Button-down shirt','Blue','A dark-blue open-collared button-front shirt with the top buttons undone.','Woven cotton'),blackJeans(),boots(),[jacket('Black fitted motorcycle jacket','Black','A fitted black leather motorcycle jacket with a low collar and silver zips.')])
],'https://www.etonline.com/tv/215862_once_upon_a_time_hook_wedding_suit_photo_colin_odonoghue_jennifer_morrison_captain_swan');
add('david-nolan',[
 look('gray-denim','Storybrooke · gray denim jacket','Once Upon a Time · S5 E6 “The Bear and the Bow”',g('Plain T-shirt','Gray','A plain gray crew-neck cotton T-shirt.','Cotton jersey'),jeans(),foot('Ankle boots','Brown'),[jacket('Gray denim trucker jacket','Gray','A gray denim jacket with a pointed collar, chest pockets and metal front buttons.','Denim')]),
 look('black-leather','Storybrooke · black leather jacket and knit',modern,knit('Navy','A dark-navy long-sleeved crew-neck knit.'),jeans(),foot('Ankle boots','Brown'),[jacket('Black leather town jacket','Black','A hip-length black leather jacket with a zip front and a simple collar.')]),
 look('sheriff-plaid','Storybrooke · rolled-sleeve plaid shirt',modern,g('Button-down shirt','Red','A red-and-dark plaid shirt with sleeves rolled to the forearms, worn over a light undershirt.','Cotton'),jeans(),foot('Ankle boots','Brown'))
],'https://wornontv.net/53488/');
add('zelena',[
 look('green-fur','Storybrooke · green fur jacket',modern,blouse('Black','A fitted black top with a simple open neckline.'),pants(),pumps(),[jacket('Green shaggy fur jacket','Green','A short green shaggy fur-textured jacket with a loose collar.','Fur-textured fabric')]),
 look('witch-gown','Black high-collared witch gown','Once Upon a Time · enchanted-realm wardrobe',g('Evening gown','Black','A fitted black long-sleeved gown with a sharply raised collar, dark textured panels and a long layered skirt.','Textured woven fabric'),null,foot('Knee-high boots','Black','High heel (7–9 cm)'),[],[extra('Tall black pointed hat','Hat','Black','Felt','A tall black pointed witch hat with a broad brim.'),extra('Green stone pendant','Necklace','Green','Stone and metal','A large green stone pendant at the chest.')]),
 look('kelly-leopard','Modern · Kelly West leopard-print coat','Once Upon a Time · Season 7 / Kelly West',blouse('Red','A fitted deep-red blouse with an open neckline.'),pants(),pumps(),[coat('Leopard-print statement coat','Brown','A brown-and-black leopard-pattern coat with broad lapels and a dark lining.','Printed fabric')])
],'https://wornontv.net/once-upon-a-time/zelena/');
add('ruby-lucas',[
 look('peasant-leather','Storybrooke · black peasant dress and burgundy leggings',modern,g('Tunic','Black','A short black peasant-style dress with a gathered neckline and flowing sleeves.'),g('Leggings','Burgundy','Fitted burgundy leather-look leggings.','Leather'),boots()),
 look('sheer-red','Storybrooke · red sheer shirt and leather trousers',modern,blouse('Red','A red long-sleeved sheer shirt over a dark fitted lining.'),g('Trousers','Black','Fitted black leather trousers.','Leather'),boots()),
 look('ombre-fur','Storybrooke · ombré fur jacket',modern,blouse('Black','A fitted dark top with a scoop neckline.'),g('Mini skirt','Black','A short black fitted skirt.'),foot('Knee-high boots'),[jacket('Ombré faux-fur jacket','Brown','A short faux-fur jacket fading from pale tan to dark brown.','Faux fur')],[extra('Black opaque tights','Tights','Black','Nylon','Plain black opaque tights.')])
],'https://wornontv.net/once-upon-a-time/ruby/');
add('mr-gold',[
 look('pinstripe','Storybrooke · dark pinstripe three-piece suit',modern,g('Button-down shirt','White','A white formal shirt with a dark patterned tie and matching pinstripe waistcoat.','Cotton and suiting'),g('Trousers','Navy','Dark-navy pinstripe suit trousers.','Wool suiting'),flat(),[jacket('Navy pinstripe suit jacket','Navy','A tailored dark-navy pinstripe jacket with narrow lapels.','Wool suiting')]),
 look('burgundy-waistcoat','Storybrooke · burgundy waistcoat and dark suit',modern,g('Button-down shirt','White','A white shirt, dark tie and deep-burgundy button-front waistcoat.','Cotton and suiting'),pants(),flat(),[jacket('Black tailored suit coat','Black','A dark fitted suit jacket worn open over the burgundy waistcoat.','Wool suiting')]),
 look('weaver','Modern · Weaver’s leather detective jacket','Once Upon a Time · Season 7 / Weaver',g('Plain T-shirt','Gray','A faded dark-gray crew-neck T-shirt.','Cotton jersey'),blackJeans(),boots(),[jacket('Black weathered leather jacket','Black','A weathered black leather detective jacket with a front zipper and practical pockets.')])
],'https://onceuponatime.fandom.com/wiki/Weaver');
add('robin-hood',[
 look('new-york-racer','Modern · New York green racer jacket','Once Upon a Time · S4 E17 “Heart of Gold”',g('Henley shirt','Gray','A gray casual Henley with a short button placket.','Cotton jersey'),jeans(),foot('Ankle boots','Brown'),[jacket('Green leather racer jacket','Green','A dark-green fitted leather racer jacket with a short stand collar and zip front.')]),
 look('quilted-coat','Storybrooke · quilted outdoor coat','Once Upon a Time · S3 E13 “Witch Hunt”',g('Henley shirt','Green','A muted olive-green long-sleeved top with a short open placket.','Cotton'),pants('Brown'),foot('Knee-high boots','Brown','Low heel (1–3 cm)'),[coat('Brown quilted outdoor coat','Brown','A brown quilted outdoor coat with a hood and practical front pockets.','Quilted woven fabric')]),
 look('tavern','Tavern keeper’s linen and leather','Once Upon a Time · S4 E17 “Heart of Gold” / flashback',g('Blouse','Cream','A loose cream linen shirt with long sleeves and an open lace-neck fastening.','Linen'),pants('Brown'),foot('Knee-high boots','Brown','Low heel (1–3 cm)'),[extra('Brown leather waistcoat','Waistcoat','Brown','Leather','A plain weathered brown leather waistcoat with a broad waist belt.')]),
 look('wish-town','Modern · Wish Realm counterpart’s town clothes','Once Upon a Time · Season 6 / Wish Realm counterpart',g('Henley shirt','Gray','A gray casual long-sleeved shirt with a short neck opening.','Cotton jersey'),blackJeans(),foot('Ankle boots','Brown'),[jacket('Dark brown casual leather jacket','Brown','A dark-brown leather jacket with a low collar and front fastening.')])
],'https://onceuponatime.fandom.com/wiki/Heart_of_Gold');
add('betty-cooper',[
 look('green-polka','Green polka-dot dress',rd,g('Dress','Green','A green dress with small pale polka dots, a fitted waist and a flared skirt.'),null,foot('Pumps','Cream')),
 look('plaid-pantsuit','Plaid blazer and matching trousers',rd,blouse('Cream','A plain light blouse with a simple neckline.'),g('Trousers','Gray','Gray plaid tailored trousers with a neat waistband.','Woven suiting'),pumps(),[jacket('Gray plaid tailored blazer','Gray','A fitted gray checked blazer with shaped lapels.','Woven suiting')]),
 look('blue-polo','Blue contrast-trim polo outfit',rd,g('Polo shirt','Blue','A blue short-sleeved knit polo top with pale contrast edging.','Fine knit'),g('Skirt','Blue','A blue fitted skirt with a neat waistband.'),sneakers())
],'https://wornontv.net/riverdale/betty-cooper/');
add('veronica-lodge',[
 look('purple-two-tone','Purple two-tone dress',rd,g('Dress','Purple','A fitted purple two-tone dress with contrasting light and dark panels and a shaped waist.'),null,pumps()),
 look('black-white-set','Black contrast-trim top and skirt',rd,g('Crop top','Black','A fitted black top with white contrast edging and a neat collar.'),g('Skirt','Black','A matching black fitted skirt with pale contrast edging.'),pumps()),
 look('purple-suit','Purple cropped blazer and matching skirt',rd,blouse('Black','A simple fitted black top.'),g('Mini skirt','Purple','A tailored purple short skirt with a defined waist.','Suiting'),pumps(),[jacket('Purple cropped blazer','Purple','A fitted cropped purple blazer with structured shoulders and lapels.','Suiting')])
],'https://wornontv.net/riverdale/veronica-lodge/');
add('cheryl-blossom',[
 look('red-gown','Red evening gown',rd,g('Evening gown','Red','A bright-red fitted evening gown with a shaped bodice and a long skirt.','Satin-like fabric'),null,foot('Pumps','Red','High heel (7–9 cm)')),
 look('red-check-set','Red embellished check sweater and skirt',rd,knit('Red','A red checked knit top with small decorative embellishments.'),g('Mini skirt','Red','A coordinating red checked mini skirt with a fitted waist.'),pumps())
],'https://wornontv.net/riverdale/cheryl-blossom/');
add('toni-topaz',[
 look('snake-ombre','Snakeskin ombré dress',rd,g('Dress','Gray','A fitted snakeskin-print dress fading through gray and darker tones with a shaped waist.','Printed stretch fabric'),null,boots()),
 look('blue-blazer-plaid','Blue asymmetric blazer and plaid dress',rd,g('Dress','Blue','A short blue plaid dress with a fitted bodice.'),null,boots(),[jacket('Blue asymmetric blazer','Blue','A blue tailored blazer with an asymmetric front and shaped lapels.','Woven suiting')]),
 look('tiger-sequin','Orange tiger-stripe sequin mini dress',rd,g('Dress','Orange','A short orange-and-black tiger-striped dress with a shimmering sequin surface and fitted silhouette.','Sequined fabric'),null,foot('Ankle boots','Black','High heel (7–9 cm)'))
],'https://wornontv.net/riverdale/toni-topaz/');
add('archie-andrews',[
 look('red-jacket','Red casual jacket','Riverdale · S6 E22',g('Plain T-shirt','White','A plain fitted white crew-neck T-shirt.','Cotton jersey'),jeans(),sneakers(),[jacket('Red casual jacket','Red','A red casual zip-front jacket with a simple collar.','Woven fabric')]),
 look('green-trucker','Green trucker jacket','Riverdale · S6 E21',g('Plain T-shirt','Gray','A plain fitted gray crew-neck T-shirt.','Cotton jersey'),jeans(),foot('Work boots','Brown','Low heel (1–3 cm)'),[jacket('Green trucker jacket','Green','An olive-green trucker jacket with chest pockets and a button front.','Woven cotton')]),
 look('blue-striped-knit','Blue striped sweater','Riverdale · S7 E12',knit('Blue','A blue long-sleeved sweater with horizontal pale and darker stripes.'),jeans(),sneakers())
],'https://www.shopyourtv.com/tag/archie-andrews/');
add('jughead-jones',[
 look('orange-flannel','Orange plaid flannel outfit',rd,g('Button-down shirt','Orange','An orange-and-dark plaid flannel shirt over a plain dark T-shirt.','Flannel'),blackJeans(),boots()),
 look('mustard-cardigan','Mustard knit cardigan outfit',rd,g('Plain T-shirt','Cream','A plain light crew-neck T-shirt.','Cotton jersey'),pants('Brown'),flat(),[extra('Mustard knit cardigan','Cardigan','Yellow','Knit fabric','A mustard-yellow button-front cardigan with a loose textured knit.')]),
 look('green-corduroy','Green corduroy jacket outfit',rd,g('Button-down shirt','Gray','A plain light-gray casual shirt.','Cotton'),blackJeans(),boots(),[jacket('Green corduroy jacket','Green','A green corduroy jacket with a pointed collar and front pockets.','Corduroy')])
],'https://wornontv.net/riverdale/jughead-jones/');
add('josie-mccoy',[
 look('pink-metallic','Metallic pink biker jacket and printed skirt',rd,g('Tank top','Black','A fitted plain black top.','Cotton jersey'),g('Mini skirt','Pink','A short multicolor printed skirt with a fitted waist.'),boots(),[jacket('Metallic pink motorcycle jacket','Pink','A shiny metallic-pink fitted biker jacket with a diagonal front zipper.','Metallic leather-like fabric')]),
 look('studded-midi','Black studded midi dress',rd,g('Dress','Black','A fitted black mid-calf dress with small metal stud embellishments.'),null,pumps()),
 look('denim-jumpsuit','Denim jumpsuit',rd,g('Jumpsuit','Blue','A fitted blue denim jumpsuit with a shaped waist, front fastening and full-length legs.','Denim'),null,boots()),
 look('orange-fringe','Orange cutout dress and fringed jacket',rd,g('Dress','Orange','An orange fitted short dress with shaped cutout details.'),null,boots(),[jacket('Fringed jacket','Brown','A short brown jacket with long decorative fringe along the sleeves and hem.','Suede')])
],'https://wornontv.net/riverdale/josie-mccoy/');
add('reggie-mantle',[
 look('black-polo','Black polo and dark trousers','Riverdale · S6 E6',g('Polo shirt','Black','A fitted black short-sleeved polo with a neat collar.','Cotton knit'),pants(),foot('Oxford shoes','Black','Flat / no raised heel')),
 look('velvet-suit','Red velvet suit jacket','Riverdale · S6 E3',g('Button-down shirt','Black','A black formal shirt with an open collar.','Cotton'),pants(),foot('Oxford shoes','Black','Low heel (1–3 cm)'),[jacket('Red velvet formal jacket','Red','A deep-red velvet suit jacket with dark lapels and a shaped waist.','Velvet')]),
 look('yellow-polo','Yellow knit polo','Riverdale · S7 E17',g('Polo shirt','Yellow','A yellow short-sleeved knit polo with a dark-edged collar.','Fine knit'),pants('Brown'),flat()),
 look('red-rugby','Red-striped rugby shirt','Riverdale · S4 E4',g('Polo shirt','Red','A long-sleeved rugby shirt with red and dark horizontal stripes and a pale collar.','Cotton jersey'),blackJeans(),sneakers())
],'https://www.shopyourtv.com/tag/reggie-mantle/');
add('kevin-keller',[
 look('navy-peacoat','Navy peacoat outfit','Riverdale · S4 E10',knit('Gray','A gray crew-neck knit over a light collared shirt.'),pants('Tan'),flat(),[coat('Navy double-breasted peacoat','Navy','A short navy double-breasted wool coat with broad lapels.')]),
 look('pink-polo','Pink contrast-sleeve polo','Riverdale · S3 E6',g('Polo shirt','Pink','A pink polo shirt with contrasting darker sleeves and a neat collar.','Cotton knit'),pants('Tan'),flat()),
 look('rainbow-check','Multicolor checked shirt','Riverdale · S5 E18',g('Button-down shirt','Blue','A multicolor checked button-front shirt with blue, red, yellow and pale squares.','Cotton'),jeans(),sneakers()),
 look('navy-jacket','Navy casual jacket','Riverdale · S5 E7',g('Plain T-shirt','Gray','A plain gray casual crew-neck T-shirt.','Cotton jersey'),jeans(),flat(),[jacket('Navy casual jacket','Navy','A navy hip-length casual jacket with a front fastening.','Woven fabric')])
],'https://www.shopyourtv.com/tag/kevin-keller/');
add('tabitha-tate',[
 look('blue-knit-set','Blue ribbed sweater and matching trousers',rd,knit('Blue','A fitted blue ribbed long-sleeved sweater.'),g('Trousers','Blue','Coordinating blue ribbed full-length trousers.','Ribbed knit'),boots()),
 look('pink-sequin','Pink sequin midi dress',rd,g('Dress','Pink','A fitted pink mid-calf dress covered in small shimmering sequins.','Sequined fabric'),null,pumps()),
 look('blue-floral-jacket','Blue leather jacket and floral top',rd,blouse('Blue','A floral-print top with blue and pale blossoms.'),jeans(),boots(),[jacket('Blue leather motorcycle jacket','Blue','A fitted blue leather motorcycle jacket with metal front zips.')]),
 look('brown-suede','Brown suede motorcycle jacket',rd,knit('Pink','A soft pink short-sleeved fitted knit top.'),jeans(),foot('Ankle boots','Brown'),[jacket('Brown suede biker jacket','Brown','A brown suede motorcycle jacket with a diagonal zipper and lapels.','Suede')])
],'https://wornontv.net/riverdale/tabitha-tate/');
for(const id of ['once-upon-a-time','riverdale']){const group=window.characterPresetCatalog.categories.find(c=>c.id===id);group.description='10 adult photographic profiles, each with five screen wardrobes (50 outfits).';group.interpretation+=' Each character has five starter wardrobes. Modern Storybrooke, Hyperion Heights and other-world looks are identified by their labels; counterpart costumes are explicitly labeled. Loading an installed profile adds missing look IDs while retaining saved identity and user edits.';}
})();

(()=>{
window.clothingColorCatalog=[["Black","#171717"],["White","#ffffff"],["Cream","#f3e9d4"],["Ivory","#efe8d4"],["Gray","#808080"],["Charcoal","#363636"],["Silver","#b6bdc5"],["Tan","#c4a484"],["Brown","#896b4d"],["Chocolate","#5c3317"],["Red","#cd3633"],["Burgundy","#800020"],["Rust","#ad5c30"],["Orange","#ed8936"],["Yellow","#d7b52a"],["Gold","#d4af37"],["Olive","#5c6c49"],["Green","#228b22"],["Emerald green","#047857"],["Teal","#0b726b"],["Mint","#a8d5ba"],["Blue","#315bab"],["Navy blue","#1c2e4a"],["Powder blue","#b2cbd3"],["Purple","#633a91"],["Lavender","#c4b5fd"],["Pink","#ec8fbb"],["Blush pink","#d8b6c5"],["Coral","#f08080"],["Two-tone black and white","#171717","#ffffff"]];
const colorNames=window.clothingColorCatalog.map(([name])=>name);
for(const group of ['top','bottom'])clothingDetails[group].find(([key])=>key==='color')[2]=[...colorNames];
shoeDefinitions.find(([id])=>id==='shoeColor')[2]=[...colorNames];
const shoeColorSelect=document.getElementById('shoeColor'),oldShoeColor=shoeColorSelect.value;shoeColorSelect.replaceChildren(...colorNames.map(v=>new Option(v,v)));if(colorNames.includes(oldShoeColor))shoeColorSelect.value=oldShoeColor;
const commonTops=['Knit sweater','Plain T-shirt','Button-down shirt','Polo shirt','Henley shirt','Tank top','Sweatshirt','Hoodie','Cardigan','Jacket','Denim jacket','Leather jacket','Bomber jacket','Blazer','Waistcoat','Trench coat','Overcoat','Puffer jacket','Sports jersey','Jumpsuit','Romper','Overalls','Boiler suit','Robe'];
const feminineTops=['Blouse','Camisole','Wrap top','Peplum top','Crop top','Tunic','Bodysuit','Ballet leotard','Corset','Underbust corset','Dress','Shirt dress','Wrap dress','Slip dress','Sweater dress','A-line dress','Bodycon dress','Maxi dress','Evening gown'];
const commonBottoms=['Trousers','Jeans','Chinos','Cargo trousers','Joggers','Sweatpants','Track pants','Linen trousers','Shorts','Cargo shorts','Bermuda shorts','Cycling shorts','Leggings'];
const feminineBottoms=['Pencil skirt','A-line skirt','Pleated skirt','Wrap skirt','Denim skirt','Mini skirt','Midi skirt','Maxi skirt','Circle skirt','Slip skirt','Skort','Culottes','Palazzo trousers','Ballet tutu'];
window.fullBodyTopStyles=['Jumpsuit','Romper','Overalls','Boiler suit','Robe','Dress','Shirt dress','Wrap dress','Slip dress','Sweater dress','A-line dress','Bodycon dress','Maxi dress','Evening gown'];
const tops=[...commonTops,...feminineTops],bottoms=[...commonBottoms,...feminineBottoms];
definitions.find(([id])=>id==='top')[2]=tops;definitions.find(([id])=>id==='bottom')[2]=bottoms;
wardrobeOptions.Man.top=[...commonTops];wardrobeOptions.Woman.top=[...tops];wardrobeOptions.Man.bottom=[...commonBottoms];wardrobeOptions.Woman.bottom=[...bottoms];
clothingDetails.bottom.find(([key])=>key==='fit')[2]=['Regular fit','Skinny','Slim fit','Straight','Relaxed','Wide','Flared','Bootcut','Tapered','Tailored','A-line','Pleated'];
clothingDetails.top.find(([key])=>key==='fit')[2]=['Regular fit','Slim fit','Relaxed fit','Oversized','Tailored','Boxy','Fitted'];
clothingDetails.top.find(([key])=>key==='length')[2].push('Mini / upper-thigh length','Knee length','Midi / mid-calf length','Ankle length','Floor length');
clothingDetails.top.find(([key])=>key==='closure')[2].push('Front busk fastening','Lace-up fastening');
clothingDetails.top.find(([key])=>key==='neckline')[2].push('Strapless','Sweetheart neckline','Halter neck');

const neckDetails=[
['straps','Strap design',['No straps','Thin shoulder straps','Wide shoulder straps','Thin halter straps passing behind the neck','Wide halter straps passing behind the neck','Crossed halter straps','Crossed back straps','One-shoulder strap']],
['neckBand','Neck band / choker',['No neck band','Narrow matching fabric band around the neck, attached to the garment','Wide matching fabric choker band around the neck, attached to the garment','Matching fabric choker around the neck, separate from the garment','Ribbon tied around the neck, attached to the garment']]
];
clothingDetails.top.push(...neckDetails);
for(const [key,label] of neckDetails){const id='top_'+key,wrap=document.createElement('div'),lab=document.createElement('label'),checkbox=document.createElement('input'),select=document.createElement('select');lab.className='check-line';checkbox.type='checkbox';checkbox.id=id+'_enabled';lab.append(checkbox,document.createTextNode(label));select.id=id;select.name=id;select.disabled=true;select.setAttribute('aria-label','top '+label);wrap.append(lab,select);document.getElementById('topAdvanced').append(wrap);}
const neckHint=document.createElement('p');neckHint.className='note';neckHint.textContent='For a halter corset with a neck band: choose Halter neck, enable Strap design, then enable Neck band / choker. The neck band is separate from the neckline shape.';document.getElementById('topAdvanced').after(neckHint);

const baseClothingPrompt=clothingPrompt;clothingPrompt=function(){return baseClothingPrompt()+(window.fullBodyTopStyles.includes(get('top'))?(get('bottom')==='None'?'\nFull-body garment: '+get('top')+'. No separate bottom garment is selected; do not add trousers, skirts, shorts, or leggings underneath.':'\nFull-body garment: '+get('top')+'. Keep the selected bottom clothing ('+get('bottom')+') as a separate layer underneath the garment; do not replace or remove it. Show the layers naturally where the pose and garment allow.'):'')};
for(const [group,items] of Object.entries(clothingDetails))for(const [key,,options] of items){const select=document.getElementById(group+'_'+key);const previous=select.value;select.replaceChildren(...options.map(v=>new Option(v,v)));if(options.includes(previous))select.value=previous;}
window.normalizeClothing=function normalize(value){if(!value||typeof value!=='object')return value;
if(value.bottom==='Straight-leg jeans'){value.bottom='Jeans';if(!value.bottom_fit_enabled){value.bottom_fit='Straight';value.bottom_fit_enabled=true}}
if(value.bottom==='Skinny jeans'){value.bottom='Jeans';value.bottom_fit='Skinny';value.bottom_fit_enabled=true}
if(value.bottom==='Tailored trousers'){value.bottom='Trousers';if(!value.bottom_fit_enabled){value.bottom_fit='Tailored';value.bottom_fit_enabled=true}}
if(value.top==='Fitted knit sweater'){value.top='Knit sweater';if(!value.top_fit_enabled){value.top_fit='Fitted';value.top_fit_enabled=true}}
if(value.top==='Silk blouse'){value.top='Blouse';if(!value.top_material_enabled){value.top_material='Silk';value.top_material_enabled=true}}
if(value.top==='Cropped jacket'){value.top='Jacket';if(!value.top_length_enabled){value.top_length='Cropped';value.top_length_enabled=true}}
for(const child of Object.values(value))if(child&&typeof child==='object')normalize(child);return value;};
// Update existing saved characters, outfits and scene drafts in place.
for(const key of ['characterStudio.latest.v1','characterStudio.library.v1','characterStudio.closets.v1','characterStudio.scene.v1']){try{const raw=localStorage.getItem(key);if(raw)localStorage.setItem(key,JSON.stringify(window.normalizeClothing(JSON.parse(raw))))}catch{}}
syncWardrobe();
const hint=document.createElement('p');hint.className='note';hint.textContent='Dresses and full-body garments are available under Top. Bottom clothing remains selectable for layering underneath. Choose the garment under Style, then enable Fit in Advanced. For skinny jeans: Jeans + Fit: Skinny. Pencil skirt is a garment style.';hint.style.margin='12px 0';document.getElementById('bottomBase').after(hint);
})();

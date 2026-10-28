/* Prototype adapter: all choices are views of the existing character controls. No preview state is saved. */
(()=>{
'use strict';
const $=id=>document.getElementById(id),assets=window.animeSpriteAssets,api=window.characterStudio,host=$('studioSection_preview');
if(!host||!assets||!api)return;
const make=(tag,cls,text)=>{const el=document.createElement(tag);if(cls)el.className=cls;if(text!==undefined)el.textContent=text;return el;};
const choices={
  hair:{bob:{hairType:'Bob haircut',hairLength:'Short'},straight:{hairType:'Straight',hairLength:'Long'},wavy:{hairType:'Wavy',hairLength:'Long'},ponytail:{hairType:'High ponytail',hairLength:'Long'},shoulder:{hairType:'Straight',hairLength:'Medium / shoulder-length'}},
  tops:{tshirt:{top:'Plain T-shirt'},blouse:{top:'Blouse'},tank:{top:'Tank top'},halter:{top:'Tank top',top_neckline_enabled:true,top_neckline:'Halter neck'},hoodie:{top:'Hoodie'}},
  bottoms:{jeans:{bottom:'Jeans'},trousers:{bottom:'Trousers',bottom_fit_enabled:true,bottom_fit:'Slim fit'},shorts:{bottom:'Shorts'},pencil:{bottom:'Pencil skirt'},aline:{bottom:'A-line skirt'}},
  shoes:{sneakers:{shoes:'Sneakers'},flats:{shoes:'Ballet flats'},ankle:{shoes:'Ankle boots',heelHeight:'Mid heel (4–6 cm)',heelShape:'Block heel'},knee:{shoes:'Knee-high boots',heelHeight:'Mid heel (4–6 cm)',heelShape:'Block heel'},pumps:{shoes:'Pumps',heelHeight:'High heel (7–9 cm)',heelShape:'Stiletto heel'}}
};
const hairColors=[['Black','Black','#24232d'],['Brown','Dark brown','#79503d'],['Blonde','Blonde','#d8b871'],['Red','Red','#a94f3f'],['White','White','#e4e3e7']];
const skinColors=[['Fair','#f1c8b4'],['Light-medium','#dbac8f'],['Tan','#bc8062'],['Brown','#925c43'],['Deep brown','#643d32']];
const garmentColors=['Black','White','Red','Blue','Cream','Pink','Teal','Brown'];
const value=(c,id)=>String(c[id]==='__custom__'?c[id+'_custom']||'Custom':c[id]||'');
function mix(hex,target,amount){return '#'+[1,3,5].map(i=>Math.round(parseInt(hex.slice(i,i+2),16)*(1-amount)+parseInt(target.slice(i,i+2),16)*amount).toString(16).padStart(2,'0')).join('');}
function color(raw,fallback='#808080'){const resolved=window.clothingColors.resolve(raw);return /^#[a-f\d]{6}$/i.test(resolved.hex)?resolved.hex:fallback;}
function read(){
  const c=api.current().controls,notes=[],h=value(c,'hairType'),len=value(c,'hairLength'),t=value(c,'top'),b=value(c,'bottom'),s=value(c,'shoes');
  let hairKey=/ponytail/i.test(h)?'ponytail':/bob|pixie/i.test(h)?'bob':/wavy|curly|coily/i.test(h)?'wavy':/short|medium|shoulder/i.test(len)?'shoulder':'straight';
  if(/bob/i.test(h)&&!/short/i.test(len))notes.push('Bob uses the short-bob sprite.');
  if(!['Straight','Wavy','High ponytail','Bob haircut'].includes(h))notes.push('Hair: '+h+' is approximated.');
  const halter=c.top_neckline_enabled&&/halter/i.test(value(c,'top_neckline'));
  const topKey=halter?'halter':/hoodie/i.test(t)?'hoodie':/blouse|button-down|polo/i.test(t)?'blouse':/tank|camisole/i.test(t)?'tank':'tshirt';
  const bottomKey=/pencil/i.test(b)?'pencil':/skirt|tutu|skort/i.test(b)?'aline':/shorts/i.test(b)?'shorts':/jeans|denim/i.test(b)?'jeans':'trousers';
  const shoeKey=/knee|calf|over-the-knee/i.test(s)?'knee':/boot/i.test(s)?'ankle':/pump|slingback/i.test(s)?'pumps':/sneaker/i.test(s)?'sneakers':'flats';
  const exactTop=['Plain T-shirt','Blouse','Tank top','Hoodie'].includes(t);
  if(!exactTop)notes.push('Top: '+t+' → '+assets.tops[topKey].label+' approximation.');
  if(!['Jeans','Trousers','Shorts','Pencil skirt','A-line skirt'].includes(b))notes.push('Bottom: '+b+' → '+assets.bottoms[bottomKey].label+' approximation.');
  if(!['Sneakers','Ballet flats','Ankle boots','Knee-high boots','Pumps'].includes(s))notes.push('Footwear: '+s+' → '+assets.shoes[shoeKey].label+' approximation.');
  if(c.sex!=='Woman')notes.push('The illustrated body is the female prototype; the selected sex is '+c.sex+'.');
  const skinName=c.face_skinTone_enabled?value(c,'face_skinTone'):'Fair';
  let skin=skinColors.find(([name])=>name===skinName)?.[1];
  if(!skin){skin=/very deep/i.test(skinName)?'#4e302b':/deep brown/i.test(skinName)?'#643d32':/brown/i.test(skinName)?'#925c43':/deep tan/i.test(skinName)?'#a36a4e':/tan/i.test(skinName)?'#bc8062':/medium/i.test(skinName)?'#dbac8f':/very fair/i.test(skinName)?'#f5d7c7':'#f1c8b4';}
  const hc=value(c,'hairColor'),hairColor=hairColors.find(([,v])=>v===hc)?.[2]||(/light brown/i.test(hc)?'#a87b55':/auburn/i.test(hc)?'#824b3e':color(hc));
  const palette=c.paletteMode==='custom'?[1,2,3].map(i=>c['paletteColor'+i]==='custom'?c['paletteWheel'+i]:c['paletteColor'+i]):window.paletteColors(c.palette).map(v=>v[1]);
  const garmentColor=(id,flag,index)=>c[flag]?color(value(c,id)):color(palette[index]);
  const eye=c.face_eyeColor_enabled?value(c,'face_eyeColor'):'Blue',eyes={Blue:'#367fba',Brown:'#815332','Dark brown':'#4f342b',Hazel:'#8b8c48',Amber:'#b38b3d',Green:'#598b72',Gray:'#8294a6'};
  return {hair:hairKey,tops:topKey,bottoms:bottomKey,shoes:shoeKey,colors:{skin,hair:hairColor,top:garmentColor('top_color','top_color_enabled',0),bottom:garmentColor('bottom_color','bottom_color_enabled',1),shoe:garmentColor('shoeColor','shoeColorOverride',2),eye:eyes[eye]||'#367fba'},notes,c,skinName};
}
function svg(visual,group,key){
  const v={...visual,...(group?{[group]:key}:{})},colors=v.colors;
  const vars=Object.entries(colors).map(([k,c])=>'--'+k+':'+c).concat(['skin-shadow','skin-line','hair-shadow','hair-light','top-shadow','bottom-shadow','bottom-light','shoe-shadow','shoe-light'].map(k=>{const base=k.startsWith('skin')?'skin':k.split('-')[0],light=k.endsWith('light');return '--'+k+':'+mix(colors[base],light?'#ffffff':'#2d2235',k==='skin-line'?.35:light?.23:.21);})).join(';');
  const layers={
    'back-hair':assets.hair[v.hair].back,'base-body':assets.body,face:assets.face,
    'bottom-clothing':assets.bottoms[v.bottoms].art,'top-clothing':assets.tops[v.tops].art,
    footwear:assets.shoes[v.shoes].art,'front-hair':assets.hair[v.hair].front
  };
  const crops={hair:'95 36 130 220',tops:'74 155 172 204',bottoms:'85 312 150 235',shoes:'100 503 120 225'};
  const included=group==='hair'?['back-hair','base-body','face','front-hair']:group==='tops'?['base-body','top-clothing']:group==='bottoms'?['base-body','bottom-clothing']:group==='shoes'?['base-body','footwear']:assets.order;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${crops[group]||assets.viewBox}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${group?assets[group][key].label:'Full-body illustrated adult character'}" style="${vars}"><g stroke="#392e3e" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round">${included.map(id=>`<g data-art-layer="${id}">${layers[id]}</g>`).join('')}</g></svg>`;
}
function commit(patch){const state=api.current();Object.assign(state.controls,patch);api.apply(state);window.studioPresentation.refresh();refresh();}
function choose(group,key){if(!choices[group]?.[key])return;const patch={...choices[group][key]};if(group==='tops')Object.assign(patch,{top_neckline_enabled:key==='halter',top_straps_enabled:false,top_neckBand_enabled:false});if(group==='bottoms'&&key!=='trousers')patch.bottom_fit_enabled=false;if(group==='shoes'&&!['ankle','knee','pumps'].includes(key))Object.assign(patch,{heelHeight:'Style default',heelShape:'Style default'});commit(patch);}
function chooseColor(group,name){if(group==='hair'){const match=hairColors.find(([label])=>label===name);if(match)commit({hairColor:match[1]});return;}if(group==='skin'){if(skinColors.some(([label])=>label===name))commit({face_skinTone_enabled:true,face_skinTone:name});return;}const ids={tops:['top_color','top_color_enabled'],bottoms:['bottom_color','bottom_color_enabled'],shoes:['shoeColor','shoeColorOverride']};if(!ids[group])return;const [id,enabled]=ids[group];commit({[id]:name,[enabled]:true});}
function demo(kind){
  const patch={sex:'Woman',adultAge:'25–34 years old',build:'Average build',height:'Average height',proportions:'Natural proportions',hairColor:'Dark brown',hairType:'Straight',hairLength:'Medium / shoulder-length',face_skinTone:'Fair',face_skinTone_enabled:true,face_eyeColor:'Blue',face_eyeColor_enabled:true,face_expression:'Neutral relaxed expression',face_expression_enabled:true,presetIdentityEnabled:false,presetProfileId:'',presetIdentityText:'',top:'Plain T-shirt',bottom:'Jeans',shoes:'Sneakers',top_color:'White',top_color_enabled:true,bottom_color:'Blue',bottom_color_enabled:true,shoeColor:'White',shoeColorOverride:true,pose:'0',customPoseEnabled:false,imageFraming:'full'};
  for(const group of ['top','bottom'])for(const [key]of clothingDetails[group])if(key!=='color')patch[group+'_'+key+'_enabled']=false;
  for(const [id]of shoeDefinitions.slice(1))if(id!=='shoeColor')patch[id]='Style default';
  if(kind==='elegant')Object.assign(patch,{hairColor:'Black',hairType:'Straight',hairLength:'Long',top:'Blouse',top_color:'Red',bottom:'Pencil skirt',bottom_color:'Black',shoes:'Pumps',shoeColor:'Black',heelHeight:'High heel (7–9 cm)',heelShape:'Stiletto heel'});
  if(kind==='alternative')Object.assign(patch,{hairColor:'White',hairType:'Bob haircut',hairLength:'Short',top:'Tank top',top_neckline:'Halter neck',top_neckline_enabled:true,top_color:'Black',bottom:'Shorts',bottom_color:'Charcoal',shoes:'Knee-high boots',shoeColor:'Black',heelHeight:'Mid heel (4–6 cm)',heelShape:'Block heel'});
  commit(patch);
}
const demoBar=make('div','anime-test-looks'),demoTitle=make('span','','Test looks');demoBar.append(demoTitle);
for(const [id,label]of [['casual','A · Casual'],['elegant','B · Elegant'],['alternative','C · Alternative']]){const b=make('button','',label);b.type='button';b.onclick=()=>demo(id);demoBar.append(b);}
host.append(demoBar);
const layout=make('div','anime-layout'),figure=make('figure','anime-figure'),canvas=make('div','anime-canvas'),caption=make('figcaption','','2D prototype · adult female base'),controls=make('div','anime-controls'),limitations=make('p','anime-limits','Fixed body and neutral pose. Fine garment details, fabric, makeup, and other body types are not drawn in this prototype.');
canvas.id='animeCanvas';figure.append(make('span','anime-prototype-label','ADULT FEMALE / FIXED POSE'),canvas,caption);layout.append(figure,controls);host.append(layout,limitations);
const buttons=[],swatches=[];
function addColors(parent,group){const row=make('div','anime-swatches');row.setAttribute('role','group');row.setAttribute('aria-label',group+' colors');const colors=group==='hair'?hairColors.map(([name,,hex])=>[name,hex]):group==='skin'?skinColors:garmentColors.map(name=>[name,color(name)]);for(const [name,hex]of colors){const b=make('button','anime-swatch');b.type='button';b.style.setProperty('--swatch',hex);b.title=name;b.setAttribute('aria-label',(group==='tops'?'Top':group==='bottoms'?'Bottom':group==='shoes'?'Footwear':group==='hair'?'Hair':'Skin')+' color '+name);b.onclick=()=>chooseColor(group,name);row.append(b);swatches.push({group,name,hex,button:b});}parent.append(row);if(['tops','bottoms','shoes'].includes(group)){const b=make('button','anime-palette-link','Use clothing palette');b.type='button';b.onclick=()=>commit({[{tops:'top_color_enabled',bottoms:'bottom_color_enabled',shoes:'shoeColorOverride'}[group]]:false});parent.append(b);}return row;}
for(const [group,title]of [['hair','Hair'],['tops','Tops'],['bottoms','Bottoms'],['shoes','Footwear']]){
  const card=make('section','anime-option-card'),heading=make('h3','',title),grid=make('div','anime-options');grid.setAttribute('role','group');grid.setAttribute('aria-label',title+' illustration options');card.append(heading,grid);
  for(const [key,item]of Object.entries(assets[group])){const b=make('button','anime-option'),thumb=make('span','anime-thumb'),label=make('span','',item.label);b.type='button';b.setAttribute('aria-label','Preview '+item.label);b.onclick=()=>choose(group,key);thumb.setAttribute('aria-hidden','true');b.append(thumb,label);grid.append(b);buttons.push({group,key,button:b,thumb});}addColors(card,group);controls.append(card);
}
const skinCard=make('section','anime-option-card');skinCard.append(make('h3','','Skin tone'));addColors(skinCard,'skin');controls.append(skinCard);
const notes=make('div','anime-support-note');notes.setAttribute('role','status');notes.setAttribute('aria-live','polite');host.append(notes);
function fitPreview(){if(window.matchMedia?.('(max-width:760px)').matches)return;const deck=host.closest('.builder-deck');if(!deck||!deck.clientHeight)return;const height=Math.max(220,Math.min(620,deck.clientHeight-100));host.style.setProperty('--anime-height',height+'px');}
if(typeof ResizeObserver!=='undefined')new ResizeObserver(fitPreview).observe(host.closest('.builder-deck'));if(typeof MutationObserver!=='undefined')new MutationObserver(fitPreview).observe(host,{attributes:true,attributeFilter:['hidden']});if(window.addEventListener)window.addEventListener('resize',fitPreview);
let signature='';
function refresh(){fitPreview();const v=read(),key=JSON.stringify([v.hair,v.tops,v.bottoms,v.shoes,v.colors,v.notes,v.skinName]);if(key===signature)return;signature=key;canvas.innerHTML=svg(v);for(const item of buttons){item.button.setAttribute('aria-pressed',String(v[item.group]===item.key));item.thumb.innerHTML=svg(v,item.group,item.key);}for(const item of swatches){const actual=v.colors[{hair:'hair',skin:'skin',tops:'top',bottoms:'bottom',shoes:'shoe'}[item.group]];item.button.setAttribute('aria-pressed',String(actual.toLowerCase()===item.hex.toLowerCase()));}caption.textContent=assets.hair[v.hair].label+' · '+assets.tops[v.tops].label+' · '+assets.bottoms[v.bottoms].label+' · '+assets.shoes[v.shoes].label;notes.textContent=v.notes.length?v.notes.join(' ')+' Existing settings remain available in the other builder sections.':'All selected styles have prototype artwork. Colors follow the builder’s palette or enabled garment overrides.';}
for(const event of ['input','change'])document.addEventListener(event,refresh);
if(typeof MutationObserver!=='undefined')new MutationObserver(refresh).observe($('prompt'),{childList:true,subtree:true,characterData:true});
window.animePreview={read,refresh,choose,chooseColor,demo,svg:()=>svg(read()),supported:choices,render:svg};refresh();
})();

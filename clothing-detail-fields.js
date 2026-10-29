/* Structured construction fields shared by builder, closet, imports and prompts. */
(()=>{
const $=id=>document.getElementById(id),added=[];
shoeDefinitions.find(([id])=>id==='heelHeight')[2].push('Extreme heel (13–15 cm)');$('heelHeight').add(new Option('Extreme heel (13–15 cm)','Extreme heel (13–15 cm)'));
for(const group of ['top','bottom']){
 const material=clothingDetails[group].find(([key])=>key==='material');material[2].push('Cotton twill');$(group+'_material').add(new Option('Cotton twill','Cotton twill'));
 const rows=[['fabricWeight','Fabric weight',['Lightweight','Medium weight','Heavyweight']]];
 if(group==='top')rows.push(['panelMaterial','Panel material',['Lace','Mesh','Chiffon','Tulle','Leather','Satin']],['panelPlacement','Panel placement',['Shoulders','Sleeves','Upper chest','Back','Sides','Neckline']],['panelTransparency','Panel transparency',['Sheer','Semi-sheer','Opaque']]);
 for(const [key,label,values]of rows){clothingDetails[group].push([key,label,values]);const id=group+'_'+key,wrap=document.createElement('div'),lab=document.createElement('label'),check=document.createElement('input'),select=document.createElement('select');lab.className='check-line';check.type='checkbox';check.id=id+'_enabled';select.id=id;select.name=id;select.disabled=true;select.setAttribute('aria-label',group+' '+label);values.forEach(v=>select.add(new Option(v,v)));lab.append(check,document.createTextNode(label));wrap.append(lab,select);$(group+'Advanced').append(wrap);added.push(id);}
}
const exact=[...new Set([0,1,1.3,2,2.5,3,3.8,4,5,5.1,6,6.4,7,7.5,7.6,8,8.9,9,10,10.2,11,11.4,12,12.7,13,14,15])].sort((a,b)=>a-b).map(n=>n+' cm');
for(const [id,label,values]of [['heelMeasurement','Exact heel height',['Style default',...exact]],['hardwareColor','Hardware color',['Style default','Gold','Silver','Bronze','Black','Gunmetal','Rose gold']]]){shoeDefinitions.push([id,label,values]);const wrap=document.createElement('div'),lab=document.createElement('label'),select=document.createElement('select');lab.htmlFor=id;lab.textContent=label;select.id=id;select.name=id;select.setAttribute('aria-label',label);values.forEach(v=>select.add(new Option(v,v)));wrap.append(lab,select);$('shoeFields').append(wrap);added.push(id);}
function heelBucket(cm){return cm<0||cm>15?'Style default':cm===0?'Flat / no raised heel':cm<=3?'Low heel (1–3 cm)':cm<=6?'Mid heel (4–6 cm)':cm<=9?'High heel (7–9 cm)':cm<=12?'Very high heel (10–12 cm)':'Extreme heel (13–15 cm)';}
function syncHeels(c,changed){const cm=Number.parseFloat(c.heelMeasurement);if(!Number.isFinite(cm))return false;const bucket=heelBucket(cm);if(changed==='heelHeight'&&c.heelHeight!==bucket){c.heelMeasurement='Style default';return true;}if(changed==='heelMeasurement'&&c.heelHeight!==bucket){c.heelHeight=bucket;return true;}return false;}
window.structuredClothingFields={ids:added,heelBucket,syncHeels,resetMissing(controls){for(const id of added){if(!(id in controls))$(id).value=id.startsWith('top_')||id.startsWith('bottom_')?$(id).options[0].value:'Style default';if($(id+'_enabled')&&!(id+'_enabled' in controls))$(id+'_enabled').checked=false;}}};
})();

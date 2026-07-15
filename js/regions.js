const CITY_LIBRARY = [
  {
    id:'jerusalem', name:'ירושלים', zone:'center',
    riddle:'אני בירת ישראל ועיר הקודש. בחורף, לפעמים השלג מכסה את ההר שלי.',
    hint:'אני נמצאת בהרי יהודה ומשמשת מרכז שלטוני ולאומי.',
    position:{x:57.2,y:41.1,tolerance:5.2},
    region:'הרי יהודה / ישראל',
    regionChoices:['הרי יהודה / ישראל','מישור החוף','הנגב'],
    role:'מרכז השלטון, בירת המדינה ומרכז לאומי',
    feature:'עיר הקודש לשלוש הדתות, היסטוריה עתיקה ושילוב בין עבר להווה.',
    type:'מרכז מטרופוליני ולאומי',
    services:['מוסדות שלטון לאומיים','מרכזי בריאות וחינוך','תרבות ומורשת'],
    distractors:['נמל ימי מרכזי','מרכז חקלאי אזורי']
  },
  {
    id:'tel-aviv', name:'תל אביב', zone:'center',
    riddle:'אני נמצאת במרכז גוש דן ונחשבת לבירת התרבות והכלכלה. מכנים אותי העיר "ללא הפסקה".',
    hint:'אני העיר המרכזית במטרופולין הגדול בישראל ושוכנת לחוף הים התיכון.',
    position:{x:31.8,y:31.0,tolerance:5.0},
    region:'גוש דן / מישור החוף',
    regionChoices:['גוש דן / מישור החוף','עמק יזרעאל','רמת הגולן'],
    role:'הלב הכלכלי, העסקי והתרבותי של המדינה',
    feature:'העיר ללא הפסקה, חופים, מרכזי עסקים ותרבות.',
    type:'מרכז מטרופוליני',
    services:['מרכזי תעסוקה ועסקים','מוסדות תרבות ובידור','תחבורה ושירותים ארציים'],
    distractors:['מרכז מנהלי של רמת הגולן','מוקד חקלאי של עמק יזרעאל']
  },
  {
    id:'haifa', name:'חיפה', zone:'north',
    riddle:'מכנים אותי "בירת הצפון". אני בנויה בצורה ייחודית, חבוקה בין הר הכרמל לים.',
    hint:'אני עיר נמל מרכזית בצפון, הבנויה על מדרונות הכרמל.',
    position:{x:39.5,y:14.7,tolerance:5.5},
    region:'צפון / כרמל',
    regionChoices:['צפון / כרמל','הגליל התחתון','הערבה'],
    role:'עיר נמל מרכזית ומרכז תעשייה וטכנולוגיה בצפון',
    feature:'שילוב של הר וים, דו-קיום, נמל וגנים בהאיים.',
    type:'מרכז מטרופוליני',
    services:['נמל ותעשייה','מרכזי רפואה והשכלה','תעסוקה וטכנולוגיה'],
    distractors:['שער דרומי לים האדום','מרכז שלטון לאומי']
  },
  {
    id:'beer-sheva', name:'באר שבע', zone:'south',
    riddle:'אני ידועה כ"בירת הנגב". אני עירם של אברהם אבינו ושל אוניברסיטת בן-גוריון.',
    hint:'אני העיר הגדולה והמרכזית בדרום הארץ.',
    position:{x:35.8,y:55.2,tolerance:5.7},
    region:'הנגב',
    regionChoices:['הנגב','הגליל העליון','אגן הכנרת'],
    role:'המטרופולין של הדרום ומרכז רפואה, השכלה ותעסוקה',
    feature:'עיר אבות, אוניברסיטת בן-גוריון ושער למדבר.',
    type:'מרכז מטרופוליני דרומי',
    services:['בית חולים אזורי גדול','אוניברסיטה ומחקר','תעסוקה ושירותים לנגב'],
    distractors:['נמל ימי','מרכז קבלה ואמנות']
  },
  {
    id:'afula', name:'עפולה', zone:'north',
    riddle:'הכינוי שלי הוא "בירת העמק", ואני שוכנת ממש בלב עמק יזרעאל הפורה.',
    hint:'אני משמשת מרכז שירותים ליישובי עמק יזרעאל.',
    position:{x:56.0,y:20.6,tolerance:5.2},
    region:'עמק יזרעאל',
    regionChoices:['עמק יזרעאל','הרי יהודה','הערבה'],
    role:'צומת תחבורתי ומסחרי המשרת את יישובי העמק',
    feature:'שוכנת בלב האזור החקלאי הפורה ביותר בארץ.',
    type:'מרכז אזורי',
    services:['תחבורה אזורית','מסחר ושירותים','בריאות וחינוך לעמק'],
    distractors:['נמל בין-לאומי','מרכז שלטון ארצי']
  },
  {
    id:'katzrin', name:'קצרין', zone:'north',
    riddle:'אני מוכרת כ"בירת הגולן". הנופים סביבי הם נופי בזלת, ואני שוכנת ליד כפר יהודי עתיק.',
    hint:'אני המרכז המנהלי והתיירותי של רמת הגולן.',
    position:{x:82.3,y:8.1,tolerance:5.0},
    region:'רמת הגולן',
    regionChoices:['רמת הגולן','מישור החוף','מדבר יהודה'],
    role:'המרכז העירוני והמנהלי של הגולן ומוקד תיירות',
    feature:'נופי בזלת, יקבים וקרבה לכפר יהודי עתיק.',
    type:'מרכז אזורי מנהלי',
    services:['שירותי מועצה ומנהל','תיירות ומרכזי מבקרים','חינוך ומסחר מקומי'],
    distractors:['נמל מסחרי','מרכז כלכלי ארצי']
  },
  {
    id:'safed', name:'צפת', zone:'north',
    riddle:'אני "בירת הגליל העליון". אני עיר של קבלה, רוח ואמנות, השוכנת בגובה רב.',
    hint:'אני אחת מארבע ערי הקודש ומזוהה עם קבלה ואמנים.',
    position:{x:71.0,y:6.1,tolerance:5.0},
    region:'הגליל העליון',
    regionChoices:['הגליל העליון','הנגב','גוש דן'],
    role:'מרכז רוחני, רפואי ותיירותי בגליל העליון',
    feature:'קבלה, סמטאות ציוריות ורובע אמנים.',
    type:'מרכז אזורי רוחני',
    services:['מרכז רפואי אזורי','תיירות ומורשת','חינוך ושירותים לגליל'],
    distractors:['נמל ימי','מרכז תעשייה בנגב']
  },
  {
    id:'nof-hagalil', name:'נוף הגליל', zone:'north',
    riddle:'אני עיר מרכזית, דינמית ומתפתחת, הממוקמת באזור הגליל התחתון.',
    hint:'שמי החדש מחליף את השם נצרת עילית.',
    position:{x:62.0,y:15.8,tolerance:5.0},
    region:'הגליל התחתון',
    regionChoices:['הגליל התחתון','אגן הכנרת','הערבה'],
    role:'מרכז כלכלי ומנהלי מרכזי בגליל התחתון',
    feature:'עיר מתפתחת המשרתת אוכלוסייה מגוונת בגליל.',
    type:'מרכז אזורי',
    services:['משרדי ממשלה ומנהל','תעסוקה ומסחר','חינוך ושירותים אזוריים'],
    distractors:['שער ימי לים האדום','מרכז קבלה עולמי']
  },
  {
    id:'tiberias', name:'טבריה', zone:'north',
    riddle:'אני אחת מארבע ערי הקודש של ישראל, ושוכנת ממש על שפת הכנרת.',
    hint:'אני עיר תיירות מרכזית על החוף המערבי של הכנרת.',
    position:{x:71.9,y:13.1,tolerance:5.1},
    region:'אגן הכנרת',
    regionChoices:['אגן הכנרת','השומרון','מישור החוף'],
    role:'בירת הנופש והתיירות על שפת הכנרת',
    feature:'אחת מארבע ערי הקודש, חוף כנרת ותיירות פנים.',
    type:'מרכז אזורי תיירותי',
    services:['מלונאות ותיירות','מסחר ושירותים סביב הכנרת','תחבורה אזורית'],
    distractors:['מוסדות שלטון לאומיים','מרכז אוניברסיטאי בשומרון']
  },
  {
    id:'eilat', name:'אילת', zone:'south',
    riddle:'אני "בירת הערבה" והדרום הרחוק, ומהווה את השער הדרומי של ישראל לים האדום.',
    hint:'אני העיר הדרומית ביותר בישראל ושוכנת לחוף מפרץ.',
    position:{x:42.2,y:96.6,tolerance:5.5},
    region:'הערבה / דרום רחוק',
    regionChoices:['הערבה / דרום רחוק','הגליל העליון','עמק יזרעאל'],
    role:'השער הדרומי של ישראל למסחר בין-לאומי ונופש',
    feature:'ים סוף, הרי אילת הצבעוניים ופטור ממע״מ.',
    type:'מרכז אזורי תיירותי',
    services:['תיירות ומלונאות','נמל וסחר בין-לאומי','שירותים ליישובי הערבה'],
    distractors:['מרכז קבלה','מטרופולין תעשייתי צפוני']
  },
  {
    id:'ariel', name:'אריאל', zone:'center',
    riddle:'מכנים אותי "בירת השומרון". אני עיר אוניברסיטאית הבנויה על גבעות השומרון.',
    hint:'אני נמצאת במרכז השומרון ומזוהה עם אוניברסיטה.',
    position:{x:56.6,y:33.0,tolerance:5.0},
    region:'השומרון',
    regionChoices:['השומרון','רמת הגולן','הנגב'],
    role:'מרכז חינוכי, אקדמי ומנהלי בשומרון',
    feature:'עיר אוניברסיטאית הממוקמת על רכס הררי.',
    type:'מרכז אזורי חינוכי',
    services:['אוניברסיטה והשכלה גבוהה','שירותי מנהל ומסחר','תרבות ושירותים ליישובים סביב'],
    distractors:['נמל ימי','מרכז תיירות על הכנרת']
  },
  {
    id:'arad', name:'ערד', zone:'south',
    riddle:'אני "בירת מדבר הנגב". אני ידועה במיוחד באוויר הנקי שלי ובקרבתי לאתר מצדה.',
    hint:'אני נמצאת במזרח הנגב, מערבית לים המלח.',
    position:{x:61.7,y:55.5,tolerance:5.3},
    region:'מזרח הנגב / מדבר יהודה',
    regionChoices:['מזרח הנגב / מדבר יהודה','הגליל התחתון','מישור החוף'],
    role:'מרכז שירותים למזרח הנגב וליישובי ים המלח',
    feature:'אוויר נקי, אקלים מדברי וקרבה למצדה.',
    type:'מרכז אזורי מדברי',
    services:['שירותים ליישובי המדבר','תיירות ומורשת','בריאות ומסחר מקומי'],
    distractors:['נמל בין-לאומי','מרכז פיננסי ארצי']
  }
];

const REQUIRED_COUNT=3;
const STORAGE_KEY='amitRegionalCapitalsV1';
const state={requiredSet:[],queue:[],current:null,completedIds:[],requiredCompleted:0,bonusCompleted:0,score:0,streak:0,maxStreak:0,attempts:0,stage:'name',zoom:1,selectedServices:[]};
const els={
  scoreValue:document.getElementById('scoreValue'),streakValue:document.getElementById('streakValue'),completedValue:document.getElementById('completedValue'),requiredValue:document.getElementById('requiredValue'),progressBar:document.getElementById('progressBar'),phaseChip:document.getElementById('phaseChip'),challengeNumber:document.getElementById('challengeNumber'),challengeType:document.getElementById('challengeType'),riddleText:document.getElementById('riddleText'),feedback:document.getElementById('feedback'),hintBtn:document.getElementById('hintBtn'),mapInstructions:document.getElementById('mapInstructions'),currentCityName:document.getElementById('currentCityName'),regionStep:document.getElementById('regionStep'),regionChoices:document.getElementById('regionChoices'),servicesStep:document.getElementById('servicesStep'),servicesChoices:document.getElementById('servicesChoices'),checkServicesBtn:document.getElementById('checkServicesBtn'),nameStage:document.getElementById('nameStage'),cityOptions:document.getElementById('cityOptions'),mapStage:document.getElementById('mapStage'),mapCanvas:document.getElementById('mapCanvas'),mapViewport:document.getElementById('mapViewport'),regionsMap:document.getElementById('regionsMap'),mapFlags:document.getElementById('mapFlags'),clickMarker:document.getElementById('clickMarker'),passportStage:document.getElementById('passportStage'),passportType:document.getElementById('passportType'),passportCity:document.getElementById('passportCity'),passportRegion:document.getElementById('passportRegion'),passportRole:document.getElementById('passportRole'),passportFeature:document.getElementById('passportFeature'),continueBtn:document.getElementById('continueBtn'),decisionStage:document.getElementById('decisionStage'),finishStationBtn:document.getElementById('finishStationBtn'),bonusBtn:document.getElementById('bonusBtn'),remainingBonusText:document.getElementById('remainingBonusText'),completeStage:document.getElementById('completeStage'),finalCities:document.getElementById('finalCities'),finalBonus:document.getElementById('finalBonus'),finalScore:document.getElementById('finalScore'),collectionCount:document.getElementById('collectionCount'),collectionGrid:document.getElementById('collectionGrid'),zoomInBtn:document.getElementById('zoomInBtn'),zoomOutBtn:document.getElementById('zoomOutBtn'),resetMapBtn:document.getElementById('resetMapBtn'),instructionsBtn:document.getElementById('instructionsBtn'),closeInstructionsBtn:document.getElementById('closeInstructionsBtn'),instructionsModal:document.getElementById('instructionsModal'),resetBtn:document.getElementById('resetBtn'),amitLogo:document.getElementById('amitLogo'),logoFallback:document.getElementById('logoFallback')
};

function shuffle(items){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function getCity(id){return CITY_LIBRARY.find(c=>c.id===id)}
function remainingCities(){return CITY_LIBRARY.filter(c=>!state.completedIds.includes(c.id))}
function chooseRequiredCities(){const north=shuffle(CITY_LIBRARY.filter(c=>c.zone==='north'))[0];const center=shuffle(CITY_LIBRARY.filter(c=>c.zone==='center'))[0];const south=shuffle(CITY_LIBRARY.filter(c=>c.zone==='south'))[0];return shuffle([north.id,center.id,south.id])}
function initialize(){Object.assign(state,{requiredSet:chooseRequiredCities(),queue:[],current:null,completedIds:[],requiredCompleted:0,bonusCompleted:0,score:0,streak:0,maxStreak:0,attempts:0,stage:'name',zoom:1,selectedServices:[]});state.queue=[...state.requiredSet];localStorage.removeItem(STORAGE_KEY);loadNextCity();updateHud();renderCollection()}
function updateHud(){els.scoreValue.textContent=state.score;els.streakValue.textContent=state.streak;els.completedValue.textContent=`${state.completedIds.length}/12`;els.requiredValue.textContent=`${Math.min(state.requiredCompleted,3)}/3`;els.progressBar.style.width=`${Math.min(state.requiredCompleted/3,1)*100}%`}
function showFeedback(text,type){els.feedback.hidden=false;els.feedback.className=`feedback ${type}`;els.feedback.textContent=text}
function clearFeedback(){els.feedback.hidden=true;els.feedback.className='feedback';els.feedback.textContent=''}
function hideStages(){els.nameStage.hidden=true;els.mapStage.hidden=true;els.passportStage.hidden=true;els.decisionStage.hidden=true;els.completeStage.hidden=true}
function resetSidebar(){els.mapInstructions.hidden=true;els.regionStep.hidden=true;els.servicesStep.hidden=true;els.hintBtn.hidden=true;clearFeedback()}
function loadNextCity(){if(!state.queue.length){showDecision();return}state.current=getCity(state.queue.shift());state.stage='name';state.attempts=0;state.selectedServices=[];hideStages();els.nameStage.hidden=false;resetSidebar();els.phaseChip.textContent='שלב א׳ - זיהוי העיר';els.challengeNumber.textContent=state.completedIds.length+1;els.challengeType.textContent=state.requiredCompleted<3?'מתוך 3 משימות החובה':'עיר בונוס';els.riddleText.textContent=state.current.riddle;renderCityOptions();renderFlags();updateHud()}
function renderCityOptions(){els.cityOptions.innerHTML='';shuffle(remainingCities()).forEach(city=>{const b=document.createElement('button');b.type='button';b.className='city-option';b.textContent=city.name;b.addEventListener('click',()=>chooseCity(city,b));els.cityOptions.appendChild(b)})}
function chooseCity(city,button){if(state.stage!=='name')return;state.attempts++;if(city.id===state.current.id){const earned=state.attempts===1?100:50;state.score+=earned;state.streak++;state.maxStreak=Math.max(state.maxStreak,state.streak);showFeedback(`מדויק! זיהיתם את ${city.name}. נוספו ${earned} נקודות.`,'success');updateHud();setTimeout(showMapStage,600)}else{state.streak=0;updateHud();button.classList.add('wrong');setTimeout(()=>button.classList.remove('wrong'),400);showFeedback('כמעט שם. חזרו לרמזים על המיקום, הכינוי והמאפיין הייחודי של העיר.','try-again');els.hintBtn.hidden=false}}
function showMapStage(){state.stage='map';hideStages();els.mapStage.hidden=false;els.phaseChip.textContent='שלב ב׳ - מיקום במפה';els.mapInstructions.hidden=false;els.regionStep.hidden=true;els.servicesStep.hidden=true;els.currentCityName.textContent=state.current.name;els.hintBtn.hidden=true;els.clickMarker.hidden=true;clearFeedback();setZoom(1);els.mapViewport.scrollTop=0;els.mapViewport.scrollLeft=0}
function handleMapClick(event){if(state.stage!=='map')return;const r=els.regionsMap.getBoundingClientRect();const x=((event.clientX-r.left)/r.width)*100;const y=((event.clientY-r.top)/r.height)*100;els.clickMarker.hidden=false;els.clickMarker.style.left=`${x}%`;els.clickMarker.style.top=`${y}%`;const dx=x-state.current.position.x,dy=y-state.current.position.y;if(Math.hypot(dx,dy)<=state.current.position.tolerance){state.score+=50;state.streak++;state.maxStreak=Math.max(state.maxStreak,state.streak);state.stage='region';showFeedback(`המיקום מתאים. ${state.current.name} סומנה בדגל אדום.`,'success');renderCurrentFlag();showRegionStep();updateHud()}else{state.streak=0;updateHud();showFeedback('הסימון נקלט, אבל אינו קרוב מספיק לעיר. הגדילו את המפה ונסו שוב.','try-again');els.hintBtn.hidden=false}}
function renderCurrentFlag(){if(document.getElementById(`flag-${state.current.id}`))return;const flag=document.createElement('div');flag.className='city-flag';flag.id=`flag-${state.current.id}`;flag.style.left=`${state.current.position.x}%`;flag.style.top=`${state.current.position.y}%`;const span=document.createElement('span');span.textContent=state.completedIds.length+1;flag.appendChild(span);els.mapFlags.appendChild(flag)}
function renderFlags(){els.mapFlags.innerHTML='';state.completedIds.forEach((id,index)=>{const city=getCity(id);const flag=document.createElement('div');flag.className='city-flag';flag.id=`flag-${city.id}`;flag.style.left=`${city.position.x}%`;flag.style.top=`${city.position.y}%`;const span=document.createElement('span');span.textContent=index+1;flag.appendChild(span);els.mapFlags.appendChild(flag)})}
function showRegionStep(){els.phaseChip.textContent='שלב ג׳ - חבל הארץ';els.regionStep.hidden=false;els.regionChoices.innerHTML='';shuffle(state.current.regionChoices).forEach(choice=>{const b=document.createElement('button');b.type='button';b.className='choice-button';b.textContent=choice;b.addEventListener('click',()=>chooseRegion(choice,b));els.regionChoices.appendChild(b)})}
function chooseRegion(choice,button){if(state.stage!=='region')return;if(choice===state.current.region){state.stage='services';state.score+=50;showFeedback(`נכון. ${state.current.name} נמצאת בחבל ${state.current.region}.`,'success');showServicesStep();updateHud()}else{button.classList.add('wrong');setTimeout(()=>button.classList.remove('wrong'),400);showFeedback('בדקו את מיקום העיר ואת חבל הארץ הסובב אותה.','try-again')}}
function showServicesStep(){els.phaseChip.textContent='שלב ד׳ - העיר כמרכז שירותים';els.servicesStep.hidden=false;els.servicesChoices.innerHTML='';state.selectedServices=[];shuffle([...state.current.services,...state.current.distractors]).forEach(service=>{const b=document.createElement('button');b.type='button';b.className='service-button';b.textContent=service;b.dataset.service=service;b.addEventListener('click',()=>{if(state.selectedServices.includes(service)){state.selectedServices=state.selectedServices.filter(s=>s!==service);b.classList.remove('selected')}else if(state.selectedServices.length<3){state.selectedServices.push(service);b.classList.add('selected')}});els.servicesChoices.appendChild(b)})}
function checkServices(){if(state.stage!=='services')return;if(state.selectedServices.length!==3){showFeedback('בחרו בדיוק שלושה תפקידים או שירותים.','try-again');return}const correct=state.current.services.every(s=>state.selectedServices.includes(s));if(!correct){showFeedback('חלק מהבחירות אינן מתאימות. חשבו אילו שירותים העיר מספקת ליישובים שסביבה.','try-again');return}state.score+=50;state.completedIds.push(state.current.id);if(state.requiredCompleted<3)state.requiredCompleted++;else state.bonusCompleted++;updateHud();renderCollection();showPassport()}
function showPassport(){state.stage='passport';hideStages();els.passportStage.hidden=false;resetSidebar();els.phaseChip.textContent='כרטיס זהות עירוני';els.riddleText.textContent=`${state.current.name} הושלמה ונוספה לאוסף.`;els.passportType.textContent=state.current.type;els.passportCity.textContent=state.current.name;els.passportRegion.textContent=state.current.region;els.passportRole.textContent=state.current.role;els.passportFeature.textContent=state.current.feature}
function continueAfterPassport(){if(state.requiredCompleted>=3)showDecision();else loadNextCity()}
function showDecision(){state.stage='decision';hideStages();els.decisionStage.hidden=false;resetSidebar();els.phaseChip.textContent='בחירת המשך';els.riddleText.textContent='שלוש ערי החובה הושלמו.';const n=remainingCities().length;els.remainingBonusText.textContent=n?`נותרו ${n} ערים זמינות לבונוס.`:'השלמתם את כל 12 הערים.';els.bonusBtn.hidden=n===0}
function startBonus(){const choices=remainingCities();if(!choices.length){finishStation();return}state.queue=[shuffle(choices)[0].id];loadNextCity()}
function finishStation(){state.stage='complete';hideStages();els.completeStage.hidden=false;resetSidebar();els.phaseChip.textContent='התחנה הושלמה';els.riddleText.textContent='כעת אפשר להוריד את דף הסיכום.';els.finalCities.textContent=state.completedIds.length;els.finalBonus.textContent=state.bonusCompleted;els.finalScore.textContent=state.score;localStorage.setItem(STORAGE_KEY,JSON.stringify({completed:true,completedIds:state.completedIds,score:state.score,bonusCompleted:state.bonusCompleted,completedAt:new Date().toISOString()}))}
function renderCollection(){els.collectionCount.textContent=state.completedIds.length;els.collectionGrid.innerHTML='';if(!state.completedIds.length){els.collectionGrid.innerHTML='<p class="empty-collection">הכרטיס הראשון יופיע לאחר השלמת עיר.</p>';return}state.completedIds.forEach(id=>{const city=getCity(id);const card=document.createElement('article');card.className='collection-card';card.innerHTML=`<strong>${city.name}</strong><span>${city.region}</span><span>${city.type}</span>`;els.collectionGrid.appendChild(card)})}
function setZoom(z){state.zoom=Math.max(1,Math.min(2.5,z));els.mapCanvas.style.width=`${state.zoom*100}%`}
function resetStation(){if(!confirm('לאפס את התחנה ולהגריל שלוש ערים חדשות?'))return;localStorage.removeItem(STORAGE_KEY);els.mapFlags.innerHTML='';initialize();window.scrollTo({top:0,behavior:'smooth'})}

els.hintBtn.addEventListener('click',()=>showFeedback(`רמז: ${state.current.hint}`,'try-again'));
els.regionsMap.addEventListener('click',handleMapClick);
els.zoomInBtn.addEventListener('click',()=>setZoom(state.zoom+.25));
els.zoomOutBtn.addEventListener('click',()=>setZoom(state.zoom-.25));
els.resetMapBtn.addEventListener('click',()=>{setZoom(1);els.mapViewport.scrollTop=0;els.mapViewport.scrollLeft=0});
els.checkServicesBtn.addEventListener('click',checkServices);
els.continueBtn.addEventListener('click',continueAfterPassport);
els.finishStationBtn.addEventListener('click',finishStation);
els.bonusBtn.addEventListener('click',startBonus);
els.instructionsBtn.addEventListener('click',()=>els.instructionsModal.hidden=false);
els.closeInstructionsBtn.addEventListener('click',()=>els.instructionsModal.hidden=true);
els.instructionsModal.addEventListener('click',e=>{if(e.target===els.instructionsModal)els.instructionsModal.hidden=true});
document.addEventListener('keydown',e=>{if(e.key==='Escape')els.instructionsModal.hidden=true});
els.resetBtn.addEventListener('click',resetStation);
els.amitLogo.addEventListener('error',()=>{els.amitLogo.hidden=true;els.logoFallback.hidden=false});
initialize();

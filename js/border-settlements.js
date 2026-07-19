const SETTLEMENT_LIBRARY = [
  {
    id:'metula', number:1, name:'מטולה', zone:'north',
    riddle:'אני יישוב קהילתי הנמצא בפינה הצפונית ביותר של מדינת ישראל, ומוקף משלושה צדדים בשטח לבנון. מי אני והיכן אני ממוקם?',
    hint:'חפשו אותי בקצה אצבע הגליל.',
    position:{x:80.5,y:1.4}, displayPosition:{x:81.2,y:1.8}, hitEllipse:{x:80.5,y:1.4,rx:3.2,ry:1.5},
    location:'קצה אצבע הגליל', type:'מושבה', border:'גבול לבנון',
    borderChoices:['גבול לבנון','גבול סוריה','גבול ירדן'],
    feature:'היישוב הצפוני ביותר בישראל, המוקף משלושה צדדים בגבול לבנון.',
    importance:'נוכחות אזרחית רציפה בקצה הצפוני של המדינה וחיזוק הריבונות באצבע הגליל.'
  },
  {
    id:'rosh-hanikra', number:2, name:'ראש הנקרה', zone:'north',
    riddle:'אני גם שמו של קיבוץ וגם אתר תיירותי, שוכן בפינה הצפון־מערבית של הארץ ממש בנקודת המפגש המרהיבה של צוקי הגיר הלבנים עם גלי הים. מי אני?',
    hint:'אני סמוך למעבר הגבול עם לבנון ולים התיכון.',
    position:{x:53.8,y:6.5}, hitEllipse:{x:53.8,y:6.5,rx:3.2,ry:1.5},
    location:'הגליל המערבי, לחוף הים', type:'קיבוץ', border:'גבול לבנון',
    borderChoices:['גבול לבנון','גבול מצרים','גבול רצועת עזה'],
    feature:'יישוב ואתר תיירות סמוך לצוקי ראש הנקרה ולמעבר הגבול.',
    importance:'שמירה על רצף התיישבותי לאורך הקצה הצפון־מערבי של ישראל.'
  },
  {
    id:'merom-golan', number:3, name:'מרום גולן', zone:'north',
    riddle:'אני קיבוץ הממוקם במזרח, ובנוי בצורה ייחודית בתוך לוע של הר געש כבוי המשקיף אל עבר סוריה. מי אני?',
    hint:'אני בצפון רמת הגולן, סמוך להר בנטל.',
    position:{x:92.1,y:5.0}, hitEllipse:{x:92.1,y:5.0,rx:3.0,ry:1.5},
    location:'צפון רמת הגולן', type:'קיבוץ', border:'גבול סוריה',
    borderChoices:['גבול סוריה','גבול לבנון','גבול ירדן'],
    feature:'קיבוץ הממוקם בלוע הר געש כבוי בצפון רמת הגולן.',
    importance:'חיזוק ההתיישבות והחקלאות ברמת הגולן סמוך לגבול סוריה.'
  },
  {
    id:'hamadia', number:4, name:'חמדיה', zone:'east',
    riddle:'אני קיבוץ השוכן על גבעה במזרח הארץ באזור עמק המעיינות, ותפקידי ההיסטורי הוא לשמור על גבול ירדן. מי אני?',
    hint:'אני סמוך לבית שאן ולעמק המעיינות.',
    position:{x:79.0,y:19.9}, displayPosition:{x:78.7,y:19.4}, hitEllipse:{x:79.0,y:19.9,rx:3.0,ry:1.45},
    location:'עמק המעיינות, מצפון לבית שאן', type:'קיבוץ', border:'גבול ירדן',
    borderChoices:['גבול ירדן','גבול סוריה','גבול מצרים'],
    feature:'קיבוץ על גבעה באזור עמק המעיינות.',
    importance:'נוכחות חקלאית ואזרחית בבקעת בית שאן סמוך לגבול ירדן.'
  },
  {
    id:'ein-yahav', number:5, name:'עין יהב', zone:'south',
    riddle:'אני נמצא בדרום־מזרח הארץ. גאה להיות המושב הראשון שהוקם בערבה, וניצב ישירות מול הרי אדום הירדניים. מי אני?',
    hint:'אני בלב הערבה התיכונה.',
    position:{x:58.0,y:70.7}, hitEllipse:{x:58.0,y:70.7,rx:3.3,ry:1.55},
    location:'הערבה התיכונה', type:'מושב', border:'גבול ירדן',
    borderChoices:['גבול ירדן','גבול מצרים','גבול רצועת עזה'],
    feature:'המושב הראשון בערבה, מול הרי אדום.',
    importance:'חיזוק החקלאות וההתיישבות לאורך הערבה והגבול המזרחי.'
  },
  {
    id:'ezuz', number:6, name:'עזוז', zone:'south',
    riddle:'אני יישוב קטן, מבודד ומיוחד במינו בדרום־מערב הארץ, השוכן ממש בקצה הדרך על גבול מצרים. מי אני?',
    hint:'אני נמצא בנגב המערבי, מדרום לניצנה.',
    position:{x:14.1,y:63.7}, displayPosition:{x:13.6,y:63.4}, hitEllipse:{x:14.1,y:63.7,rx:3.1,ry:1.5},
    location:'פתחת ניצנה, סמוך לגבול מצרים', type:'יישוב קהילתי', border:'גבול מצרים',
    borderChoices:['גבול מצרים','גבול ירדן','גבול רצועת עזה'],
    feature:'יישוב קטן ומבודד בקצה הדרך בנגב המערבי.',
    importance:'שמירה על נוכחות אזרחית באזור מרוחק ודל אוכלוסין סמוך לגבול מצרים.'
  },
  {
    id:'nitzana', number:7, name:'ניצנה', zone:'south',
    riddle:'אני כפר נוער וקהילה השוכנת בדרום־מערב הארץ, וממוקם בלב המדבר אל מול גבול מצרים. מי אני?',
    hint:'אני סמוך למעבר ניצנה.',
    position:{x:18.8,y:64.8}, displayPosition:{x:19.4,y:65.2}, hitEllipse:{x:18.8,y:64.8,rx:3.1,ry:1.5},
    location:'פתחת ניצנה, סמוך למעבר הגבול', type:'כפר חינוכי וקהילה', border:'גבול מצרים',
    borderChoices:['גבול מצרים','גבול רצועת עזה','גבול ירדן'],
    feature:'כפר נוער וקהילה מדברית סמוך למעבר ניצנה.',
    importance:'פיתוח אזור הגבול באמצעות חינוך, התיישבות וחקלאות מדברית.'
  },
  {
    id:'kerem-shalom', number:8, name:'כרם שלום', zone:'south',
    riddle:'אני יישוב בדרום הארץ, הממוקם בנקודת מפגש משולשת וייחודית בין הגבולות של ישראל, עזה ומצרים. מי אני?',
    hint:'אני בקצה הדרום־מערבי של עוטף עזה.',
    position:{x:7.4,y:55.7}, hitEllipse:{x:7.4,y:55.7,rx:3.0,ry:1.5},
    location:'מפגש גבולות ישראל–מצרים–רצועת עזה', type:'קיבוץ', border:'גבול רצועת עזה',
    borderChoices:['גבול רצועת עזה','גבול מצרים','גבול ירדן'],
    feature:'קיבוץ סמוך לנקודת מפגש של שלושה גבולות.',
    importance:'נוכחות אזרחית בנקודה אסטרטגית רגישה בגבול הדרום־מערבי.'
  },
  {
    id:'netiv-haasara', number:9, name:'נתיב העשרה', zone:'south',
    riddle:'אני מושב באזור העוטף, ונחשב ליישוב הישראלי הקרוב ביותר לחומות עזה. אני מוכר בזכות פרויקט הפסיפס "נתיב לשלום". מי אני?',
    hint:'אני מצפון לרצועת עזה, סמוך למעבר ארז.',
    position:{x:20.2,y:45.3}, hitEllipse:{x:20.2,y:45.3,rx:3.2,ry:1.5},
    location:'צפון עוטף עזה', type:'מושב', border:'גבול רצועת עזה',
    borderChoices:['גבול רצועת עזה','גבול לבנון','גבול מצרים'],
    feature:'היישוב הישראלי הקרוב ביותר לגבול הצפוני של רצועת עזה.',
    importance:'נוכחות אזרחית וחקלאית רציפה סמוך לגדר הגבול.'
  },
  {
    id:'nir-oz', number:10, name:'ניר עוז', zone:'south',
    riddle:'אני קיבוץ חקלאי ירוק ופורח הממוקם באזור העוטף, בלב הנגב המערבי הסמוך לרצועת עזה. מי אני?',
    hint:'אני במועצה האזורית אשכול, ממזרח לחאן יונס.',
    position:{x:19.3,y:49.2}, hitEllipse:{x:19.3,y:49.2,rx:3.2,ry:1.5},
    location:'מערב הנגב, עוטף עזה', type:'קיבוץ', border:'גבול רצועת עזה',
    borderChoices:['גבול רצועת עזה','גבול מצרים','גבול ירדן'],
    feature:'קיבוץ חקלאי ירוק באזור העוטף.',
    importance:'חיזוק החקלאות וההתיישבות האזרחית לאורך גבול הרצועה.'
  },
  {
    id:'misgav-am', number:11, name:'משגב עם', zone:'north',
    riddle:'אני קיבוץ השוכן בצפון הארץ על רכס רמים, ומיקומי הגבוה גורם לכך שאני ממש "יושב" על גבול לבנון. מי אני?',
    hint:'אני סמוך לקריית שמונה ומטולה.',
    position:{x:79.3,y:3.2}, displayPosition:{x:78.8,y:3.8}, hitEllipse:{x:79.3,y:3.2,rx:3.0,ry:1.45},
    location:'רכס רמים, אצבע הגליל', type:'קיבוץ', border:'גבול לבנון',
    borderChoices:['גבול לבנון','גבול סוריה','גבול ירדן'],
    feature:'קיבוץ גבוה הצופה לעבר דרום לבנון.',
    importance:'תצפית ונוכחות אזרחית על קו הרכס הסמוך לגבול.'
  },
  {
    id:'tirat-zvi', number:12, name:'טירת צבי', zone:'east',
    riddle:'אני קיבוץ של חקלאות דתית הממוקם במזרח הארץ, בעמק בית שאן, וניצב אל מול הרי הגלעד שבירדן. יש אצלי מפעל למאכלי בשר. מי אני?',
    hint:'אני מדרום לבית שאן, בעמק המעיינות.',
    position:{x:80.2,y:22.6}, displayPosition:{x:80.5,y:23.2}, hitEllipse:{x:80.2,y:22.6,rx:3.0,ry:1.45},
    location:'עמק בית שאן, סמוך לגבול ירדן', type:'קיבוץ דתי', border:'גבול ירדן',
    borderChoices:['גבול ירדן','גבול סוריה','גבול מצרים'],
    feature:'קיבוץ דתי חקלאי מול הרי הגלעד.',
    importance:'חיזוק ההתיישבות החקלאית בעמק בית שאן ובגבול המזרחי.'
  }
];

const REQUIRED_COUNT=3;
const STORAGE_KEY='amitBorderSettlementsStationV1';
const IMPORTANCE_CORRECT='חיזוק הנוכחות האזרחית, הביטחון והריבונות לאורך הגבול';
const IMPORTANCE_DISTRACTORS=['ריכוז מוסדות השלטון הארציים במקום אחד','פיתוח נמל ימי ומרכז תעשייה גדול','העברת כל האוכלוסייה ממרכז הארץ אל הגבול'];
const state={requiredSet:[],queue:[],current:null,completedIds:[],requiredCompleted:0,bonusCompleted:0,score:0,streak:0,attempts:0,stage:'intro',zoom:1,exploreZoom:1,mapFitWidth:0,exploreFitWidth:0,suppressMapClickUntil:0,activeBorder:'all'};

const $=id=>document.getElementById(id);
const els={scoreValue:$('scoreValue'),streakValue:$('streakValue'),completedValue:$('completedValue'),requiredValue:$('requiredValue'),progressBar:$('progressBar'),phaseChip:$('phaseChip'),challengeNumber:$('challengeNumber'),challengeType:$('challengeType'),riddleTitle:$('riddleTitle'),riddleText:$('riddleText'),feedback:$('feedback'),hintBtn:$('hintBtn'),mapInstructions:$('mapInstructions'),currentSettlementName:$('currentSettlementName'),borderStep:$('borderStep'),borderChoices:$('borderChoices'),importanceStep:$('importanceStep'),importanceChoices:$('importanceChoices'),introStage:$('introStage'),startStationBtn:$('startStationBtn'),nameStage:$('nameStage'),settlementOptions:$('settlementOptions'),mapStage:$('mapStage'),mapViewport:$('mapViewport'),mapCanvas:$('mapCanvas'),settlementsMap:$('settlementsMap'),mapMarkers:$('mapMarkers'),clickMarker:$('clickMarker'),passportStage:$('passportStage'),passportType:$('passportType'),passportName:$('passportName'),passportLocation:$('passportLocation'),passportBorder:$('passportBorder'),passportFeature:$('passportFeature'),passportImportance:$('passportImportance'),continueBtn:$('continueBtn'),decisionStage:$('decisionStage'),exploreBtn:$('exploreBtn'),bonusBtn:$('bonusBtn'),remainingBonusText:$('remainingBonusText'),exploreStage:$('exploreStage'),exploreMapViewport:$('exploreMapViewport'),exploreMapCanvas:$('exploreMapCanvas'),exploreSettlementsMap:$('exploreSettlementsMap'),exploreMarkers:$('exploreMarkers'),borderFilters:$('borderFilters'),finishBtn:$('finishBtn'),completeStage:$('completeStage'),finalSettlements:$('finalSettlements'),finalBonus:$('finalBonus'),finalScore:$('finalScore'),collectionCount:$('collectionCount'),collectionGrid:$('collectionGrid'),fitMapBtn:$('fitMapBtn'),zoomInBtn:$('zoomInBtn'),zoomOutBtn:$('zoomOutBtn'),resetMapBtn:$('resetMapBtn'),exploreFitMapBtn:$('exploreFitMapBtn'),exploreZoomInBtn:$('exploreZoomInBtn'),exploreZoomOutBtn:$('exploreZoomOutBtn'),exploreResetMapBtn:$('exploreResetMapBtn'),instructionsBtn:$('instructionsBtn'),closeInstructionsBtn:$('closeInstructionsBtn'),instructionsModal:$('instructionsModal'),settlementInfoModal:$('settlementInfoModal'),closeSettlementInfoBtn:$('closeSettlementInfoBtn'),settlementInfoType:$('settlementInfoType'),settlementInfoName:$('settlementInfoName'),settlementInfoLocation:$('settlementInfoLocation'),settlementInfoBorder:$('settlementInfoBorder'),settlementInfoFeature:$('settlementInfoFeature'),settlementInfoImportance:$('settlementInfoImportance'),resetBtn:$('resetBtn'),amitLogo:$('amitLogo'),logoFallback:$('logoFallback')};

function shuffle(items){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function getSettlement(id){return SETTLEMENT_LIBRARY.find(item=>item.id===id)}
function remainingSettlements(){return SETTLEMENT_LIBRARY.filter(item=>!state.completedIds.includes(item.id))}
function chooseRequired(){const north=shuffle(SETTLEMENT_LIBRARY.filter(item=>item.zone==='north'))[0];const east=shuffle(SETTLEMENT_LIBRARY.filter(item=>item.zone==='east'))[0];const south=shuffle(SETTLEMENT_LIBRARY.filter(item=>item.zone==='south'))[0];return shuffle([north.id,east.id,south.id])}
function updateHud(){els.scoreValue.textContent=state.score;els.streakValue.textContent=state.streak;els.completedValue.textContent=`${state.completedIds.length}/12`;els.requiredValue.textContent=`${Math.min(state.requiredCompleted,3)}/3`;els.progressBar.style.width=`${Math.min(state.requiredCompleted/3,1)*100}%`}
function showFeedback(text,type){els.feedback.hidden=false;els.feedback.className=`feedback ${type}`;els.feedback.textContent=text}
function clearFeedback(){els.feedback.hidden=true;els.feedback.className='feedback';els.feedback.textContent=''}
function hideStages(){els.introStage.hidden=true;els.nameStage.hidden=true;els.mapStage.hidden=true;els.passportStage.hidden=true;els.decisionStage.hidden=true;els.exploreStage.hidden=true;els.completeStage.hidden=true}
function resetSidebar(){els.mapInstructions.hidden=true;els.borderStep.hidden=true;els.importanceStep.hidden=true;els.hintBtn.hidden=true;clearFeedback()}
function initialize(){Object.assign(state,{requiredSet:chooseRequired(),queue:[],current:null,completedIds:[],requiredCompleted:0,bonusCompleted:0,score:0,streak:0,attempts:0,stage:'intro',zoom:1,exploreZoom:1,mapFitWidth:0,exploreFitWidth:0,suppressMapClickUntil:0,activeBorder:'all'});state.queue=[...state.requiredSet];localStorage.removeItem(STORAGE_KEY);hideStages();els.introStage.hidden=false;els.phaseChip.textContent='הקדמה – התיישבות וריבונות';els.challengeNumber.textContent='0';els.riddleTitle.textContent='במקום שבו תעבור המחרשה...';els.riddleText.textContent='שם יעבור הגבול.';resetSidebar();updateHud();renderCollection()}
function startStation(){loadNextSettlement()}
function loadNextSettlement(){if(!state.queue.length){showDecision();return}state.current=getSettlement(state.queue.shift());state.stage='name';state.attempts=0;hideStages();els.nameStage.hidden=false;resetSidebar();els.phaseChip.textContent='שלב א׳ – זיהוי היישוב';els.challengeNumber.textContent=state.completedIds.length+1;els.challengeType.textContent=state.requiredCompleted<3?'מתוך 3 משימות החובה':'יישוב בונוס';els.riddleTitle.textContent='מי אני והיכן אני ממוקם?';els.riddleText.textContent=state.current.riddle;renderOptions();updateHud()}
function renderOptions(){els.settlementOptions.innerHTML='';shuffle(remainingSettlements()).forEach(item=>{const b=document.createElement('button');b.type='button';b.className='settlement-option';b.textContent=item.name;b.addEventListener('click',()=>chooseName(item,b));els.settlementOptions.appendChild(b)})}
function chooseName(item,button){if(state.stage!=='name')return;state.attempts++;if(item.id===state.current.id){const earned=state.attempts===1?100:50;state.score+=earned;state.streak++;showFeedback(`מדויק! זיהיתם את ${item.name}. נוספו ${earned} נקודות.`,'success');updateHud();setTimeout(showMapStage,600)}else{state.streak=0;updateHud();button.classList.add('wrong');setTimeout(()=>button.classList.remove('wrong'),400);showFeedback('כמעט. חזרו לרמזים על האזור, הגבול והמאפיין של היישוב.','try-again');els.hintBtn.hidden=false}}
function showMapStage(){state.stage='map';hideStages();els.mapStage.hidden=false;els.phaseChip.textContent='שלב ב׳ – מיקום לאורך הגבול';els.mapInstructions.hidden=false;els.currentSettlementName.textContent=state.current.name;els.clickMarker.hidden=true;clearFeedback();renderTaskMarkers();requestAnimationFrame(()=>fitWholeMap('task'))}
function handleMapClick(event){if(state.stage!=='map'||Date.now()<state.suppressMapClickUntil)return;const rect=els.settlementsMap.getBoundingClientRect();const x=((event.clientX-rect.left)/rect.width)*100;const y=((event.clientY-rect.top)/rect.height)*100;if(x<0||x>100||y<0||y>100)return;els.clickMarker.hidden=false;els.clickMarker.style.left=`${x}%`;els.clickMarker.style.top=`${y}%`;const a=state.current.hitEllipse;const inside=((x-a.x)/a.rx)**2+((y-a.y)/a.ry)**2<=1;if(inside){state.score+=50;state.streak++;state.stage='border';showFeedback(`המיקום נכון. דגל ירוק ננעץ במקום המדויק של ${state.current.name}.`,'success');renderCurrentMarker();showBorderStep();updateHud()}else{state.streak=0;updateHud();showFeedback('המיקום אינו מדויק מספיק. הגדילו את המפה ונסו שוב באזור הגבול המתאים.','try-again');els.hintBtn.hidden=false}}
function showBorderStep(){els.phaseChip.textContent='שלב ג׳ – הגבול הסמוך';els.borderStep.hidden=false;els.borderChoices.innerHTML='';shuffle(state.current.borderChoices).forEach(choice=>{const b=document.createElement('button');b.type='button';b.className='choice-button';b.textContent=choice;b.addEventListener('click',()=>chooseBorder(choice,b));els.borderChoices.appendChild(b)})}
function chooseBorder(choice,button){if(state.stage!=='border')return;if(choice===state.current.border){state.stage='importance';state.score+=50;showFeedback(`נכון. ${state.current.name} נמצא סמוך ל${state.current.border}.`,'success');showImportanceStep();updateHud()}else{button.classList.add('wrong');setTimeout(()=>button.classList.remove('wrong'),400);showFeedback('בדקו שוב את מיקום היישוב ואת קו הגבול הסמוך אליו.','try-again')}}
function showImportanceStep(){els.phaseChip.textContent='שלב ד׳ – חשיבות יישוב הספר';els.importanceStep.hidden=false;els.importanceChoices.innerHTML='';shuffle([IMPORTANCE_CORRECT,...shuffle(IMPORTANCE_DISTRACTORS).slice(0,2)]).forEach(choice=>{const b=document.createElement('button');b.type='button';b.className='choice-button';b.textContent=choice;b.addEventListener('click',()=>chooseImportance(choice,b));els.importanceChoices.appendChild(b)})}
function chooseImportance(choice,button){if(state.stage!=='importance')return;if(choice!==IMPORTANCE_CORRECT){button.classList.add('wrong');setTimeout(()=>button.classList.remove('wrong'),400);showFeedback('חשבו על הקשר בין התיישבות, ריבונות, ביטחון ופיזור אוכלוסייה.','try-again');return}state.score+=50;state.completedIds.push(state.current.id);if(state.requiredCompleted<3)state.requiredCompleted++;else state.bonusCompleted++;updateHud();renderCollection();showPassport()}
function createMarker(item,interactive=false){const marker=document.createElement(interactive?'button':'div');if(interactive)marker.type='button';marker.className=`settlement-marker ${interactive?'explore-marker':''}`;const p=item.displayPosition||item.position;marker.style.left=`${p.x}%`;marker.style.top=`${p.y}%`;marker.dataset.border=item.border;marker.title=item.name;marker.setAttribute('aria-label',item.name);const span=document.createElement('span');span.textContent=item.number;marker.appendChild(span);if(interactive)marker.addEventListener('click',event=>{event.stopPropagation();openInfo(item)});return marker}
function renderCurrentMarker(){if(document.getElementById(`settlement-${state.current.id}`))return;const marker=createMarker(state.current);marker.id=`settlement-${state.current.id}`;els.mapMarkers.appendChild(marker)}
function renderTaskMarkers(){els.mapMarkers.innerHTML='';state.completedIds.forEach(id=>{const item=getSettlement(id);const marker=createMarker(item);marker.id=`settlement-${item.id}`;els.mapMarkers.appendChild(marker)})}
function showPassport(){state.stage='passport';hideStages();els.passportStage.hidden=false;resetSidebar();els.phaseChip.textContent='תעודת זהות – יישוב ספר';els.riddleTitle.textContent=state.current.name;els.riddleText.textContent='היישוב הושלם ונוסף לאוסף.';els.passportType.textContent=state.current.type;els.passportName.textContent=state.current.name;els.passportLocation.textContent=state.current.location;els.passportBorder.textContent=state.current.border;els.passportFeature.textContent=state.current.feature;els.passportImportance.textContent=state.current.importance;saveProgress()}
function continueAfterPassport(){if(state.requiredCompleted>=3)showDecision();else loadNextSettlement()}
function showDecision(){state.stage='decision';hideStages();els.decisionStage.hidden=false;resetSidebar();els.phaseChip.textContent='בחירת המשך';els.riddleTitle.textContent='שלושת יישובי החובה הושלמו';els.riddleText.textContent='אפשר לחקור את כל יישובי הספר או להמשיך לבונוס.';const remaining=remainingSettlements().length;els.remainingBonusText.textContent=remaining?`נותרו ${remaining} יישובים זמינים לבונוס.`:'השלמתם את כל 12 היישובים.';els.bonusBtn.hidden=remaining===0}
function startBonus(){const candidates=remainingSettlements();if(!candidates.length){showExploration();return}state.queue=[shuffle(candidates)[0].id];loadNextSettlement()}
function showExploration(){state.stage='explore';hideStages();els.exploreStage.hidden=false;resetSidebar();els.phaseChip.textContent='מפת חקר';els.riddleTitle.textContent='שרשרת היישובים לאורך הגבולות';els.riddleText.textContent='לחצו על כל דגל ירוק כדי להכיר את היישוב.';renderExploreMarkers();requestAnimationFrame(()=>fitWholeMap('explore'))}
function renderExploreMarkers(){els.exploreMarkers.innerHTML='';SETTLEMENT_LIBRARY.forEach(item=>els.exploreMarkers.appendChild(createMarker(item,true)));applyBorderFilter()}
function applyBorderFilter(){els.exploreMarkers.querySelectorAll('.settlement-marker').forEach(marker=>marker.classList.toggle('filtered-out',state.activeBorder!=='all'&&marker.dataset.border!==state.activeBorder));els.borderFilters.querySelectorAll('button').forEach(button=>button.classList.toggle('active',button.dataset.border===state.activeBorder))}
function openInfo(item){els.settlementInfoType.textContent=item.type;els.settlementInfoName.textContent=item.name;els.settlementInfoLocation.textContent=item.location;els.settlementInfoBorder.textContent=item.border;els.settlementInfoFeature.textContent=item.feature;els.settlementInfoImportance.textContent=item.importance;els.settlementInfoModal.hidden=false}
function finishStation(){state.stage='complete';hideStages();els.completeStage.hidden=false;resetSidebar();els.phaseChip.textContent='התחנה הושלמה';els.riddleTitle.textContent='יישובי הספר לאורך הגבולות';els.riddleText.textContent='השלמתם את התחנה.';els.finalSettlements.textContent=state.completedIds.length;els.finalBonus.textContent=state.bonusCompleted;els.finalScore.textContent=state.score;localStorage.setItem(STORAGE_KEY,JSON.stringify({completed:true,completedIds:state.completedIds,score:state.score,bonusCompleted:state.bonusCompleted,completedAt:new Date().toISOString()}))}
function renderCollection(){els.collectionCount.textContent=state.completedIds.length;els.collectionGrid.innerHTML='';if(!state.completedIds.length){els.collectionGrid.innerHTML='<p class="empty-collection">הכרטיס הראשון יופיע לאחר השלמת יישוב.</p>';return}state.completedIds.forEach(id=>{const item=getSettlement(id);const card=document.createElement('article');card.className='collection-card';card.innerHTML=`<strong>${item.name}</strong><span>${item.location}</span><span>${item.border}</span>`;els.collectionGrid.appendChild(card)})}
function getFitWidth(viewport,image){if(!image.naturalWidth||!image.naturalHeight)return Math.max(240,viewport.clientWidth*.36);const byHeight=(viewport.clientHeight-8)*(image.naturalWidth/image.naturalHeight);return Math.max(220,Math.min(viewport.clientWidth-8,byHeight))}
function centerViewport(viewport){viewport.scrollLeft=Math.max(0,(viewport.scrollWidth-viewport.clientWidth)/2);viewport.scrollTop=Math.max(0,(viewport.scrollHeight-viewport.clientHeight)/2)}
function fitWholeMap(kind){const explore=kind==='explore';const viewport=explore?els.exploreMapViewport:els.mapViewport;const canvas=explore?els.exploreMapCanvas:els.mapCanvas;const image=explore?els.exploreSettlementsMap:els.settlementsMap;const width=getFitWidth(viewport,image);if(explore){state.exploreFitWidth=width;state.exploreZoom=1}else{state.mapFitWidth=width;state.zoom=1}canvas.style.width=`${width}px`;requestAnimationFrame(()=>centerViewport(viewport))}
function setZoom(kind,value){const explore=kind==='explore';const viewport=explore?els.exploreMapViewport:els.mapViewport;const canvas=explore?els.exploreMapCanvas:els.mapCanvas;const image=explore?els.exploreSettlementsMap:els.settlementsMap;const key=explore?'exploreZoom':'zoom';const fitKey=explore?'exploreFitWidth':'mapFitWidth';state[key]=Math.max(1,Math.min(5,value));const base=state[fitKey]||getFitWidth(viewport,image);canvas.style.width=`${base*state[key]}px`;requestAnimationFrame(()=>centerViewport(viewport))}
function attachPan(viewport){let active=false,moved=false,startX=0,startY=0,startLeft=0,startTop=0,pointerId=null;viewport.addEventListener('pointerdown',event=>{if(event.button!==undefined&&event.button!==0)return;active=true;moved=false;pointerId=event.pointerId;startX=event.clientX;startY=event.clientY;startLeft=viewport.scrollLeft;startTop=viewport.scrollTop});viewport.addEventListener('pointermove',event=>{if(!active||event.pointerId!==pointerId)return;const dx=event.clientX-startX,dy=event.clientY-startY;if(!moved&&Math.hypot(dx,dy)>5){moved=true;viewport.classList.add('is-dragging');viewport.setPointerCapture?.(pointerId)}if(!moved)return;event.preventDefault();viewport.scrollLeft=startLeft-dx;viewport.scrollTop=startTop-dy});const end=event=>{if(!active||event.pointerId!==pointerId)return;if(moved)state.suppressMapClickUntil=Date.now()+250;active=false;viewport.classList.remove('is-dragging');try{viewport.releasePointerCapture?.(pointerId)}catch(_error){}};viewport.addEventListener('pointerup',end);viewport.addEventListener('pointercancel',end);viewport.addEventListener('click',event=>{if(Date.now()<state.suppressMapClickUntil){event.preventDefault();event.stopPropagation()}},true)}
function saveProgress(){localStorage.setItem(STORAGE_KEY,JSON.stringify({completed:false,completedIds:state.completedIds,score:state.score,bonusCompleted:state.bonusCompleted}))}
function resetStation(){if(!confirm('לאפס את התחנה ולהגריל שלושה יישובים חדשים?'))return;localStorage.removeItem(STORAGE_KEY);els.mapMarkers.innerHTML='';initialize();window.scrollTo({top:0,behavior:'smooth'})}

els.startStationBtn.addEventListener('click',startStation);
els.hintBtn.addEventListener('click',()=>showFeedback(`רמז: ${state.current.hint}`,'try-again'));
els.settlementsMap.addEventListener('click',handleMapClick);
els.continueBtn.addEventListener('click',continueAfterPassport);
els.exploreBtn.addEventListener('click',showExploration);
els.bonusBtn.addEventListener('click',startBonus);
els.finishBtn.addEventListener('click',finishStation);
els.fitMapBtn.addEventListener('click',()=>fitWholeMap('task'));
els.zoomInBtn.addEventListener('click',()=>setZoom('task',state.zoom+.35));
els.zoomOutBtn.addEventListener('click',()=>setZoom('task',state.zoom-.35));
els.resetMapBtn.addEventListener('click',()=>centerViewport(els.mapViewport));
els.exploreFitMapBtn.addEventListener('click',()=>fitWholeMap('explore'));
els.exploreZoomInBtn.addEventListener('click',()=>setZoom('explore',state.exploreZoom+.35));
els.exploreZoomOutBtn.addEventListener('click',()=>setZoom('explore',state.exploreZoom-.35));
els.exploreResetMapBtn.addEventListener('click',()=>centerViewport(els.exploreMapViewport));
els.borderFilters.addEventListener('click',event=>{const button=event.target.closest('button[data-border]');if(!button)return;state.activeBorder=button.dataset.border;applyBorderFilter()});
els.instructionsBtn.addEventListener('click',()=>els.instructionsModal.hidden=false);
els.closeInstructionsBtn.addEventListener('click',()=>els.instructionsModal.hidden=true);
els.instructionsModal.addEventListener('click',event=>{if(event.target===els.instructionsModal)els.instructionsModal.hidden=true});
els.closeSettlementInfoBtn.addEventListener('click',()=>els.settlementInfoModal.hidden=true);
els.settlementInfoModal.addEventListener('click',event=>{if(event.target===els.settlementInfoModal)els.settlementInfoModal.hidden=true});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){els.instructionsModal.hidden=true;els.settlementInfoModal.hidden=true}});
els.resetBtn.addEventListener('click',resetStation);
els.amitLogo.addEventListener('error',()=>{els.amitLogo.hidden=true;els.logoFallback.hidden=false});
attachPan(els.mapViewport);attachPan(els.exploreMapViewport);
window.addEventListener('resize',()=>{if(!els.mapStage.hidden)fitWholeMap('task');if(!els.exploreStage.hidden)fitWholeMap('explore')});
initialize();

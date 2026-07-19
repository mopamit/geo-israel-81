const SITE_LIBRARY = [
  {
    id:'yifat', number:1, name:'מוזיאון העמק (יפעת)', zone:'north',
    riddle:'אני נמצא בעמק יזרעאל ומספר את סיפורם המרתק של החלוצים שהגיעו לכאן, עבדו קשה וייבשו את הביצות. מי אני והיכן אני נמצא?',
    hint:'חפשו אותי בקיבוץ יפעת שבעמק יזרעאל.',
    position:{x:60.31,y:17.87}, hitEllipse:{x:60.31,y:17.87,rx:2.4,ry:1.15},
    location:'קיבוץ יפעת, עמק יזרעאל', type:'מוזיאון',
    story:'סיפור ההתיישבות החלוצית בעמק יזרעאל, העבודה החקלאית וחיי הקיבוץ והמושב.',
    feature:'שחזור חיי החלוצים וכלי העבודה של ההתיישבות בעמק.'
  },
  {
    id:'eshkol', number:2, name:'מרכז המבקרים אשכול', zone:'north',
    riddle:'אני ממוקם בצפון ומציג את הסיפור הגדול של הקמת המוביל הארצי ואת החזון של הבאת מים מהצפון אל הנגב. מי אני והיכן אני נמצא?',
    hint:'אני קשור למפעל המים הארצי ונמצא באזור הגליל התחתון.',
    position:{x:60.37,y:15.21}, hitEllipse:{x:60.37,y:15.21,rx:2.4,ry:1.1},
    location:'אתר אשכול, הגליל התחתון', type:'מרכז מבקרים',
    story:'סיפור המוביל הארצי, משק המים בישראל והעברת מים מן הצפון אל מרכז הארץ והנגב.',
    feature:'מתקן מרכזי של חברת מקורות לטיפול ולהולכת מים.'
  },
  {
    id:'kinneret-yard', number:3, name:'חצר כנרת', zone:'north',
    riddle:'אני שוכנת בצפון על שפת הכנרת. אצלי הוכשרו החלוצים, אצלי נולדו רעיונות הקיבוץ והמושב, וכאן נכתבה שירתה של רחל. מי אני והיכן אני נמצאת?',
    hint:'אני נמצאת מדרום לכנרת, ליד קבוצת כנרת.',
    position:{x:78.93,y:15.60}, hitEllipse:{x:78.93,y:15.60,rx:2.25,ry:1.05},
    location:'ליד קבוצת כנרת, דרום הכנרת', type:'אתר לאומי',
    story:'אחד מאתרי ערש ההתיישבות העובדת, שבו הוכשרו חלוצים ונולדו רעיונות הקיבוץ והמושב.',
    feature:'קשורה לרחל המשוררת, לחוות העלמות ולראשית ההתיישבות השיתופית.'
  },
  {
    id:'anu', number:4, name:'מוזיאון "אנו"', zone:'center',
    riddle:'אני ממוקם במרכז הארץ ומציג את סיפורו, תרבותו וההיסטוריה של העם היהודי לאורך הדורות ובכל רחבי העולם. מי אני והיכן אני נמצא?',
    hint:'אני נמצא בקמפוס אוניברסיטת תל אביב.',
    position:{x:36.92,y:31.47}, hitEllipse:{x:36.92,y:31.47,rx:2.0,ry:.95},
    location:'אוניברסיטת תל אביב', type:'מוזיאון',
    story:'סיפורו של העם היהודי בעולם, זהותו, תרבותו, קהילותיו ויצירתו לאורך הדורות.',
    feature:'מוזיאון העם היהודי בתצוגה רחבה, חדשנית ורב-תחומית.'
  },
  {
    id:'independence-house', number:5, name:'בית העצמאות', zone:'center',
    riddle:'אני שוכן במרכז, ובתוכי התרחש הרגע ההיסטורי שבו הוכרזה עצמאות ישראל בה׳ באייר תש״ח. מי אני והיכן אני נמצא?',
    hint:'אני נמצא בשדרות רוטשילד בתל אביב.',
    position:{x:35.64,y:32.67}, hitEllipse:{x:35.64,y:32.67,rx:1.9,ry:.9},
    location:'שדרות רוטשילד, תל אביב', type:'אתר לאומי',
    story:'המקום שבו הכריז דוד בן-גוריון על הקמת מדינת ישראל ב-14 במאי 1948.',
    feature:'אולם הכרזת העצמאות והקראת מגילת העצמאות.'
  },
  {
    id:'ayalon-institute', number:6, name:'מכון איילון', zone:'center',
    riddle:'אני מפעל תחמושת תת-קרקעי וסודי שפעל במרכז במהלך מלחמת העצמאות, כשאני מוסווה מלמעלה על ידי מכבסה של קיבוץ. מי אני והיכן אני נמצא?',
    hint:'אני נמצא בגבעת הקיבוצים ברחובות.',
    position:{x:36.98,y:37.16}, hitEllipse:{x:36.98,y:37.16,rx:2.15,ry:1.0},
    location:'גבעת הקיבוצים, רחובות', type:'אתר מורשת',
    story:'מפעל סודי לייצור כדורי תשעה מילימטר עבור ארגון ההגנה בתקופת המאבק ובמלחמת העצמאות.',
    feature:'מפעל תת-קרקעי שהוסווה באמצעות מכבסה ומאפייה.'
  },
  {
    id:'yad-vashem', number:7, name:'יד ושם', zone:'jerusalem',
    riddle:'אני נמצא בירושלים ומשמש כמרכז העולמי להנצחת זיכרון השואה והגבורה של העם היהודי. מי אני והיכן אני נמצא?',
    hint:'אני נמצא בהר הזיכרון במערב ירושלים.',
    position:{x:58.70,y:40.43}, hitEllipse:{x:58.70,y:40.43,rx:1.65,ry:.75},
    location:'הר הזיכרון, ירושלים', type:'מרכז הנצחה',
    story:'הנצחת ששת מיליון היהודים שנרצחו בשואה, תיעוד, מחקר וחינוך לזיכרון השואה.',
    feature:'המוסד הרשמי של מדינת ישראל להנצחת השואה והגבורה.'
  },
  {
    id:'israel-museum', number:8, name:'מוזיאון ישראל', zone:'jerusalem',
    riddle:'אני שוכן בירושלים ומהווה את הבית הרשמי של מגילות מדבר יהודה העתיקות ושל אוצרות הארכאולוגיה של הארץ. מי אני והיכן אני נמצא?',
    hint:'אני נמצא בגבעת רם בירושלים ובתחומי נמצא היכל הספר.',
    position:{x:57.67,y:41.02}, hitEllipse:{x:57.67,y:41.02,rx:1.55,ry:.72},
    location:'גבעת רם, ירושלים', type:'מוזיאון לאומי',
    story:'אוספי ארכאולוגיה, אמנות ותרבות יהודית, ובהם מגילות מדבר יהודה ודגם ירושלים בימי הבית השני.',
    feature:'היכל הספר ואוספי המורשת והאמנות החשובים במדינה.'
  },
  {
    id:'mount-herzl', number:9, name:'הר הרצל', zone:'jerusalem',
    riddle:'אני ממוקם בירושלים, ובין שבילי שוכנים לעד גדולי האומה של מדינת ישראל וחללי צה״ל שלחמו על תקומתה. מי אני והיכן אני נמצא?',
    hint:'אני סמוך ליד ושם במערב ירושלים.',
    position:{x:58.31,y:39.99}, hitEllipse:{x:58.31,y:39.99,rx:1.55,ry:.72},
    location:'מערב ירושלים', type:'אתר הנצחה לאומי',
    story:'בית העלמין הלאומי שבו קבורים מנהיגי המדינה, גדולי האומה וחללי מערכות ישראל.',
    feature:'קברו של בנימין זאב הרצל וחלקת גדולי האומה.'
  },
  {
    id:'ben-gurion-hut', number:10, name:'צריף בן-גוריון (שדה בוקר)', zone:'south',
    riddle:'אני נמצא בדרום ושימשתי כביתו הצנוע של מקים המדינה, האיש שחזה ועבד למען הפרחת המדבר והנגב. מי אני והיכן אני נמצא?',
    hint:'אני נמצא בקיבוץ שדה בוקר בנגב.',
    position:{x:33.25,y:63.92}, hitEllipse:{x:33.25,y:63.92,rx:2.4,ry:1.1},
    location:'קיבוץ שדה בוקר, הנגב', type:'בית היסטורי',
    story:'ביתם של דוד ופולה בן-גוריון, המשמר את אורח חייהם ואת חזונו של בן-גוריון לפיתוח הנגב.',
    feature:'צריף מגורים צנוע שנותר כמעט כפי שהיה בחייו של בן-גוריון.'
  },
  {
    id:'air-force-museum', number:11, name:'מוזיאון חיל האוויר (חצרים)', zone:'south',
    riddle:'אני ממוקם בדרום ומציג לכל המבקרים את ההיסטוריה המפוארת של ההגנה על שמי מדינת ישראל. מי אני והיכן אני נמצא?',
    hint:'אני נמצא ליד בסיס חצרים, מערבית לבאר שבע.',
    position:{x:28.29,y:54.76}, hitEllipse:{x:28.29,y:54.76,rx:2.2,ry:1.0},
    location:'בסיס חצרים, מערבית לבאר שבע', type:'מוזיאון צבאי',
    story:'היסטוריית חיל האוויר הישראלי, מטוסים, מערכות ואירועים מרכזיים בתולדות החיל.',
    feature:'אוסף מטוסים וכלי טיס מתקופות שונות.'
  },
  {
    id:'beit-eshel', number:12, name:'מצפה בית אשל', zone:'south',
    riddle:'אני אחד משלושת המצפים ההיסטוריים שנבנו בדרום. על אף מצור קשה וממושך, החזקתי מעמד בגבורה מול הצבא המצרי עד לשחרור באר שבע. מי אני והיכן אני נמצא?',
    hint:'אני נמצא מדרום-מזרח לבאר שבע.',
    position:{x:39.18,y:54.88}, hitEllipse:{x:39.18,y:54.88,rx:2.2,ry:1.0},
    location:'פארק נחל באר שבע, סמוך לבאר שבע', type:'אתר התיישבות והנצחה',
    story:'אחד משלושת המצפים שהוקמו בנגב ב-1943 ושעמד במצור ובהפגזות במלחמת העצמאות.',
    feature:'סמל להתיישבות בנגב ולעמידת מגיני היישוב מול הצבא המצרי.'
  }
];

const REQUIRED_COUNT=3;
const STORAGE_KEY='amitHeritageStationV1';
const state={requiredSet:[],queue:[],current:null,completedIds:[],requiredCompleted:0,bonusCompleted:0,score:0,streak:0,attempts:0,stage:'name',zoom:1,exploreZoom:1,mapFitWidth:0,exploreFitWidth:0,suppressMapClickUntil:0};

const els={
  scoreValue:document.getElementById('scoreValue'),streakValue:document.getElementById('streakValue'),completedValue:document.getElementById('completedValue'),requiredValue:document.getElementById('requiredValue'),progressBar:document.getElementById('progressBar'),
  phaseChip:document.getElementById('phaseChip'),challengeNumber:document.getElementById('challengeNumber'),challengeType:document.getElementById('challengeType'),riddleText:document.getElementById('riddleText'),feedback:document.getElementById('feedback'),hintBtn:document.getElementById('hintBtn'),mapInstructions:document.getElementById('mapInstructions'),currentSiteName:document.getElementById('currentSiteName'),
  nameStage:document.getElementById('nameStage'),siteOptions:document.getElementById('siteOptions'),mapStage:document.getElementById('mapStage'),mapViewport:document.getElementById('mapViewport'),mapCanvas:document.getElementById('mapCanvas'),heritageMap:document.getElementById('heritageMap'),mapMarkers:document.getElementById('mapMarkers'),clickMarker:document.getElementById('clickMarker'),
  passportStage:document.getElementById('passportStage'),passportType:document.getElementById('passportType'),passportName:document.getElementById('passportName'),passportLocation:document.getElementById('passportLocation'),passportStory:document.getElementById('passportStory'),passportFeature:document.getElementById('passportFeature'),continueBtn:document.getElementById('continueBtn'),
  decisionStage:document.getElementById('decisionStage'),exploreBtn:document.getElementById('exploreBtn'),bonusBtn:document.getElementById('bonusBtn'),remainingBonusText:document.getElementById('remainingBonusText'),
  exploreStage:document.getElementById('exploreStage'),exploreMapViewport:document.getElementById('exploreMapViewport'),exploreMapCanvas:document.getElementById('exploreMapCanvas'),exploreHeritageMap:document.getElementById('exploreHeritageMap'),exploreMarkers:document.getElementById('exploreMarkers'),finishBtn:document.getElementById('finishBtn'),
  completeStage:document.getElementById('completeStage'),finalSites:document.getElementById('finalSites'),finalBonus:document.getElementById('finalBonus'),finalScore:document.getElementById('finalScore'),collectionCount:document.getElementById('collectionCount'),collectionGrid:document.getElementById('collectionGrid'),
  fitMapBtn:document.getElementById('fitMapBtn'),zoomInBtn:document.getElementById('zoomInBtn'),zoomOutBtn:document.getElementById('zoomOutBtn'),resetMapBtn:document.getElementById('resetMapBtn'),exploreFitMapBtn:document.getElementById('exploreFitMapBtn'),exploreZoomInBtn:document.getElementById('exploreZoomInBtn'),exploreZoomOutBtn:document.getElementById('exploreZoomOutBtn'),exploreResetMapBtn:document.getElementById('exploreResetMapBtn'),
  instructionsBtn:document.getElementById('instructionsBtn'),closeInstructionsBtn:document.getElementById('closeInstructionsBtn'),instructionsModal:document.getElementById('instructionsModal'),siteInfoModal:document.getElementById('siteInfoModal'),closeSiteInfoBtn:document.getElementById('closeSiteInfoBtn'),siteInfoType:document.getElementById('siteInfoType'),siteInfoName:document.getElementById('siteInfoName'),siteInfoLocation:document.getElementById('siteInfoLocation'),siteInfoStory:document.getElementById('siteInfoStory'),siteInfoFeature:document.getElementById('siteInfoFeature'),resetBtn:document.getElementById('resetBtn'),amitLogo:document.getElementById('amitLogo'),logoFallback:document.getElementById('logoFallback')
};

function shuffle(items){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function getSite(id){return SITE_LIBRARY.find(site=>site.id===id)}
function remainingSites(){return SITE_LIBRARY.filter(site=>!state.completedIds.includes(site.id))}
function chooseRequiredSites(){const north=shuffle(SITE_LIBRARY.filter(s=>s.zone==='north'))[0];const center=shuffle(SITE_LIBRARY.filter(s=>s.zone==='center'||s.zone==='jerusalem'))[0];const south=shuffle(SITE_LIBRARY.filter(s=>s.zone==='south'))[0];return shuffle([north.id,center.id,south.id])}

function initialize(){Object.assign(state,{requiredSet:chooseRequiredSites(),queue:[],current:null,completedIds:[],requiredCompleted:0,bonusCompleted:0,score:0,streak:0,attempts:0,stage:'name',zoom:1,exploreZoom:1,mapFitWidth:0,exploreFitWidth:0,suppressMapClickUntil:0});state.queue=[...state.requiredSet];localStorage.removeItem(STORAGE_KEY);loadNextSite();updateHud();renderCollection()}
function updateHud(){els.scoreValue.textContent=state.score;els.streakValue.textContent=state.streak;els.completedValue.textContent=`${state.completedIds.length}/12`;els.requiredValue.textContent=`${Math.min(state.requiredCompleted,REQUIRED_COUNT)}/${REQUIRED_COUNT}`;els.progressBar.style.width=`${Math.min(state.requiredCompleted/REQUIRED_COUNT,1)*100}%`}
function showFeedback(text,type){els.feedback.hidden=false;els.feedback.className=`feedback ${type}`;els.feedback.textContent=text}
function clearFeedback(){els.feedback.hidden=true;els.feedback.className='feedback';els.feedback.textContent=''}
function hideStages(){els.nameStage.hidden=true;els.mapStage.hidden=true;els.passportStage.hidden=true;els.decisionStage.hidden=true;els.exploreStage.hidden=true;els.completeStage.hidden=true}
function resetSidebar(){els.mapInstructions.hidden=true;els.hintBtn.hidden=true;clearFeedback()}

function loadNextSite(){if(!state.queue.length){showDecision();return}state.current=getSite(state.queue.shift());state.stage='name';state.attempts=0;hideStages();els.nameStage.hidden=false;resetSidebar();els.phaseChip.textContent='שלב א׳ – זיהוי האתר';els.challengeNumber.textContent=state.completedIds.length+1;els.challengeType.textContent=state.requiredCompleted<REQUIRED_COUNT?'מתוך 3 משימות החובה':'אתר בונוס';els.riddleText.textContent=state.current.riddle;renderSiteOptions();renderTaskMarkers();updateHud()}
function renderSiteOptions(){els.siteOptions.innerHTML='';shuffle(remainingSites()).forEach(site=>{const button=document.createElement('button');button.type='button';button.className='site-option';button.textContent=site.name;button.addEventListener('click',()=>chooseSite(site,button));els.siteOptions.appendChild(button)})}
function chooseSite(site,button){if(state.stage!=='name')return;state.attempts++;if(site.id===state.current.id){const earned=state.attempts===1?100:50;state.score+=earned;state.streak++;showFeedback(`מדויק! זיהיתם את ${site.name}. נוספו ${earned} נקודות.`,'success');updateHud();setTimeout(showMapStage,600)}else{state.streak=0;updateHud();button.classList.add('wrong');setTimeout(()=>button.classList.remove('wrong'),400);showFeedback('כמעט. קראו שוב את הרמזים על התקופה, האירוע והמיקום.','try-again');els.hintBtn.hidden=false}}

function showMapStage(){state.stage='map';hideStages();els.mapStage.hidden=false;els.phaseChip.textContent='שלב ב׳ – מיקום במפה';els.mapInstructions.hidden=false;els.currentSiteName.textContent=state.current.name;els.hintBtn.hidden=true;els.clickMarker.hidden=true;clearFeedback();requestAnimationFrame(()=>fitWholeMap('task'))}
function handleMapClick(event){if(state.stage!=='map'||Date.now()<state.suppressMapClickUntil)return;const rect=els.heritageMap.getBoundingClientRect();const x=((event.clientX-rect.left)/rect.width)*100;const y=((event.clientY-rect.top)/rect.height)*100;if(x<0||x>100||y<0||y>100)return;els.clickMarker.hidden=false;els.clickMarker.style.left=`${x}%`;els.clickMarker.style.top=`${y}%`;const area=state.current.hitEllipse;const inside=Math.pow((x-area.x)/area.rx,2)+Math.pow((y-area.y)/area.ry,2)<=1;if(inside){state.score+=50;state.streak++;state.stage='passport';state.completedIds.push(state.current.id);if(state.requiredCompleted<REQUIRED_COUNT)state.requiredCompleted++;else state.bonusCompleted++;showFeedback(`המיקום נכון. ${state.current.name} נוסף לאוסף.`,'success');renderCurrentMarker();updateHud();renderCollection();setTimeout(showPassport,650)}else{state.streak=0;updateHud();showFeedback('המיקום אינו מדויק מספיק. הגדילו את המפה ונסו שוב באזור שבו נמצא האתר.','try-again');els.hintBtn.hidden=false}}

function createMarker(site,interactive=false){const marker=document.createElement(interactive?'button':'div');if(interactive)marker.type='button';marker.className=`heritage-marker ${interactive?'explore-marker':''}`;marker.style.left=`${site.position.x}%`;marker.style.top=`${site.position.y}%`;marker.setAttribute('aria-label',site.name);const span=document.createElement('span');span.textContent=site.number;marker.appendChild(span);if(interactive)marker.addEventListener('click',event=>{event.stopPropagation();openSiteInfo(site)});return marker}
function renderCurrentMarker(){if(document.getElementById(`heritage-${state.current.id}`))return;const marker=createMarker(state.current);marker.id=`heritage-${state.current.id}`;els.mapMarkers.appendChild(marker)}
function renderTaskMarkers(){els.mapMarkers.innerHTML='';state.completedIds.forEach(id=>{const site=getSite(id);const marker=createMarker(site);marker.id=`heritage-${site.id}`;els.mapMarkers.appendChild(marker)})}

function showPassport(){hideStages();els.passportStage.hidden=false;resetSidebar();els.phaseChip.textContent='תעודת זהות – אתר מורשת';els.riddleText.textContent=`${state.current.name} הושלם ונוסף לאוסף.`;els.passportType.textContent=state.current.type;els.passportName.textContent=state.current.name;els.passportLocation.textContent=state.current.location;els.passportStory.textContent=state.current.story;els.passportFeature.textContent=state.current.feature;saveProgress()}
function continueAfterPassport(){if(state.requiredCompleted>=REQUIRED_COUNT)showDecision();else loadNextSite()}
function showDecision(){state.stage='decision';hideStages();els.decisionStage.hidden=false;resetSidebar();els.phaseChip.textContent='בחירת המשך';els.riddleText.textContent='שלושת אתרי החובה הושלמו.';const remaining=remainingSites().length;els.remainingBonusText.textContent=remaining?`נותרו ${remaining} אתרים זמינים לבונוס.`:'השלמתם את כל 12 האתרים.';els.bonusBtn.hidden=remaining===0}
function startBonus(){const candidates=remainingSites();if(!candidates.length){showExploration();return}state.queue=[shuffle(candidates)[0].id];loadNextSite()}
function showExploration(){state.stage='explore';hideStages();els.exploreStage.hidden=false;resetSidebar();els.phaseChip.textContent='מפת חקר';els.riddleText.textContent='לחצו על כל אחד מ-12 האתרים כדי לפתוח תעודת זהות.';renderExploreMarkers();requestAnimationFrame(()=>fitWholeMap('explore'))}
function renderExploreMarkers(){els.exploreMarkers.innerHTML='';SITE_LIBRARY.forEach(site=>els.exploreMarkers.appendChild(createMarker(site,true)))}
function openSiteInfo(site){els.siteInfoType.textContent=site.type;els.siteInfoName.textContent=site.name;els.siteInfoLocation.textContent=site.location;els.siteInfoStory.textContent=site.story;els.siteInfoFeature.textContent=site.feature;els.siteInfoModal.hidden=false}
function finishStation(){state.stage='complete';hideStages();els.completeStage.hidden=false;resetSidebar();els.phaseChip.textContent='התחנה הושלמה';els.riddleText.textContent='השלמתם את תחנת אתרי המורשת.';els.finalSites.textContent=state.completedIds.length;els.finalBonus.textContent=state.bonusCompleted;els.finalScore.textContent=state.score;localStorage.setItem(STORAGE_KEY,JSON.stringify({completed:true,completedIds:state.completedIds,score:state.score,bonusCompleted:state.bonusCompleted,completedAt:new Date().toISOString()}))}
function renderCollection(){els.collectionCount.textContent=state.completedIds.length;els.collectionGrid.innerHTML='';if(!state.completedIds.length){els.collectionGrid.innerHTML='<p class="empty-collection">הכרטיס הראשון יופיע לאחר השלמת אתר.</p>';return}state.completedIds.forEach(id=>{const site=getSite(id);const card=document.createElement('article');card.className='collection-card';card.innerHTML=`<strong>${site.name}</strong><span>${site.location}</span><span>${site.type}</span>`;els.collectionGrid.appendChild(card)})}

function getFitWidth(viewport,image){if(!image.naturalWidth||!image.naturalHeight)return Math.max(240,viewport.clientWidth*.36);const byHeight=(viewport.clientHeight-8)*(image.naturalWidth/image.naturalHeight);return Math.max(220,Math.min(viewport.clientWidth-8,byHeight))}
function centerViewport(viewport){viewport.scrollLeft=Math.max(0,(viewport.scrollWidth-viewport.clientWidth)/2);viewport.scrollTop=Math.max(0,(viewport.scrollHeight-viewport.clientHeight)/2)}
function fitWholeMap(kind){const explore=kind==='explore';const viewport=explore?els.exploreMapViewport:els.mapViewport;const canvas=explore?els.exploreMapCanvas:els.mapCanvas;const image=explore?els.exploreHeritageMap:els.heritageMap;const width=getFitWidth(viewport,image);if(explore){state.exploreFitWidth=width;state.exploreZoom=1}else{state.mapFitWidth=width;state.zoom=1}canvas.style.width=`${width}px`;requestAnimationFrame(()=>centerViewport(viewport))}
function setZoom(kind,value){const explore=kind==='explore';const viewport=explore?els.exploreMapViewport:els.mapViewport;const canvas=explore?els.exploreMapCanvas:els.mapCanvas;const image=explore?els.exploreHeritageMap:els.heritageMap;const key=explore?'exploreZoom':'zoom';const fitKey=explore?'exploreFitWidth':'mapFitWidth';state[key]=Math.max(1,Math.min(5,value));const base=state[fitKey]||getFitWidth(viewport,image);canvas.style.width=`${base*state[key]}px`;requestAnimationFrame(()=>centerViewport(viewport))}
function attachPan(viewport){let active=false,moved=false,startX=0,startY=0,startLeft=0,startTop=0,pointerId=null;viewport.addEventListener('pointerdown',event=>{if(event.button!==undefined&&event.button!==0)return;active=true;moved=false;pointerId=event.pointerId;startX=event.clientX;startY=event.clientY;startLeft=viewport.scrollLeft;startTop=viewport.scrollTop});viewport.addEventListener('pointermove',event=>{if(!active||event.pointerId!==pointerId)return;const dx=event.clientX-startX,dy=event.clientY-startY;if(!moved&&Math.hypot(dx,dy)>5){moved=true;viewport.classList.add('is-dragging');viewport.setPointerCapture?.(pointerId)}if(!moved)return;event.preventDefault();viewport.scrollLeft=startLeft-dx;viewport.scrollTop=startTop-dy});const end=event=>{if(!active||event.pointerId!==pointerId)return;if(moved)state.suppressMapClickUntil=Date.now()+250;active=false;viewport.classList.remove('is-dragging');try{viewport.releasePointerCapture?.(pointerId)}catch(_error){}};viewport.addEventListener('pointerup',end);viewport.addEventListener('pointercancel',end);viewport.addEventListener('click',event=>{if(Date.now()<state.suppressMapClickUntil){event.preventDefault();event.stopPropagation()}},true)}
function saveProgress(){localStorage.setItem(STORAGE_KEY,JSON.stringify({completed:false,completedIds:state.completedIds,score:state.score,bonusCompleted:state.bonusCompleted}))}
function resetStation(){if(!confirm('לאפס את התחנה ולהגריל שלושה אתרים חדשים?'))return;localStorage.removeItem(STORAGE_KEY);initialize();window.scrollTo({top:0,behavior:'smooth'})}

els.hintBtn.addEventListener('click',()=>showFeedback(`רמז: ${state.current.hint}`,'try-again'));
els.heritageMap.addEventListener('click',handleMapClick);
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
els.instructionsBtn.addEventListener('click',()=>els.instructionsModal.hidden=false);
els.closeInstructionsBtn.addEventListener('click',()=>els.instructionsModal.hidden=true);
els.instructionsModal.addEventListener('click',event=>{if(event.target===els.instructionsModal)els.instructionsModal.hidden=true});
els.closeSiteInfoBtn.addEventListener('click',()=>els.siteInfoModal.hidden=true);
els.siteInfoModal.addEventListener('click',event=>{if(event.target===els.siteInfoModal)els.siteInfoModal.hidden=true});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){els.instructionsModal.hidden=true;els.siteInfoModal.hidden=true}});
els.resetBtn.addEventListener('click',resetStation);
els.amitLogo.addEventListener('error',()=>{els.amitLogo.hidden=true;els.logoFallback.hidden=false});
attachPan(els.mapViewport);attachPan(els.exploreMapViewport);
window.addEventListener('resize',()=>{if(!els.mapStage.hidden)fitWholeMap('task');if(!els.exploreStage.hidden)fitWholeMap('explore')});
initialize();

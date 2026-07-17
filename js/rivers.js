const RIVER_LIBRARY = [
  {
    id: 'kishon',
    name: 'נחל קישון',
    riddle: 'אני נחל מרכזי בעמק יזרעאל, ולאחר מסע ארוך אני נשפך אל הים התיכון ממזרח לעיר חיפה. מי אני?',
    hint: 'אני זורם מעמק יזרעאל אל מפרץ חיפה.',
    outlet: 'מפרץ חיפה והים התיכון',
    outletChoices: ['מפרץ חיפה והים התיכון', 'הכנרת', 'ים המלח'],
    basin: 'אגן הים התיכון',
    basinChoices: ['אגן הים התיכון', 'אגן הירדן והכנרת', 'אגן ים המלח והערבה'],
    hitTolerance: 28,
    path: [[486,411],[486,408],[485,405],[484,402],[482,399],[480,396],[479,393],[477,390],[475,387],[472,384],[471,381],[468,379],[465,377],[462,376],[459,376],[456,375],[453,374],[450,374],[447,373],[444,371],[441,369],[438,366],[435,363],[432,360],[429,357],[426,354],[423,351],[420,350],[417,349],[416,346],[416,343],[415,340],[414,337],[413,334],[413,331],[413,328],[412,325],[410,322],[408,319],[405,316],[402,314],[399,311],[398,308],[399,305],[400,302],[399,299],[396,296],[393,294],[391,291],[389,288],[386,288],[383,288],[382,285],[381,282]]
  },
  {
    id: 'alexander',
    name: 'נחל אלכסנדר',
    riddle: 'אני זורם בלב אזור השרון, וידוע בכל הארץ בזכות צבי המים הרכים והענקיים שמוצאים אצלי בית בטוח. מי אני?',
    hint: 'אני נמצא בשרון ומזוהה עם הצבים הרכים.',
    outlet: 'הים התיכון ליד מכמורת',
    outletChoices: ['הים התיכון ליד מכמורת', 'נהר הירדן', 'מפרץ אילת'],
    basin: 'אגן הים התיכון',
    basinChoices: ['אגן הים התיכון', 'אגן הירדן והכנרת', 'אגן ים המלח והערבה'],
    hitTolerance: 30,
    path: [[410,593],[407,592],[404,590],[401,589],[398,590],[395,589],[392,589],[389,588],[386,588],[383,589],[380,589],[377,589],[374,589],[371,588],[368,587],[365,587],[362,586],[359,583],[358,580],[358,577],[358,574],[359,571],[361,568],[361,565],[360,562],[360,559],[360,556],[360,553],[359,550],[358,547],[357,544],[356,541],[354,538],[353,535],[353,532],[352,529],[352,526],[352,523],[350,520],[348,517],[345,515],[342,514],[339,512],[336,512],[333,512],[330,512],[328,515],[325,516],[322,515],[321,512],[320,509],[318,506],[315,506],[312,506],[309,504],[308,502]]
  },
  {
    id: 'dan',
    name: 'נחל דן',
    riddle: 'אני מקור הירדן השופע והיציב ביותר. המעיינות שלי מניעים אותי בעוצמה לאורך כל השנה, ללא קשר לכמות הגשם שירדה לאחרונה. מי אני?',
    hint: 'אני אחד משלושת מקורות הירדן ונובע באזור תל דן.',
    outlet: 'נהר הירדן',
    outletChoices: ['נהר הירדן', 'הים התיכון', 'ים המלח'],
    basin: 'אגן הירדן והכנרת',
    basinChoices: ['אגן הים התיכון', 'אגן הירדן והכנרת', 'אגן ים המלח והערבה'],
    hitTolerance: 17,
    path: [[660,50],[657,57],[654,64],[651,72],[648,80],[644,88],[640,96],[636,104],[632,112],[629,120]]
  },
  {
    id: 'banias',
    name: 'נחל חרמון (בניאס)',
    riddle: 'אני פורץ מהסלע למרגלות החרמון, ובשיפולי ההר אני יוצר מפלים שוצפים ומרשימים במיוחד. מי אני?',
    hint: 'אני מוכר גם בשם בניאס.',
    outlet: 'נהר הירדן',
    outletChoices: ['נהר הירדן', 'הים התיכון', 'מפרץ אילת'],
    basin: 'אגן הירדן והכנרת',
    basinChoices: ['אגן הים התיכון', 'אגן הירדן והכנרת', 'אגן ים המלח והערבה'],
    hitTolerance: 17,
    path: [[674,73],[669,78],[664,84],[659,90],[654,97],[648,104],[642,111],[636,118],[631,124],[628,128]]
  },
  {
    id: 'snir',
    name: 'נחל שניר (חצבאני)',
    riddle: 'מבין שלושת מקורות הירדן, אני הארוך ביותר, והמסע שלי מתחיל בכלל מעבר לגבול – בארץ לבנון. מי אני?',
    hint: 'אני מוכר גם בשם חצבאני.',
    outlet: 'נהר הירדן',
    outletChoices: ['נהר הירדן', 'ים המלח', 'הים התיכון'],
    basin: 'אגן הירדן והכנרת',
    basinChoices: ['אגן הים התיכון', 'אגן הירדן והכנרת', 'אגן ים המלח והערבה'],
    hitTolerance: 17,
    path: [[645,36],[644,44],[644,52],[645,60],[646,68],[646,76],[644,84],[640,92],[635,100],[629,108],[625,116]]
  },
  {
    id: 'saar',
    name: 'נחל סער',
    riddle: 'אני חוצה את צפון הגולן בתוך קניון עמוק ומרהיב, ושני מפלים גבוהים לאורך מסלולי מושכים מטיילים רבים. מי אני?',
    hint: 'אני נמצא בצפון רמת הגולן, סמוך לדרך העולה לחרמון.',
    outlet: 'נחל חרמון ומשם לירדן',
    outletChoices: ['נחל חרמון ומשם לירדן', 'הים התיכון', 'ים המלח'],
    basin: 'אגן הירדן והכנרת',
    basinChoices: ['אגן הים התיכון', 'אגן הירדן והכנרת', 'אגן ים המלח והערבה'],
    hitTolerance: 16,
    path: [[708,55],[700,58],[692,63],[684,68],[676,73],[668,79],[660,84],[653,90],[646,96],[640,102]]
  },
  {
    id: 'taninim',
    name: 'נחל תנינים',
    riddle: 'אני נחל איתן הזורם במישור חוף הכרמל, והשם שלי יזכיר לכם זוחל עתיק ומפחיד שחי באזור בעבר הרחוק. מי אני?',
    hint: 'שמי זהה לשמו של זוחל גדול.',
    outlet: 'הים התיכון ליד ג׳סר א־זרקא',
    outletChoices: ['הים התיכון ליד ג׳סר א־זרקא', 'הכנרת', 'ים המלח'],
    basin: 'אגן הים התיכון',
    basinChoices: ['אגן הים התיכון', 'אגן הירדן והכנרת', 'אגן ים המלח והערבה'],
    hitTolerance: 28,
    path: [[324,424],[324,427],[327,427],[330,424],[333,421],[336,421],[336,424],[338,427],[339,430],[342,432],[345,434],[348,434],[351,434],[354,434],[357,434],[360,433],[363,431],[366,429],[368,426],[370,423],[373,420],[376,418],[379,417],[382,416],[385,415],[388,412],[391,413],[394,414],[397,414],[400,414],[403,414],[406,413],[409,412],[412,412],[415,412],[418,411],[419,411]]
  },
  {
    id: 'sorek',
    name: 'נחל שורק',
    riddle: 'אני מתחיל את דרכי גבוה בהרי ירושלים, מתפתל באיטיות בין גבעות השפלה, ולבסוף נשפך אל הים הפתוח ליד חוף פלמחים. מי אני?',
    hint: 'אני נשפך לים ליד פלמחים.',
    outlet: 'הים התיכון ליד פלמחים',
    outletChoices: ['הים התיכון ליד פלמחים', 'נהר הירדן', 'ים המלח'],
    basin: 'אגן הים התיכון',
    basinChoices: ['אגן הים התיכון', 'אגן הירדן והכנרת', 'אגן ים המלח והערבה'],
    hitTolerance: 30,
    path: [[453,780],[452,783],[453,786],[455,789],[455,792],[454,795],[457,798],[458,801],[459,804],[461,807],[462,810],[461,813],[459,816],[456,818],[453,818],[450,818],[448,821],[445,824],[442,826],[439,828],[439,831],[437,834],[434,834],[431,836],[428,836],[425,838],[422,839],[420,842],[417,842],[414,841],[411,841],[408,844],[405,845],[402,846],[399,846],[398,843],[398,840],[395,840],[393,843],[390,843],[390,840],[387,839],[384,840],[381,840],[378,840],[375,840],[372,841],[369,841],[366,841],[363,842],[360,841],[357,840],[354,841],[351,842],[348,843],[345,843],[342,842],[339,840],[336,838],[333,836],[330,834],[328,831],[327,828],[324,825],[321,822],[318,821],[316,818],[313,816],[310,815],[307,814],[304,815],[301,814],[298,814],[295,814],[292,814],[289,813],[286,811],[283,812],[280,811],[278,808],[275,806],[272,805],[269,805],[266,804],[263,802],[260,799],[259,796],[258,793],[256,790],[255,787],[256,784],[255,781],[254,778],[254,775],[254,772],[254,769],[253,766],[251,763],[251,760],[250,757],[249,754],[246,751],[243,748],[240,746],[237,746],[235,746]]
  },
  {
    id: 'paran',
    name: 'נחל פארן',
    riddle: 'אני נחל עצום וארוך בנגב, ובמהלך שיטפונות יכולים לזרום בי כמויות אדירות, סוחפות ומרשימות בלב המדבר. מי אני?',
    hint: 'אני אחד מנחלי האכזב הגדולים ביותר בנגב.',
    outlet: 'הערבה',
    outletChoices: ['הערבה', 'הים התיכון', 'הכנרת'],
    basin: 'אגן ים המלח והערבה',
    basinChoices: ['אגן הים התיכון', 'אגן הירדן והכנרת', 'אגן ים המלח והערבה'],
    hitTolerance: 32,
    path: [[234,1715],[235,1712],[238,1710],[240,1707],[242,1704],[244,1701],[247,1698],[250,1695],[253,1692],[254,1689],[257,1686],[260,1684],[260,1681],[258,1678],[259,1675],[262,1674],[265,1673],[266,1670],[268,1667],[269,1664],[271,1661],[274,1659],[277,1657],[278,1654],[279,1651],[282,1649],[285,1648],[288,1646],[289,1643],[286,1642],[283,1641],[284,1638],[286,1635],[286,1632],[289,1629],[292,1628],[295,1627],[297,1624],[296,1621],[297,1618],[300,1617],[303,1615],[306,1613],[308,1610],[309,1607],[311,1604],[313,1601],[316,1598],[319,1597],[322,1597],[325,1599],[328,1597],[330,1594],[333,1594],[336,1595],[339,1598],[341,1601],[342,1604],[345,1605],[348,1603],[351,1601],[354,1602],[356,1605],[359,1604],[362,1604],[365,1604],[368,1605],[371,1607],[374,1608],[377,1607],[380,1604],[382,1601],[384,1598],[386,1595],[389,1592],[392,1590],[395,1589],[398,1588],[401,1589],[404,1588],[407,1587],[410,1586],[413,1584],[416,1582],[419,1581],[422,1579],[425,1577],[428,1574],[431,1572],[434,1570],[437,1568],[440,1566],[441,1564]]
  },
  {
    id: 'david',
    name: 'נחל דוד',
    riddle: 'אני נחל איתן הזורם בלב מדבר יהודה, ומייצר נווה מדבר ירוק, שוקק חיים ומים ממש ליד ים המלח. מי אני?',
    hint: 'אני נמצא בשמורת עין גדי.',
    outlet: 'ים המלח',
    outletChoices: ['ים המלח', 'הים התיכון', 'הכנרת'],
    basin: 'אגן ים המלח והערבה',
    basinChoices: ['אגן הים התיכון', 'אגן הירדן והכנרת', 'אגן ים המלח והערבה'],
    hitTolerance: 25,
    path: [[549,994],[546,994],[543,993],[540,990],[537,988],[534,987],[531,987],[528,986],[527,983],[525,980],[522,978],[519,978],[516,977],[513,974],[510,971],[507,970],[504,970],[501,969]]
  }
];

const REQUIRED_COUNT = 3;
const MAP_VIEWBOX = { width: 776, height: 2048 };
const STORAGE_KEY = 'amitRiversStationV8';

const WORKSHEET_ANSWERS = {
  1: 'קו פרשת המים',
  2: 'שפך הנחל',
  3: 'אגן ניקוז',
  4: 'מוצא הנחל',
  5: 'מדרון מתון',
  6: 'מדרון תלול',
  7: 'מצפון לדרום',
  8: 'ים המלח',
  9: 'מוצא של מים',
  10: 'נחל איתן',
  11: 'נחל אכזב',
  12: 'זיהום',
  13: 'רשות הניקוז והנחלים',
  14: 'שיקום'
};

const HOT_WORDS = {
  'טופוגרפיה': 'צורת פני השטח, כגון הרים, עמקים, מישורים ושיפועים. הטופוגרפיה משפיעה על כיוון זרימת המים.',
  'אגן סגור': 'אזור ניקוז שאין ממנו יציאה טבעית של מים אל הים. המים מתנקזים אליו ונשארים בו או מתאדים.',
  'מערכת אקולוגית': 'כל היצורים החיים באזור מסוים והקשרים ביניהם לבין המים, הקרקע, האוויר והצמחייה.'
};

const state = {
  requiredSet: [],
  queue: [],
  currentRiver: null,
  completedIds: [],
  requiredCompleted: 0,
  bonusCompleted: 0,
  score: 0,
  streak: 0,
  maxStreak: 0,
  attempts: 0,
  stage: 'name',
  zoom: 1,
  mapFitWidth: 0,
  suppressMapClickUntil: 0,
  worksheetAnswers: {},
  selectedSlot: null
};

const els = {
  scoreValue: document.getElementById('scoreValue'),
  streakValue: document.getElementById('streakValue'),
  completedValue: document.getElementById('completedValue'),
  requiredValue: document.getElementById('requiredValue'),
  progressBar: document.getElementById('progressBar'),
  phaseChip: document.getElementById('phaseChip'),
  challengeNumber: document.getElementById('challengeNumber'),
  challengeType: document.getElementById('challengeType'),
  riddleText: document.getElementById('riddleText'),
  feedback: document.getElementById('feedback'),
  hintBtn: document.getElementById('hintBtn'),
  mapInstructions: document.getElementById('mapInstructions'),
  currentRiverName: document.getElementById('currentRiverName'),
  outletStep: document.getElementById('outletStep'),
  outletChoices: document.getElementById('outletChoices'),
  basinStep: document.getElementById('basinStep'),
  basinChoices: document.getElementById('basinChoices'),
  nameStage: document.getElementById('nameStage'),
  riverOptions: document.getElementById('riverOptions'),
  mapStage: document.getElementById('mapStage'),
  mapCanvas: document.getElementById('mapCanvas'),
  mapViewport: document.getElementById('mapViewport'),
  riverMap: document.getElementById('riverMap'),
  solvedRiverPaths: document.getElementById('solvedRiverPaths'),
  clickMarker: document.getElementById('clickMarker'),
  decisionStage: document.getElementById('decisionStage'),
  goWorksheetBtn: document.getElementById('goWorksheetBtn'),
  bonusBtn: document.getElementById('bonusBtn'),
  remainingBonusText: document.getElementById('remainingBonusText'),
  exploreStage: document.getElementById('exploreStage'),exploreMapViewport: document.getElementById('exploreMapViewport'),exploreMapCanvas: document.getElementById('exploreMapCanvas'),exploreRiverMap: document.getElementById('exploreRiverMap'),exploreRiverPaths: document.getElementById('exploreRiverPaths'),exploreFitMapBtn: document.getElementById('exploreFitMapBtn'),exploreZoomInBtn: document.getElementById('exploreZoomInBtn'),exploreZoomOutBtn: document.getElementById('exploreZoomOutBtn'),exploreResetMapBtn: document.getElementById('exploreResetMapBtn'),continueToWorksheetBtn: document.getElementById('continueToWorksheetBtn'),riverInfoModal: document.getElementById('riverInfoModal'),closeRiverInfoBtn: document.getElementById('closeRiverInfoBtn'),riverInfoName: document.getElementById('riverInfoName'),riverInfoOutlet: document.getElementById('riverInfoOutlet'),riverInfoBasin: document.getElementById('riverInfoBasin'),riverInfoHint: document.getElementById('riverInfoHint'),
  worksheetStage: document.getElementById('worksheetStage'),
  worksheetCounter: document.getElementById('worksheetCounter'),
  wordBank: document.getElementById('wordBank'),
  checkWorksheetBtn: document.getElementById('checkWorksheetBtn'),
  clearWorksheetBtn: document.getElementById('clearWorksheetBtn'),
  worksheetFeedback: document.getElementById('worksheetFeedback'),
  completeStage: document.getElementById('completeStage'),
  finalRivers: document.getElementById('finalRivers'),
  finalBonus: document.getElementById('finalBonus'),
  finalScore: document.getElementById('finalScore'),
  fitMapBtn: document.getElementById('fitMapBtn'),
  zoomInBtn: document.getElementById('zoomInBtn'),
  zoomOutBtn: document.getElementById('zoomOutBtn'),
  resetMapBtn: document.getElementById('resetMapBtn'),
  instructionsBtn: document.getElementById('instructionsBtn'),
  closeInstructionsBtn: document.getElementById('closeInstructionsBtn'),
  instructionsModal: document.getElementById('instructionsModal'),
  resetBtn: document.getElementById('resetBtn'),
  wordPickerModal: document.getElementById('wordPickerModal'),
  closeWordPickerBtn: document.getElementById('closeWordPickerBtn'),
  pickerWords: document.getElementById('pickerWords'),
  hotWordModal: document.getElementById('hotWordModal'),
  closeHotWordBtn: document.getElementById('closeHotWordBtn'),
  hotWordTitle: document.getElementById('hotWordTitle'),
  hotWordExplanation: document.getElementById('hotWordExplanation'),
  amitLogo: document.getElementById('amitLogo'),
  logoFallback: document.getElementById('logoFallback')
};

function shuffle(items) {
  const array = [...items];
  for (let index = array.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
  }
  return array;
}

function initializeStation() {
  state.requiredSet = shuffle(RIVER_LIBRARY).slice(0, REQUIRED_COUNT).map((river) => river.id);
  state.queue = [...state.requiredSet];
  state.currentRiver = null;
  state.completedIds = [];
  state.requiredCompleted = 0;
  state.bonusCompleted = 0;
  state.score = 0;
  state.streak = 0;
  state.maxStreak = 0;
  state.attempts = 0;
  state.stage = 'name';
  state.zoom = 1;
  state.mapFitWidth = 0;
  state.suppressMapClickUntil = 0;
  state.worksheetAnswers = {};
  state.selectedSlot = null;

  localStorage.removeItem(STORAGE_KEY);
  loadNextRiver();
  updateHud();
}

function getRiver(id) {
  return RIVER_LIBRARY.find((river) => river.id === id);
}

function remainingRivers() {
  return RIVER_LIBRARY.filter((river) => !state.completedIds.includes(river.id));
}

function updateHud() {
  els.scoreValue.textContent = state.score;
  els.streakValue.textContent = state.streak;
  els.completedValue.textContent = `${state.completedIds.length}/10`;
  els.requiredValue.textContent = `${Math.min(state.requiredCompleted, REQUIRED_COUNT)}/${REQUIRED_COUNT}`;
  els.progressBar.style.width = `${Math.min(state.requiredCompleted / REQUIRED_COUNT, 1) * 100}%`;
}

function setFeedback(text, type) {
  els.feedback.hidden = false;
  els.feedback.className = `feedback ${type}`;
  els.feedback.textContent = text;
}

function clearFeedback() {
  els.feedback.hidden = true;
  els.feedback.className = 'feedback';
  els.feedback.textContent = '';
}

function hideAllMainStages() {
  els.nameStage.hidden = true;
  els.mapStage.hidden = true;
  els.decisionStage.hidden = true;
  els.exploreStage.hidden = true;
  els.worksheetStage.hidden = true;
  els.completeStage.hidden = true;
}

function resetChallengeSidebar() {
  els.mapInstructions.hidden = true;
  els.outletStep.hidden = true;
  els.basinStep.hidden = true;
  els.hintBtn.hidden = true;
  clearFeedback();
}

function loadNextRiver() {
  if (state.queue.length === 0) {
    showDecision();
    return;
  }

  const nextId = state.queue.shift();
  state.currentRiver = getRiver(nextId);
  state.stage = 'name';
  state.attempts = 0;

  hideAllMainStages();
  els.nameStage.hidden = false;
  resetChallengeSidebar();

  els.phaseChip.textContent = 'שלב א׳ – זיהוי הנחל';
  els.challengeNumber.textContent = state.completedIds.length + 1;
  els.challengeType.textContent =
    state.requiredCompleted < REQUIRED_COUNT
      ? 'מתוך 3 משימות החובה'
      : 'חידת בונוס';
  els.riddleText.textContent = state.currentRiver.riddle;

  renderRiverOptions();
  renderSolvedPaths();
  updateHud();
  saveState();
}

function renderRiverOptions() {
  els.riverOptions.innerHTML = '';

  shuffle(remainingRivers()).forEach((river) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'river-option';
    button.textContent = river.name;
    button.addEventListener('click', () => chooseRiverName(river, button));
    els.riverOptions.appendChild(button);
  });
}

function chooseRiverName(river, button) {
  if (state.stage !== 'name') return;

  state.attempts += 1;

  if (river.id === state.currentRiver.id) {
    const earned = state.attempts === 1 ? 100 : 50;
    state.score += earned;
    state.streak += 1;
    state.maxStreak = Math.max(state.maxStreak, state.streak);

    setFeedback(
      state.attempts === 1
        ? `מדויק! זיהיתם את ${river.name}. נוספו ${earned} נקודות.`
        : `הצלחתם לתקן. זהו ${river.name}. נוספו ${earned} נקודות.`,
      'success'
    );

    updateHud();
    window.setTimeout(showMapStage, 650);
    return;
  }

  state.streak = 0;
  updateHud();
  button.classList.add('wrong');
  window.setTimeout(() => button.classList.remove('wrong'), 400);

  setFeedback(
    'כמעט שם. קראו שוב את פרטי האזור, אופי הזרימה והמאפיין הייחודי של הנחל.',
    'try-again'
  );
  els.hintBtn.hidden = false;
}

function showMapStage() {
  state.stage = 'map';
  hideAllMainStages();
  els.mapStage.hidden = false;

  els.phaseChip.textContent = 'שלב ב׳ – סימון התוואי';
  els.mapInstructions.hidden = false;
  els.currentRiverName.textContent = state.currentRiver.name;
  els.outletStep.hidden = true;
  els.basinStep.hidden = true;
  els.hintBtn.hidden = true;
  els.clickMarker.hidden = true;
  clearFeedback();

  requestAnimationFrame(fitWholeMap);
}

function screenClickToViewBox(event) {
  const rect = els.riverMap.getBoundingClientRect();
  return {
    x: ((event.clientX - rect.left) / rect.width) * MAP_VIEWBOX.width,
    y: ((event.clientY - rect.top) / rect.height) * MAP_VIEWBOX.height,
    percentX: ((event.clientX - rect.left) / rect.width) * 100,
    percentY: ((event.clientY - rect.top) / rect.height) * 100
  };
}

function pointToSegmentDistance(point, start, end) {
  const dx = end[0] - start[0];
  const dy = end[1] - start[1];

  if (dx === 0 && dy === 0) {
    return Math.hypot(point.x - start[0], point.y - start[1]);
  }

  const t = Math.max(
    0,
    Math.min(
      1,
      ((point.x - start[0]) * dx + (point.y - start[1]) * dy) / (dx * dx + dy * dy)
    )
  );

  const projectedX = start[0] + t * dx;
  const projectedY = start[1] + t * dy;
  return Math.hypot(point.x - projectedX, point.y - projectedY);
}

function distanceToPolyline(point, path) {
  let minimum = Infinity;
  for (let index = 0; index < path.length - 1; index += 1) {
    minimum = Math.min(
      minimum,
      pointToSegmentDistance(point, path[index], path[index + 1])
    );
  }
  return minimum;
}

function positionClickMarker(click) {
  els.clickMarker.hidden = false;
  els.clickMarker.style.left = `${click.percentX}%`;
  els.clickMarker.style.top = `${click.percentY}%`;
}

function handleMapClick(event) {
  if (state.stage !== 'map' || Date.now() < state.suppressMapClickUntil) return;

  const click = screenClickToViewBox(event);
  positionClickMarker(click);

  const tolerance = state.currentRiver.hitTolerance || 34;
  const distance = distanceToPolyline(click, state.currentRiver.path);

  if (distance <= tolerance) {
    state.score += 50;
    state.streak += 1;
    state.maxStreak = Math.max(state.maxStreak, state.streak);
    state.stage = 'outlet';

    setFeedback(
      `הסימון נמצא לאורך תוואי ${state.currentRiver.name}. נוספו 50 נקודות.`,
      'success'
    );

    renderCurrentPath();
    showOutletStep();
    updateHud();
    return;
  }

  state.streak = 0;
  updateHud();
  setFeedback(
    'הסימון נקלט, אך הוא אינו קרוב מספיק לתוואי הנחל. הגדילו את המפה ונסו באזור אחר לאורך המסלול.',
    'try-again'
  );
  els.hintBtn.hidden = false;
}

function renderCurrentPath() {
  const existing = document.getElementById(`path-${state.currentRiver.id}`);
  if (existing) return;

  const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
  polyline.id = `path-${state.currentRiver.id}`;
  polyline.classList.add('solved-river-line');
  polyline.setAttribute(
    'points',
    state.currentRiver.path.map((point) => point.join(',')).join(' ')
  );
  els.solvedRiverPaths.appendChild(polyline);
}

function renderSolvedPaths() {
  els.solvedRiverPaths.innerHTML = '';
  state.completedIds.forEach((id) => {
    const river = getRiver(id);
    const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    polyline.id = `path-${river.id}`;
    polyline.classList.add('solved-river-line');
    polyline.setAttribute('points', river.path.map((point) => point.join(',')).join(' '));
    els.solvedRiverPaths.appendChild(polyline);
  });
}

function showOutletStep() {
  els.phaseChip.textContent = 'שלב ג׳ – נקודת השפך או החיבור';
  els.outletStep.hidden = false;
  els.basinStep.hidden = true;
  els.outletChoices.innerHTML = '';

  shuffle(state.currentRiver.outletChoices).forEach((choice) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'choice-button';
    button.textContent = choice;
    button.addEventListener('click', () => chooseOutlet(choice, button));
    els.outletChoices.appendChild(button);
  });
}

function chooseOutlet(choice, button) {
  if (state.stage !== 'outlet') return;

  if (choice === state.currentRiver.outlet) {
    state.stage = 'basin';
    state.score += 50;
    setFeedback(
      `נכון. ${state.currentRiver.name} מגיע אל ${state.currentRiver.outlet}.`,
      'success'
    );
    showBasinStep();
    updateHud();
    return;
  }

  button.classList.add('wrong');
  window.setTimeout(() => button.classList.remove('wrong'), 400);
  setFeedback(
    'כמעט. התבוננו במיקום הנחל ובכיוון שאליו הוא מתקדם.',
    'try-again'
  );
}

function showBasinStep() {
  els.phaseChip.textContent = 'שלב ד׳ – אגן הניקוז';
  els.basinStep.hidden = false;
  els.basinChoices.innerHTML = '';

  shuffle(state.currentRiver.basinChoices).forEach((choice) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'choice-button';
    button.textContent = choice;
    button.addEventListener('click', () => chooseBasin(choice, button));
    els.basinChoices.appendChild(button);
  });
}

function chooseBasin(choice, button) {
  if (state.stage !== 'basin') return;

  if (choice !== state.currentRiver.basin) {
    button.classList.add('wrong');
    window.setTimeout(() => button.classList.remove('wrong'), 400);
    setFeedback(
      'היעד כבר ידוע. חשבו לאיזו מערכת ניקוז רחבה יותר הוא שייך.',
      'try-again'
    );
    return;
  }

  state.score += 50;
  state.completedIds.push(state.currentRiver.id);

  if (state.requiredCompleted < REQUIRED_COUNT) {
    state.requiredCompleted += 1;
  } else {
    state.bonusCompleted += 1;
  }

  setFeedback(
    `הנחל הושלם. ${state.currentRiver.name} שייך ל${state.currentRiver.basin}.`,
    'success'
  );

  updateHud();
  saveState();

  window.setTimeout(() => {
    if (state.requiredCompleted >= REQUIRED_COUNT) {
      showDecision();
    } else {
      loadNextRiver();
    }
  }, 900);
}

function showDecision() {
  state.stage = 'decision';
  hideAllMainStages();
  els.decisionStage.hidden = false;

  els.phaseChip.textContent = 'בחירת המשך';
  els.riddleText.textContent = 'שלושת נחלי החובה הושלמו.';
  resetChallengeSidebar();

  const remaining = remainingRivers().length;
  els.remainingBonusText.textContent =
    remaining > 0
      ? `נותרו ${remaining} נחלים זמינים לבונוס.`
      : 'השלמתם את כל עשרת הנחלים.';
  els.bonusBtn.hidden = remaining === 0;
}

function startBonusRiver() {
  const candidates = remainingRivers();
  if (candidates.length === 0) {
    showExploration();
    return;
  }

  const chosen = shuffle(candidates)[0];
  state.queue = [chosen.id];
  loadNextRiver();
}

function openRiverInfo(r){els.riverInfoName.textContent=r.name;els.riverInfoOutlet.textContent=r.outlet;els.riverInfoBasin.textContent=r.basin;els.riverInfoHint.textContent=r.hint;els.riverInfoModal.hidden=false}function renderExploreRivers(){els.exploreRiverPaths.innerHTML='';RIVER_LIBRARY.forEach(r=>{const g=document.createElementNS('http://www.w3.org/2000/svg','g');g.classList.add('explore-river-group');const v=document.createElementNS('http://www.w3.org/2000/svg','polyline');v.classList.add('explore-river-line');v.setAttribute('points',r.path.map(p=>p.join(',')).join(' '));const h=document.createElementNS('http://www.w3.org/2000/svg','polyline');h.classList.add('explore-river-hit');h.setAttribute('points',r.path.map(p=>p.join(',')).join(' '));h.setAttribute('tabindex','0');h.addEventListener('click',e=>{e.stopPropagation();openRiverInfo(r)});h.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openRiverInfo(r)}});g.append(v,h);els.exploreRiverPaths.appendChild(g)})}function getExploreFitWidth(){if(!els.exploreRiverMap.naturalWidth)return Math.max(240,els.exploreMapViewport.clientWidth*.36);const b=(els.exploreMapViewport.clientHeight-8)*(els.exploreRiverMap.naturalWidth/els.exploreRiverMap.naturalHeight);return Math.max(220,Math.min(els.exploreMapViewport.clientWidth-8,b))}function centerExploreMap(){els.exploreMapViewport.scrollLeft=Math.max(0,(els.exploreMapViewport.scrollWidth-els.exploreMapViewport.clientWidth)/2);els.exploreMapViewport.scrollTop=Math.max(0,(els.exploreMapViewport.scrollHeight-els.exploreMapViewport.clientHeight)/2)}function fitExploreMap(){const w=getExploreFitWidth();state.exploreFitWidth=w;state.exploreZoom=1;els.exploreMapCanvas.style.width=`${w}px`;requestAnimationFrame(centerExploreMap)}function setExploreZoom(z){state.exploreZoom=Math.max(1,Math.min(5,z));els.exploreMapCanvas.style.width=`${(state.exploreFitWidth||getExploreFitWidth())*state.exploreZoom}px`;requestAnimationFrame(centerExploreMap)}function attachExplorePan(){let a=false,m=false,sx=0,sy=0,sl=0,st=0,id=null;els.exploreMapViewport.addEventListener('pointerdown',e=>{if(e.button!==undefined&&e.button!==0)return;a=true;m=false;id=e.pointerId;sx=e.clientX;sy=e.clientY;sl=els.exploreMapViewport.scrollLeft;st=els.exploreMapViewport.scrollTop});els.exploreMapViewport.addEventListener('pointermove',e=>{if(!a||e.pointerId!==id)return;const dx=e.clientX-sx,dy=e.clientY-sy;if(!m&&Math.hypot(dx,dy)>5){m=true;els.exploreMapViewport.setPointerCapture?.(id)}if(!m)return;e.preventDefault();els.exploreMapViewport.scrollLeft=sl-dx;els.exploreMapViewport.scrollTop=st-dy});const end=e=>{if(!a||e.pointerId!==id)return;a=false;try{els.exploreMapViewport.releasePointerCapture?.(id)}catch(_){}};els.exploreMapViewport.addEventListener('pointerup',end);els.exploreMapViewport.addEventListener('pointercancel',end)}function showExploration(){state.stage='explore';hideAllMainStages();els.exploreStage.hidden=false;resetChallengeSidebar();els.phaseChip.textContent='מפת חקר הנחלים';els.riddleText.textContent='לחצו על כל נחל במפה כדי לפתוח את תעודת הזהות שלו.';renderExploreRivers();requestAnimationFrame(fitExploreMap)}
function showWorksheet() {
  state.stage = 'worksheet';
  hideAllMainStages();
  els.worksheetStage.hidden = false;

  els.phaseChip.textContent = 'דף העבודה';
  els.riddleText.textContent = 'השלימו את כל 14 המושגים.';
  resetChallengeSidebar();

  renderWorksheet();
  window.scrollTo({
    top: els.worksheetStage.getBoundingClientRect().top + window.scrollY - 90,
    behavior: 'smooth'
  });
}

function usedWords() {
  return Object.values(state.worksheetAnswers);
}

function availableWords() {
  return Object.values(WORKSHEET_ANSWERS).filter((word) => !usedWords().includes(word));
}

function renderWorksheet() {
  renderSlots();
  renderWordBank();
  updateWorksheetCounter();
}

function renderSlots() {
  document.querySelectorAll('.answer-slot').forEach((slot) => {
    const number = Number(slot.dataset.slot);
    const answer = state.worksheetAnswers[number];

    slot.classList.remove('filled', 'correct', 'incorrect', 'drag-over');
    slot.textContent = answer || '';
    if (answer) slot.classList.add('filled');

    slot.onclick = () => openWordPicker(number);
    slot.onkeydown = (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openWordPicker(number);
      }
    };

    slot.ondragover = (event) => {
      event.preventDefault();
      slot.classList.add('drag-over');
    };
    slot.ondragleave = () => slot.classList.remove('drag-over');
    slot.ondrop = (event) => {
      event.preventDefault();
      slot.classList.remove('drag-over');
      const word = event.dataTransfer.getData('text/plain');
      placeWord(number, word);
    };
  });
}

function renderWordBank() {
  els.wordBank.innerHTML = '';

  shuffle(availableWords()).forEach((word) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'word-chip';
    chip.textContent = word;
    chip.draggable = true;

    chip.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text/plain', word);
      event.dataTransfer.effectAllowed = 'move';
    });

    chip.addEventListener('click', () => {
      const firstEmpty = Object.keys(WORKSHEET_ANSWERS)
        .map(Number)
        .find((number) => !state.worksheetAnswers[number]);

      if (firstEmpty) placeWord(firstEmpty, word);
    });

    els.wordBank.appendChild(chip);
  });
}

function openWordPicker(slotNumber) {
  state.selectedSlot = slotNumber;
  els.pickerWords.innerHTML = '';

  const current = state.worksheetAnswers[slotNumber];
  const choices = current
    ? [current, ...availableWords()]
    : availableWords();

  if (current) {
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'picker-word';
    removeButton.textContent = 'החזרת המילה למחסן';
    removeButton.addEventListener('click', () => {
      delete state.worksheetAnswers[slotNumber];
      closeWordPicker();
      renderWorksheet();
    });
    els.pickerWords.appendChild(removeButton);
  }

  shuffle([...new Set(choices)]).forEach((word) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'picker-word';
    button.textContent = word;
    button.addEventListener('click', () => {
      placeWord(slotNumber, word);
      closeWordPicker();
    });
    els.pickerWords.appendChild(button);
  });

  els.wordPickerModal.hidden = false;
}

function closeWordPicker() {
  els.wordPickerModal.hidden = true;
  state.selectedSlot = null;
}

function placeWord(slotNumber, word) {
  if (!Object.values(WORKSHEET_ANSWERS).includes(word)) return;

  Object.keys(state.worksheetAnswers).forEach((key) => {
    if (state.worksheetAnswers[key] === word) {
      delete state.worksheetAnswers[key];
    }
  });

  state.worksheetAnswers[slotNumber] = word;
  els.worksheetFeedback.hidden = true;
  renderWorksheet();
  saveState();
}

function updateWorksheetCounter() {
  els.worksheetCounter.textContent =
    `${Object.keys(state.worksheetAnswers).length}/14`;
}

function clearWorksheet() {
  const confirmed = window.confirm('להחזיר את כל המילים למחסן?');
  if (!confirmed) return;

  state.worksheetAnswers = {};
  els.worksheetFeedback.hidden = true;
  renderWorksheet();
  saveState();
}

function checkWorksheet() {
  const filled = Object.keys(state.worksheetAnswers).length;

  document.querySelectorAll('.answer-slot').forEach((slot) => {
    const number = Number(slot.dataset.slot);
    const current = state.worksheetAnswers[number];

    slot.classList.remove('correct', 'incorrect');

    if (!current) return;

    slot.classList.add(
      current === WORKSHEET_ANSWERS[number] ? 'correct' : 'incorrect'
    );
  });

  if (filled < 14) {
    els.worksheetFeedback.hidden = false;
    els.worksheetFeedback.className = 'worksheet-feedback try-again';
    els.worksheetFeedback.textContent =
      `שובצו ${filled} מתוך 14 מילים. השלימו את כל המקומות ונסו שוב.`;
    return;
  }

  const wrong = Object.keys(WORKSHEET_ANSWERS).filter(
    (number) => state.worksheetAnswers[number] !== WORKSHEET_ANSWERS[number]
  );

  if (wrong.length > 0) {
    els.worksheetFeedback.hidden = false;
    els.worksheetFeedback.className = 'worksheet-feedback try-again';
    els.worksheetFeedback.textContent =
      `יש ${wrong.length} התאמות שצריך לבדוק. הן מסומנות בצהוב.`;
    return;
  }

  state.score += 200;
  updateHud();

  els.worksheetFeedback.hidden = false;
  els.worksheetFeedback.className = 'worksheet-feedback success';
  els.worksheetFeedback.textContent =
    'מדויק! דף העבודה הושלם. נוספו 200 נקודות.';

  window.setTimeout(showComplete, 850);
}

function showComplete() {
  state.stage = 'complete';
  hideAllMainStages();
  els.completeStage.hidden = false;

  els.phaseChip.textContent = 'התחנה הושלמה';
  els.riddleText.textContent = 'דף העבודה הושלם וכל התשובות נכונות.';
  resetChallengeSidebar();

  els.finalRivers.textContent = state.completedIds.length;
  els.finalBonus.textContent = state.bonusCompleted;
  els.finalScore.textContent = state.score;

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      completed: true,
      completedIds: [...state.completedIds],
      bonusCompleted: state.bonusCompleted,
      score: state.score,
      completedAt: new Date().toISOString()
    })
  );
}

function getFitWidth() {
  const viewport = els.mapViewport;
  const image = els.riverMap;
  if (!image.naturalWidth || !image.naturalHeight) {
    return Math.max(240, viewport.clientWidth * 0.36);
  }
  const byHeight = (viewport.clientHeight - 8) * (image.naturalWidth / image.naturalHeight);
  return Math.max(220, Math.min(viewport.clientWidth - 8, byHeight));
}

function centerMap() {
  els.mapViewport.scrollLeft = Math.max(0, (els.mapViewport.scrollWidth - els.mapViewport.clientWidth) / 2);
  els.mapViewport.scrollTop = Math.max(0, (els.mapViewport.scrollHeight - els.mapViewport.clientHeight) / 2);
}

function fitWholeMap() {
  const width = getFitWidth();
  state.mapFitWidth = width;
  state.zoom = 1;
  els.mapCanvas.style.width = `${width}px`;
  requestAnimationFrame(centerMap);
}

function setMapZoom(nextZoom) {
  state.zoom = Math.max(1, Math.min(5, nextZoom));
  const base = state.mapFitWidth || getFitWidth();
  els.mapCanvas.style.width = `${base * state.zoom}px`;
  requestAnimationFrame(centerMap);
}

function attachMapPan() {
  let active = false;
  let moved = false;
  let startX = 0;
  let startY = 0;
  let startLeft = 0;
  let startTop = 0;
  let pointerId = null;

  els.mapViewport.addEventListener('pointerdown', (event) => {
    if (event.button !== undefined && event.button !== 0) return;
    active = true;
    moved = false;
    pointerId = event.pointerId;
    startX = event.clientX;
    startY = event.clientY;
    startLeft = els.mapViewport.scrollLeft;
    startTop = els.mapViewport.scrollTop;
  });

  els.mapViewport.addEventListener('pointermove', (event) => {
    if (!active || event.pointerId !== pointerId) return;
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    if (!moved && Math.hypot(dx, dy) > 5) {
      moved = true;
      els.mapViewport.classList.add('is-dragging');
      els.mapViewport.setPointerCapture?.(pointerId);
    }
    if (!moved) return;
    event.preventDefault();
    els.mapViewport.scrollLeft = startLeft - dx;
    els.mapViewport.scrollTop = startTop - dy;
  });

  const endPan = (event) => {
    if (!active || event.pointerId !== pointerId) return;
    if (moved) state.suppressMapClickUntil = Date.now() + 250;
    active = false;
    els.mapViewport.classList.remove('is-dragging');
    try { els.mapViewport.releasePointerCapture?.(pointerId); } catch (_error) {}
  };

  els.mapViewport.addEventListener('pointerup', endPan);
  els.mapViewport.addEventListener('pointercancel', endPan);
  els.mapViewport.addEventListener('click', (event) => {
    if (Date.now() < state.suppressMapClickUntil) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, true);
}

function saveState() {
  localStorage.setItem(
    `${STORAGE_KEY}-progress`,
    JSON.stringify({
      requiredSet: state.requiredSet,
      queue: state.queue,
      currentRiverId: state.currentRiver?.id || null,
      completedIds: state.completedIds,
      requiredCompleted: state.requiredCompleted,
      bonusCompleted: state.bonusCompleted,
      score: state.score,
      streak: state.streak,
      maxStreak: state.maxStreak,
      stage: state.stage,
      worksheetAnswers: state.worksheetAnswers
    })
  );
}

function resetStation() {
  const confirmed = window.confirm('לאפס את כל התחנה ולהגריל שלושה נחלים חדשים?');
  if (!confirmed) return;

  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(`${STORAGE_KEY}-progress`);
  els.solvedRiverPaths.innerHTML = '';
  initializeStation();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openHotWord(term) {
  els.hotWordTitle.textContent = term;
  els.hotWordExplanation.textContent = HOT_WORDS[term];
  els.hotWordModal.hidden = false;
}

els.hintBtn.addEventListener('click', () => {
  setFeedback(`רמז: ${state.currentRiver.hint}`, 'try-again');
});

els.riverMap.addEventListener('click', handleMapClick);
els.fitMapBtn.addEventListener('click', fitWholeMap);
els.zoomInBtn.addEventListener('click', () => setMapZoom(state.zoom + .25));
els.zoomOutBtn.addEventListener('click', () => setMapZoom(state.zoom - .25));
els.resetMapBtn.addEventListener('click', () => {
  requestAnimationFrame(fitWholeMap);
});

els.goWorksheetBtn.addEventListener('click',showExploration);els.continueToWorksheetBtn.addEventListener('click',showWorksheet);els.exploreFitMapBtn.addEventListener('click',fitExploreMap);els.exploreZoomInBtn.addEventListener('click',()=>setExploreZoom(state.exploreZoom+.35));els.exploreZoomOutBtn.addEventListener('click',()=>setExploreZoom(state.exploreZoom-.35));els.exploreResetMapBtn.addEventListener('click',centerExploreMap);els.closeRiverInfoBtn.addEventListener('click',()=>els.riverInfoModal.hidden=true);els.riverInfoModal.addEventListener('click',e=>{if(e.target===els.riverInfoModal)els.riverInfoModal.hidden=true});
els.bonusBtn.addEventListener('click', startBonusRiver);
els.checkWorksheetBtn.addEventListener('click', checkWorksheet);
els.clearWorksheetBtn.addEventListener('click', clearWorksheet);

els.instructionsBtn.addEventListener('click', () => {
  els.instructionsModal.hidden = false;
});
els.closeInstructionsBtn.addEventListener('click', () => {
  els.instructionsModal.hidden = true;
});
els.closeWordPickerBtn.addEventListener('click', closeWordPicker);
els.closeHotWordBtn.addEventListener('click', () => {
  els.hotWordModal.hidden = true;
});

[els.instructionsModal, els.wordPickerModal, els.hotWordModal].forEach((modal) => {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) modal.hidden = true;
  });
});

document.querySelectorAll('.hot-word').forEach((button) => {
  button.addEventListener('click', () => openHotWord(button.dataset.term));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    els.instructionsModal.hidden = true;
    els.wordPickerModal.hidden = true;
    els.hotWordModal.hidden = true;
  }
});

els.resetBtn.addEventListener('click', resetStation);

els.amitLogo.addEventListener('error', () => {
  els.amitLogo.hidden = true;
  els.logoFallback.hidden = false;
});

attachMapPan();
window.addEventListener('resize', () => {
  if (!els.mapStage.hidden) fitWholeMap();if(!els.exploreStage.hidden)fitExploreMap();
});
initializeStation();

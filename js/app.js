const resetBtn = document.getElementById('resetBtn');
const logo = document.getElementById('amitLogo');
const logoFallback = document.getElementById('logoFallback');
const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');

if (logo) {
  logo.addEventListener('error', () => {
    logo.hidden = true;
    if (logoFallback) logoFallback.hidden = false;
  });
}

function calculateProgress() {
  const stationKeys = [
    'amitRiversStationV6',
    'amitRiversStationV5',
    'amitIsraelJourneyStation1',
    'amitRegionsStationV1',
    'amitRegionalCapitalsStation'
  ];

  let completed = 0;

  stationKeys.forEach((key) => {
    try {
      const stored = JSON.parse(localStorage.getItem(key) || 'null');
      if (stored?.completed) completed += 1;
    } catch (error) {
      console.warn(`לא ניתן לקרוא את נתוני ההתקדמות עבור ${key}`, error);
    }
  });

  // כרגע קיימות שתי תחנות פעילות. מונעים ספירה כפולה של גרסאות ישנות.
  const riversCompleted = stationKeys.slice(0, 3).some((key) => {
    try {
      return JSON.parse(localStorage.getItem(key) || 'null')?.completed === true;
    } catch {
      return false;
    }
  });

  const regionsCompleted = stationKeys.slice(3).some((key) => {
    try {
      return JSON.parse(localStorage.getItem(key) || 'null')?.completed === true;
    } catch {
      return false;
    }
  });

  const activeCompleted = Number(riversCompleted) + Number(regionsCompleted);
  const percent = Math.round((activeCompleted / 5) * 100);

  if (progressText) progressText.textContent = `${percent}%`;
  if (progressBar) progressBar.style.width = `${percent}%`;
}

if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    const confirmed = window.confirm('לאפס את כל ההתקדמות במסע?');
    if (!confirmed) return;

    Object.keys(localStorage).forEach((key) => {
      if (
        key.startsWith('amit') ||
        key.includes('RiversStation') ||
        key.includes('RegionsStation')
      ) {
        localStorage.removeItem(key);
      }
    });

    calculateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

calculateProgress();

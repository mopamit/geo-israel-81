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

function readCompleted(keys) {
  return keys.some((key) => {
    try {
      return JSON.parse(localStorage.getItem(key) || 'null')?.completed === true;
    } catch {
      return false;
    }
  });
}

function calculateProgress() {
  const riversCompleted = readCompleted([
    'amitRiversStationV7',
    'amitRiversStationV6',
    'amitRiversStationV5',
    'amitIsraelJourneyStation1'
  ]);

  const regionsCompleted = readCompleted([
    'amitRegionalCapitalsV5',
    'amitRegionsStationV1',
    'amitRegionalCapitalsStation'
  ]);

  const heritageCompleted = readCompleted([
    'amitHeritageStationV1'
  ]);

  const borderSettlementsCompleted = readCompleted([
    'amitBorderSettlementsStationV1'
  ]);

  const mountainsCompleted = readCompleted(['amitMountainsStationV1']);

  const completedStations =
    Number(riversCompleted) +
    Number(regionsCompleted) +
    Number(heritageCompleted) +
    Number(borderSettlementsCompleted) +
    Number(mountainsCompleted);

  const percent = Math.round((completedStations / 5) * 100);

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
        key.includes('RegionsStation') ||
        key.includes('HeritageStation') ||
        key.includes('BorderSettlementsStation') ||
        key.includes('MountainsStation')
      ) {
        localStorage.removeItem(key);
      }
    });

    calculateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

calculateProgress();

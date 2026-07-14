const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const stations = document.getElementById('stations');
const modal = document.getElementById('stationModal');
const modalClose = document.getElementById('modalClose');
const backToRoute = document.getElementById('backToRoute');
const logo = document.getElementById('amitLogo');
const logoFallback = document.getElementById('logoFallback');

logo.addEventListener('error', () => {
  logo.hidden = true;
  logoFallback.hidden = false;
});

startBtn.addEventListener('click', () => {
  stations.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

resetBtn.addEventListener('click', () => {
  localStorage.removeItem('amitIsraelJourney');
  document.getElementById('progressText').textContent = '0%';
  document.getElementById('progressBar').style.width = '0%';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelector('.station-card.open .station-button').addEventListener('click', () => {
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
});

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
backToRoute.addEventListener('click', closeModal);

modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.hidden) closeModal();
});

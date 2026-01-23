const ul = document.getElementById('Navigation_menu');
const mobileBars = document.getElementById('MobileBars');

const openIcon = document.getElementById('openIcon');
const closeIcon = document.getElementById('closeIcon');

mobileBars.addEventListener('click', () => {
  ul.classList.toggle('-translate-x-full');
  ul.classList.toggle('-translate-x-0');

  openIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});

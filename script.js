const businessCard = document.querySelector('.card-whole');
const moveCardFront = document.querySelector('.business-card');
const moveCardBack = document.querySelector('.business-card-back');

moveCardFront.addEventListener('click', () => {
  businessCard.classList.toggle('hidden');
})

moveCardBack.addEventListener('click', () => {
  businessCard.classList.toggle('hidden');
})
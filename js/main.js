
function searchCards() {
  const container = document.querySelector('[data-search-cards]');

  if (!container) {
    return null
  }

  let cards = document.querySelectorAll('[data-search-card]');
  const minValue = 1;

  cards.forEach(card => {
    const btn = card.querySelector('[data-search-btn]');
    const counter = card.querySelector('[data-search-count]');
    const counterMinus = card.querySelector('[data-search-count-minus]');
    const counterPlus = card.querySelector('[data-search-count-plus]');
    const countValue = card.querySelector('[data-search-count-value]');

    let currentValue = parseInt(countValue.textContent, 10)


    btn.addEventListener('click', () => {
      counter.style.zIndex = '2';
    })

    counterPlus.addEventListener('click', () => {
      currentValue += 1;
      countValue.textContent = currentValue;
    });

    counterMinus.addEventListener('click', () => {
      if (currentValue > minValue) {
        currentValue -= 1;
        countValue.textContent = currentValue;
      } else {
        counter.style.zIndex = '-1';
      }
    })

  });
}

searchCards();
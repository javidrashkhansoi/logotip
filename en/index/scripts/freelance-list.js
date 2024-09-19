const MIN_900_PX = matchMedia("(min-width: 900.1px)");

/** @type {HTMLUListElement} */
const freelanceList = document.querySelector('.freelance__list');
/** @type {HTMLButtonElement} */
const freelanceButton = document.querySelector('.freelance__button');

if (freelanceList && freelanceButton) {
  const children = freelanceList.children;
  const childrenLength = children.length;

  setFreelanceButtonText();

  MIN_900_PX.addEventListener('change', (event) => {
    setFreelanceButtonText();
  });

  freelanceButton.addEventListener('click', () => {
    freelanceList.classList.add('freelance__list--show');
    freelanceButton.remove();
  });

  function setFreelanceButtonText() {
    const text = childrenLength - (MIN_900_PX.matches ? 9 : 4);

    freelanceButton.textContent = `${text}+`;
  }
}

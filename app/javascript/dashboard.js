const btnTwo = document.querySelector('.deux');
const btnFor = document.querySelector('.quatre');

function underline_two() {
  btnTwo.classList.toggle('active-d');
  btnTwo.classList.toggle('inactive-d');
  btnFor.classList.remove('active-d');
  btnFor.classList.add('inactive-d');
};

function triVentes() {
  console.log('je tri les animaux en ventes')
  const card = document.querySelector('.card-row');
  const valueSoldCard = card.dataset.sold;
  console.log(valueSoldCard);
  if(!valueSoldCard) {
    card.style.display = "none"
  } else {
    card.style.display = "flex"
  }
}

function btnTwoClick() { btnTwo.addEventListener('click', () => {
  console.log('je click sur 2');
  underline_two();
  triVentes();
  });
};


function underline_for() {
  btnTwo.classList.remove('active-d');
  btnTwo.classList.add('inactive-d');
  btnFor.classList.toggle('active-d');
  btnFor.classList.toggle('inactive-d');
}

function triHistorique() {
  console.log('j\'affiche l\'historique de vente')
  const card = document.querySelector('.card-row');
  const valueSoldCard = card.dataset.sold;
  console.log(valueSoldCard);
  if(!valueSoldCard) {
    card.style.display = "flex"
  } else {
    card.style.display = "none"
  }
}

function btnForClick() { btnFor.addEventListener('click', () => {
  console.log('je click sur 4');
  underline_for();
  triHistorique();
  });
}

btnTwoClick();
btnForClick();

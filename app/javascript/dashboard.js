const btn_one = document.querySelector('.un');
const btn_two = document.querySelector('.deux');
// const btn_three = document.querySelector('.trois');
const btn_for = document.querySelector('.quatre');
const btn_five = document.querySelector('.cinq');

function btn_one_click() {  btn_one.addEventListener('click', () => {
  console.log('je click sur 1');
    btn_one.classList.toggle('active-d');
    btn_one.classList.toggle('inactive-d');
    btn_two.classList.remove('active-d');
    btn_two.classList.add('inactive-d');
    // btn_three.classList.remove('active');
    // btn_three.classList.add('inactive');
    btn_for.classList.remove('active-d');
    btn_for.classList.add('inactive-d');
    btn_five.classList.remove('active-d');
    btn_five.classList.add('inactive-d');
  });
};
function btn_two_click() { btn_two.addEventListener('click', () => {
  console.log('je click sur 2');
  btn_one.classList.remove('active-d');
  btn_one.classList.add('inactive-d');
  btn_two.classList.toggle('active-d');
  btn_two.classList.toggle('inactive-d');
  // btn_three.classList.remove('active');
  // btn_three.classList.add('inactive');
  btn_for.classList.remove('active-d');
  btn_for.classList.add('inactive-d');
  btn_five.classList.remove('active-d');
  btn_five.classList.add('inactive-d');
  });
}





























// function btn_three_click() { btn_three.addEventListener('click', () => {
//   console.log('je click sur 3');
//   btn_one.classList.remove('active');
//   btn_one.classList.add('inactive');
//   btn_two.classList.remove('active');
//   btn_two.classList.add('inactive');
//   btn_three.classList.toggle('active');
//   btn_three.classList.toggle('inactive');
//   btn_for.classList.remove('active');
//   btn_for.classList.add('inactive');
//   btn_five.classList.remove('active');
//   btn_five.classList.add('inactive');
//   });
// }
function btn_for_click() { btn_for.addEventListener('click', () => {
  console.log('je click sur 4');
  btn_one.classList.remove('active-d');
  btn_one.classList.add('inactive-d');
  btn_two.classList.remove('active-d');
  btn_two.classList.add('inactive-d');
  // btn_three.classList.remove('active');
  // btn_three.classList.add('inactive');
  btn_for.classList.toggle('active-d');
  btn_for.classList.toggle('inactive-d');
  btn_five.classList.remove('active-d');
  btn_five.classList.add('inactive-d');
  });
}
function btn_five_click() { btn_five.addEventListener('click', () => {
  console.log('je click sur 5');
  btn_one.classList.remove('active-d');
  btn_one.classList.add('inactive-d');
  btn_two.classList.remove('active-d');
  btn_two.classList.add('inactive-d');
  // btn_three.classList.remove('active');
  // btn_three.classList.add('inactive');
  btn_for.classList.remove('active-d');
  btn_for.classList.add('inactive-d');
  btn_five.classList.toggle('active-d');
  btn_five.classList.toggle('inactive-d');
  });
}

btn_one_click();
btn_two_click();
// btn_three_click();
btn_for_click();
btn_five_click();

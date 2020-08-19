const btn_one = document.querySelector('.un');
const btn_two = document.querySelector('.deux');
function btn_one_home_click() {  btn_one.addEventListener('click', () => {
    btn_one.classList.toggle('active-a');
    btn_one.classList.toggle('inactive-a');
    btn_two.classList.remove('active-a');
    btn_two.classList.add('inactive-a');
  });
};
function btn_two_home_click() { btn_two.addEventListener('click', () => {
  btn_one.classList.remove('active-a');
  btn_one.classList.add('inactive-a');
  btn_two.classList.toggle('active-a');
  btn_two.classList.toggle('inactive-a');
  });
}
btn_one_home_click();
btn_two_home_click();

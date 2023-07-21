// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

changePlan();
changePayment();

function changePlan() {
  if (document.querySelector('.item-plans')) {

    const plansField = document.querySelector('.item-plans');
    const plans = document.querySelectorAll('.item-plans__item');




    plansField.addEventListener('click', (e) => {


      const planHide = [...plans].find(element => element.classList.contains('hide'));
      const planActive = [...plans].find(element => element.classList.contains('active'));
      const planCnt = document.querySelector('.plans__cnt');



      if (e.target.matches('.item-plans__item.hide')) {
        planHide.classList.remove('hide');
        planHide.classList.add('active');
        planActive.classList.remove('active');
        planActive.classList.add('hide');
        planCnt.classList.toggle('premium');
      }
    })
  }
}

function changePayment() {
  if (document.querySelector('.plans__btn_monthly') && document.querySelector('.plans__btn_yearly')) {
    const btnMonthly = document.querySelector('.plans__btn_monthly');
    const btnYearly = document.querySelector('.plans__btn_yearly');
    const plansField = document.querySelector('.item-plans');

    btnMonthly.addEventListener('click', () => {
      btnMonthly.classList.add('active');
      btnYearly.classList.remove('active');
      plansField.classList.add('monthly');
      plansField.classList.remove('yearly');
    })

    btnYearly.addEventListener('click', () => {
      btnYearly.classList.add('active');
      btnMonthly.classList.remove('active');
      plansField.classList.add('yearly');
      plansField.classList.remove('monthly');
    })
  }
}

// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile, menuClose } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


function resizeTextArea() {

  if (document.querySelector(".form__textarea")) {
    function calcHeight(value) {
      let numberOfLineBreaks = (value.match(/\n/g) || []).length;
      let newHeight = 26 + numberOfLineBreaks * 20 + 12 + 2;
      return newHeight;
    }

    let textarea = document.querySelector(".form__textarea");
    textarea.addEventListener("keyup", () => {
      textarea.style.height = calcHeight(textarea.value) + "px";
    });
  }


}

resizeTextArea()

document.addEventListener("click", closeBurgerMenu)

function closeBurgerMenu(e) {
  if (e.type === "click") {
    const targetElement = e.target;
    if (targetElement.closest('[data-clm]')) {
      menuClose();
    }
  }

  if (document.querySelector('.menu__body')) {
    const menuBody = document.querySelector('.menu__body');
    const burger = document.querySelector('.icon-menu');

    if (!e.composedPath().includes(menuBody) && !e.composedPath().includes(burger)) {
      menuClose();
    }
  }


}


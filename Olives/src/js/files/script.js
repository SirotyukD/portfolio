// Підключення функціоналу "Чертоги Фрілансера"
// import { log } from "gulp-util";
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


function closeHeaderMessage() {
   if (document.querySelector('.header__cta-btn')) {
      const btn = document.querySelector('.header__cta-btn');
      const message = document.querySelector('.header__cta');

      btn.addEventListener('click', () => {
         message.classList.add('hide')
      })

   }
}

closeHeaderMessage();
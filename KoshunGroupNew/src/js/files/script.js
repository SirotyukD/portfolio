// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile, menuClose } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


function resizeTextArea() {

  if (document.querySelector("textarea")) {

    let textarea = document.querySelectorAll("textarea");

    textarea.forEach(item => {
      item.addEventListener("input", autoResize, false);
    })

    function autoResize() {
      this.style.height = 'auto';
      this.style.height = 1 + this.scrollHeight + 'px';
    }
  }
}

resizeTextArea()

///////////////////////

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

document.addEventListener("click", closeBurgerMenu)

///////////////////////

function detectBrowser() {
  const getBrowser = () => {
    const userAgent = navigator.userAgent;
    let browser = 'unkown';
    // Detect browser name
    browser = /ucbrowser/i.test(userAgent) ? 'UCBrowser' : browser;
    browser = /edg/i.test(userAgent) ? 'Edge' : browser;
    browser = /googlebot/i.test(userAgent) ? 'GoogleBot' : browser;
    browser = /chromium/i.test(userAgent) ? 'Chromium' : browser;
    browser =
      /firefox|fxios/i.test(userAgent) && !/seamonkey/i.test(userAgent)
        ? 'Firefox'
        : browser;
    browser =
      /; msie|trident/i.test(userAgent) && !/ucbrowser/i.test(userAgent)
        ? 'IE'
        : browser;
    browser =
      /chrome|crios/i.test(userAgent) &&
        !/opr|opera|chromium|edg|ucbrowser|googlebot/i.test(userAgent)
        ? 'Chrome'
        : browser;
    browser =
      /safari/i.test(userAgent) &&
        !/chromium|edg|ucbrowser|chrome|crios|opr|opera|fxios|firefox/i.test(
          userAgent
        )
        ? 'Safari'
        : browser;
    browser = /opr|opera/i.test(userAgent) ? 'Opera' : browser;

    // detect browser version
    switch (browser) {
      case 'UCBrowser':
        return `${browser}`;
      case 'Edge':
        return `${browser}`;
      case 'GoogleBot':
        return `${browser}`;
      case 'Chromium':
        return `${browser}`;
      case 'Firefox':
        return `${browser}`;
      case 'Chrome':
        return `${browser}`;
      case 'Safari':
        return `${browser}`;
      case 'Opera':
        return `${browser}`;
      case 'IE':
        const version = browserVersion(userAgent, /(trident)\/([\d\.]+)/i);
        // IE version is mapped using trident version
        // IE/8.0 = Trident/4.0, IE/9.0 = Trident/5.0
        return version
          ? `${browser}/${parseFloat(version) + 4.0}`
          : `${browser}/7.0`;
      default:
        return `unknown/0.0.0.0`;
    }
  };


  const browserVersion = (userAgent, regex) => {
    return userAgent.match(regex) ? userAgent.match(regex)[2] : null;
  };

  const browser = getBrowser();

  document.documentElement.classList.add(browser);
}

detectBrowser()


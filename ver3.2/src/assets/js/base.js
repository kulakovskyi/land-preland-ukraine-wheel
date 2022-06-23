console.log("Скрипт который работает везде");
//burder menu
/**

const iconMenu = document.querySelector(".menu__icon");
const iconMenuSpan = document.querySelector(".menu__icon > span");
const menuBody = document.querySelector(".header__menu");
const body = document.querySelector("body");

iconMenu.addEventListener("click", function (e) {
  iconMenu.classList.toggle("_active");
  menuBody.classList.toggle("_active");
  body.classList.toggle("_lock");
  // заекрытие меню по клику на любую область
  // дополниельно делаем проверку клик по спану, что бы отрабатывало закрытие
  window.onclick = function (e) {
    if (e.target !== menuBody && e.target !== iconMenu && e.target !== iconMenuSpan) {
      menuBody.classList.remove("_active");
      iconMenu.classList.remove("_active");
    }
  };
});
**/

/***************************************************************************************/

//script for swiper
/** 
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 28,
  autoplay: {
    delay: 3000,
    speed: 1000,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 35,
    },

    750: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
    // when window width is >= 480px
    1202: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

**/

/***************************************************************************************/

//скролл по якорю

/** 
const anchors = document.querySelectorAll('a[href*="#"]');

for (const anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

**/

/***************************************************************************************/

//POPUP

/** 

const popUp = document.querySelector(".popup");
const popUpContent = document.querySelector(".popup__info");
//тут елемент на который кликаем
const telPopUp = document.querySelector(".header__logo");
//кнопка закрітия
const popUpClose = document.querySelector(".popupclose");
const body = document.querySelector("body");

let open = function () {
  popupPaddingRight();
  popUp.classList.add("_open");
  popUpContent.classList.add("_open");
  document.body.classList.add("_lock");
};

let close = function () {
  popUp.classList.remove("_open");
  popUpContent.classList.remove("_open");
  document.body.classList.remove("_lock");
  popUpContent.classList.remove("_form-out");
  body.style.paddingRight = 0 + "px";
  for (let i = 0; i < lockPadFixEl.length; i++) {
    let el = lockPadFixEl[i];
    el.style.paddingRight = 0 + "px";
  }
};

//Фикс на отступ для фиксированных елементов
//добавляем ко всем фиксированным элементам класс lock-padding
const lockPadFixEl = document.querySelectorAll(".lock-padding");

let popupPaddingRight = function () {
  let width = window.innerWidth - document.querySelector(".wrapper").clientWidth + "px";

  for (let i = 0; i < lockPadFixEl.length; i++) {
    let el = lockPadFixEl[i];
    el.style.paddingRight = width;
  }
  body.style.paddingRight = width;
};

telPopUp.addEventListener("click", (e) => {
  open();
  window.onclick = function (e) {
    if (e.target == popUp) {
      close();
    }
  };
});

popUpClose.addEventListener("click", (e) => {
  close();
});

**/

//ANIMATION ON SCROLL
/* 
//блоку который мы хотим анимировать задаем opacity: 0 and transform любой 
//после с классом _view обнуляем у этого класса заданные параметры 
//_anim-no-hide нужен для того что бы анимация повторялась толкьо один раз

const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);

  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHight = animItem.offsetHeight;
      const animItemOffSet = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHight / animStart;

      if (animItemHight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffSet - animItemPoint &&
        pageYOffset < animItemOffSet + animItemHight
      ) {
        animItem.classList.add("_view");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_view");
        }
      }
    }

    function offset(el) {
      let rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
}

*/

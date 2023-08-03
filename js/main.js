var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  spaceBetween: 24,
  autoplay: {
    delay: 5000,
  },
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // simulateTouch: false,
  // breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 2,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   },
  //   // when window width is >= 640px
  //   640: {
  //     slidesPerView: 4,
  //     spaceBetween: 40
  //   }
  // }
});

const overflowToggle = (arg) => {
  if (arg) {
    document.documentElement.style.overflow = "hidden auto"
    document.body.style.overflow = "hidden auto"
  } else {
    document.documentElement.style.overflow = "hidden"
    document.body.style.overflow = "hidden"
  }
}

const popup = document.querySelector(".popup-call")
const popupWrapper = document.querySelector(".popup__wrapper")
const overlay = document.querySelector(".popup__overlay")

const callBtnHandler = () => {
  overflowToggle(false)
  popup.style.display = "block"

  setTimeout(() => {
    overlay.style.opacity = ".5"
    popupWrapper.style.opacity = "1"
    popupWrapper.style.top = "50%"
  },0)
}

const popUpClose = () => {
  popup.style.display = "none"
  overlay.style.opacity = "0"
  popupWrapper.style.opacity = "0"
  popupWrapper.style.top = "calc(50% + 30px)"
  overflowToggle(true)
}

document.querySelector(".header__call-btn").addEventListener("click", callBtnHandler)
document.querySelector(".popup__close").addEventListener("click", popUpClose)
document.querySelector(".popup__overlay").addEventListener("click", popUpClose)

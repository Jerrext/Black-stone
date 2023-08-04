var swiper2 = new Swiper(".swiper1", {
  slidesPerView: 1.3,
  spaceBetween: 25,
  grid: {
    rows: 1,
  },
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    500: {
      slidesPerView: 2.2,
    },
    700: {
      slidesPerView: 3.2,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 25,
      grid: {
        rows: 2,
      },
    },
  }
});

var swiper = new Swiper(".swiper2", {
  slidesPerView: 1,
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
  breakpoints: {
    500: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
    },
  }
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

document.querySelectorAll(".btn-call").forEach(item => {
  item.addEventListener("click", callBtnHandler)
})
document.querySelector(".popup__close").addEventListener("click", popUpClose)
document.querySelector(".popup__overlay").addEventListener("click", popUpClose)

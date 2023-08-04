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

const popupView = document.querySelector(".popup-view")
const popupViewImg = document.querySelector(".popup-view__img")
const overlayView = document.querySelector(".popup-view__overlay")

const popupCall = document.querySelector(".popup-call")
const popupCallWrapper = document.querySelector(".popup-call__wrapper")
const overlayCall = document.querySelector(".popup-call__overlay")

const burger = document.querySelector(".burger")
const burgerMenu = document.querySelector(".burger-menu")
const burgerOverlay = document.querySelector(".burger__overlay")

const overflowToggle = (arg) => {
  if (arg) {
    document.documentElement.style.overflow = "hidden auto"
    document.body.style.overflow = "hidden auto"
  } else {
    document.documentElement.style.overflow = "hidden"
    document.body.style.overflow = "hidden"
  }
}

const popUpOpen = (window, wrapper, overlay) => {
  overflowToggle(false)
  window.style.display = "block"

  setTimeout(() => {
    overlay.style.opacity = ".5"
    wrapper.style.opacity = "1"
    wrapper.style.top = "50%"
  },0)
}

const popUpClose = (window, wrapper, overlay) => {
  window.style.display = ""
  overlay.style.opacity = ""
  wrapper.style.opacity = ""
  wrapper.style.top = ""

  overflowToggle(true)
}

const setPopUpVisibility = (visibility, window, wrapper, overlay) => {
  if (visibility) {
    popUpOpen(window, wrapper, overlay)
  } else {
    popUpClose(window, wrapper, overlay)
  }
}

const burgerMenuClose = () => {
  burgerMenu.style.left = ""
  burgerOverlay.style.opacity = ""

  setTimeout(() => {
    burger.style.display = ""
  }, 500);
  
  overflowToggle(true)
}

const burgerMenuOpen = () => {
  burger.style.display = "block"

  setTimeout(() => {
    burgerMenu.style.left = "0"
    burgerOverlay.style.opacity = "0.5"
  }, 0);

  overflowToggle(false)
}

document.querySelectorAll(".btn-call").forEach(item => {
  item.addEventListener("click", () => setPopUpVisibility(true, popupCall, popupCallWrapper, overlayCall))
})
document.querySelector(".popup-call__close").addEventListener("click", () => setPopUpVisibility(false, popupCall, popupCallWrapper, overlayCall))
document.querySelector(".popup-view__close").addEventListener("click", () => setPopUpVisibility(false, popupView, popupViewImg, overlayView))
overlayCall.addEventListener("click", () => setPopUpVisibility(false, popupCall, popupCallWrapper, overlayCall))
overlayView.addEventListener("click", () => setPopUpVisibility(false, popupView, popupViewImg, overlayView))
document.querySelector(".burger-btn").addEventListener("click", burgerMenuOpen)
document.querySelector(".burger-menu__close-btn").addEventListener("click", burgerMenuClose)
document.querySelectorAll(".burger__nav-link").forEach(item => {
  item.addEventListener("click", burgerMenuClose)
})
document.querySelector(".burger__overlay").addEventListener("click", burgerMenuClose)
document.querySelectorAll(".works-swiper .swiper-slide").forEach(item => {
  item.addEventListener("click", () => {
    const imgSrs = item.firstElementChild.src
    const img = document.querySelector(".popup-view__img")
    img.src = imgSrs
    setPopUpVisibility(true, popupView, popupViewImg, overlayView)
  })
})
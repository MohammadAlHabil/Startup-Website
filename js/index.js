// Light and dark mode and localStorage
const theme = JSON.parse(localStorage.getItem("theme"));
document.documentElement.setAttribute("data-theme", theme);
const themeSwitcher = document.querySelector("#them-input");
const switchTheme = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  let switchToTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", switchToTheme);
  localStorage.setItem("theme", JSON.stringify(switchToTheme));
};
themeSwitcher.addEventListener("click", switchTheme);

// Handle The Count Of Slides
const handleCountOfSlides = () => {
  let slidesPerViewValue = 3;
  if (window.innerWidth >= 1700) {
    slidesPerViewValue = 4;
  }
  if (window.innerWidth >= 1300 && window.innerWidth < 1700) {
    slidesPerViewValue = 3;
  }
  if (window.innerWidth < 1300) {
    slidesPerViewValue = 2;
  }
  if (window.innerWidth < 900) {
    slidesPerViewValue = 1;
  }

  let swiper = new Swiper(".mySwiper", {
    slidesPerView: slidesPerViewValue,
    spaceBetween: 50,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });
  return swiper;
};

window.onresize = handleCountOfSlides;
let swiper = handleCountOfSlides();

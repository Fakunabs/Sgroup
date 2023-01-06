=const closeMobileMenu = document.querySelector(".mobile__menu__close");
const mobileMenuHomeToggle = document.querySelector(
  ".mobile__menu__home > .toggle"
);
const mobileMenuBlogToggle = document.querySelector(
  ".mobile__menu__blog > .toggle"
);

const dayTime = document.querySelector(".time-count.day > span:nth-child(1)");
const hourTime = document.querySelector(".time-count.hour > span:nth-child(1)");
const minuteTime = document.querySelector(
  ".time-count.minute > span:nth-child(1)"
);
const secondTime = document.querySelector(
  ".time-count.second > span:nth-child(1)"
);
const comingDay = new Date(2023, 01, 29).getTime();

const roadMapListWrap = document.querySelector(".roadmap__list__wrap");
const listItemsWrap = document.querySelector(".about__why-choose-us__wrap");
sliderMouse(listItemsWrap);
sliderMouse(roadMapListWrap);

// Scroll Header

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 120 ||
    document.documentElement.scrollTop > 120
  ) {
    document.querySelector(".header").classList.add("header__scroll");
  } else {
    document.querySelector(".header").classList.remove("header__scroll");
  }
});

function handleCloseMobileMenu() {
  const mobileMenu = document.querySelector(".mobile__menu");
  const mobileMenuBg = document.querySelector(".mobile__menu__bg");
  const body = document.querySelector("body");

  closeMobileMenu.style.transform = "rotate(0deg)";
  body.style.overflowY = "auto";
  mobileMenu.classList.remove("mobile__menu__visible");
  mobileMenuBg.classList.remove("mobile__menu__bg__visible");
}

function handleOpenMobileMenu() {
  const mobileMenu = document.querySelector(".mobile__menu");
  const mobileMenuBg = document.querySelector(".mobile__menu__bg");
  const body = document.querySelector("body");

  closeMobileMenu.style.transform = "rotate(180deg)";
  body.style.overflowY = "hidden";
  mobileMenu.classList.add("mobile__menu__visible");
  mobileMenuBg.classList.add("mobile__menu__bg__visible");
}

mobileMenuHomeToggle.onclick = function () {
  mobileMenuHomeToggle.classList.toggle("toggle__clicked");
  const toggleClicked = document.querySelector(
    ".mobile__menu__home > .toggle__clicked"
  );
  const subMenuHome = document.querySelector(".item__menu.mobile__menu__home");
  if (toggleClicked) {
    subMenuHome.classList.add("active");
  } else {
    subMenuHome.classList.remove("active");
  }
};

mobileMenuBlogToggle.onclick = function () {
  mobileMenuBlogToggle.classList.toggle("toggle__clicked");
  const toggleClicked = document.querySelector(
    ".mobile__menu__blog >.toggle__clicked"
  );
  const subMenuBlog = document.querySelector(".item__menu.mobile__menu__blog");
  if (toggleClicked) {
    subMenuBlog.classList.add("active");
  } else {
    subMenuBlog.classList.remove("active");
  }
};

// mobileMenuToggle.addEventListener("click", () => {

// });

function handleScrollTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

// Timer Countdown
const timer = setInterval(() => {
  const currentDay = new Date().getTime();
  const distance = comingDay - currentDay;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  dayTime.textContent = days;
  hourTime.textContent = hours;
  minuteTime.textContent = minutes;
  secondTime.textContent = seconds;

  if (distance < 0) {
    clearInterval(timer);
  }
}, 1000);

// Slider

function sliderMouse(slider) {
  let isMouseDown = false;
  let startPoint = 0;
  let scrollLeft;
  slider.addEventListener("mousedown", (e) => {
    isMouseDown = !isMouseDown;
    startPoint = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseup", (e) => {
    isMouseDown = false;
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startPoint) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });
}

// Effect Scroll

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show__effect");
    } else {
      entry.target.classList.remove("show__effect");
    }
  });
});

const hideEffectElements = document.querySelectorAll(".hide__effect");
hideEffectElements.forEach((el) => observer.observe(el));
// Active Header Navbar
const sectionIdElements = document.querySelectorAll(".section__id");
let navigationItems = document.querySelectorAll(".navigation__item");
navigationItems = Array.from(navigationItems);
let navigationItemsCutted = [];
navigationItems.map((el, index) => {
  if (index !== 4) {
    navigationItemsCutted.push(el);
  }
});

console.log(navigationItemsCutted);

const observerSection = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const itemActive = document.querySelector(".navigation__item.active");
      if (itemActive) {
        itemActive.classList.remove("active");
      }
      let index = 0;
      sectionIdElements.forEach((el, subIndex) => {
        if (el === entry.target) {
          index = subIndex;
        }
      });
      navigationItemsCutted[index].classList.add("active");
    }
  });
});
sectionIdElements.forEach((el) => observerSection.observe(el));

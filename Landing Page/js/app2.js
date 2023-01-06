const faqListAnswers = document.querySelectorAll(
  ".faq-two__list__item__answer"
);
const faqListIcons = document.querySelectorAll(
  ".faq-two__list__item__question > .icon"
);
const faqListItems = document.querySelectorAll(".faq-two__list__item");
let indexToggle = null;

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 120 ||
    document.documentElement.scrollTop > 120
  ) {
    document.querySelector(".header-two").classList.add("header-two__scroll");
  } else {
    document
      .querySelector(".header-two")
      .classList.remove("header-two__scroll");
  }
});

function handleShowAnswer(s) {
  if (indexToggle >= 0 && indexToggle === s) {
    faqListAnswers[s].classList.toggle("active");
    faqListIcons[s].classList.toggle("active");
    faqListItems[s].classList.toggle("active");
  } else {
    const answerActive = document.querySelector(
      ".faq-two__list__item__answer.active"
    );
    const iconActive = document.querySelector(
      ".faq-two__list__item__question > .icon.active"
    );
    const itemActive = document.querySelector(".faq-two__list__item.active");
    if (answerActive) {
      answerActive.classList.remove("active");
    }
    if (iconActive) {
      iconActive.classList.remove("active");
    }
    if (itemActive) {
      itemActive.classList.remove("active");
    }
    faqListAnswers[s].classList.add("active");
    faqListIcons[s].classList.add("active");
    faqListItems[s].classList.add("active");
  }

  indexToggle = s;
}

// Active header navigation
const sectionIdElements = document.querySelectorAll(".section-two__id");
let navigationItems = document.querySelectorAll(
  ".header-two__content__navbar .navigation__item"
);
navigationItems = Array.from(navigationItems);
let navigationItemsCutted = [];
navigationItems.map((el, index) => {
  if (index !== 4) {
    navigationItemsCutted.push(el);
  }
});
const observerSection = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const itemActive = document.querySelector(
        ".header-two__content__navbar .navigation__item.active"
      );
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

// Scroll effect

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

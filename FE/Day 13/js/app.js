/* The above code is creating a flashcard app. */
/*  */
/* Creating variables that are equal to the elements in the HTML. */
const showBtn = document.getElementById("show-btn");
const questionCard = document.querySelector(".question-card");
const closeBtn = document.querySelector(".close-btn");
const form = document.getElementById("question-form");
const questionInput = document.getElementById("question-input");
const answerInput = document.getElementById("answer-input");
const questionList = document.getElementById("questions-list");
const submitBtn = document.getElementsByClassName("submitBtn");


/* This is adding an event listener to the showBtn. When the showBtn is clicked, the questionCard
classList is added the class "showCard". */
showBtn.addEventListener("click", function () {
  questionCard.classList.add("showCard");
  console.log("b");
});

/* This is adding an event listener to the closeBtn. When the closeBtn is clicked, the questionCard
classList is removed the class "showCard". */
closeBtn.addEventListener("click", function () {
  questionCard.classList.remove("showCard");
});

/* This is adding an event listener to the form. When the form is submitted, the event is prevented
from happening.
The questionList is then updated with the new flashcard. */
form.addEventListener("submit", function (event) {
  /* Preventing the default action of the form from happening. */
  event.preventDefault();
  questionList.innerHTML += `
    <div class="card card-body flashcard my-3">
      <h4 class="text-capitalize">${questionInput.value}</h4>
      <a href="#" class="text-capitalize my-3 show-answer">show/hide answer</a>
      <h5 class="answer mb-3">${answerInput.value}</h5>
      <div class="flashcard-btn d-flex justify-content-between">
        <a href="#" id="edit-flashcard" class=" btn my-1 edit-flashcard text-uppercase" data-id="">edit</a>
        <a href="#" id="delete-flashcard" class=" btn my-1 delete-flashcard text-uppercase">delete</a>
    </div>`;
  /* This is adding an event listener to the showAnswerBtns. When the showAnswerBtns is clicked, the
  answer
  classList is toggled the class "showCard". */
  const showAnswerBtns = document.querySelectorAll(".show-answer");
  for (let i = 0; i < showAnswerBtns.length; i++) {
    const showAnswerBtn = showAnswerBtns[i];
    showAnswerBtn.addEventListener("click", function (e) {
      const answer = e.target.nextElementSibling;
      answer.classList.toggle("showCard");
    });
  }
  /* This is adding an event listener to the deleteBtns. When the deleteBtns is clicked, the
  e.target.parentElement.parentElement is removed. */
  const deleteBtns = document.querySelectorAll(".delete-flashcard");
  for (let i = 0; i < deleteBtns.length; i++) {
    const deleteBtn = deleteBtns[i];
    deleteBtn.addEventListener("click", function (e) {
      e.target.parentElement.parentElement.remove();
    });
  }

  /* This is adding an event listener to the editBtns. When the editBtns is clicked, the
    e.target.parentElement.parentElement is removed. */
  const editBtns = document.querySelectorAll(".edit-flashcard");
  for (let i = 0; i < editBtns.length; i++) {
    const editBtn = editBtns[i];
    editBtn.addEventListener("click", function (e) {
      const question = e.target.parentElement.parentElement.children[0].innerText;
      const answer = e.target.parentElement.parentElement.children[2].innerText;
      questionInput.value = question;
      answerInput.value = answer;
      e.target.parentElement.parentElement.remove();
  });
}});


/* This is getting the flashcards from local storage and displaying them on the page. */
let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [];


for (let i = 0; i < flashcards.length; i++) {
  const flashcard = flashcards[i];
  questionList.innerHTML += `
    <div class="card card-body flashcard my-3">
      <h4 class="text-capitalize">${flashcard.question}</h4>
      <a href="#" class="text-capitalize my-3 show-answer">show/hide answer</a>
      <h5 class="answer mb-3">${flashcard.answer}</h5>
      <div class="flashcard-btn d-flex justify-content-between">
        <a href="#" id="edit-flashcard" class=" btn my-1 edit-flashcard text-uppercase" data-id="">edit</a>
        <a href="#" id="delete-flashcard" class=" btn my-1 delete-flashcard text-uppercase">delete</a>
    </div>`;
}

/* This is adding an event listener to the submitBtn. When the submitBtn is clicked, the
newFlashcard is pushed to the flashcards array. The flashcards array is then set to local storage. */

submitBtn[0].addEventListener("click", function () {

  const newFlashcard = {
    question: questionInput.value,
    answer: answerInput.value
  };
  flashcards.push(newFlashcard);

  localStorage.setItem("flashcards", JSON.stringify(flashcards));
});

const showAnswerBtns = document.querySelectorAll(".show-answer");
for (let i = 0; i < showAnswerBtns.length; i++) {
  const showAnswerBtn = showAnswerBtns[i];
  showAnswerBtn.addEventListener("click", function (e) {
    const answer = e.target.nextElementSibling;
    answer.classList.toggle("showCard");
    
    // Lưu trạng thái show/hide vào local storage
    const card = e.target.closest(".flashcard");
    const cardIndex = Array.from(card.parentNode.children).indexOf(card);
    const cardState = answer.classList.contains("showCard") ? "show" : "hide";
    localStorage.setItem(`card-${cardIndex}-state`, cardState);
  });
}

// Lấy dữ liệu từ local storage để áp dụng trạng thái show/hide cho các flashcard tương ứng
for (let i = 0; i < questionList.children.length; i++) {
  const card = questionList.children[i];
  const cardState = localStorage.getItem(`card-${i}-state`);
  if (cardState === "show") {
    card.querySelector(".answer").classList.add("showCard");
  } else if (cardState === "hide") {
    card.querySelector(".answer").classList.remove("showCard");
  }
}
// Đảm bảo trang web đã hoàn toàn được tải xong

const showBtn = document.getElementById("show-btn");
const questionCard = document.querySelector(".question-card");
const closeBtn = document.querySelector(".close-btn");
const form = document.getElementById("question-form");
const feedback = document.querySelector(".feedback");
const questionInput = document.getElementById("question-input");
const answerInput = document.getElementById("answer-input");
const questionList = document.getElementById("questions-list");
const submitBtn = document.getElementsByClassName("submitBtn");
const showAnswer = document.getElementsByClassName("show-answer")[0];

showBtn.addEventListener("click", function () {
  questionCard.classList.add("showCard");
});

closeBtn.addEventListener("click", function () {
  questionCard.classList.remove("showCard");
});


submitBtn[0].addEventListener("click", function () {
  questionList.innerHTML += `
        <div class="card card-body flashcard my-3">
          <h4 class="text-capitalize">${questionInput.value}</h4>
          <a href="#" class="text-capitalize my-3 show-answer">show/hide answer</a>
          <h5 class="answer mb-3">${answerInput.value}</h5>
          <div class="flashcard-btn d-flex justify-content-between">
            <a href="#" id="edit-flashcard" class=" btn my-1 edit-flashcard text-uppercase" data-id="">edit</a>
            <a href="#" id="delete-flashcard" class=" btn my-1 delete-flashcard text-uppercase">delete</a>
          </div>`;
  const showAnswer = document.getElementsByClassName("show-answer")[0];
  const answer = document.getElementsByClassName("answer")[0];
  showAnswer.addEventListener("click", function () {
    answer.classList.toggle("showCard");
  });
});


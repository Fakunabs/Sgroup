let i = 1;

// Lấy tham chiếu đến thành phần HTML cần thiết
const messagesContainer = document.getElementById("chat_messages");
const messageInput = document.getElementById("chat_input");
const nameInput = document.getElementById("name_input");
const sendButton = document.getElementById("send");

// Lấy dữ liệu từ server và render lên giao diện
axios
  .get("https://635d4fb7cb6cf98e56b20ae8.mockapi.io/api/listpost/message")
  .then((response) => {
    response.data.forEach((message) => {
      let messageClass, profileClass, profileImg, profileName;
      if (message.isOwn) {
        messageClass = "message my-message";
        profileClass = "profile my-profile";
        profileName = `<span>${message.name}</span>`;
      } else {
        messageClass = "message other-message";
        profileClass = "profile other-profile";
        profileName = `<span>${message.name}</span>`;
      }
      const messageElement = document.createElement("div");
      messageElement.className = messageClass;
      messageElement.id = i;
      i++;
      messageElement.innerHTML = `
        <div class="${profileClass}">
          ${profileName}
        </div>
        <div class="content">
          <span>${message.content}</span>
        </div>
      `;
      messagesContainer.appendChild(messageElement);
    });
    toNewestMess();
  });

// Hàm xử lý cuộn đến tin nhắn mới nhất
function toNewestMess() {
  setTimeout(() => {
    i--;
    const newMessage = document.getElementById(i.toString());
    newMessage.scrollIntoView();
  }, 0);
}

// Xử lý sự kiện click vào nút gửi
sendButton.addEventListener("click", function () {
  const message = messageInput.value;
  const name = nameInput.value;

  // Gửi tin nhắn mới lên server
  axios
    .post("https://635d4fb7cb6cf98e56b20ae8.mockapi.io/api/listpost/message", {
      content: message,
      name: name,
      isOwn: true,
    })
    .then(() => {
      i++;
      const messageElement = document.createElement("div");
      messageElement.className = "message other-message";
      messageElement.id = i;
      messageElement.innerHTML = 
      ` 
        <div class="profile my-profile">
          <span>${name}</span>
        </div>
        <div class="content">
            <span>${message}</span>
        </div>
        `;
      messagesContainer.appendChild(messageElement);
      toNewestMess();
    });
});

// Xử lý sự kiện nhấn phím Enter
messageInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    sendButton.click();
  }
});

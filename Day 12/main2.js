let i = 1;
var accKey;
// Lấy tham chiếu đến thành phần HTML cần thiết
const messagesContainer = document.getElementById("chat_messages");
const messageInput = document.getElementById("chat_input");
const nameInput = document.getElementById("name_input");
const sendButton = document.getElementById("send");

// Lấy dữ liệu từ server và render lên giao diện
axios
  .get("https://63e393dec919fe386c09bbaa.mockapi.io/sgroup/message")
  .then((response) => {
    response.data.forEach((message) => {
      let messageClass, profileClass, profileName;
      if (message.key === localStorage.getItem("accKey")) {
        messageClass = "message my-message";
        profileClass = "profile my-profile";
        profileName = `<span>${message.name}</span>`;
      } else {
        messageClass = "message other-message";
        profileClass = "profile other-profile";
        profileName = `<span>${message.name}</span>`;
      }
      // console.log(message.key+" "+accKey)
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

//Xử lý sự kiện
nameInput.addEventListener("change", function () {
  accKey = nameInput.value;
  localStorage.setItem("accKey", accKey);
})

// Xử lý sự kiện click vào nút gửi
sendButton.addEventListener("click", function () {
  const message = messageInput.value;
  const name = nameInput.value;
  if (name === "") { alert("Bạn chưa nhập tên"); return; }
  else {
    // Gửi tin nhắn mới lên server
    axios
    .post("https://63e393dec919fe386c09bbaa.mockapi.io/sgroup/message", {
      content: message,
      name: name,
      key: accKey,
    })
    .then(() => {
      i++;
      const messageElement = document.createElement("div");
      messageElement.className = "message my-message";
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

    messageInput.value=null;
    messageInput.value = trim(messageInput.value)
  }
  
  
});

// Xử lý sự kiện nhấn phím Enter
messageInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    sendButton.click();
  }
});
// Xử lý title của trang web
let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "See you again :(";
})

window.addEventListener("focus", () => {
  document.title = docTitle;
})
const messagesContainer = document.getElementById("chat_messages");

axios.get("https://63e393dec919fe386c09bbaa.mockapi.io/sgroup/message")
  .then(response => {
    response.data.forEach(message => {
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
      messagesContainer.innerHTML += `
        <div class="${profileClass}">
          ${profileImg}
          ${profileName}
 
        </div>
        <div class="${messageClass}">
          ${message.content}
        </div>
      `;
    });
  });

// tạo sự kiện cho nút gửi tin nhắn
const sendButton = document.getElementById("send_button");
sendButton.addEventListener("click", () => {
  const messageInput = document.getElementById("message_input");
  const messageText = messageInput.value;
  if (messageText) {
    async () => {
      await axios.post("https://63e393dec919fe386c09bbaa.mockapi.io/sgroup/message", {
        name: "Nguyễn Văn A",
        content: messageText,
        createAt: new Date(),
    })
    }
    messageInput.value = "";
  }
});
// tạo 1 sự kiện cho nút enter khi gõ tin nhắn
const messageInput = document.getElementById("message_input");
messageInput.addEventListener("keyup", (event) => {
  if (event.key === "enter") {
    sendButton.click();
  }
});

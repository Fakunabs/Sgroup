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
        const messageElement = document.createElement("div");
        messageElement.className = messageClass;
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

// làm sao để scroll bar luôn luôn cuộn xuống phía dưới cùng mặc dù không có tin nhắn mới
// Hãy viết code 

// Path: Day 12/main.
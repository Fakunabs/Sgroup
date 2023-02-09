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

const messageInput = document.getElementById("chat_input");
const nameInnput = document.getElementById("name_input");





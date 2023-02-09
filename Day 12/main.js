// const messagesContainer = document.getElementById("chat_messages");
// axios
//   .get("https://63e393dec919fe386c09bbaa.mockapi.io/sgroup/message")
//   .then((response) => {
//     response.data.forEach((message) => {
//       let messageClass, profileClass, profileName;
//       if (message.isOwn) {
//         messageClass = "message my-message";
//         profileClass = "profile my-profile";
//         profileName = `<span>${message.name}</span>`;
//       } else {
//         messageClass = "message other-message";
//         profileClass = "profile other-profile";
//         profileName = `<span>${message.name}</span>`;
//       }
//       const messageElement = document.createElement("div");
//       messageElement.className = messageClass;
//       messageElement.innerHTML = `
//           <div class="${profileClass}">
//             ${profileName}
//           </div>

//           <div class="content">
//             <span>${message.content}</span>
//           </div>
//         `;
//       messagesContainer.appendChild(messageElement);
//     });
//   });

// const messageInput = document.getElementById("chat_input");
// const nameInnput = document.getElementById("name_input");
// const sendButton = document.getElementById("send");



let i = 1;
const messagesContainer = document.getElementById("chat_messages");
axios
  .get("https://63e393dec919fe386c09bbaa.mockapi.io/sgroup/message")
  .then((response) => {
    response.data.forEach((message) => {
      let messageClass, profileClass, profileImg, profileName;
      if (message.isOwn) {
        messageClass = "message my-message";
        profileClass = "profile my-profile";
        profileName = <span>${message.name}</span>;
      } else {
        messageClass = "message other-message";
        profileClass = "profile other-profile";
        profileName = <span>${message.name}</span>;
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

const messageInput = document.getElementById("chat_input").value;
const nameInput = document.getElementById("name_input").value;

function toNewestMess() {
  setTimeout(() => {
    console.log("i = ", i);
    i--;
    const new_message = document.getElementById(i.toString());
    console.log(new_message);
    new_message.scrollIntoView();
  }, 0);
}

document.getElementById("send").onclick = function () {
  const messageInput = document.getElementById("chat_input").value;
  const nameInput = document.getElementById("name_input").value;
  const messagesContainer = document.getElementById("chat_messages");

  i++;

  const messageElement = document.createElement("div");
  messageElement.className = "message other-message";
  messageElement.id = i++;
  messageElement.innerHTML = 
        `
          <div class="">
            ${nameInput}
          </div>

          <div class="">
            <span>${messageInput}</span>
          </div>
        `;
  messagesContainer.appendChild(messageElement);
  toNewestMess();
};

let personName = localStorage.getItem("name");

window.onload = function () {
  console.log("personName: " + personName);
  if (personName !== '' && personName != null) document.getElementById('demo').innerHTML = 'Hello ' + personName + "!";
  else {
    let personPrompt = prompt("Nhập tên của bạn");
    console.log("personPrompt: " + personPrompt);
    if (personPrompt != null && personPrompt !== '') {
      document.getElementById('demo').innerHTML = 'Hello ' + personPrompt + "!";
      localStorage.setItem("name", personPrompt);
    } else location.reload();
  }
};
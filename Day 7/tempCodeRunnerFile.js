let personName = localStorage.getItem("name");

function hello() {
  if (personName !== '' && personName != null) document.getElementById('demo').innerHTML = 'Hello ' + personName + "!";
  else {
    let personPrompt = prompt("Nhập tên của bạn");
    if (personPrompt != null && personPrompt !== '') {
      document.getElementById('demo').innerHTML = 'Hello ' + personPrompt + "!";
      localStorage.setItem("name", personPrompt);
    } else location.reload();
  }
};

hello();
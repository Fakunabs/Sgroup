submit.addEventListener("onclick", function () {
  // Username
  if (username.value.length) {
    for (let i = 0; i < username.value.length; i++) {
      if (
        username.value[i] == " " ||
        username.value[i] == ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
      ) {
        alert("Ten nguoi dung khong duoc co khoang trang hoac so");
        return;
      }
    }
  }

  // Email
  if (validateEmail(email.value) == null) {
    alert("Email khong hop le");
    return;
  }

  // Password
  if (password.value.length < 6) {
     text.innerHTML = "Password is not valid";
    alert("Nhap mat khau hon 6 ky tu");
    return;
  }
  // Phone number
  // if (phonenumber.value.length < 5 || phonenumber.value.length > 11) {
  //   alert("So dien thoai khong hop le");
  //   return;
  // }
  if (email.value == "gempro0501@gmail.com" && password.value == "12345678") {
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);

    // localStorage.clear();
    text.innerHTML = "Login Success";
  } else {
    text.innerHTML = "Login Fail";
  }
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

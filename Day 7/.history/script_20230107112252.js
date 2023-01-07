// Câu 1 : Viết hảm Javascript trả về chuỗi thông tin ngày giờ hiện tại
function getDateTime() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return `Now is: ${hour}:${minute}:${second} ${day}/${month}/${year}`;
}

const now = getDateTime();
console.log(now); // Now is: 23:30 28/12/2022

// Câu 2  : Viết hàm để in ra ngày tháng năm với các định dạng mm-dd- yyyy, mm/dd/yyyy, dd-mm-yyyy, dd/mm/yyyy

function allFormatsOfDate({ day, month, year }) {
  return `
    ${month}-${day}-${year} 
    ${month}/${day}/${year}
    ${day}-${month}-${year}
    ${day}/${month}/${year}`;
}
const date = {
  day: 28,
  month: 12,
  year: 2022,
};
const result = allFormatsOfDate(date);
console.log(result);
// 12-28-2022
// 12/28/2022
// 28-12-2022
// 28/12/2022

// Câu 3 : Viết hàm JavaScript để kiểm tra xem một số nguyên (1 < n < 10^1000) đã cho có chuỗi chữ số tăng hay không. Chuỗi chữ số tăng là chuỗi chữ số có độ dài bé nhất là 3, chữ số đứng ở sau lớn hơn chữ số đứng trước (ví dụ: 123, 456, 123456, 6789)





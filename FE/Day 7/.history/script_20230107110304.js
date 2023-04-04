// Câu 1 : Viết hảm Javascript trả về chuỗi thông tin ngày giờ hiện tại
function getDateTime() {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    return `Now is: ${hour}:${minute}:${second} ${day}/${month}/${year}`
}

const now = getDateTime()
console.log(now) // Now is: 23:30 28/12/2022

// Câu 2  : Viết hàm để in ra ngày tháng năm với các định dạng mm-dd- yyyy, mm/dd/yyyy, dd-mm-yyyy, dd/mm/yyyy
f
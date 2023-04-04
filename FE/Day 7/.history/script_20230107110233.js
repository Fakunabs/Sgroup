// Câu 1 : 
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
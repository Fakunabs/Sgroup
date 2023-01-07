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
/* Đây là lời giải thích cho đoạn mã trên:
1. Đối tượng Date chứa một tập hợp các phương thức trả về ngày và giờ ở các định dạng khác nhau.
2. Phương thức getFullYear() trả về năm của một ngày dưới dạng một số có bốn chữ số.
3. Phương thức getMonth() trả về tháng của ngày dưới dạng số (0-11).
4. Phương thức getDate() trả về ngày trong tháng của ngày đã chỉ định theo giờ địa phương.
5. Phương thức getHours() trả về giờ cho ngày đã chỉ định, theo giờ địa phương.
6. Phương thức getMinutes() trả về số phút trong ngày đã chỉ định theo giờ địa phương.
7. Phương thức getSeconds() trả về số giây trong ngày đã chỉ định theo giờ địa phương.
8. Phương thức getMilliseconds() trả về mili giây trong ngày đã chỉ định theo giờ địa phương. */

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

/* Đây là lời giải thích cho đoạn mã trên:
1. Đầu tiên, chúng ta khai báo một hàm có tên allFormatsOfDate và truyền cho nó một đối tượng có ba thuộc tính.
2. Sau đó, chúng tôi trả về một chuỗi có bốn định dạng ngày khác nhau trong đó.
3. Sau đó chúng ta khai báo một biến có tên là ngày và gán cho nó một đối tượng có ba thuộc tính: ngày, tháng và năm.
4. Sau đó, chúng tôi gọi hàm allFormatsOfDate và chuyển cho nó đối tượng ngày tháng.
5. Sau đó, chúng tôi ghi kết quả vào bảng điều khiển.
6. Sau đó, chúng tôi chạy mã và chúng tôi có thể xem kết quả trên bảng điều khiển. */

// Câu 3 : Viết hàm JavaScript để kiểm tra xem một số nguyên (1 < n < 10^1000) đã cho có chuỗi chữ số tăng hay không. Chuỗi chữ số tăng là chuỗi chữ số có độ dài bé nhất là 3, chữ số đứng ở sau lớn hơn chữ số đứng trước (ví dụ: 123, 456, 123456, 6789)

function isIncreasingChainNumber(){ 
    const number = number.toString();
    for (let i = 0; i < number.length - 2; i++) {
        if (number[i] >= number[i + 1] || number[i + 1] >= number[i + 2]) {
            console.log("number[i] = " + number[i] + " number[i+1] = " + number[i+1] + " number[i+2] = " + number[i+2]);
            return false;
        }
    }
    return true;
}

const number1 = 123456789n;
const number2 = 123432112321n;
const number3 = 988811111n;

console.log(isIncreaseChainNumber(number1))  // true
console.log(isIncreaseChainNumber(number2)) // true
console.log(isIncreaseChainNumber(number3)) // false

/* Đây là lời giải thích cho đoạn mã trên:
1. Tạo một hàm gọi là isIncreaseChainNumber
2. Khai báo một biến có tên là số và chuyển nó thành một chuỗi
3. Tạo vòng lặp for lặp qua chiều dài của số - 2
4. Tạo một câu lệnh có điều kiện để kiểm tra xem số ở chỉ mục hiện tại có lớn hơn hoặc bằng số tiếp theo không và nếu số tiếp theo lớn hơn hoặc bằng số sau chỉ mục tiếp theo
5. Nếu điều kiện là true, trả về false
6. Ngược lại, trả về true
7. Khai báo ba biến có tên là number1, number2, number3 và đặt chúng bằng 123456789n, 123432112321n, và 988811111n
8. Gọi hàm isIncreaseChainNumber với tham số là number1, number2, number3 và in kết quả ra màn hình */


// Câu 4 : Viết một hàm JavaScript trả về một chuỗi đã được thay thế mỗi ký tự với ký tự cách nó n ký tự trong bảng chữ cái. (mã hóa caesar)

function caesarCipher(str, n) {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWY";
    const alphabetArr = alphabet.split("");
    const strArr = str.split("");
    const result = strArr.map((char) => {
        const index = alphabetArr.indexOf(char);
        if (index === -1) return char;
        const newIndex = (index + n) % alphabetArr.length;
        return alphabetArr[newIndex];
    });
    return result.join("");
}
const name = "Nguyen Xuan Thinh";
const getText = caesarCipher(name, 3);

console.log(getText); // QjxBhq Xxdq Wklqk
/* Đây là lời giải thích cho đoạn mã trên:
1. Khai báo một biến tên là alphabet và gán nó với chuỗi alphabet.
2. Khai báo một biến có tên là alphabetArr và gán nó với chuỗi bảng chữ cái được chuyển thành một mảng.
3. Khai báo một biến gọi là strArr và gán nó với chuỗi được chuyển đổi thành một mảng.
4. Khai báo một biến có tên là kết quả và gán nó với mảng strArr được ánh xạ.
5. Ánh xạ mảng strArr và trả về kết quả.
6. Nếu không tìm thấy chỉ mục của ký tự, hãy trả về ký tự.
7. Ngược lại, hãy khai báo một biến có tên là newIndex và gán cho nó chỉ số của ký tự cộng với n modulo độ dài của mảng bảng chữ cái.
8. Trả về mảng bảng chữ cái tại newIndex.
9. Nối mảng kết quả và trả về.
10. Khai báo một biến tên và gán với chuỗi Nguyễn Xuân Thịnh.
11. Khai báo một biến có tên là getText và gán nó với hàm caesarCipher được gọi với biến tên và 3 làm đối số.
12. Ghi biến getText vào bàn điều khiển. */

// Câu 5 : Viết một hàm JavaScript hiển thị số xuất hiện nhiều nhất trong mảng 

function mostFrequentNumber(arr) {
    const count = {};
    arr.forEach((num) => {
        if (count[num]) {
            count[num]++;
        } else {
            count[num] = 1;
        }
    });
    let max = 0;
    let result = 0;
    for (let key in count) {
        if (count[key] > max) {
            max = count[key];
            result = key;
        }
    }
    return result;
}
const numbers = [1,2,3,5,6,7,4,7,3,2,1,6,7,8,7,7,1,7,3,7,9999,7,123,7]

console.log(mostFrequentNumber(numbers)) // 7

/*KẾT QUẢ
 Đây là lời giải thích cho đoạn mã trên:
1. Điều đầu tiên chúng ta làm là tạo một đối tượng sẽ lưu trữ số đếm của từng số trong mảng.
2. Chúng tôi lặp qua mảng và kiểm tra xem số đó có trong đối tượng không. Nếu có, chúng tôi tăng số lượng. Nếu không, chúng ta thêm nó vào đối tượng với giá trị là 1.
3. Chúng tôi lặp qua đối tượng và kiểm tra xem số nào có số lượng cao nhất. Chúng tôi lưu trữ số đó trong một biến gọi là kết quả.
4. Chúng tôi trả về kết quả. */

// Câu 6 : Viết chương trình để kiểm tra chuỗi (không phân biet hoa thường) chứa 'javascript' hay không

const isIncludeJS = () => {
    

}

const str1 = "asdsajkzzjAVAscriptttaskldjkl123aszxc"
const str2 = "jjjjjjjavaaaaScriptttttttttt"
const str3 = "888javaScript888"

console.log(isIncludeJS(str1)); //true
console.log(isIncludeJS(str2)); //false
console.log(isIncludeJS(str3)); //true
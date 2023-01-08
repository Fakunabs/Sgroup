const sum = (number) => {
    const digits = number.toString().split('').map(Number)
    const sum = digits.reduce((a, b) => a + b, 0)
    return sum
  }
  
  console.log(sum(1231312321378127391237219312n)) // 90
  console.log(sum(99999999999999999999999999999n))// 261
  console.log(sum(12345678908765432123456555566n)) // 98
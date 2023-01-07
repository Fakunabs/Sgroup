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
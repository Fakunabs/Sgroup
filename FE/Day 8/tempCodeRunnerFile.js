let n ;
let a = [];

n = prompt("Enter the number of terms: ");
console.log(n);

for (let i = 0; i < n; i++) {
    a[i] = prompt("Enter the " + (i + 1) + "th term: ");
    console.log(a[i]);

    if (a[i] == 0) {
        console.log("The " + (i + 1) + "th term is 0");
    } else if (a[i] > 0) {
        console.log("The " + (i + 1) + "th term is positive");
    } else {
        console.log("The " + (i + 1) + "th term is negative");
    }

    if (a[i] % 2 == 0) {
        console.log("The " + (i + 1) + "th term is even");
    } else {
        console.log("The " + (i + 1) + "th term is odd");
    }

    if (a[i] % 5 == 0) {
        console.log("The " + (i + 1) + "th term is divisible by 5");
    } else {
        console.log("The " + (i + 1) + "th term is not divisible by 5");
    }
}


console.log('N-th term');
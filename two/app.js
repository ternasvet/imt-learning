let a = 89,
    b = 107,
    c = 694;

let max = a >= b && a >= c ? a : (b >= a && b >= c ? b : c);

console.log(max);
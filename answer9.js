let n1 = 0, n2 = 1, fib;

console.log(n1);
console.log(n2); 

fib = n1 + n2;

while (fib <= 10000) {

   console.log(fib);

   n1 = n2;
    n2 = fib;
    fib = n1 + n2;
}
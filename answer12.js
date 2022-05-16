let number = 6742; sum = 0;
while (number > 0) {
    sum = sum + (number % 10)
    number = Math.trunc(number / 10)
}
console.log(sum)

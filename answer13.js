let star = "*"
for (index = 0; index <= 4; index++){
console.log(star)
star += "*"
}

star = star.slice(0, -1);

for (index = 0; index <= 4; index++){
    star = star.slice(0, -1);
    console.log(star) }
//Exercise 1

//Part 1: There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. Create an array that has these three names in order.

const part1 = ['Sofia', 'David', 'Juan'];
console.log(part1);

console.log();

//Part 2: Two more people get added to the back of the line - Sara and Augustin. The first person in line is called to the teller. What does the queue look like?

part1.push('Sara', 'Augustin');
console.log(part1);

console.log();

//Part 3: It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line. What does the queue look like?

part1.splice(2, 0, 'Renata');
part1.push('Elena');
console.log(part1);


console.log();console.log();console.log();


/*Exercise 2: Write a JavaScript program to construct the following pattern, using a nested for loop.

*  
* *  
* * *  
* * * *  
* * * * *

*/

for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '* ';
    }
    console.log(row);
}


console.log();console.log();console.log();


//Exercise 3

//Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time, as long as xValue remains positive.
let x = 6;
while (x >= 0) {
    console.log(x);
    x -= 0.5;
}

console.log();

//Print all the odd numbers between 1 - 100.
let y = 1;
while (y < 100) {
    console.log(y);
    y += 2;
}

console.log();

//Write a method with a while loop to print 1 through n in square brackets.  For example, if n = 6 print [1] [2] [3] [4] [5] [6]
let z = 1;
let n = 6;
let numLine = '';
while (z <= n) {
    numLine += `[${z}] `;
    z++;
}
console.log(numLine);

console.log();

//Write a method with a while loop that computes the sum of first n positive integers:  sum = 1 + 2 + 3 + … + n
let a = 1;
let m = 5;
let answer = 0;
while (a <= m) {
    answer += a;
    a++;
}
console.log(answer);
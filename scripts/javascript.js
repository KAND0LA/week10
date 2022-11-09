// for (let i = 0; i < 1000000; i++)
// {
//     console.log(i)
// }

// for (let i = 1 ; i <= 10; i++)
// {
//     console.log(2**i)
// }

// let i = 1;
// while (i <= 10)
// {
//     console.log(2**i);
//     i++;
// }

// do{
//     let input = prompt ("What is your name?");
//     // console.log(Number(input));
// } 
//     while(!isNaN(number(input)));

//     // alert("Hello" + input)
//     alert(`Hello ${input}`)

// let fruits = ['Apple', 'Banana'];
// let pushResult = fruits.push("Orange");
// console.log(fruits);

// let popResult = fruits.pop();
// console.log(fruits);

// let unshiftResult = fruits.unshift("Mango");
// console.log(fruits);

// let shiftResult = fruits.shift();
// console.log(fruits);

// const person = {
//     name: ['Bob', 'Smith'],
//     age: 32,
//     gender: 'male',
//     interests: ['music', 'skiing'],

// };

//     console.log(
//         `My name is ${person.name[0]} ${person.name[1]}. I am interested in ${person.hobbies[0]} and ${person.hobbies[1]}`
//         );

// for (let key in person)
// (
//     console.log(key);
//     console.log(person[key]);
// )

let student1 = {
    ID: "A00022",
    GPA: 3.0,
    program: "CIT"
};

let student2 = {
    ID: "A01000",
    GPA: 3.1,
    program: "CST"
};

let student3 = {
    ID: "A00114",
    GPA: 3.2,
    program: "CIT"
};

let students = [student1, student2, student3]; 

for(let student of students);
{
    if (student["program"] === "CIT" && student.GPA > 3) {
        counter++
        console.log(student);
    }
}
console.log(counter)
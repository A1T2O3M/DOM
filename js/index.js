//  function remote(){
//  confirm('Are you sure you want to continue?')
//  prompt("What's your name?");
//  alert('welcome to our page')
// }

// function gavi(){
//     console.log( 4 + 8);
// }
// gavi()

// console.log('my name is John Wick');

// var
// let allows us to redefine a value after it has been declared.
// const does not allow us redefine a value after declaration.

// Data types
// Numbers
// var age = 50
// console.log(age);

// // String
// let name = 'Fareed'
// console.log(name);

// // Boolean
// let isStudent = false
// console.log(isStudent);

// // Null
// const graduate = null
// console.log(graduate);

// // undefined
// let person;
// console.log(person);


// const person = {
//     name: 'Fareed is my name',
//     age: 35,
//     married: false,
//     graduate: null,
//     landlord: 'yes',
//     student: true,
// }
// console.log(person.student);


//  const colours = ['red', 'white', 'purple', 'blue', 'yellow']
//  colours.pop() // removes the last element
//  console.log(colours);
// colours.push('black') // adds to the last element
// console.log(colours);
// colours.shift() //removes from the first element
// console.log(colours);
// colours.unshift('azure') // adds to the first element
// console.log(colours);
// An array method that can add to the first element of the array
// An array method that can remove from the first element of the array
// An array method that can add to the last element of the array
// An array method that can remove from the last element of the array.


// const properties = [
//     'shoes',
//     'shirts',
//     cars = ['Porshe', 'Bugatti', 'Toyota', 'Tesla'],
//     houses = ['Penthouse', 'Duplex', 'bungalow'],
//     'shares',
//     'cash'
// ]
// // console.log(properties.length);
// // console.log(properties[4]);

// console.log(properties[2][3]);
// console.log(properties[3][1]);

const players = [
    {
        name: 'Lionel Messi',
        age: 36,
        club: 'Inter Miami',
        country: 'Argentina'
    },
    {
        name: 'Christiano Ronaldo',
        age: 38,
        club: 'Al Nassr',
        country: 'Portugal'
    },
    {
        name: 'Luis Figo',
        age: 52,
        club: null,
        country: 'Portugal'
    },
    {
        name: 'Zinedine Zidane',
        age: 50,
        club: null,
        country: 'France'
    }
]

console.log(players[2].name, players[0].name);
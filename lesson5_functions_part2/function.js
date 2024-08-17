

// Зробити завдання за допомогою стрілочних функцій

// 1-створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const square = ( c, b ) =>{
    return c * b
}
console.log(square(20, 30))


// 2-створити функцію яка обчислює та повертає площу кола з радіусом r

const squareCircle = (radius) => {
     return Math.PI * radius * radius
}
console.log(squareCircle(22))


// 3-створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const squareCylinder = (r , h) => {
    return 2 * Math.PI * r + h
}
console.log(squareCylinder(25,36))


// 4-створити функцію яка приймає масив та виводить кожен його елемент



const book = (list) =>{
    for (const items of list) {
        document.write(items)
    }
}
let users = ['Sonya',' ', 'function', 'my block', 'hard']
let numbers = [234,345,456,567]
console.log(users)
console.log(numbers)
document.write(`${users}`);
document.write(`${numbers}`)


// 5-творити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

// function description (text){
//     document.write(`<p>${text}</p>`)
// }
// description('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta mollitia placeat rerum similique. Autem cupiditate\n' +
//     '    deserunt dignissimos excepturi omnis?')

const description = (text) => {

    document.write(`<div>${text}</div>`)
}
description('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur corporis cumque ea, eos labore obcaecati omnis porro quod sint?')


//5-створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

const list1 = (text) =>{
    document.write(`<ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
 </ul>`)
}
list1('This is a list 1')


//6-створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write------

const list2 = (text, count) =>{
    document.write(`<ul>`)
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}
list2 ('This is a list 2', 5)



//7-створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

const arr = (array) =>{
    document.write(`<ul>`)
    for (const item of array) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
arr(['car', 'house', 'books', 124, 345, true])


//8-створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

const array = (users) =>{
    for (const item of users) {
        document.write(`<div>${item.id} ${item.name} ${item.age}</div>`)

    }
}
array([
    {id: 134, name: 'Sophia', age: 31},
    {id: 135, name: 'Viktoria', age: 32},
    {id: 136, name: 'Monika', age: 34},
    {id: 137, name: 'Marina', age: 35},
    {id: 138, name: 'Olga', age: 28},
    {id: 139, name: 'Maria', age: 22},
])


//9-створити функцію яка повертає найменьше число з масиву

const minNumbers = (numbers) => {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let item = numbers[i];
        if (item < min){
            min = item
        }
    }
    return min
}
console.log(minNumbers([45, -23, 1, 34, 245, 55, -345]));


//10-створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const sumNumbers = (sum) => {
    let packet = 0;
    for (const item of sum) {
        packet = packet + item
    }
    return packet
}
console.log(sumNumbers([10, 10, 10, 10]))


// 11-створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

const swap = (arr, index1, index2) => {
    let piece = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = piece

    return arr
}
console.log(swap([11,22,33,44],2,1))

// 12-Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    let chosenCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency){
            chosenCurrency = item
        }
    }
    return sumUAH/chosenCurrency.value
}
console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));
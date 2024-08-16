
// 1--cтворити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function square (c, b){
    let result = c * b
    document.write(`${result}`)
    return result
}
square(30, 60)

// 2-створити функцію яка обчислює та повертає площу кола з радіусом r

function squareCircle (radius) {
    const result1 = Math.PI * radius * radius
    console.log(result1)
    return result1
}
squareCircle(25)

// 3-створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function squareCylinder (r, h){
    const result2 = 2 * Math.PI * r + h
    console.log(result2)
    return result2
}
squareCylinder(24, 34)

// 4-створити функцію яка приймає масив та виводить кожен його елемент

function book (list){
    for (const items of list) {
    document.write(items)
    }
}
let users = [
    'Sonya',' ', 'function', 'my block', 'hard'
 ]
let numbers = [234,345,456,567]
book(numbers)
book(users)

// 5-творити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function description (text){
    document.write(`<p>${text}</p>`)
}
description('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta mollitia placeat rerum similique. Autem cupiditate\n' +
    '    deserunt dignissimos excepturi omnis?')

//5-створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

function list1(text){
    document.write(`<ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
</ul>`)
}
list1('This is a list1')



//6-створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write------

function list2(text,count){
    document.write(`<ul>`)
    for (let i = 0; i < count; i++) {
       document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}
list2('This is a list2',7)

//7-створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

function arr (array){
    document.write(`<ul>`)
    for (const item of array) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
arr(['string', 'string2', 45, 54, true])


//8-створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function Array (users){
    for (const item of users) {
        document.write(`<div> ${item.id} ${item.name} ${item.age}</div>`)
    }
}
Array([
    {id: 134, name: 'Sophia', age: 31},
    {id: 135, name: 'Viktoria', age: 32},
    {id: 136, name: 'Monika', age: 34},
    {id: 137, name: 'Marina', age: 35},
    {id: 138, name: 'Olga', age: 28},
    {id: 139, name: 'Maria', age: 22},
    ])



//9-створити функцію яка повертає найменьше число з масиву

function minNumbers(numbers){
    let min = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        let item = numbers[i]
        if(item < min){
            min = item
        }
    }
    return min;
}
console.log(minNumbers([345, 1, 35, -335, 34, -24, 75]))


//10-створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sumNumbers (sum) {
    let packet = 0;
    for (const item of sum) {
        packet = packet + item;
    }
    return packet
}
console.log(sumNumbers([13, 17, 18, 20]))


// 11-створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2){
let piece = arr[index1];
arr[index1] = arr[index2];
arr[index2] = piece

    return arr
}
console.log(swap([11,22,33,44],3,0))

// 12-Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

function exchange(sumUAH,currencyValues,exchangeCurrency){
    let chosenCurrency;
    for (const item of currencyValues) {
        if(item.currency === exchangeCurrency){
            chosenCurrency = item;
    }

    }
    let result = sumUAH/chosenCurrency.value
    return result
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));

















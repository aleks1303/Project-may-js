// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
let button = document.getElementById('button');
button.onclick = function () {
    document.getElementById('text').style.display = 'none';
}
let buttonReturn = document.getElementById('return')
buttonReturn.onclick = function (){
    document.getElementById('text').style.display = 'block'
}
//
// #j693ca8
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//






// #ymAmN2xJ
// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
//

const wrap = document.getElementById('wrap')

const form = document.forms.form;
form.addEventListener('submit', function (submit){
    submit.preventDefault();
    const nameValue = form.name.value;
    const surnameValue  = form.surname.value;
    const ageValue = form.age.value;
    let object = {nameValue, surnameValue, ageValue};

    wrap.innerText = (nameValue + ' ' +surnameValue + ' ' + ageValue)
    console.log(object);
})

// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
//

let local = +localStorage.getItem('key');
local += 1;
localStorage.setItem('key', local);
console.log(local);

const local1 = document.getElementById('local');
local1.innerText = local


// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
//

let sessionLIst;
if(localStorage.getItem('sessionList')){
    sessionLIst = JSON.parse(localStorage.getItem(('sessionList')))
}else {
    sessionLIst = [];
}
sessionLIst.push(new Date());
localStorage.setItem('sessionList', JSON.stringify(sessionLIst))




// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
//

const converter = document.getElementById('number');
const resultConverter = document.getElementById('result');
converter.oninput = function () {
    const kilo = +this.value;
    resultConverter.innerText = kilo * 2.2;
}


// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
//


// function addToLocalStorage(arrayName,objToAdd){
//     let localItem = localStorage.getItem(arrayName)
//     if(!localItem){
//         throw new Error('Not found')
//     }
//     const localArray = JSON.parse(localItem);
//     if(typeof objToAdd === 'object'){
//         localArray.push(objToAdd)
//     }
//     const jsonArray = JSON.stringify(localArray);
//     localStorage.setItem(arrayName, jsonArray)
// }
// addToLocalStorage('key', {})

//
//     #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//

const table = document.getElementById('table')

const tableFrom = document.forms['tableFrom'];

tableFrom.onsubmit = function (ev){
    table.innerText = '';
    ev.preventDefault()
    const valueLine = +tableFrom.line.value;
    const valueCell = +tableFrom.cell.value;
    const valueText = tableFrom.text.value;
    console.log(valueLine, valueCell, valueText)
    for (let i = 0; i < valueLine; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < valueCell; j++) {
           const td = document.createElement('td')
            td.innerText = valueText;
            tr.appendChild(td)
        }

        table.appendChild(tr);

    }
}


//
//     #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
//











//
// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
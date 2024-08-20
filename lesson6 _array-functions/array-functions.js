//
// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let words1 = 'hello world'
let words2 = 'lorem ipsum'
let words3 = 'javascript is cool'

console.log(words1.length)
console.log(words2.length)
console.log(words3.length)

const words4 = ['hello world', 'lorem ipsum', 'javascript is cool']
for (const item of words4) {
    console.log(item.length)
}

// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let word1 = 'hello world'
console.log(word1.toUpperCase())

let word2 = 'lorem ipsum'
console.log(word2.toUpperCase())

let word3 = 'javascript is cool'
console.log(word3.toUpperCase())


// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let word4 = 'HELLO WORLD'
let word5 = 'LOREM IPSUM'
let word6 = 'JAVASCRIPT IS COOL'

console.log(word4.toLowerCase())
console.log(word5.toLowerCase())
console.log(word6.toLowerCase())

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   '
let s = str.trim()
console.log(s)

//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

const stringToArray = (str) => {
    if (str){
        const srting1 = str.split(' ')
        return srting1
    }
    return [' ']
}
console.log(stringToArray());


// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10,8,-7,55,987,-1011,0,1050,0]
let numberMap = numbers.map(number => number.toString());

console.log(numberMap)


// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]


function sortNums (array,direction) {

    if (direction === 'ascending')
        return array.sort((a, b) => a - b);
    if (direction === 'descending')
        return array.sort((a, b) => b - a)
}
let nums = [11,21,3]
console.log(sortNums(nums,'ascending'));



// ==========================
// #yo06d74c1C
// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// =========================
 const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
const sortFilterMap = coursesAndDurationArray
    .sort((a, b) =>b.monthDuration - a.monthDuration)
.filter(value => value.monthDuration > 5)
    .map((value, index) => {
        value.id = index + 1
        return value
    })
console.log(sortFilterMap)


//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
//
// =========================

const cardSuit = ['spade', 'diamond','heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'ace','jack','queen','king']

const cards = [];
for (const suit     of cardSuit) {
    for (const value of values) {
        const card = {suits:suit, value:value}
        if(suit === 'heart' || suit === 'diamond'){
        card.color = 'red'
        } else card.color = 'black'
        cards.push(card)
    }
}
console.log(cards)
console.log(cards.find(card => card.suits === 'spade' && card.value === 'ace'));
console.log(cards.filter(card => card.value === '6'));
console.log(cards.filter(card => card.color === 'red'));
console.log(cards.filter(card => card.suits === 'diamond'));
console.log(cards.filter(card => card.suits === 'clubs' && card.value !== '6' && card.value !== '7' && card.value !== '8'));

// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
const reduce = cards.reduce((previousValue, currentValue) => {
    if(currentValue.suits){
        previousValue.spades.push(currentValue)
    }
    if(currentValue.suits === 'diamond'){
        previousValue.diamonds.push(currentValue)
    }
    if (currentValue.suits === 'heart'){
        previousValue.hearts.push(currentValue)
    }
    if (currentValue.suits === 'clubs'){
        previousValue.clubs.push(currentValue)
    }
    return previousValue
}, {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
});

console.log(reduce)



// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker



let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray.filter(value => {
    return value.modules.includes('sass')
}))
console.log(coursesArray.filter(value => {
    return value.modules.includes('docker')
}))



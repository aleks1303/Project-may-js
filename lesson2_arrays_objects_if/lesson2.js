
let array = ['oleg', 'sasha', 'vova', 'petya', 123, 432, 'anna', 'content', '1223', 1.3 ];
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])
console.log(array[5])
console.log(array[6])
console.log(array[7])
console.log(array[8])
console.log(array[9])


//----object---------------------

let book1 = {
    title: 'Around',
    pageCount: 223,
    genre: 'fantastic'
}

let book2 = {
    title: 'Space',
    pageCount: 400,
    genre: 'documental'
}

let book3 = {
    title: 'Sun',
    pageCount: 135,
    genre: 'discover'
}
console.log(book1,book2, book3)


// -----------object--------------

let book4 = {
    title: 'book',
    pageCount: 254,
    genre: 'classic',
    authors: [
        {
            name: 'Aleks',
            age: 31
        }
    ]
}
let book5 = {
    title: 'Switch',
    pageCount: 525,
    genre: 'roman',
    authors: [
        {
            name: 'Julia',
            age: 34
        }
    ]
}
let book6 = {
    title: 'Cars and driver',
    pageCount: 345,
    genre: 'discover',
    authors: [
        {
            name: 'Jason',
            age: 44
        }
    ]
}
console.log(book4, book5, book6)

// -----------arrays---------------

let users = [
    {name: 'Maks', username: 'Jon', password: 234233 },
    {name: 'Jimmi', username: 'Jonn', password: 343343 },
    {name: 'Marina', username: 'Jill', password: 456655 },
    {name: 'Nelya', username: 'Mom', password: 456777 },
    {name: 'Petya', username: 'Moon', password: 8767656 },
    {name: 'Vica', username: 'Smil', password: 98465455 },
    {name: 'Ivan', username: 'Soil', password: 7544567 },
    {name: 'Dima', username: 'Packet', password: 8665565 },
    {name: 'Mila', username: 'Villa', password: 76654444 },
    {name: 'Kristi', username: 'Smitty', password: 77556677 }
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)


// -------------days-temp-------------

let days = [
    {
        day1: {
            morning:20,
            afternoon:30,
            evening:15
        },
        day2: {
            morning:15,
            afternoon:34,
            evening:15
        },
        day3: {
            morning:14,
            afternoon:33,
            evening:19
        },
        day4: {
            morning:11,
            afternoon:25,
            evening:15
        },
        day5: {
            morning:20,
            afternoon:31,
            evening:17
        },
        day6: {
            morning:18,
            afternoon:29,
            evening:16
        },
        day7: {
            morning:20,
            afternoon:34,
            evening:16
        }

    }
]
console.log(days[0].day6.afternoon)

// -------------------------

let x = 23;
if (x !== 0) {
    console.log('Вірно')
} else  {
    console.log('Невірно')
}

let a = -3;
if (a === 1){
    console.log(1)
}
else if (a === 0){
    console.log(0)
}
else if (a === -3) {
    console.log(-3)
}
else(console.log('none'))

// --------------------

let time = 33;
if (time >=0 && time < 14){
    console.log(1)
}
else if (time >15 && time < 29){
    console.log(2)
}
else if (time > 30 && time < 44){
    console.log(3)
}
else if (time > 45 && time < 59){
    console.log(4)
}
else{
    console.log('different time')
}

// ------------------------

let day = 15;
if (day >=1 && day < 10){
    console.log('first decade')
}
else if (day >= 11 && day < 20){
    console.log('second decade')
}
else if (day >= 21 && day < 31){
    console.log('last decade')
}
else{
    console.log('error')
}

// --------------------------------

let week = 5;
switch (week){
    case 1:
        console.log('learn english word - "sunday"')
        break;
    case 2:
        console.log('learn english word - "monday"')
        break;
    case 3:
        console.log('learn english word - "tuesday"')
        break;
    case 4:
        console.log('learn english word - "wednesday"')
        break;
    case 5:
        console.log('learn english word - "thursday"')
        break;
    case 6:
        console.log('learn english word - "friday"')
        break;
    case 7:
        console.log('learn english word - "saturday"')
        break;
}

// ----------------------------

let g = 14;
let q = 14;

if (g > q){
    console.log(g)
}
else if (g < q){
    console.log(q)
}
else if (g === q){
    console.log('the same')
}
else{
    console.log(undefined)
}

// // --------------------------------
//
// let xx;
// prompt('???')
// if (xx === '23'){
//     console.log(22)
// }
// else{
//     console.log('default')
// }

// ---------------------------------------

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('super')
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('super')
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('super')
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('super')
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('super')
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('super')
}
















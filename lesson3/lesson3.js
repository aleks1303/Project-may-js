

// --------------for------------

for (let i = 1; i <= 10; i++){
    document.write('<div>Word</div>');
}

for (let a = 1; a <= 10; a++){
    document.write(`<div>Word ${a}</div>`)
}

// ---------------while---------------

let b = 1;
while (b <= 20) {
    document.write('<h1>the words what we hear</h1>');
    b++
}

let c = 1;
while (c <= 20) {
    document.write(`<h1>the words what we hear ${c}</h1>`);
    c++
}

// ---------------------------

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write('<ul>')
for (let list = 0; list <= listOfItems.length; list++ ){
    document.write(`<li>${listOfItems[list]}</li>`);
}
document.write('</ul>')

// //----------------------------------
//
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://images.prom.ua/4724739000_w600_h600_4724739000.jpg'
    },
];

for (let product of products)
    document.write(`<div class="product-card">
    <h3 class="product-title"> ${product.title} - price ${product.price} UAH</h3>
    <img src="${product.image}" alt="image">
    </div>`)


//-------------------------

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
let userTrue =[];
let userFalse = [];
let userOld30 = []

let i = 0
while(i < users.length) {
    let user = users[i];
    if (user.status) {
        userTrue[userTrue.length] = user
    }else {
        userFalse[userFalse.length] = user
    }
    if (user.age >= 30){
        userOld30[userOld30.length] = user
    }
    i++
}
console.log(userTrue)
console.log(userFalse)
console.log(userOld30)

// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id, name, surname, email, phone)
{
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}
console.log(User)

const user = new User ( 1, 'Sophia', 'Golovko', 'ama@gmail.com', +2334333343)
console.log(user)

let users = [
 new User ( 1, 'Sophia', 'Moon', 'ama@gmail.com', '+380669843424'),
 new User ( 2, 'Marina', 'Gol', 'amew@gmail.com', '+2334333343'),
 new User ( 3, 'Olga', 'Golo', 'were@gmail.com', '+2334333343'),
 new User ( 4, 'Alex', 'Golovko', 'tred@gmail.com', '+2334333343'),
 new User ( 5, 'Sergiy', 'Golovko', 'golova@gmail.com', '+2334333343'),
 new User ( 6, 'Vasya', 'Golovko', 'vasya@gmail.com', '+2334333343'),
 new User ( 7, 'Sasha', 'Golovko', 'sasha@gmail.com', '+2334333343'),
 new User ( 8, 'Anna', 'Golovko', 'annag@gmail.com', '+2334333343'),
 new User ( 9, 'Mila', 'Golovko', 'milagolovko@gmail.com', '+2334333343'),
 new User ( 10, 'Ivan', 'Golovko', 'ivana@gmail.com', '+2334333343'),
    new User(11, 'Nina', 'Rovko', 'ninagovko@gmail.com', '+380953003003')
]

console.log(users)



// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

function userFilter (user){
    if(user.id%2 === 0) {
        return true
    }else {
        return false
    }
}
let usersFiltration = users.filter(userFilter)
console.log(usersFiltration)


// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

function sortUser (user1, user2) {
    return (user2.id - user1.id)
}
let userSort = users.sort(sortUser)
console.log(userSort)


// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

function ClientUser(id, name, surname , email, phone, ...products){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = products;

}
function Products(title, price){
    this.title = title;
    this.price = price;
}

const Client = [
    new ClientUser(4, 'Julia', 'Forest', 'forest@gmail.com', '+380909894534',
        new Products('water', 334), new Products('chips', 34)),

    new ClientUser(3, 'Sasha', 'Moon', 'moon@gmail.com', '+380980001200',
        new Products('shirt', 34),new Products('hat', 35), new Products('coat', 345)),

    new ClientUser(6, 'Sophia', 'Nova', 'nova@gmail.com', '+380909834344',
        new Products('netbook', 3343), new Products('phone', 3434)),

    new ClientUser(7, 'Maria', 'Radnichenko', 'radnichenko@gmail.com', '+380997894534',
        new Products('oil', 33), new Products('sugar', 34)),

    new ClientUser(67, 'Jenifer', 'Jonson', 'jenifer@gmail.com', '+380904444534',
        new Products('knife', 334)),

    new ClientUser(34, 'Mila', 'Fro', 'fro@gmail.com', '+380909832464',
        new Products('space', 33445), new Products('milk', 33)),

    new ClientUser(1, 'Nina', 'Sun', 'sun@gmail.com', '+380934594534',
        new Products('ice', 564)),

    new ClientUser(32, 'Kiril', 'Zero', 'zerot@gmail.com', '+380931094534',
        new Products('ice', 3340), new Products('bottle', 90)),

    new ClientUser(2, 'Bogdan', 'Garden', 'garden@gmail.com', '+380999894538',
        new Products('leaves', 3343), new Products('tree', 560)),

    new ClientUser(7, 'Sergiy', 'Ser', 'ser@gmail.com', '+380935554504',
        new Products('bottle water', 31), new Products('chips', 44)),
]

console.log(Client)


// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

const sortClient = Client.sort((a, b) => a.order.length - b.order.length);
console.log(sortClient)


// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car (mode, producer, year, maxSpeed, engineVolume){

    this.mode = mode;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    }
    this.info = function (){
        for (const key in this) {
            console.log(key, this[key])
        }

    }
    this.increaseMaxSpeed = function (newSpeed){
        if(newSpeed > 0)
        this.maxSpeed = this.maxSpeed + newSpeed
    }
    this.changeYear = function (newYear){
        if(newYear > 1815)
        this.year = newYear;
    }
    this.addDriver = function (driver){
        if(driver) this.driver = driver

    }
}
const car = new Car('Citroen', 'French', '2007', 160, 1.6,
)

console.log(car)
car.drive()
car.info()
car.increaseMaxSpeed(20)
console.log(car)
car.changeYear(2009)
console.log(car)
car.addDriver('Super')




// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car












// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку












// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
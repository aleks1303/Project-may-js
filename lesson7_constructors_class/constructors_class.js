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
 new User ( 1, 'Sophia', 'Golovko', 'ama@gmail.com', '+380669843424'),
 new User ( 2, 'Marina', 'Golovko', 'amew@gmail.com', '+2334333343'),
 new User ( 3, 'Olga', 'Golovko', 'were@gmail.com', '+2334333343'),
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









// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)









// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car











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
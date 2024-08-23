
// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.




// function copyClone (object){
//     if(object){
//         let cloneFunction = []
//         for (const key in object) {
//             if( typeof object[key] === 'function'){
//                 object[key].bind({})
//                 const functionCopy = object[key].bind({})
//                 cloneFunction.push(functionCopy,key);
//             }
//         }
//         console.log(cloneFunction);
//         const cloneObject = JSON.stringify(object);
//         const parseObject = JSON.parse(cloneObject);
//         for (const item of cloneFunction) {
//             parseObject[item[key]] = item.functionCopy
//
//         }
//         console.log(parseObject)
//         return parseObject
//
//
//     }
//     throw new Error('Not find')
// }
//
// copyClone({name:'Anna', age: 34, id: 23, cloneObject(){}, cloneObject2(){}})


// function cloner (obj){
//     if (obj){
//         let functions = [];
//         for (const key of obj) {
//             if(typeof obj[key] === 'function'){
//                 const functionClone = obj[key].bind({});
//                 functions.push({functions, key})
//             }
//         }
//         const cloneObj = JSON.parse(JSON.stringify(obj));
//         for (const func of functions) {
//             cloneObj[func.key] = func.functionClone;
//         }
//         throw new Error('Not find')
//     }
//     console.log(cloneObj);
//     return cloneObj
// }
// const clone = cloner({id: 123, name: ' Anna', greeting() {console.log('hello')}, foo(){console.log('bar')}})
// clone()


function cloner(obj) {
    if (obj) {
        let functions = [];
        for (const key in obj) {
           if(typeof obj[key] === 'function'){
              const functionClone = obj[key].bind({});
              functions.push({functionClone, key});
           }

        }
        console.log(functions)
    const cloneObj = JSON.parse(JSON.stringify(obj))
        for (const func of functions) {
            cloneObj[func.key] = func.functionClone
        }
    console.log(cloneObj)
    return (cloneObj)

}
    throw new Error('Not find')
}

cloner({id:123, name: 'Anna', greeting(){} , foo(){}} )





let client;
client?.name



// #iz6emEsP2BA
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

const coursesAndDurationArrayId = coursesAndDurationArray.map((value,index) => ({...value,id: index + 1}))
console.log(coursesAndDurationArrayId)
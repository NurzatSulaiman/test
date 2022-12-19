//1 Дан массив [1, 2, 3, 4, 5] с помощью метода reduce сделать объект в котором ключ будет равен элементу массива,
// а значение (элемент * 100)
// const numbers = [1, 2, 3, 4, 5] ;
// const getObj = numbers.reduce(function (acc, item) {
//   acc[item] = item * 100;
//   return acc;
// }, {});
// console.log(getObj)

//2 Дан массив ['skill1', 'skill2', ... 'skilln'] скиллы произвольные самим придумать. Написать функцию которая создает из
// массива skills объект с рандомными значениями от 1 до 100, использовать reduce и Math.random()
// const skills = ['skill1', 'skill2', 'skill3', 'skill4', 'skill5'];
// const randomObj = skills.reduce((acc, item) => {
//     acc[item] = Math.floor(Math.random() * (100 - 1) + 1);
//     return acc;
// }, {})
// console.log(randomObj);

//3 Дан произвольный массив из чисел больше 0 с помощью reduce посчитать сумму четных и нечетных чисел
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 100, 200, 300];
// let odd = 0;
// let even = 0;
// const sum = array.reduce(function (acc, item) {
//     if(item % 2 === 0) {
//       even += item;
//     } else if (item % 2 !== 0) {
//       odd += item;
//     }
//   return even;
// }, {});
// const obj = {
//   odd,
//   even
// }
// console.log(obj)

//4 Дан массив  [ { name: 'Harry Potter', house: 'Gryfindor' }, { name: 'Cedric Diggory', house: 'Hufflepuff' },
// { name: 'Tonks', house: 'Hufflepuff' }, { name: 'Ronald Weasley', house: 'Gryfindor' }, { name: 'Hermione Granger',
// house: 'Gryfindor' }]; Создайте новый массив, который будет содержать только имена мастеров из Хаффлпаффа. Сделайте эту
// задачу двуми способоами: C помощью filter и map C помощью reduce
// const arr = [
//   { name: 'Harry Potter', house: 'Gryfindor' },
//   { name: 'Cedric Diggory', house: 'Hufflepuff' },
//   { name: 'Tonks', house: 'Hufflepuff' },
//   { name: 'Ronald Weasley', house: 'Gryfindor' },
//   { name: 'Hermione Granger', house: 'Gryfindor' }
// ];
// const filterObj = arr.filter((item) => {
//   return item.house === 'Hufflepuff';
// }).map((element) => {
//   return element.name;
// })
// console.log(filterObj)
//
// const reduceObj = arr.reduce(function (acc,item) {
//   if (item.house === 'Hufflepuff') {
//     acc.push(item.name);
//   }
//   return acc;
// }, [])
//
// console.log(reduceObj);

//5 Дан массив [3, 4, 1, 2, 7]. Создайте две переменные и запишите туда результат сортировки:
// От большего к меньшему
// От меньшего к большему

// const arr = [3, 4, 1, 2, 7]
// arr.sort((a, b) => {
//   return a - b;
// })
// console.log(arr);
//  arr.sort((a, b) => {
//   return b - a;
// })
// console.log(arr);

//6 Создайте произвольный массив из строк и также создайте две переменные, куда запишите результат сортировки:
// От A-Z
// От Z-A

// const arr = ['house', 'book', 'cat', 'dog'];
// const aZ = arr.sort();
// console.log(aZ);
// const zA = arr.sort().reverse();
// console.log(zA);
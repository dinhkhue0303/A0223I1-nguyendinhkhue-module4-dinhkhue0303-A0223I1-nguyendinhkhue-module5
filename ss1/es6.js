// 1
let arr = [1,2,5,6,8,9];
let newArr = arr.filter((item) => item > 5);
console.log(newArr);
// 2
let sum = arr.reduce((sum, item) => sum + item);
console.log(sum);
// 3
let v = 4;
let contain = arr.includes(v);
console.log(contain ? v : "not found");
// 4
let moreThan0 = arr.every((item) => item > 0);
console.log("lớn hơn 0 hết : " + moreThan0);
// 5
let moreThan5 = arr.find((item) => item > 5);
console.log(moreThan5);
// 6
let [first,...rest] = arr;
console.log("first :" + first);
console.log(rest);
// 7
let people = [
    {name: "name", age: 20},
    {name: "bao", age:21}
]
let [person1, person2] = people;
console.log(person1.name, person1.age);
console.log(person2.name, person2.age);
// 8
function fsum(...item){
    return item.reduce((sum, item1) => sum + item1);
}
console.log(fsum(1,2,3));
// 9
function welcome(...name){
    return `welcome, ${name.join(", ")}, ...`;
}
console.log(welcome("nam","bao","trung"));
// 10
let book = {
    title: "hello",
    author: "okok",
    pages: 500,
    displayInfo(){
        console.log(`title: ${this.title}`)
        console.log(`author: ${this.author}`)
        console.log(`pages: ${this.pages}`)
    }
}
book.displayInfo();
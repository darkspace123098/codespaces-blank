// console.log(Array.from("Rockstar"));

const mysym = Symbol("key1")

const obj1 = {
    [mysym] : "My infor"
}
console.log(obj1[mysym]);

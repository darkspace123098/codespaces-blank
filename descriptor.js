//  const desc = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(desc);

const user = {
    username : "fish",
    password : "fi234",
    hacker: "irshadali"
}

Object.defineProperty(user,"password",{
    writable :false,
    enumerable : false
})

Object.defineProperty(user,"hacker",{
    writable :false,
    enumerable : false,
    configurable : false
})

const desc = Object.getOwnPropertyDescriptor(user,"password")
// console.log(desc);
user.password = "jackfish128"
console.log(user.password);

user.hacker = "sarnhfg"

console.log(user["hacker"]);

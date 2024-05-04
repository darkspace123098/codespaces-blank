function createUser(username,price)
{
    this.username = username
    this.price = price
}

createUser.prototype.increement = function () {
    this.price++
}
createUser.prototype.print = function(){
    console.log(this.username)
    console.log("price is :"+this.price);
}
createUser.prototype.upper = function (){
    console.log(this.username.toUpperCase()); 
}
createUser.prototype.trueLen = function (){
    console.log(this.username.trim(" ").length);
}

const chai = new createUser("light chai   ",30)
const poori = new createUser("Poori bhaji",70)


chai.increement()
chai.print()
chai.upper()
chai.trueLen()

poori.increement()
poori.print()

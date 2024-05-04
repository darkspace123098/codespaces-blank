function createUser(username,price)
{
    this.username = username
    this.price = price
}

createUser.prototype.increement = function () {
    this.price++
}
createUser.prototype.print = function(){
    console.log("price is :"+this.price);
}

const chai = new createUser("light chai",30)

// chai.increement()
// chai.increement()

chai.print()

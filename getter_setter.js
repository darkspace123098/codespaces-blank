class User {

    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return `user${this._password}firecode`
    }
    set password(value){
        this._password = value;
    }
}
function getpass(){
    const pass = document.getElementById("code").value;
const admin = new User("admin342@gmail.com",pass)
if(pass != "")
document.getElementById("info").innerText = admin.password
else
  alert("Input requred!!")
   
}

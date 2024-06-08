class User {

    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return `code${this._password}128`
    }
    set password(value){
        this._password = value;
    }
}


function getpass(){
    const pass = document.getElementById("code").value;
const admin = new User("admin342@gmail.com",pass)
if(pass != "")
    {
        document.getElementById("info").innerText = admin.password
        console.log(admin.password)
    }
else
  alert("Input requred!!")
   
}


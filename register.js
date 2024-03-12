console.log("Hello World");
let txtUsername = document.querySelector("#Username");
let txtPassword = document.querySelector("#Password");
let txtConfirmPassword = document.querySelector("#ConfirmPassword");
let btnRegister = document.querySelector("#Register");

btnRegister.onclick = function () 
{
    register(txtUsername.value, txtPassword.value, txtConfirmPassword.value);

Register.onclick = function () 
{
    register(txtUsername.value, txtPassword.value, txtConfirmPassword.value)
}

function register (username, password, confirmPassword) 
{
    console.log(username, password, confirmPassword);

    if (username.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") 
    {
        console.log("Please don't leave it empty!");
        return;
    }
    if (password === confirmPassword)
    {
        console.log("Success!");
    } 
    else 
    {
        console.log("Password does not match!");
    }
}

    console.log(username, password, confirmPassword)
    if(password == confirmPassword)
    {
       return console.log("Success!")
    } 
    
    else if (password == "" || confirmPassword == "")
    {
        return console.log("Password field cannot be empty.")
    }

    else 
    {
      return console.log("Password does not match!")
    }
}
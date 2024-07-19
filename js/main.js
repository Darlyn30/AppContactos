document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Content Loaded successfully!");
});


//variables of content 

const content = {
    login : document.querySelector('.formLogin'),
    register : document.querySelector('.formRegister')
};

//"""" of btns ("" -> MEANS THE SAME OF THE PAST COMMENT)

const btns = {
    logForm : document.querySelector('#login'),
    RegisterForm : document.querySelector('#register'),
    //submit butttons
    btnLog : document.querySelector('#btnLogin'),
    btnRegister : document.querySelector('#btnRegister')
};

//"""" of inputs for login form

const loginInput = {
    username : document.querySelector('.txtUser'),
    password : document.querySelector('.txtPassword')
};

const registerInput = {
    txtMail : document.querySelector('.txtMail'),
    txtConfirmMail : document.querySelector('.txtConfirmMail'),
    txtUser : document.querySelector('.txtUserRegister'),
    txtPass : document.querySelector('#txtPasswordRegister'),
    txtConfirmPass : document.querySelector('#txtPasswordConfirm')
};



function menuRegister(){

    console.log("click registro");
    content.login.style.display = "none";
    content.register.style.display = "block";

    btns.RegisterForm.removeEventListener("click", menuRegister);
    btns.logForm.addEventListener("click", menuLog);
};

btns.RegisterForm.addEventListener("click", menuRegister);

function menuLog(){
    console.log("click log");
    content.register.style.display = "none";
    content.login.style.display = "block";



    
    btns.logForm.removeEventListener("click", menuLog);
    btns.RegisterForm.addEventListener("click", menuRegister);
};


const API_KEY = "https://localhost:7226/api/Cuentas";





btns.btnLog.addEventListener("click", () => {
        //we have to validate before to show the alert
    // this validation it will with API data
    let userV = loginInput.username.value;
    let passV = loginInput.password.value;
    console.log(userV);
    console.log(passV);

    fetch(API_KEY)
    .then(res => res.json())
    .then(data => {

        console.log(data[0].userName);
        //logic
        
        for(let i = 0; i < data.length; i++){
            user = data[i].userName;
            pass = data[i].pass;

            if(userV == user && passV == pass){
                swal({
                    title: "NICE JOB!",
                    text: `Welcome ${user}`,
                    icon: "success",
                })
                .then(res => {
                    window.location = "./subpages/dashboard.html";
                })
            } else if(userV == "" || passV == ""){
                swal({
                    title: "ERROR!",
                    text: "there can be no empty fields \n Or we can't find your account \n Or create One",
                    icon: "warning",
                })
            }
        }
        console.log(data);
    })
})

btns.btnRegister.addEventListener("click", () => {
    let Mail = registerInput.txtMail.value;
    let confirmMail = registerInput.txtConfirmMail.value;
    let user = registerInput.txtUser.value;
    let Pass = registerInput.txtPass.value;
    let confirmPass = registerInput.txtConfirmPass.value;


    const data = {
        "mail" : Mail,
        "userName" : user,
        "pass" : Pass,
    }

    fetch(API_KEY, {
        method: "POST",
        headers : {
           'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    })
    //.then(res => res.json())
    .then(data => {
        
        //we have to validate if we have empty inputs}
        
        console.log("success", data);
        swal({
            title: "Your account have been created!",
            text: `now, please login`,
            icon: "success",
        })
        .then(res => {
            window.location = "/index.html";
        })
    });

});

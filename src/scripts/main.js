const landingPageDOM = require("./login/loginDOM");
const manageUserData = require("./DataManager");
const registerNewUser = require("./login/newUserDOM")
const saveNewUser = require("./login/saveNewUser")

console.log(manageUserData.getData.getUsers());

console.log(landingPageDOM());


$("#login-div").on("click",  (event) => {
    if (event.target.id === "register-user-button") {
        $("#login-div").html(registerNewUser)
    };
    if (event.target.id === "registerUserButton") {
        saveNewUser()
        $("#login-div").html(landingPageDOM)
    };
    if(event.target.id === "login-button") {
        let loginEmail = $("#login-email").val()
        manageUserData.getData.getUsers(loginEmail)
        .then((result) => {
            let stringifiedUserObject = JSON.stringify(result);
            sessionStorage.setItem("userInfo", stringifiedUserObject);
        })
      
    }
    
})

const landingPageDOM = require("./login/loginDOM");
const manageUserData = require("./DataManager");
const createTask = require("./task/taskDOM");
const registerNewUser = require("./login/newUserDOM")
const saveNewUser = require("./login/saveNewUser")

console.log(manageUserData.getData.getUsers());

console.log(landingPageDOM());


$("#login-div").on("click", (event) => {
    if (event.target.id === "register-user-button") {
        $("#login-div").html(registerNewUser)
    };
    if (event.target.id === "registerUserButton") {
        let registerEmail = $("#register-email").val()
        let registerUsername = $("#register-username").val()

        manageUserData.getData.getUsers()
            .then((result) => {
                let user = result.find(result => {
                    return registerEmail === result.email || registerUsername === result.username 
                    })
                    if (user) {
                        alert("You suck")
                    } else {
                        saveNewUser()
                        $("#login-div").html(landingPageDOM)
                        alert("You've successfully registered. Please log in")
                    }
                })
            
        }
    if (event.target.id === "login-button") {
        manageUserData.getData.getUsers(loginEmail)
            .then((result) => {
                let stringifiedUserObject = JSON.stringify(result);
                sessionStorage.setItem("userInfo", stringifiedUserObject);
            })

    }

})

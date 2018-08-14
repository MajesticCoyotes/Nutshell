const landingPageDOM = require("./login/loginDOM");
const manageUserData = require("./DataManager");
const createTask = require("./task/taskDOM");
const registerNewUser = require("./login/newUserDOM")
const saveNewUser = require("./login/saveNewUser")

console.log(manageUserData.getData.getUsers());

console.log(landingPageDOM());
createTask();


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
        let loginEmail = $("#login-email").val()
        manageUserData.getData.getUserEmails(loginEmail)
            .then((result) => {
                let stringifiedUserObject = JSON.stringify(result);
                sessionStorage.setItem("userInfo", stringifiedUserObject);
            })

            
            manageUserData.getData.getUsers()
            .then((result) => {
                let email = $("#login-email").val()
                let username = $("#login-name").val()

                let user = result.find(result => {
                    console.log(result.username)
                    console.log(result.email)
                    return email === result.email && username === result.username 
                    })
                    if (!user) {
                        alert("Username does not exist")
                    } else {
                        $("#login-div").remove()
                    }
                })
    }
})

const landingPageDOM = require("./login/loginDOM");
const manageUserData = require("./DataManager");
const registerNewUser = require("./login/registerNewUserDOM")
const registerVerify = require("./login/registerVerify")
const loadArticleSection = require("./article/loadArticleSection")

manageUserData.getData.getUsers()

//Loads login form as soon as you land on the page
landingPageDOM()

$("#login-div").on("click", (event) => {
    //If a user clicks on the register new user button, they go to the register new account screen
    if (event.target.id === "register-user-button") {
        $("#login-div").html(registerNewUser)
    };

    //If a user tries to register a new account, it will register their name and email address if they haven't been used yet
    if (event.target.id === "registerUserButton") {
        manageUserData.getData.getUsers()
            .then((result) => registerVerify(result))
    };

    if (event.target.id === "login-button") {
        manageUserData.getData.getUsers()
            .then((result) => {
                let user = result.find(result => {
                    //Checks to see if the info entered is in the database
                    return $("#login-email").val() === result.email && $("#login-name").val() === result.username
                })
                if (!user) {
                    alert("Username does not exist")
                } else {
                    //Loads all content into the article div
                    loadArticleSection();
                    //Hides the login form
                    $("#login-div").html("");
                }
            })
    };
});
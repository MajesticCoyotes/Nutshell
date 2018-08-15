const landingPageDOM = require("./login/loginDOM");
const manageUserData = require("./DataManager");
const registerNewUser = require("./login/newUserDOM")
const saveNewUser = require("./login/saveNewUser")
const renderArticle = require("./article/renderArticle")
const loadUserFromSS = require("./loadUserFromSS")
const logout = require("./logout")

manageUserData.getData.getUsers()

landingPageDOM()

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
                    alert("Username and email address are already taken")
                } else {
                    saveNewUser()
                    $("#login-div").html(landingPageDOM)
                    alert("You've successfully registered. Please log in")
                }
            })
    }

    let loginEmail = $("#login-email").val()
    if (event.target.id === "login-button") {
        manageUserData.getData.getUsers()
            .then((result) => {
                let email = $("#login-email").val()
                let username = $("#login-name").val()

                let user = result.find(result => {
                    return email === result.email && username === result.username
                })
                if (!user) {
                    alert("Username does not exist")
                } else {
                    $("#login-div").html("");
                    
                    manageUserData.getData.getUserEmails(loginEmail)
                        .then((result) => {
                            let stringifiedUserObject = JSON.stringify(result);
                            sessionStorage.setItem("userInfo", stringifiedUserObject);
                        }).then(() => renderArticle(loadUserFromSS.loadUserIDFromSS()))
                        .then(() => logout())
                        .then(() => {
                            $("#articleList").on("click", (event) => {
                                if (event.target.classList.contains("deleteArticleButton")) {
                                    const id = parseInt(event.target.id.split("--")[1])
                                    manageUserData.deleteData.deleteArticle(id)
                                        .then(() => event.target.parentNode.remove())
                                } else if (event.target.classList.contains("deleteArticleIcon")) {
                                    const id = parseInt(event.target.id.split("--")[1])
                                    manageUserData.deleteData.deleteArticle(id)
                                        .then(() => event.target.parentNode.parentNode.remove())
                                }
                            })
                        })
                }
            })


    }
});






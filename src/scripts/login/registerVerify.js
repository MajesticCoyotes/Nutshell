// Author: Jonathan Edwards
// Purpose: Gets articles from API and displays them on the page

const saveNewUser = require("./saveNewUser")
const landingPageDOM = require("./loginDOM");


let loginVerify = (result) => {
    let user = result.find(result => {
        let registerEmail = $("#register-email").val()
        let registerUsername = $("#register-username").val()
        return registerEmail === result.email || registerUsername === result.username
    })

    if (user) {
        alert("Username and email address are already taken")
    } else {
        saveNewUser()
        alert("You've successfully registered. Please log in")
        $("#login-div").html(landingPageDOM)
    }
}

module.exports = loginVerify
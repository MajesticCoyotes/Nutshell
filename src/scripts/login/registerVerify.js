// Author: Jonathan Edwards
// Purpose: Gets articles from API and displays them on the page

const saveNewUser = require("./saveNewUser")
const landingPageDOM = require("./loginDOM");


let registerVerify = (result) => {    
    let registerEmail = $("#register-email").val()
    let registerUsername = $("#register-username").val()
    let registerUser = result.filter(result => {
        return registerEmail === result.email || registerUsername === result.username
    })
    if (registerEmail === "" || registerUsername === "") {
        alert("Please evnter a valid user name and email")
    } else if (registerUser.length > 0) {
        alert("Username and email address are already taken")
    } else {
        saveNewUser()
        alert("You've successfully registered. Please log in")
        $("#login-div").html(landingPageDOM)
    }
}

module.exports = registerVerify
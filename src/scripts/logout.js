//Author: Jonathan Edwards
//Purpose: Makes a logout button so users can logout of their account

let landingPageDOM = require("./login/loginDOM")
const loadUserFromSS = require("./loadUserFromSS")

let logout = () => {
    document.querySelector("#logout").innerHTML = `<button id=\"logoutButton\" class=\"btn btn-warning\">Logout ${loadUserFromSS.loadUserNameFromSS()}</button>`

    document.querySelector("#logoutButton").addEventListener("click", () => {
        let stringifiedUserObject = JSON.stringify();
        sessionStorage.setItem("userInfo", stringifiedUserObject);
        landingPageDOM();
        $("#article-div").html("")
        $("#logout").html("")
    })
}

module.exports = logout
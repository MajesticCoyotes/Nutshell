//Author: Jonathan Edwards
//Purpose: Makes a logout button so users can logout of their account

let landingPageDOM = require("./login/loginDOM")
const loadUserFromSS = require("./loadUserFromSS")

let renderLogout = () => {
    document.querySelector("#logout").innerHTML = `
    <div class="logout-header">
    <p>Welcome to Nutshell, ${loadUserFromSS.loadUserNameFromSS()}</p>
    <button id=\"logoutButton\" class=\"btn btn-outline-light\">Logout</button>
    </div
    `

    document.querySelector("#logoutButton").addEventListener("click", () => {
        let stringifiedUserObject = JSON.stringify();
        sessionStorage.setItem("userInfo", stringifiedUserObject);
        landingPageDOM();
        $("#article-div").html("")
        $("#tast-div").html("")
        $("#event-div").html("")
        $("#logout").html("")
    })
}

module.exports = renderLogout
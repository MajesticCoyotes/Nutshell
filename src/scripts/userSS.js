//Author: Jonathan Edwards
//Purpose: Getting the user ID from Session Storage

const manageUserData = require("./DataManager");


const setUserInSS = () => {
    return manageUserData.getData.getUserEmails($("#login-email").val())
        .then((result) => {
            let stringifiedUserObject = JSON.stringify(result);
            sessionStorage.setItem("userInfo", stringifiedUserObject)
})
}

const loadUserIDFromSS = () => {
    let stringifiedUser = sessionStorage.getItem("userInfo");
    let parsedUser = JSON.parse(stringifiedUser);
    return parsedUser[0].id
 }

 const loadUserNameFromSS = () => {
    let stringifiedUser = sessionStorage.getItem("userInfo");
    let parsedUser = JSON.parse(stringifiedUser);
    return parsedUser[0].username
 }



 module.exports = { setUserInSS, loadUserIDFromSS, loadUserNameFromSS }

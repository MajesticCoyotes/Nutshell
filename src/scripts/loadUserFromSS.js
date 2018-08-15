//Author: Jonathan Edwards
//Purpose: Getting the user ID from Session Storage

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


 module.exports = { loadUserIDFromSS, loadUserNameFromSS }

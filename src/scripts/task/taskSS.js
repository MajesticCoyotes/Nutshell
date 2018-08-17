
const loadUserIDFromSS = () => {
    let stringifiedUser = sessionStorage.getItem("userInfo");
    let parsedUser = JSON.parse(stringifiedUser);
    return parsedUser[0].id
 }

 module.exports = loadUserIDFromSS;
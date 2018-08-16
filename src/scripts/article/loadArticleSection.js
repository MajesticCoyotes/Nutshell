const manageUserData = require("../DataManager");
const renderArticleList = require("./renderArticleList")
const loadUserFromSS = require("../loadUserFromSS")
const renderLogout = require("../renderLogout")
const articleDeleteEvents = require("./deleteArticles")

const loadArticles = () => {
    manageUserData.getData.getUserEmails($("#login-email").val())
        .then((result) => {
            let stringifiedUserObject = JSON.stringify(result);
            sessionStorage.setItem("userInfo", stringifiedUserObject);
        }).then(() => renderArticleList(loadUserFromSS.loadUserIDFromSS()))
        .then(() => renderLogout())
        .then(() => articleDeleteEvents())
}

module.exports = loadArticles
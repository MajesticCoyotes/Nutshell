const manageUserData = require("../DataManager");
const renderArticleList = require("./renderArticleList")
const loadUserFromSS = require("../userSS")
const renderLogout = require("../renderLogout")
const articleDeleteEvents = require("./deleteArticles")

const loadArticles = () => {
    renderArticleList(loadUserFromSS.loadUserIDFromSS())
    renderLogout()
    articleDeleteEvents()
}

module.exports = loadArticles
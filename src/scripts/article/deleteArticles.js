//Author: Jonathan Edwards
//Purpose: Attaches delete event handlers to each article

const manageUserData = require("../DataManager");

let articleDeleteEvents = () => {
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
}

module.exports = articleDeleteEvents
//Author: Jonathan Edwards
//Purpose: Functionality to get info from article form and save it to API

const saveNewArticle = () => {
    let newArticle = {
        title: $("#article-title").val(),
        synopsis: $("#article-synopsis").val(),
        url: $("#article-url").val()
    }

    return newArticle
}

module.exports = saveNewArticle
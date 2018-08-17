//Author: Jonathan Edwards
//Purpose: HTML Representation of the Articles

const newArticleDOM = (article) => {
    return ` <div id="article--${article.id}" class="article border my-3 rounded bg-white">
        <button type="button" id="deleteArticle--${article.id}" class="deleteArticleButton btn"><span class="fas fa-trash-alt deleteArticleIcon" id="deleteArticle--${article.id}"></span></button>
        <h4>Title: ${article.title}</h4>
        <p>Synopsis: ${article.synopsis}</p>
        <p>URL: <a href="http://${article.url}">${article.url}</a></p>
        <hr>
        <p class="articleDate"><em>${article.date}</em></p>
    </div>
    `
}

module.exports = newArticleDOM
// Author: Jonathan Edwards
// Purpose: Gets articles from API and displays them on the page

const articleDOM = require("./articleDOM")
const dataManager = require("../DataManager")
const buildArticleForm = require("./articleFormModal")
const saveNewArticle = require("./saveNewArticle")
const loadUserFromSS = require("../loadUserFromSS")

const articleDiv = document.querySelector("#article-div")
const articleHeader = document.createElement("div")
articleHeader.id = "articleHeader"

const articleList = document.createElement("div")
articleList.id = "articleList"


const renderArticles = (userID) => {
    
    articleDiv.appendChild(articleHeader)
    articleDiv.appendChild(articleList)
    document.querySelector("#articleList").innerHTML = ""

    document.querySelector("#articleHeader").innerHTML = buildArticleForm

    dataManager.getData.getArticles(userID)
    .then((articles) => {
        articles.forEach(article => {
                document.querySelector("#articleList").innerHTML += articleDOM(article)
            });
        })

    document.querySelector("#saveArticle").addEventListener("click", () => {
        let newArticle = {
            title: $("#article-title").val(),
            synopsis: $("#article-synopsis").val(),
            url: $("#article-url").val(),
            date: Date(Date.now()),
            userId: loadUserFromSS.loadUserIDFromSS()
        }

        dataManager.saveData.saveArticle(newArticle)
            .then(() => {
                $("#article-title").val("")
                $("#article-synopsis").val("")
                $("#article-url").val("")
            })
            .then(() => document.querySelector("#articleList").innerHTML = "")
            .then(() => {
                dataManager.getData.getArticles(userID)
                    .then((articles) => {
                        articles.forEach(article => {
                            document.querySelector("#articleList").innerHTML += articleDOM(article)
                        })
                    })
            })
    })
}

module.exports = renderArticles
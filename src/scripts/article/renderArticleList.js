// Author: Jonathan Edwards
// Purpose: Gets articles from API and displays them on the page

const articleDOM = require("./articleDOM")
const dataManager = require("../DataManager")
const buildArticleForm = require("./articleFormModal")
const saveNewArticle = require("./saveNewArticle")
const loadUserFromSS = require("../userSS")




const renderArticles = (userID) => {
    const articleDiv = document.querySelector("#article-div")
    const articleHeader = document.createElement("div")
    articleHeader.id = "articleHeader"
    
    const articleList = document.createElement("div")
    articleList.id = "articleList"
    articleList.classList.add("bg-white")
    
    articleDiv.appendChild(articleHeader)
    articleDiv.appendChild(articleList)
    document.querySelector("#articleList").innerHTML = ""

    document.querySelector("#articleHeader").innerHTML = buildArticleForm

    //Gets all articles stored in API and displays them on the page
    dataManager.getData.getArticles(userID)
    .then((articles) => {
        articles.forEach(article => {
                document.querySelector("#articleList").innerHTML += articleDOM(article)
            });
        })

    //Click event listener to save new articles entered in the form to the API
    document.querySelector("#saveArticle").addEventListener("click", () => {
        //Creates a new object from the input fields
        let newArticle = {
            title: $("#article-title").val(),
            synopsis: $("#article-synopsis").val(),
            url: $("#article-url").val(),
            date: Date(Date.now()),
            userId: loadUserFromSS.loadUserIDFromSS()
        }

        //Stores the newly created object into the API and resets the form fields
        dataManager.saveData.saveArticle(newArticle)
            .then(() => {
                $("#article-title").val("")
                $("#article-synopsis").val("")
                $("#article-url").val("")
            })
            //Clears the article list
            .then(() => document.querySelector("#articleList").innerHTML = "")
            //Rerenders the list with the newly added article
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
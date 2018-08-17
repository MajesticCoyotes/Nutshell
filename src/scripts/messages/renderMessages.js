//Author: Jonathan Edwards
//Purpose: Get all messages from storage and display them on the page

const dataManager = require("../DataManager")
const messageDOM = require("./messageDOM")
const newMessageForm = require("./newMessageForm")
const userSS = require("../userSS")
const deleteMessages = require("./deleteMessages")
const editMessageButton = require("./editMessageButtons")



const renderMessages = () => {
    const messagesDiv = document.querySelector("#messages-div")
    
    const messagesHeader = document.createElement("div")
    messagesHeader.id = "messagesHeader"
    
    const mList = document.createElement("div")
    mList.id = "messagesList"
    
    const messagesForm = document.createElement("div")
    messagesForm.id = "messagesForm"
    
    messagesDiv.appendChild(messagesHeader);
    messagesDiv.appendChild(mList);
    messagesDiv.appendChild(messagesForm);

    

    document.querySelector("#messagesHeader").innerHTML = "<h3>Message Board</h3>"

    document.querySelector("#messagesList").innerHTML = ""

    document.querySelector("#messagesForm").innerHTML = newMessageForm()

    //Gets all messages stored in API and displays them on the page
    dataManager.getData.getMessages()
    .then((messages) => {
        document.querySelector("#messagesList").innerHTML = ""
        messages.forEach(message => {
                document.querySelector("#messagesList").innerHTML += messageDOM(message)
            })
        })
        .then(() => {
            deleteMessages()
            editMessageButton()
        }) 

    //Click event listener to save new messages entered in the form to the API
    document.querySelector("#sendNewMessage").addEventListener("click", () => {
        //Creates a new object from the input fields
        let newMessage = {
            message: $("#newMessageContent").val(),
            date: Date(Date.now()),
            username: userSS.loadUserNameFromSS()
        }

        //Stores the newly created object into the API and resets the form fields
        dataManager.saveData.saveMessages(newMessage)
            .then(() => {
                $("#newMessageContent").val("")
            })
            //Rerenders the list with the newly added message
            .then(() => {
                //Clears the message list
                document.querySelector("#messagesList").innerHTML = ""
                dataManager.getData.getMessages()
                    .then((messages) => {
                        messages.forEach(m => {
                            document.querySelector("#messagesList").innerHTML += messageDOM(m)
                        })
                    })
            })
            .then(() => deleteMessages()) 
            .then(() =>  editMessageButton())
    })
}

module.exports = renderMessages
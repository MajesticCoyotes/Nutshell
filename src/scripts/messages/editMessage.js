// Author: Jonathan Edwards
// Purpose: Makes it possible for users to edit messages

const DataManager = require("../DataManager")
const userSS = require("../userSS")
const deleteMessages = require("./deleteMessages")
const messageDOM = require("./messageDOM")
const buildMessageList = require("./buildMessageList")



const saveMessageChanges = (messageId) => {
    let editedMessage = {
        message: $("#edited-message").val(),
        username: userSS.loadUserNameFromSS()
    }

    DataManager.editData.editMessage(messageId, editedMessage)
        //Rerenders the list with the newly added message
        .then(() => buildMessageList())
}

const editMessage = (editId) => {
    let originalMessage = document.querySelector(`#messagecontent--${editId}`).textContent
    document.querySelector(`#message--${editId}`).innerHTML =
        `<input id="edited-message" type="text" value="${originalMessage}">
       <button id="save-edited-message--${editId}">Save Changes</button>`
}

module.exports = { editMessage, saveMessageChanges };
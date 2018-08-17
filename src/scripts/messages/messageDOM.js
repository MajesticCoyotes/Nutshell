//Author: Jonathan Edwards
//Purpose: HTML representation of the chat messages

let messagesDOM = (message) => {
    return `
    <div id="message--${message.id}" class="message">
    <p> <span class="messageSender">${message.username}:</span><span id="messagecontent--${message.id}"> ${message.message}</span></p>
    <hr>
    <i class="far fa-edit editMessageIcon" id="editMessage--${message.id}"></i><i class="fas fa-trash-alt deleteMessageIcon" id="deleteMessage--${message.id}"></i>
    </div>
    `
}

module.exports = messagesDOM
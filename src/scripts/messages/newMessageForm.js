//Author: Jonathan Edwards
//Purpose: HTML representation of the new message form

let messageForm = () => {
    return `
    <fieldset class="messageForm">
    <label for="newMessage">New Message</label>
    <input type="text" id="newMessageContent">
    <button id ="sendNewMessage">Send</button>
    </fieldset>
    `
}

module.exports = messageForm
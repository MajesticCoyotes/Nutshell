//Author: Jonathan Edwards
//Purpose: Attaches delete event handlers to each message

const manageUserData = require("../DataManager");

let deleteMessages = () => {
    $("#messagesList").on("click", (event) => {
        if (event.target.classList.contains("deleteMessageIcon")) {
            const id = parseInt(event.target.id.split("--")[1])
            manageUserData.deleteData.deleteMessage(id)
                .then(() => event.target.parentNode.remove())
        } else if (event.target.classList.contains("deleteMessageIcon")) {
            const id = parseInt(event.target.id.split("--")[1])
            manageUserData.deleteData.deleteMessage(id)
                .then(() => event.target.parentNode.remove())
        }
    })
}

module.exports = deleteMessages
const editM = require("./editMessage")

const editMessageButton = () => {
    $("#messagesList").on("click", (event) => {
        if (event.target.id.includes("editMessage")) {
            let editMessageId = event.target.id.split("--")[1]
            editM.editMessage(editMessageId)
        };
        if (event.target.id.includes("save-edited-message")) {
            let newMessageId = event.target.id.split("--")[1]
            editM.saveMessageChanges(newMessageId)
        };
    })
}

module.exports = editMessageButton
const dataManager = require("../DataManager")
const messageDOM = require("./messageDOM")



const buildMessageList = () => {
      //Clears the message list
      document.querySelector("#messagesList").innerHTML = ""
      dataManager.getData.getMessages()
          .then((messages) => {
              messages.forEach(m => {
                  document.querySelector("#messagesList").innerHTML += messageDOM(m)
              })
          })
        //   .then(() => deleteMessages()) 
        //   .then(() =>  editMessageButton())
}

module.exports = buildMessageList
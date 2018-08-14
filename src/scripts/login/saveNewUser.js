//Author: Jonathan Edwards 
//Purpose: Regiesters new user 

const dataManager = require("../DataManager")

const registerNewUser = require("./newUserDOM")

const saveNewUser = () => {
    let newUser = {
    username: $("#register-username").val(),
    email: $("#register-email").val(),
    photo: $("#register-photo").val()
    }
    dataManager.saveData.saveUser(newUser)
}

module.exports = saveNewUser
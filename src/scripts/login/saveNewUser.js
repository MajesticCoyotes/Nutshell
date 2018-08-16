//Author: Jonathan Edwards 
//Purpose: Registers new user and saves their info in the API

const dataManager = require("../DataManager")


const saveNewUser = () => {
    let newUser = {
    username: $("#register-username").val(),
    email: $("#register-email").val(),
    photo: $("#register-photo").val()
    }
    dataManager.saveData.saveUser(newUser)
}

module.exports = saveNewUser
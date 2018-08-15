const landingPageDOM = require("./login/loginDOM");
const manageUserData = require("./DataManager");
const registerNewUser = require("./login/newUserDOM")
const saveNewUser = require("./login/saveNewUser")
const showEventStuff = require("./event/eventDOM");
const clearEventForm = require("./event/renderEvents");
const editEventModule = require("./event/editEvent")

console.log(manageUserData.getData.getUsers());

console.log(landingPageDOM());



// login and register eventlisteners via madi, jonathan, and kayla
$("#login-div").on("click", (event) => {
    if (event.target.id === "register-user-button") {
        $("#login-div").html(registerNewUser)
    };
    if (event.target.id === "registerUserButton") {
        let registerEmail = $("#register-email").val()
        let registerUsername = $("#register-username").val()

        manageUserData.getData.getUsers()
            .then((result) => {
                let user = result.find(result => {
                    return registerEmail === result.email || registerUsername === result.username 
                    })

                    if (user) {
                        alert("You suck")
                    } else {
                        saveNewUser()
                        $("#login-div").html(landingPageDOM)
                        alert("You've successfully registered. Please log in")
                    }
                })
        }
    if (event.target.id === "login-button") {
        let loginEmail = $("#login-email").val()

        manageUserData.getData.getUserEmails(loginEmail)
            .then((result) => {
                let stringifiedUserObject = JSON.stringify(result);
                sessionStorage.setItem("userInfo", stringifiedUserObject);
            })

            
            manageUserData.getData.getUsers()
            .then((result) => {
                let email = $("#login-email").val()
                let username = $("#login-name").val()

                let user = result.find(result => {
                    console.log(result.username)
                    console.log(result.email)
                    return email === result.email && username === result.username 
                    })
                    if (!user) {
                        alert("Username does not exist")
                    } else {
                        $("#login-div").remove()
                        // added by kayla to call events on login
                        showEventStuff.showEventForm();
                        let user = JSON.parse(sessionStorage.getItem("userInfo"));
                        let userId = user[0].id;
                        manageUserData.getData.getEvents(userId)
                        .then(events => {
                            events.forEach(event => {
                                $("#event-list").append(showEventStuff.eventListDom(event))
                            })
                        })
                        

                    }
                })
    }
})

// author: kayla 
// event div eventlistners 

$("#event-div").on("click", (event) => {
    if(event.target.id === "save-event-button"){
        let user = JSON.parse(sessionStorage.getItem("userInfo"));
        let userId = user[0].id;
        // console.log(userId)
        let newEvent = {
            userId: userId,
            title: $("#event-name").val(),
            date: $("#event-date").val(),
            location: $("#event-location").val()
        }
        clearEventForm()
        manageUserData.saveData.saveEvent(newEvent)
        .then(() => {
            $("#event-list").html("")
            manageUserData.getData.getEvents(userId)
            .then(events => {
                events.forEach(event => {
                    $("#event-list").append(showEventStuff.eventListDom(event))
                })
            })
        })
        showEventStuff.eventListDom(newEvent);
    }
    if(event.target.id.includes("edit-button")){
        let editId = event.target.id.split("--")[1]
        console.log("testing", editId)
        editEventModule.editEvent(editId);
    }
    if(event.target.id.includes("save-edited-event")){
        let saveId = event.target.id.split("--")[1]
        editEventModule.saveEventChanges(saveId)
    }
})
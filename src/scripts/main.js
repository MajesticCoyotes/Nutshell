const landingPageDOM = require("./login/loginDOM");
const manageUserData = require("./DataManager");
const saveNewUser = require("./login/saveNewUser")
const showEventStuff = require("./event/eventDOM");
const clearEventForm = require("./event/renderEvents");
const editEventModule = require("./event/editEvent")
const registerNewUser = require("./login/registerNewUserDOM")
const registerVerify = require("./login/registerVerify")
const loadArticleSection = require("./article/loadArticleSection")
const userSS = require("./userSS");
const renderMessages = require("./messages/renderMessages")

manageUserData.getData.getUsers()

//Loads login form as soon as you land on the page
landingPageDOM()


// login and register eventlisteners via madi, jonathan, and kayla
$("#login-div").on("click", (event) => {
    //If a user clicks on the register new user button, they go to the register new account screen
    if (event.target.id === "register-user-button") {
        $("#login-div").html(registerNewUser)
    };

    //If a user tries to register a new account, it will register their name and email address if they haven't been used yet
    if (event.target.id === "registerUserButton") {
        manageUserData.getData.getUsers()
            .then((result) => registerVerify(result))
    };

    if (event.target.id === "login-button") {
        manageUserData.getData.getUsers()
            .then((result) => {
                let user = result.find(result => {

                    //Checks to see if the info entered is in the database
                    return $("#login-email").val() === result.email && $("#login-name").val() === result.username
                })
                if (!user) {
                    alert("Username does not exist")
                } else {
                    //Loads all content into the article div
                    userSS.setUserInSS()
                        .then(() => loadArticleSection())
                        .then(() => {
                            showEventStuff.showEventForm()
                            // let user = JSON.parse(sessionStorage.getItem("userInfo"));
                            // let userId = user[0].id;
                            manageUserData.getData.getEvents(userSS.loadUserIDFromSS())
                                .then(events => {
                                    events.forEach(event => {
                                        $("#event-list").append(showEventStuff.eventListDom(event))
                                    })
                                })
                        })
                        .then(() => {
                            renderMessages()
                            //Hides the login form
                            $("#login-div").html("");
                        })
                }
            })
    };
});

// author: kayla 
// event div eventlistners 

$("#event-div").on("click", (event) => {
    if (event.target.id === "save-event-button") {
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
    if (event.target.id.includes("edit-button")) {
        let editId = event.target.id.split("--")[1]
        console.log("testing", editId)
        editEventModule.editEvent(editId);

    }
    if (event.target.id.includes("save-edited-event")) {
        let user = JSON.parse(sessionStorage.getItem("userInfo"));
        let userId = user[0].id;
        let saveEventId = event.target.id.split("--")[1]
        manageUserData.editData.editEvent(saveEventId, editEventModule.saveEventChanges())
            .then(() => {
                document.querySelector("#event-list").innerHTML = "";
                manageUserData.getData.getEvents(userId)
                    .then(updatedEvents => {
                        updatedEvents.forEach(event => {
                            document.querySelector("#event-list").innerHTML +=
                                showEventStuff.eventListDom(event)
                        })
                    })
            })

    }
})
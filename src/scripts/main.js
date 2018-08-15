const landingPageDOM = require("./login/loginDOM");
const manageUserData = require("./DataManager");
const registerNewUser = require("./login/newUserDOM")
const saveNewUser = require("./login/saveNewUser")
const showEventStuff = require("./event/eventDOM");
const clearEventForm = require("./event/renderEvents");
const editEventModule = require("./event/editEvent")
const renderArticle = require("./article/renderArticle")
const loadUserFromSS = require("./loadUserFromSS")
const logout = require("./logout")

manageUserData.getData.getUsers()

landingPageDOM()


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
                    alert("Username and email address are already taken")
                } else {
                    saveNewUser()
                    $("#login-div").html(landingPageDOM)
                    alert("You've successfully registered. Please log in")
                }
            })
        }
            // .then(() => {
            // manageUserData.getData.getUsers()
 

    let loginEmail = $("#login-email").val()
    if (event.target.id === "login-button") {
        console.log(event)
        manageUserData.getData.getUsers()
            .then((result) => {
                let email = $("#login-email").val()
                let username = $("#login-name").val()

                let user = result.find(result => {
                    return email === result.email && username === result.username
                })
                if (!user) {
                    alert("Username does not exist")
                } else {
                    $("#login-div").html("");
                    
                    manageUserData.getData.getUserEmails(loginEmail)
                        .then((result) => {
                            let stringifiedUserObject = JSON.stringify(result);
                            sessionStorage.setItem("userInfo", stringifiedUserObject);
                        })
                        .then(() => renderArticle(loadUserFromSS.loadUserIDFromSS()))
                        .then(() => logout())
                        .then(() => {
                            $("#articleList").on("click", (event) => {
                                if (event.target.classList.contains("deleteArticleButton")) {
                                    const id = parseInt(event.target.id.split("--")[1])
                                    manageUserData.deleteData.deleteArticle(id)
                                        .then(() => event.target.parentNode.remove())
                                } else if (event.target.classList.contains("deleteArticleIcon")) {
                                    const id = parseInt(event.target.id.split("--")[1])
                                    manageUserData.deleteData.deleteArticle(id)
                                        .then(() => event.target.parentNode.parentNode.remove())
                                }
                            })
                        })
//                          // added by kayla to call events on login
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
        // })
    
    
});
       






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
        let user = JSON.parse(sessionStorage.getItem("userInfo"));
        let userId = user[0].id;
        let saveEventId = event.target.id.split("--")[1]
        manageUserData.editData.editEvent(saveEventId, editEventModule.saveEventChanges())
        .then(() => {
            document.querySelector("#event-list").innerHTML = "";
            manageUserData.getData.getEvents(userId)
            .then(updatedEvents => {
                // console.log(updatedEvents)
                updatedEvents.forEach(event => {
                    document.querySelector("#event-list").innerHTML +=
                    showEventStuff.eventListDom(event)
                })
            })
        })
    }
});

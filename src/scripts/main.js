const landingPageDOM = require("./login/loginDOM");
const manageUserData = require("./DataManager");
const showEventStuff = require("./event/eventDOM");
const clearEventForm = require("./event/renderEvents");
const editEventModule = require("./event/editEvent")
const registerVerify = require("./login/registerVerify")
const loadArticleSection = require("./article/loadArticleSection")
const userSS = require("./userSS");
const appendContent = require("./appendDivs");
const renderMessages = require("./messages/renderMessages")
const renderTasks = require("./task/renderTasks");
const registerNewUser = require("./login/registerNewUserDOM");
const taskSS = require("./task/taskSS");

// manageUserData.getData.getUsers()

//Loads login form as soon as you land on the page
landingPageDOM();

/*
    Author: Madi
    +Added an event listener on the task div
*/
$("body").click((event)=>{
    /*
    IF THE USER CLICKED ON THE SAVE TASK BUTTON:
        1. if the event.target.id is "save-new-task-btn"
        2. create a new object to be placed inside of the API
        3. save the newly created object to the API
        4. clear the input fields
        5. clear the task-container that holds the tasks
        6. re-render the task-container
        7. and get the newly created task form the API to populate it with
    */

    // 1.
    if (event.target.id === "save-new-task-btn") {
        // 2.
        let newTask = {
            userId: taskSS(),
            title: $("#new-task-input").val(),
            date: $("#new-date-input").val(),
            checkedBox: false,
            completed: false
        }
        // 3.
        manageUserData.saveData.saveTask(newTask)
            .then(() => {
                // 4.
                $("#new-task-input").val("");
                $("#new-date-input").val("");
                // 5.
                $("#task-container").html("");
                // 6. 
                renderTasks.renderTaskDOM();
                // 7.
                renderTasks.getTasks(newTask.userId);
            })
    }

    /*
    IF THE USER CLICKED ON THE CHECKBOX:
        1. if the event.target.id INCLUDES the string "checkbox"
        2. getting the taskID of the target
        3. creating the new object to be placed inside of the API
        4. editing the checkedBox property inside of the task key
        5. clear the task-container that holds the tasks
        6. re-render the task-container
        7. and get the newly created task form the API to populate it with
        8. get the task from API
        9. if the task's checkbox is equal to true,
        10. remove the task element from the page
        11. delete task from API
    */

    // 1.
    if (event.target.id.includes("checkbox")) {
        const taskID = event.target.id.split("--")[1];
        console.log(event.target.id)
        renderTasks.deleteTask(taskID)
    }
        
        if (event.target.id.includes("yes-btn-modal")) {
            const getTaskID = event.target.id.split("--")[1];
            console.log(event.target.id);
            let checkboxChecked = {
                // 3.
                checkedBox: true,
                completed: true
            }
            // 4.
            manageUserData.editData.editCheckbox(getTaskID, checkboxChecked)
            .then(() => {
                // 5.
                $("#task-container").html("");
                // 6.
                renderTasks.renderTaskDOM();
                // 7.
                renderTasks.getTasks(taskSS());
            })
            // 8.
            manageUserData.getData.getTaskByID(getTaskID)
            .then((task) => {
                // 9.
                if (task.checkedBox === true) {
                    // 10.
                    $(`#created-task--${getTaskID}`).remove();
                }
            })
            // 11.
            // manageUserData.deleteData.deleteTask(getTaskID)
        } else {
            event.target.checked = false;
        }
        
        /*
        IF USER CLICKED ON THE EDIT TASK BUTTON:
        1. when the user clicks on the edit task button, it is creating the modal to take the user inputs from the task
        2. 
        */
       
       // 1.
       if (event.target.id.includes("edit-task-btn")) {
           const editTaskID = event.target.id.split("--")[1];
           const editTitle = $(`#user-created-task--${editTaskID}`).text();
        const editDate = $(`#user-created-date--${editTaskID}`).val();
        renderTasks.editCreatedTaskModal(editTaskID, editTitle, editDate);

    }

    // if user clicks on the "save changes" button
    if (event.target.id.includes("save-edited-task")) {
        // grab value of user input
        const newTaskID = event.target.id.split("--")[1];
        const newEditedTask = {
            userId: taskSS(),
            title: $("#edit-task-input").val(),
            date: $("#edit-date-input").val(),
            checkedBox: false
        }
        manageUserData.editData.editTask(newTaskID, newEditedTask)
            .then(() => {
                $("#task-container").html("");
                renderTasks.renderTaskDOM();
                renderTasks.getTasks(newEditedTask.userId);
            })
    }
})

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
                .then(() => {
                    //Hides the login form
                    $("#login-div").html("")
                    $("body").removeClass("bodyBackground")
                    $("body").addClass("loggedInBackground")
                    appendContent()
                    loadArticleSection()
                    renderMessages()
                    renderTasks.renderTaskDOM();
                    renderTasks.getTasks(taskSS());
                    showEventStuff.showEventForm()
                    manageUserData.getData.getEvents(userSS.loadUserIDFromSS())
                        .then(events => {
                            events.forEach(event => {
                                $("#event-list").append(showEventStuff.eventListDom(event))
                            })
                })        
            })
    };
});
}
})




// author: kayla reid
// event div eventlistners 

$("body").on("click", (event) => {
    if (event.target.id === "save-event-button") {
        let user = JSON.parse(sessionStorage.getItem("userInfo"));
        let userId = user[0].id;
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
    // adding delete button
    if (event.target.id.includes("delete-button")){
        let deleteId = event.target.id.split("--")[1]
        manageUserData.deleteData.deleteEvent(deleteId)
        .then(() =>{
            event.target.parentNode.parentNode.remove();
        })
    }
})

const storageChecker = () => {
    if (userSS.loadUserIDFromSS() === null){
        landingPageDOM()
    } else {
        userSS.loadUserIDFromSS()
                    $("#login-div").html("")
                    $("body").removeClass("bodyBackground")
                    $("body").addClass("loggedInBackground")
                    appendContent()
                    loadArticleSection()
                    renderMessages()
                    renderTasks.renderTaskDOM();
                    renderTasks.getTasks(taskSS());
                    showEventStuff.showEventForm()
                    manageUserData.getData.getEvents(userSS.loadUserIDFromSS())
                        .then(events => {
                            events.forEach(event => {
                                $("#event-list").append(showEventStuff.eventListDom(event))
                            })
                })        
    }
}
storageChecker();
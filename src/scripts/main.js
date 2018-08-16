const landingPageDOM = require("./login/loginDOM");
const manageUserData = require("./DataManager");
const renderTasks = require("./task/renderTasks");
const registerNewUser = require("./login/newUserDOM");
const saveNewUser = require("./login/saveNewUser");


landingPageDOM();

/*
    Author: Madi
    +Added an event listener on the task div
*/
$("#task-div").click((event)=>{
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
    if(event.target.id === "save-new-task-btn"){
        // 2.
        let newTask = {
            title: $("#new-task-input").val(),
            date: $("#new-date-input").val(),
            checkedBox: false
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
            renderTasks.getTasks();
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
    if(event.target.id.includes("checkbox")){
        const getTaskID = event.target.id.split("--")[1];
       // 2.
        let checkboxChecked = {
            // 3.
            checkedBox: true
        }
        // 4.
        manageUserData.editData.editCheckbox(getTaskID, checkboxChecked)
        .then(()=>{
            // 5.
                $("#task-container").html("");
                // 6.
                renderTasks.renderTaskDOM();
                // 7.
                renderTasks.getTasks();
        })
        // 8.
        manageUserData.getData.getTaskByID(getTaskID)
        .then((task) => {
            // 9.
            if(task.checkedBox === true){
                // 10.
                $(`#created-task--${getTaskID}`).remove();
            }
        })
        // 11.
        manageUserData.deleteData.deleteTask(getTaskID)
    }

    /*
    IF USER CLICKED ON THE EDIT TASK BUTTON:
        1. when the user clicks on the edit task button, it is creating the modal to take the user inputs from the task
        2. 
    */

   // 1.
    if(event.target.id.includes("edit-task-btn")){
        const editTaskID = event.target.id.split("--")[1];
        const editTitle = $(`#user-created-task--${editTaskID}`).text();
        const editDate = $(`#user-created-date--${editTaskID}`).val();
        renderTasks.editCreatedTaskModal(editTaskID, editTitle, editDate);
        
    }

    // if user clicks on the "save changes" button
    if(event.target.id.includes("save-edited-task")){
        // grab value of user input
        const newTaskID = event.target.id.split("--")[1];
        const newEditedTask = {
            title: $("#edit-task-input").val(),
            date: $("#edit-date-input").val(),
            checkedBox: false
        }
        manageUserData.editData.editTask(newTaskID, newEditedTask)
        .then(()=>{
            $("#task-container").html("");
            renderTasks.renderTaskDOM();
            renderTasks.getTasks();
        })
    }
})

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
                        renderTasks.renderTaskDOM();
                        renderTasks.getTasks();
                    }
                })
    }
})

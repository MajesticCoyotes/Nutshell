const landingPageDOM = require("./login/loginDOM");
const manageUserData = require("./DataManager");
const renderTasks = require("./task/renderTasks");
const registerNewUser = require("./login/newUserDOM");
const saveNewUser = require("./login/saveNewUser");


landingPageDOM();

$("#task-div").click((event)=>{
    /*
    IF THE USER CLICKED ON THE SAVE TASK BUTTON
    */

    // if the event.target.id is "save-new-task-btn"
    if(event.target.id === "save-new-task-btn"){
        // create a new object to be placed inside of the API
        let newTask = {
            title: $("#new-task-input").val(),
            date: $("#new-date-input").val(),
            checkedBox: false
        }
        // save the newly created object to the API
        manageUserData.saveData.saveTask(newTask)
        .then(() => {
            // clear the input fields
            $("#new-task-input").val("");
            $("#new-date-input").val("");
            // clear the task-container that holds the tasks
            $("#task-container").html("");
            // re-render the task-container 
            renderTasks.renderTaskDOM();
            // and get the newly created task form the API to populate it with
            renderTasks.getTasks();
        })
    }

    /*
    IF THE USER CLICKED ON THE CHECKBOX
    */

    // if the event.target.id INCLUDES the string "checkbox"
    if(event.target.id.includes("checkbox")){
        // getting the taskID of the target
        const getTaskID = event.target.id.split("--")[1];
        // creating the new object to be placed inside of the API
        let checkboxChecked = {
            checkedBox: true
        }
        // editing the checkedBox property inside of the task key
        manageUserData.editData.editCheckbox(getTaskID, checkboxChecked)
        .then(()=>{
                // clear the task-container that holds the tasks
                $("#task-container").html("");
                // re-render the task-container 
                renderTasks.renderTaskDOM();
                // and get the newly created task form the API to populate it with
                renderTasks.getTasks();
        })

        // get the task from API
        manageUserData.getData.getTaskByID(getTaskID)
        .then((task) => {
            // if the task's checkbox is equal to true,
            if(task.checkedBox === true){
                // remove the task element from the page
                $(`#created-task--${getTaskID}`).remove();
            }
        })
        // delete task from API
        manageUserData.deleteData.deleteTask(getTaskID)
    }

    /*
    IF USER CLICKED ON THE EDIT TASK BUTTON
    */
    if(event.target.id.includes("edit-task-btn")){
        const editTaskID = event.target.id.split("--")[1];
        console.log()
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

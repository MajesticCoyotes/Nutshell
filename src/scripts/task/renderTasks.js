/*
    Module Created By: Madi
    PURPOSE: Handles ALL html representations
*/

const manageUserData = require("../DataManager");
const editTaskModal = require("./editTaskModal");
const taskModal = require("./taskModal");
const taskDOM = require("./taskDOM");

/*
This object holds ALL of the html representations
*/
const renderTasks = Object.create(null, {
    renderTaskDOM: {
        value: () => {
            taskDOM();
        }

    },
    editCreatedTaskModal: {
        value: (editTaskID, editTitle, editDate) => {
            editTaskModal(editTaskID, editTitle, editDate);
        }

    },
    getTasks: {
        value: (userId) => {
            manageUserData.getData.getTasks(userId)
            .then((response) => {
                response.forEach(task => {
                    if(task.checkedBox === false){
                    taskModal(task.id, task.title, task.date);
                    }
                })
            })
        }
    }
})


module.exports = renderTasks;
const manageUserData = require("../DataManager");
const editTaskModal = require("./editTaskModal");
const taskModal = require("./taskModal");
const taskDOM = require("./taskDOM");

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
        value: () => {
            manageUserData.getData.getTasks(userId)
            .then((response) => {
                response.forEach(task => {
                    taskModal(task.id, task.title, task.date);
                })
            })
        }
    }
})


module.exports = renderTasks;
const manageUserData = require("../DataManager");
const taskModal = require("./taskModal");
const taskDOM = require("./taskDOM");

const renderTasks = Object.create(null, {
    renderTaskDOM: {
        value: () => {
            taskDOM();
        }

    },
    getTasks: {
        value: () => {
            manageUserData.getData.getTasks()
            .then((response) => {
                response.forEach(task => {
                    taskModal(task.id, task.title, task.date);
                    console.log(task.id);
                })
            })
        }
    }
})


module.exports = renderTasks;
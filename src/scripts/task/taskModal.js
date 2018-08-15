const taskDOM = require("./taskDOM");

const createNewTask = (taskID, createdTask, createdDate) => {
    const newTask = `
    <div id="created-task--${taskID}">
    
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <div id="created-task--${taskID}" class="input-group-text">
                    <input class="checkbox" id="checkbox--${taskID}"type="checkbox">
                    <p class="task-pTag ml-2 font-weight-bold">${createdTask}</p>
                    <p class="task-pTag ml-2">To be completed by: ${createdDate}</p>
                    <button id="edit-task-btn--${taskID}">Edit Task</button>
                </div>
            </div>
        </div>
    </div>
`
    $("#list-tasks-container").append(newTask);
}

module.exports = createNewTask;
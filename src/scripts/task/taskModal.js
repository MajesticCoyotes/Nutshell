const taskDOM = require("./taskDOM");

const createNewTask = (taskID, createdTask, createdDate) => {
    const newTask = `
    <div id="created-task--${taskID}" class="task-card w-100">
    
        <div class="card input-group mb-3 w-100">
            <div class="card-body w-100">
                <div id="created-task--${taskID}" class="w-100">

                    <p id="user-created-task--${taskID}" class="task-pTag card-body ml-2 font-weight-bold">${createdTask}</p>
                            <p id="user-created-date--${taskID}" class="card-title task-pTag ml-2">To be completed by: ${createdDate}</p>
                        <div>
                            <button class="btn edit-task-btn" data-toggle="modal" data-target="#edit-task-modal" id="edit-task-btn--${taskID}">Edit Task</button>
                            <span>
                            Done
                            </span>
                                <input class="checkbox" id="checkbox--${taskID}"type="checkbox">
                        </div>
                </div>
            </div>
        </div>
    </div>
`
    $("#list-tasks-container").append(newTask);
}

module.exports = createNewTask;
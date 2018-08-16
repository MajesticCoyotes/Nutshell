/*
    Module Created By: Madi
    PURPOSE: Holds the HTML representation of the modal that pops up when the user wants to create a new task
*/

const taskDOM = require("./taskDOM");

const createNewTask = (taskID, createdTask, createdDate) => {
    const newTask = `
    <div id="created-task--${taskID}" class="task-card w-100">
    
        <div class="card-info input-group mb-3 w-100">
            <div class="card-body w-100">
                <div id="created-task--${taskID}" class="w-100">

                    <p id="user-created-task--${taskID}" class="title-pTag card-body ml-2 font-weight-bold">${createdTask}</p>
                            <p id="user-created-date--${taskID}" class="card-title task-pTag">To be completed by: ${createdDate}</p>
                        <div class="task-footer">
                            <button class="btn edit-task-btn" data-toggle="modal" data-target="#edit-task-modal" id="edit-task-btn--${taskID}">Edit Task</button>
                        <div class="checkbox-div">
                            <span>
                            Completed:
                            </span>
                                <input class="checkbox" id="checkbox--${taskID}"type="checkbox">
                        </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
`
    $("#list-tasks-container").append(newTask);
}

module.exports = createNewTask;
/*
    Module created by: Madi
    PURPOSE: Holds a function that has the HTML representation of the Tasks module on the page

*/
const createTaskDOM = (stringArray) => {
    $("#task-div").html(`

    <!-- this is the container being added to the dom -->

    <div id="task-container" class="card m-3">
        <div class="d-flex flex-row card-header">
        <h3>Tasks</h3>
        <!-- button targets the modal below, and opens it when the button is clicked -->

        <button id="new-task-button" type="button" class="btn btn-info ml-3 mt-2 mb-2" data-toggle="modal" data-target="#create-new-task-modal"><i class="fas fa-plus-square"></i></button>
        </div>
        <div id="list-tasks-container" class="d-flex flex-column card-body">
            <!-- div that holds the tasks -->
            <!-- need to create a checkbox for each task created -->
        </div>

        <!-- this is my modal -->

        <div id="create-new-task-modal" class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Create New Task</h5>
                    <button id="close-modal-btn" type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h6>Task:</h6>
                    <input id="new-task-input" class="form-control mb-2" type="text" placeholder="${stringArray}">
                    <h6>Date to be completed:</h6>
                    <input id="new-date-input" class="form-control" type="date" placeholder="mm/dd/yyy">
                </div>
                <div class="modal-footer">
                    <button id="save-new-task-btn" type="button" data-dismiss="modal" class="btn btn-info">Save New Task</button>
                </div>
                </div>
            </div>
        </div>


    </div>    
`)
}

module.exports = createTaskDOM;
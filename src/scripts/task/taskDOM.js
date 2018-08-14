/*
    Module created by: Madi
    PURPOSE: Holds a function that has the HTML representation of the Tasks module on the page

*/
const createTaskDOM = () => {
    $("#task-div").prepend(`

    <!--- this is the container being added to the dom --->

    <div id="task-container">
        <div class="d-flex flex-row">
        <h3>Tasks</h3>
        <!--- button targets the modal below, and opens it when the button is clicked --->

        <button id="new-task-button" type="button" class="btn btn-info ml-3 mt-2 mb-2" data-toggle="modal" data-target="#create-new-task-modal">+</button>
        </div>
        <div class="d-flex flex-column">
            <!--- div that holds the tasks --->
            <!--- need to create a checkbox for each task created --->
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox">
                    </div>
                </div>
            </div>
        </div>

        <!--- this is my modal --->

        <div id="create-new-task-modal" class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Create New Task</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <input id="new-task-input" class="form-control" type="text" placeholder="Feed the bear, Do laundry, etc.">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-info">Save changes</button>
                </div>
                </div>
            </div>
        </div>

    </div>    
`)
}

module.exports = createTaskDOM;
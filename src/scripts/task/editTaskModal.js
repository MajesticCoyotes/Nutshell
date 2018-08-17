const editTaskModal = (editTaskID, editCreatedTask) => {
    
  const editTaskModal =  `
  <!-- THIS IS THE MODAL TO EDIT A TASK -->
    
    <div id="edit-task-modal" class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Task</h5>
                    <button id="close-modal-btn" type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h6>Task:</h6>
                    <input id="edit-task-input" class="form-control mb-2" type="text" value="${editCreatedTask}">
                    <h6>Date to be completed:</h6>
                    <input id="edit-date-input" class="form-control" type="date" placeholder="mm/dd/yyyy">
                </div>
                <div class="modal-footer">
                    <button id="save-edited-task--${editTaskID}" type="button" data-dismiss="modal" class="btn btn-info">Save Changes</button>
                </div>
                </div>
            </div>
        </div>
        `
    $("#task-container").append(editTaskModal)

}

module.exports = editTaskModal;
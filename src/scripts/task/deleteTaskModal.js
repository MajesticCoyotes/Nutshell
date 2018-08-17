const deleteTaskModal = (taskID) => {
    const deleteModal =
        `
        <div id="delete-modal--${taskID}" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Complete the task?</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>
              By marking this task complete, it will be deleted from the page. Are you sure you want to delete this task? 
              </p>
              <p>
              (It will stay on the page, uncompleted, if no)
              </p>
            </div>
            <div class="modal-footer">
              <button id="yes-btn-modal--${taskID}" type="button" class="btn btn-info" data-dismiss="modal">Yes</button>
              <button id="no-btn-modal--${taskID}" type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
            </div>
          </div>
        </div>
      </div>
        `
    $(`#list-tasks-container`).append(deleteModal)
}

module.exports = deleteTaskModal;
const createTaskDOM = () => {
    $("#task-div").append(`
    <div id="task-container">
        <h3>Tasks</h3>
        <button type="button" class="btn btn-info">Create a new task</button>
        <div>
            <!--- div that holds the tasks --->
            <!--- need to create a checkbox for each task created --->
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input">
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox">
            </div>
        </div>
    </div>    
`)
}

module.exports = createTaskDOM;
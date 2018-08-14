const createTaskDOM = () => {
    $("body").prepend(`
    <div id="task-container">
        <h3>Tasks</h3>
        <button type="button" class="btn btn-info">+</button>
        <div>
            <!--- div that holds the tasks --->
            <!--- need to create a checkbox for each task created --->
            
        </div>
    </div>    
`)
}

module.exports = createTaskDOM;
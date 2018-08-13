const createTaskDOM = () => {
    $("#task-div").append( `
    <div id="task-container">
        <h3>Tasks</h3>
        <button>Add a new task!</button>
    </div>    
`)
}

module.exports = createTaskDOM;
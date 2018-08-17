const appendContent = () => {
    document.querySelector("#content").innerHTML = 
    `<div id="logout" class=""></div>
    <div class="container">
        <div class="row">
            <div id="task-div" class="col-sm-5 m-3"></div>
            <div id="article-div" class="col-sm-5 p-0"></div>
        </div>
        <div class="row">
            <div id="event-div" class="col-sm-5 p-0">
                <div id="event-form"></div>
                <div id="event-list" class="do-this bg-white"></div>
            </div>
            <div id="messages-div" class="col-sm-5 p-0"></div>
        </div>
    </div>
    `
}
module.exports = appendContent;
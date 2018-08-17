const appendContent = () => {
    document.querySelector("#content").innerHTML = 
    `<div id="logout"></div>
    <div id="task-div"></div>
    <div id="article-div"></div>
    <div id="event-div">
        <div id="event-form"></div>
        <div id="event-list" class="do-this"></div>
        <div id="messages-div"></div>
    </div>`
}
module.exports = appendContent;
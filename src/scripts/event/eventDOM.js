// Module Created by: Kayla Reid
// Purpose: DOM Representation of event input area 

const showEventForm = () => {
    $("#event-form").append(`
    <div class="d-flex" id="form">
        <h3>Up coming events</h3>
        <button type="button" id="add-event-button" class="btn btn-primary ml-3" data-toggle="modal" data-target="#event-modal"><i class="fas fa-plus-square"></i></button>
    </div>

    <div id="event-modal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Create a new event!</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <input id="event-name" type="text" placeholder="Event Name">
        <input id="event-date" type="date" placeholder="Date of you event">
        <input id="event-location" type="text" placeholder="Event Location">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button id="save-event-button" type="button" class="btn btn-primary">Save event</button>
        </div>
      </div>
    </div>
  </div>`)
}
const eventListDom = (newEvent) => {
    return `<div id="event-div--${newEvent.id}" class="event">
                <h4 id="title-${newEvent.id}">${newEvent.title}</h4>
                <hr class="hr-line">
                <p id="date-${newEvent.id}">${newEvent.date}</p>
            <p id="location-${newEvent.id}">${newEvent.location}</p>
            <button class="edit-button"><i class="fas fa-edit editBtn" id="edit-button--${newEvent.id}"></i></button>
            <button class="delete-button"><i class="fas fa-trash-alt deleteBtn" id="delete-button--${newEvent.id}"></i></button>
        </div>`
}

module.exports = {showEventForm, eventListDom};
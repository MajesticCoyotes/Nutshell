// Module Created by: Kayla Reid
// Purpose: DOM Representation of event input area 

const showEventForm = () => {
    $("#event-form").append(`
    <div class="d-flex">
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
    return `<div id="event-div--${newEvent.id}">
            <div>
                <h4 id="title-${newEvent.id}">${newEvent.title}</h4>
                <p id="date-${newEvent.id}">${newEvent.date}</p>
            </div>
            <p id="location-${newEvent.id}">${newEvent.location}</p>
            <button id="edit-button--${newEvent.id}">Edit Event</button>
        </div>`
}

module.exports = {showEventForm, eventListDom};
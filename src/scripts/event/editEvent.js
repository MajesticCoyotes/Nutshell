// Module Created by: Kayla Reid
// Purpose:  to edit events

 const saveEventChanges = (saveId) => {
     let editedEvent = {
        userId: saveId,
        title: $("#edited-event-name").val(),
        date: $("#edited-event-date").val(),
        location: $("#edited-event-location").val()
     }
     return editedEvent
 }

 const editEvent = (editId) => {
    let titleText = document.querySelector(`#title-${editId}`).textContent
    let dateText = document.querySelector(`#date-${editId}`).textContent
    let locationText = document.querySelector(`#location-${editId}`).textContent
    let eventDiv = document.querySelector(`#event-div--${editId}`)
    eventDiv.innerHTML = 
        `<input id="edited-event-name" type="text" value="${titleText}">
        <input id="edited-event-date" type="date" value="${dateText}">
        <input id="edited-event-location" type="text" value="${locationText}">
        <button id="save-edited-event--${editId}">Save Changes</button>`
}

module.exports = {editEvent, saveEventChanges};
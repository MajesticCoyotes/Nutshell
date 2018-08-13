//Author: Jonathan Edwards
//Purpose: Builds the HTML structure for the 'Register New User' page

const newUser = () => {
    return `
    <fieldset>
        <label for="username">Username:</label>
        <input required type="text" id="username">

        <label required for="email">Email Address:</label>
        <input required type="text" id="email">

        <label required for="photo">Photo:</label>
        <input type="file" id="photo">

        <button id="registerUserButton">Register New User</button>
    </fieldset>
    `
}

module.exports = newUser
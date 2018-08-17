//Author: Jonathan Edwards
//Purpose: Builds the HTML structure for the 'Register New User' page

const registerNewUser = () => {
    return `
    <fieldset>
        <label for="register-username">Username:</label>
        <input required type="text" id="register-username"><br>

        <label required for="register-email">Email Address:</label>
        <input required type="email" id="register-email"><br>

        <label required for="pregister-hoto">Photo:</label>
        <input type="file" id="register-photo"><br>

        <button id="registerUserButton" class="btn btn-primary">Create New User</button>
    </fieldset>
    `
}

module.exports = registerNewUser
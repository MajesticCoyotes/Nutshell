// Module Created by: Kayla Reid
// Purpose: DOM Representation of Login/Ladding page

function landingPageDOM() {
    const $loginDiv = $("#login-div");
    $loginDiv.append(`<div>
                        <div id="welcome-header">
                            <h1>Welcome to Nutshell!</h1>
                        </div>
                        <div id="login-form">
                            <input id="login-name" type="text" placeholder="Name">
                            <input id="login-email" type="email" placeholder="Email">
                        </div>
                        <div id="button-div">
                            <button id="login-button">Login</button>
                            <button id="register-user-button">Register new User</button>
                        </div>
                     </div>`);
}
module.exports = landingPageDOM;
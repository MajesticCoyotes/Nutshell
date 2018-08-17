// Module Created by: Kayla Reid
// Purpose: DOM Representation of Login/Ladding page

function landingPageDOM() {
    const $loginDiv = $("#login-div");
    $loginDiv.html(`<div>
                        <div id="welcome-header">
                            <h1 class="text-center">Welcome to Nutshell</h1>
                        </div>
                        <div id="login-form">
                            <input id="login-name" type="text" placeholder="Username">
                            <input id="login-email" type="email" placeholder="Email">
                        </div>
                        <div id="button-div">
                            <button id="login-button" class="btn btn-primary">Login</button>
                            <button id="register-user-button" class="btn btn-primary">Register New User <i class="fas fa-user-plus"></i></button>
                        </div>
                     </div>`);
}
module.exports = landingPageDOM;
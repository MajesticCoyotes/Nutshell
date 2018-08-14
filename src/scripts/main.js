const landingPageDOM = require("./login/loginDOM");
const manageUserData = require("./DataManager");
const createTask = require("./task/taskDOM");

console.log(manageUserData.getData.getUsers());

console.log(landingPageDOM());

const landingPageDOM = require("./login/loginDOM");
const manageUserData = require("./DataManager");
const createTask = require("./task/taskDOM");

createTask();
console.log(manageUserData.getData.getUsers());

console.log(landingPageDOM());

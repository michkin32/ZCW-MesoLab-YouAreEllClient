import MessageService from "/message-service.js";

let currentUser = 'King';
const messageService = new MessageService();

window.addEventListener("load", function () {
    document.getElementById("greeting").innerHTML = `Welcome ${currentUser}!`;
    messageService.getAllMessages()
        .then(successCallback, errorCallback);

    function successCallback(response) {
        // This data comes from the resolve method
        messageService.populateThread(response);
    }

    function errorCallback(response) {
        // This data comes from the reject method
        console.log(response);
    }
});

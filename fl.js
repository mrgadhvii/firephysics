
// Create message element
var message = document.createElement("div");
message.id = "message";
message.innerHTML = "This feature is locked due to Privacy.";
message.style.cssText = "position: fixed; width:80%;  top:0;  background-color: red; color: white; padding: 10px; font-size: 14px; border-radius: 5px;  display: none;";

// Append message element to body
document.body.appendChild(message);

// Function to display message
function showMessage() {
    message.style.display = "block";
    setTimeout(function() {
        message.style.display = "none";
    }, 3000); // Hide message after 3 seconds
}

// Event listener for right-click
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    showMessage();
});

// Event listener for long-press on mobile devices
var pressTimer;
document.addEventListener("touchstart", function(event) {
    pressTimer = window.setTimeout(function() {
        showMessage();
    },1000); // Change 1000 to your desired long press duration in milliseconds
});

document.addEventListener("touchend", function(event) {
    clearTimeout(pressTimer);
});


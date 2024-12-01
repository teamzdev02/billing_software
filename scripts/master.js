// Timer to update the time
function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    timeElement.textContent = "Time: " + now.toLocaleTimeString();
}

// Update the time every second
setInterval(updateTime, 1000);

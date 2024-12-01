// Update status bar with current date and time
function updateStatusBar() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString();

    // Update the status bar with the current time and date
    document.getElementById('status-time').textContent = 'Time: ' + timeString;
    document.getElementById('status-date').textContent = 'Date: ' + dateString;
    
    // Update 'showtime' status with a dynamic message (if needed)
    document.getElementById('status-showtime').textContent = 'Status: Active';

    // Update every second
    setTimeout(updateStatusBar, 1000);
}

// Initialize the status bar on page load
document.addEventListener('DOMContentLoaded', function() {
    updateStatusBar();
});

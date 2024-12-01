document.addEventListener("DOMContentLoaded", () => {
    const button1 = document.getElementById("toolStripButton2");
    const button2 = document.getElementById("toolStripButton6");
    const progressBar = document.getElementById("progressBar1");

    // Example: Button 1 functionality
    button1.addEventListener("click", () => {
        alert("Button 1 clicked!");
    });

    // Example: Button 2 functionality
    button2.addEventListener("click", () => {
        alert("Button 2 clicked!");
    });

    // Update Progress Bar on load
    progressBar.value = 75; // Example value
});

document.addEventListener("DOMContentLoaded", () => {
    const button1 = document.getElementById("toolStripButton2");
    const button2 = document.getElementById("toolStripButton6");
    const progressBar = document.getElementById("progressBar1");

    // Event listener for Button 1
    button1.addEventListener("click", () => {
        alert("Button 1 clicked!");
    });

    // Event listener for Button 2
    button2.addEventListener("click", () => {
        alert("Button 2 clicked!");
    });

    // Example: Update Progress Bar dynamically
    progressBar.value = 60; // Example value
});

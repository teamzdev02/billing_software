// trunover1.js
document.getElementById("toolStripButton5").addEventListener("click", function() {
    alert("Button 5 clicked!");
});

document.getElementById("toolStripButton6").addEventListener("click", function() {
    alert("Button 6 clicked!");
});

// Here you can add functions to generate or load the report dynamically
function loadReportData() {
    // Placeholder function for report data loading
    const reportElement = document.getElementById("crystalReportViewer1");
    reportElement.innerHTML = "<p>Dynamic content goes here. Replace with real data.</p>";
}

// Call the loadReportData function when needed
loadReportData();

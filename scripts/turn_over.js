// turnover.js
document.getElementById("toolStripButton5").addEventListener("click", function() {
    alert("Button 5 clicked!");
});

document.getElementById("toolStripButton6").addEventListener("click", function() {
    alert("Button 6 clicked!");
});

document.getElementById("chkPre").addEventListener("change", function() {
    if (this.checked) {
        console.log("Pre-check selected.");
    } else {
        console.log("Pre-check unselected.");
    }
});

document.getElementById("chkAb").addEventListener("change", function() {
    if (this.checked) {
        console.log("Ab-check selected.");
    } else {
        console.log("Ab-check unselected.");
    }
});

// Placeholder function for report content loading
function loadReportData() {
    const reportElement = document.getElementById("crystalReportViewer1");
    reportElement.innerHTML = "<p>Dynamic content goes here. Replace with real data.</p>";
}

// Call the function to load dynamic content (if applicable)
loadReportData();

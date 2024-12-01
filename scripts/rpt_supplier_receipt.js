document.addEventListener("DOMContentLoaded", () => {
    const crystalReportViewer = document.getElementById("crystalReportViewer");

    // Simulate loading the report for demonstration purposes
    crystalReportViewer.innerHTML = "<p>Loading the supplier receipt report...</p>";

    // Here, you'd typically make a request to the server to fetch the report
    // For example, using AJAX or fetch to load the Crystal Report dynamically
    // Once the report is ready, you would embed it into the `#crystalReportViewer` div
});

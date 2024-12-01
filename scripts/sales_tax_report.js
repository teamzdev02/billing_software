document.addEventListener("DOMContentLoaded", () => {
    const reportViewer = document.getElementById("reportViewer");
    const generateReportButton = document.getElementById("generateReport");

    const toolButton5 = document.getElementById("toolButton5");
    const toolButton6 = document.getElementById("toolButton6");

    const dateFrom = document.getElementById("dateFrom");
    const dateTo = document.getElementById("dateTo");

    // Simulate loading the report for demonstration purposes
    const loadReport = () => {
        reportViewer.innerHTML = "<p>Loading the sales tax report...</p>";

        // Normally, a request would be made to the server to fetch the report
        // Once the report is ready, you would update the #reportViewer div with the report
        // For example, via an AJAX call or server-side report generation.
    };

    // Event listener for the "Generate Report" button
    generateReportButton.addEventListener("click", () => {
        const fromDate = dateFrom.value;
        const toDate = dateTo.value;

        console.log("Generating report with the following filters:");
        console.log("Date From: ", fromDate);
        console.log("Date To: ", toDate);

        loadReport(); // Load the report based on filters
    });

    // Toolstrip button actions
    toolButton5.addEventListener("click", () => {
        alert("Tool 5 clicked");
    });

    toolButton6.addEventListener("click", () => {
        alert("Tool 6 clicked");
    });
});

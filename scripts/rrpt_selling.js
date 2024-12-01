document.addEventListener("DOMContentLoaded", () => {
    const reportViewer = document.getElementById("reportViewer");
    const generateReportButton = document.getElementById("generateReport");
    const dateFrom = document.getElementById("dateFrom");
    const dateTo = document.getElementById("dateTo");
    const comboBox1 = document.getElementById("comboBox1");
    const checkBox1 = document.getElementById("checkBox1");

    // Simulate loading the report for demonstration purposes
    const loadReport = () => {
        reportViewer.innerHTML = "<p>Loading the selling report...</p>";

        // Here, you would normally make a request to the server to fetch the report
        // Once the report is ready, you would embed it into the #reportViewer div
        // For example, via an AJAX call or through a server-side report generation logic.
    };

    // Event listener for the "Generate Report" button
    generateReportButton.addEventListener("click", () => {
        const fromDate = dateFrom.value;
        const toDate = dateTo.value;
        const category = comboBox1.value;
        const includeArchived = checkBox1.checked;

        console.log("Generating report with the following filters:");
        console.log("Date From: ", fromDate);
        console.log("Date To: ", toDate);
        console.log("Category: ", category);
        console.log("Include Archived: ", includeArchived);

        loadReport(); // Call the function to load the report
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const reportViewer = document.getElementById("reportViewer");
    const generateReportButton = document.getElementById("generateReport");

    const toolButton1 = document.getElementById("toolButton1");
    const toolButton6 = document.getElementById("toolButton6");
    const toolButton2 = document.getElementById("toolButton2");
    const toolButton3 = document.getElementById("toolButton3");
    const toolButton4 = document.getElementById("toolButton4");
    const toolButton5 = document.getElementById("toolButton5");
    const toolButton7 = document.getElementById("toolButton7");

    const dateFrom = document.getElementById("dateFrom");
    const dateTo = document.getElementById("dateTo");
    const category = document.getElementById("category");
    const comboBox1 = document.getElementById("comboBox1");

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
        const categoryValue = category.value;
        const comboBox1Value = comboBox1.value;

        console.log("Generating report with the following filters:");
        console.log("Date From: ", fromDate);
        console.log("Date To: ", toDate);
        console.log("Category: ", categoryValue);
        console.log("Combo Box 1: ", comboBox1Value);

        loadReport(); // Call the function to load the report
    });

    // Toolstrip button actions (Example functionality)
    toolButton1.addEventListener("click", () => {
        alert("Tool 1 clicked");
    });

    toolButton6.addEventListener("click", () => {
        alert("Tool 6 clicked");
    });

    toolButton2.addEventListener("click", () => {
        alert("Tool 2 clicked");
    });

    toolButton3.addEventListener("click", () => {
        alert("Tool 3 clicked");
    });

    toolButton4.addEventListener("click", () => {
        alert("Tool 4 clicked");
    });

    toolButton5.addEventListener("click", () => {
        alert("Tool 5 clicked");
    });

    toolButton7.addEventListener("click", () => {
        alert("Tool 7 clicked");
    });
});

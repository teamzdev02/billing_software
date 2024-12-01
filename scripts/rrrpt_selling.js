document.addEventListener("DOMContentLoaded", () => {
    const reportViewer = document.getElementById("reportViewer");
    const generateReportButton = document.getElementById("generateReport");

    const toolButton1 = document.getElementById("toolButton1");
    const toolButton6 = document.getElementById("toolButton6");
    const toolButton2 = document.getElementById("toolButton2");
    const toolButton3 = document.getElementById("toolButton3");
    const toolButton4 = document.getElementById("toolButton4");

    const dateFrom = document.getElementById("dateFrom");
    const dateTo = document.getElementById("dateTo");
    const comboBox1 = document.getElementById("comboBox1");
    const comboBox2 = document.getElementById("comboBox2");
    const comboBox3 = document.getElementById("comboBox3");

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
        const categoryValue = comboBox1.value;
        const comboBox2Value = comboBox2.value;
        const comboBox3Value = comboBox3.value;

        console.log("Generating report with the following filters:");
        console.log("Date From: ", fromDate);
        console.log("Date To: ", toDate);
        console.log("Category: ", categoryValue);
        console.log("Combo Box 2: ", comboBox2Value);
        console.log("Combo Box 3: ", comboBox3Value);

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
});

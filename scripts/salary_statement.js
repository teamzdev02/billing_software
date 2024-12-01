document.addEventListener("DOMContentLoaded", () => {
    const reportViewer = document.getElementById("reportViewer");
    const generateReportButton = document.getElementById("generateReport");

    const toolButton6 = document.getElementById("toolButton6");
    const toolButton2 = document.getElementById("toolButton2");

    const cboEmpCode = document.getElementById("cboEmpCode");
    const cboLabour = document.getElementById("cboLabour");
    const dateFrom = document.getElementById("dateFrom");
    const dateTo = document.getElementById("dateTo");

    const radioButton1 = document.getElementById("radioButton1");
    const radioButton2 = document.getElementById("radioButton2");
    const radioButton3 = document.getElementById("radioButton3");
    const radioButton4 = document.getElementById("radioButton4");
    const radioButton5 = document.getElementById("radioButton5");

    // Simulate loading the report for demonstration purposes
    const loadReport = () => {
        reportViewer.innerHTML = "<p>Loading the salary report...</p>";

        // Normally, a request would be made to the server to fetch the report
        // Once the report is ready, you would update the #reportViewer div with the report
        // For example, via an AJAX call or server-side report generation.
    };

    // Event listener for the "Generate Report" button
    generateReportButton.addEventListener("click", () => {
        const employeeCode = cboEmpCode.value;
        const labour = cboLabour.value;
        const fromDate = dateFrom.value;
        const toDate = dateTo.value;

        console.log("Generating report with the following filters:");
        console.log("Employee Code: ", employeeCode);
        console.log("Labour: ", labour);
        console.log("Date From: ", fromDate);
        console.log("Date To: ", toDate);

        loadReport(); // Load the report based on filters
    });

    // Toolstrip button actions
    toolButton6.addEventListener("click", () => {
        alert("Tool 6 clicked");
    });

    toolButton2.addEventListener("click", () => {
        alert("Tool 2 clicked");
    });

    // Radio Button selection
    radioButton1.addEventListener("change", () => {
        if (radioButton1.checked) {
            console.log("Option 1 selected");
        }
    });

    radioButton2.addEventListener("change", () => {
        if (radioButton2.checked) {
            console.log("Option 2 selected");
        }
    });

    radioButton3.addEventListener("change", () => {
        if (radioButton3.checked) {
            console.log("Option 3 selected");
        }
    });

    radioButton4.addEventListener("change", () => {
        if (radioButton4.checked) {
            console.log("Option 4 selected");
        }
    });

    radioButton5.addEventListener("change", () => {
        if (radioButton5.checked) {
            console.log("Option 5 selected");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const generateReportButton = document.getElementById("generateReport");
    const printButton = document.getElementById("printButton");

    // Generate Report button click
    generateReportButton.addEventListener("click", () => {
        const selectedRadio = document.querySelector('input[name="filterOption"]:checked');
        const filterOption = selectedRadio ? selectedRadio.value : null;
        const filterValue1 = document.getElementById("textBox1").value;
        const filterValue2 = document.getElementById("textBox2").value;
        const startDate = document.getElementById("datePicker1").value;
        const endDate = document.getElementById("datePicker2").value;
        const comboValue = document.getElementById("comboBox1").value;

        // Placeholder logic to generate report based on inputs
        const reportContent = `
            <h3>Generated Report</h3>
            <p>Filter Option: ${filterOption}</p>
            <p>Field 1: ${filterValue1}</p>
            <p>Field 2: ${filterValue2}</p>
            <p>Start Date: ${startDate}</p>
            <p>End Date: ${endDate}</p>
            <p>Selected Filter: ${comboValue}</p>
        `;
        document.getElementById("reportViewer").innerHTML = reportContent;
    });

    // Print Report button click
    printButton.addEventListener("click", () => {
        window.print(); // Opens the print dialog
    });
});

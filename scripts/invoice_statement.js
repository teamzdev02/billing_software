document.addEventListener("DOMContentLoaded", () => {
    const generateReportButton = document.getElementById("generateReport");
    const printReportButton = document.getElementById("printReport");
    const exitButton = document.getElementById("exitButton");

    // Handle Generate Report Button click
    generateReportButton.addEventListener("click", () => {
        const startDate = document.getElementById("datePicker1").value;
        const endDate = document.getElementById("datePicker2").value;
        const selectedOption = document.getElementById("comboBox1").value;
        const selectedFilterType = document.querySelector('input[name="filterType"]:checked')?.value;

        if (!startDate || !endDate) {
            alert("Please select both start and end dates.");
            return;
        }

        // Placeholder logic for generating report based on filters
        alert(`Generating report for:
                Option: ${selectedOption}
                Date Range: ${startDate} to ${endDate}
                Filter Type: ${selectedFilterType || 'No filter selected'}`);
        
        // You can add logic here to integrate with your actual reporting system or backend
    });

    // Handle Print Report Button click
    printReportButton.addEventListener("click", () => {
        window.print(); // Opens the browser print dialog
    });

    // Handle Exit Button click
    exitButton.addEventListener("click", () => {
        window.close(); // Closes the current window
    });
});

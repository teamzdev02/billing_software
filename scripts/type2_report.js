// typr2report.js

// Function to handle report generation
document.getElementById('reportFiltersForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    // Gather form data
    const formData = new FormData(event.target);
    const filters = {};
    formData.forEach((value, key) => {
        filters[key] = value;
    });

    // Generate report with the given filters
    generateReport(filters);
});

// Function to generate the report
function generateReport(filters) {
    // Placeholder: Simulated report data based on filters
    const reportData = [
        { id: 1, name: "Item A", category: filters.reportCategory, status: filters.reportStatus, date: filters.reportDate },
        { id: 2, name: "Item B", category: filters.reportCategory, status: filters.reportStatus, date: filters.reportDate },
        // Add more sample data as needed
    ];

    // Insert data into the table
    const tableBody = document.querySelector('#reportTable tbody');
    tableBody.innerHTML = '';  // Clear existing rows
    reportData.forEach(item => {
        const row = tableBody.insertRow();
        Object.values(item).forEach((value, index) => {
            const cell = row.insertCell(index);
            cell.textContent = value;
        });
    });
}

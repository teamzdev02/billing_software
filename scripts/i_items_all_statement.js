document.addEventListener("DOMContentLoaded", () => {
    const generateReportButton = document.getElementById("generateReport");
    const datePicker = document.getElementById("datePicker");
    const itemsTable = document.getElementById("itemsTable").getElementsByTagName('tbody')[0];

    // Sample data for the items table (this can be dynamic from an API or database)
    const sampleData = [
        { code: "A101", name: "Item 1", quantity: 10, rate: 20 },
        { code: "B202", name: "Item 2", quantity: 5, rate: 35 },
        { code: "C303", name: "Item 3", quantity: 8, rate: 40 },
    ];

    // Populate the data grid
    function populateGrid() {
        itemsTable.innerHTML = "";
        sampleData.forEach(item => {
            const row = itemsTable.insertRow();
            row.innerHTML = `
                <td>${item.code}</td>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>${item.rate}</td>
                <td>${(item.quantity * item.rate).toFixed(2)}</td>
            `;
        });
    }

    // Initialize the table with sample data
    populateGrid();

    // Handle generate report button click
    generateReportButton.addEventListener("click", () => {
        const selectedDate = datePicker.value;
        if (!selectedDate) {
            alert("Please select a date to generate the report.");
            return;
        }

        alert(`Generating report for date: ${selectedDate}`);
        // Logic to generate the report based on selected date could go here
    });
});

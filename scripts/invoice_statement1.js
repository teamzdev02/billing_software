document.addEventListener("DOMContentLoaded", () => {
    const filterButton = document.getElementById("filterButton");
    const resetButton = document.getElementById("resetButton");
    const printButton = document.getElementById("printButton");
    const exportButton = document.getElementById("exportButton");

    // Handle Filter Button click
    filterButton.addEventListener("click", () => {
        const filterOption = document.getElementById("comboBox1").value;
        const field1 = document.getElementById("textBox1").value;
        const field2 = document.getElementById("textBox2").value;
        const date = document.getElementById("datePicker1").value;

        // Filter data logic goes here
        console.log(`Filtering data by:
            Filter: ${filterOption},
            Field1: ${field1},
            Field2: ${field2},
            Date: ${date}
        `);

        // For demo, just add a new row to the data grid
        addRowToDataGrid(filterOption, field1, field2, date);
    });

    // Handle Reset Button click
    resetButton.addEventListener("click", () => {
        document.getElementById("comboBox1").value = "";
        document.getElementById("textBox1").value = "";
        document.getElementById("textBox2").value = "";
        document.getElementById("datePicker1").value = "";
    });

    // Handle Print Button click
    printButton.addEventListener("click", () => {
        window.print(); // Opens the browser print dialog
    });

    // Handle Export Button click
    exportButton.addEventListener("click", () => {
        // Placeholder logic for exporting the data
        alert("Exporting data...");
    });

    // Add row to data grid for demonstration
    function addRowToDataGrid(option, field1, field2, date) {
        const tableBody = document.getElementById("dataGrid").querySelector("tbody");
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${option}</td>
            <td>${field1}</td>
            <td>${field2}</td>
            <td>${date}</td>
        `;
        tableBody.appendChild(newRow);
    }
});

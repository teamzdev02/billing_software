document.addEventListener("DOMContentLoaded", () => {
    const filterButton = document.getElementById("filterButton");
    const exportButton = document.getElementById("exportButton");

    filterButton.addEventListener("click", () => {
        const startDate = document.getElementById("startDate").value;
        const endDate = document.getElementById("endDate").value;
        loadFilteredData(startDate, endDate);
    });

    exportButton.addEventListener("click", () => {
        exportData();
    });

    // Function to simulate loading filtered data
    function loadFilteredData(startDate, endDate) {
        const tableBody = document.querySelector("#accountTable tbody");
        tableBody.innerHTML = "";  // Clear existing data

        // Simulate filtered data
        const sampleData = [
            { accountName: "Account 1", col2: "Data", col3: "Data", unit: "Unit", make: "Make", col4: "Data", name: "Name" },
            { accountName: "Account 2", col2: "Data", col3: "Data", unit: "Unit", make: "Make", col4: "Data", name: "Name" },
            { accountName: "Account 3", col2: "Data", col3: "Data", unit: "Unit", make: "Make", col4: "Data", name: "Name" },
        ];

        // Dynamically populate table rows
        sampleData.forEach(data => {
            const row = document.createElement("tr");

            Object.values(data).forEach(value => {
                const cell = document.createElement("td");
                cell.textContent = value;
                row.appendChild(cell);
            });

            tableBody.appendChild(row);
        });
    }

    // Function to simulate exporting data
    function exportData() {
        alert("Export functionality is under development.");
    }
});

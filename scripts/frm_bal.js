document.addEventListener("DOMContentLoaded", () => {
    const gridBody = document.getElementById("gridBody");
    const searchInput = document.getElementById("search");
    const radioButtons = document.getElementsByName("filter");
    const saveButton = document.getElementById("save");

    // Sample data for the grid
    const ledgerRecords = [
        { code: "L001", isActive: true, ledgerName: "John Doe", address1: "Street 1", address2: "City A", address3: "Country Z", type: "Type 1", groupName: "Group A", details: "Details 1", opCr: 100, opDr: 50, cr: 200, dr: 150 },
        { code: "L002", isActive: false, ledgerName: "Jane Smith", address1: "Street 2", address2: "City B", address3: "Country Y", type: "Type 2", groupName: "Group B", details: "Details 2", opCr: 150, opDr: 100, cr: 250, dr: 200 },
        // Add more sample records here
    ];

    // Function to render grid
    const renderGrid = (filter = "All", search = "") => {
        gridBody.innerHTML = "";

        const filteredRecords = ledgerRecords.filter(record => {
            const matchesFilter = filter === "All" || (filter === "Active" && record.isActive) || (filter === "Inactive" && !record.isActive);
            const matchesSearch = record.ledgerName.toLowerCase().includes(search.toLowerCase());
            return matchesFilter && matchesSearch;
        });

        filteredRecords.forEach(record => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${record.code}</td>
                <td>${record.isActive ? "Yes" : "No"}</td>
                <td>${record.ledgerName}</td>
                <td>${record.address1}</td>
                <td>${record.address2}</td>
                <td>${record.address3}</td>
                <td>${record.type}</td>
                <td>${record.groupName}</td>
                <td>${record.details}</td>
                <td>${record.opCr}</td>
                <td>${record.opDr}</td>
                <td>${record.cr}</td>
                <td>${record.dr}</td>
            `;
            gridBody.appendChild(row);
        });
    };

    // Event listener for search
    searchInput.addEventListener("input", () => {
        const selectedFilter = [...radioButtons].find(radio => radio.checked).value;
        renderGrid(selectedFilter, searchInput.value);
    });

    // Event listener for filter
    radioButtons.forEach(radio => {
        radio.addEventListener("change", () => {
            renderGrid(radio.value, searchInput.value);
        });
    });

    // Event listener for save button
    saveButton.addEventListener("click", () => {
        alert("Save functionality not implemented yet!");
    });

    // Initial render
    renderGrid();
});

// JavaScript for Fixed Asset Management

document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("assetTable").querySelector("tbody");
    const addEntryButton = document.getElementById("addEntry");
    const deleteEntryButton = document.getElementById("deleteEntry");
    const clearEntriesButton = document.getElementById("clearEntries");

    // Function to add a new asset entry
    addEntryButton.addEventListener("click", () => {
        const assetId = prompt("Enter Asset ID:");
        const accountName = prompt("Enter Account Name:");
        const type = prompt("Enter Asset Type:");
        const details = prompt("Enter Details:");
        const unit = prompt("Enter Unit:");
        const make = prompt("Enter Make:");
        const additionalInfo = prompt("Enter Additional Info:");

        if (!assetId || !accountName || !type) {
            alert("Asset ID, Account Name, and Type are required.");
            return;
        }

        const newRow = tableBody.insertRow();
        newRow.innerHTML = `
            <td>${assetId}</td>
            <td>${accountName}</td>
            <td>${type}</td>
            <td>${details}</td>
            <td>${unit}</td>
            <td>${make}</td>
            <td>${additionalInfo}</td>
            <td><input type="checkbox" class="row-select"></td>
        `;
    });

    // Function to delete selected entries
    deleteEntryButton.addEventListener("click", () => {
        const rows = tableBody.querySelectorAll("tr");
        let deletedCount = 0;

        rows.forEach(row => {
            const checkbox = row.querySelector(".row-select");
            if (checkbox && checkbox.checked) {
                tableBody.removeChild(row);
                deletedCount++;
            }
        });

        if (deletedCount === 0) {
            alert("No rows selected.");
        }
    });

    // Function to clear all entries
    clearEntriesButton.addEventListener("click", () => {
        if (confirm("Are you sure you want to clear all entries?")) {
            tableBody.innerHTML = "";
        }
    });
});

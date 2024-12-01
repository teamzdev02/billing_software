// JavaScript for Expenses Ledger

document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("ledgerTable").querySelector("tbody");
    const addEntryButton = document.getElementById("addEntry");
    const deleteEntryButton = document.getElementById("deleteEntry");
    const clearEntriesButton = document.getElementById("clearEntries");
    const progressBar = document.getElementById("progressBar");

    // Function to add a new ledger entry
    addEntryButton.addEventListener("click", () => {
        const mCode = document.getElementById("mCode").value.trim();
        const remark = document.getElementById("remark").value.trim();
        const otherDetails = document.getElementById("otherDetails").value.trim();
        const isActive = document.getElementById("isActive").checked ? "Yes" : "No";

        if (!mCode || !remark) {
            alert("M-Code and Remark are required.");
            return;
        }

        const newRow = tableBody.insertRow();
        newRow.innerHTML = `
            <td>${Math.floor(Math.random() * 1000)}</td>
            <td>${mCode}</td>
            <td>${isActive}</td>
            <td>${remark}</td>
            <td>${otherDetails}</td>
            <td><input type="checkbox" class="row-select"></td>
        `;

        // Update Progress
        updateProgress();
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

        // Update Progress
        updateProgress();
    });

    // Function to clear all entries
    clearEntriesButton.addEventListener("click", () => {
        if (confirm("Are you sure you want to clear all entries?")) {
            tableBody.innerHTML = "";
            updateProgress();
        }
    });

    // Function to update progress bar
    function updateProgress() {
        const totalEntries = tableBody.querySelectorAll("tr").length;
        const progressValue = Math.min((totalEntries / 10) * 100, 100); // Assume max 10 rows
        progressBar.value = progressValue;

        if (progressValue === 100) {
            alert("Maximum entries reached.");
        }
    }
});

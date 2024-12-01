// JavaScript for Employee Ledger

document.addEventListener("DOMContentLoaded", () => {
    const dataTable = document.getElementById("dataGridView").querySelector("tbody");
    const addRecordButton = document.getElementById("addRecord");
    const clearTableButton = document.getElementById("clearTable");

    // Function to add a new record
    addRecordButton.addEventListener("click", () => {
        const labourName = document.getElementById("labourName").value;
        const ledgerDate = new Date().toLocaleDateString(); // Current date
        const bonus = document.getElementById("bonus").value || "0";
        const penalty = document.getElementById("penalty").value || "0";
        const credit = document.getElementById("credit").value || "0";
        const remarks = `Bonus: ${bonus}, Penalty: ${penalty}, Credit: ${credit}`;

        if (!labourName) {
            alert("Please select a Labour Name!");
            return;
        }

        const newRow = dataTable.insertRow();
        newRow.innerHTML = `
            <td>${labourName}</td>
            <td>${ledgerDate}</td>
            <td>${credit}</td>
            <td>${remarks}</td>
        `;

        // Highlight new row
        newRow.classList.add("selected");
        setTimeout(() => newRow.classList.remove("selected"), 1000);
    });

    // Function to clear the table
    clearTableButton.addEventListener("click", () => {
        if (confirm("Are you sure you want to clear the table?")) {
            dataTable.innerHTML = "";
        }
    });
});

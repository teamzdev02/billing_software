// JavaScript for Drawing Account

document.addEventListener("DOMContentLoaded", () => {
    const dataTable = document.getElementById("dataGridView").querySelector("tbody");
    const addRecordButton = document.getElementById("addRecord");
    const clearTableButton = document.getElementById("clearTable");

    // Function to add a new record to the table
    addRecordButton.addEventListener("click", () => {
        const rowCount = dataTable.rows.length + 1;
        const newRow = dataTable.insertRow();

        // Add cells with sample data
        newRow.innerHTML = `
            <td>${rowCount}</td>
            <td>Account ${rowCount}</td>
            <td>Value ${rowCount}</td>
            <td>Info ${rowCount}</td>
            <td>Unit ${rowCount}</td>
            <td>Make ${rowCount}</td>
            <td>Data ${rowCount}</td>
            <td>Name ${rowCount}</td>
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

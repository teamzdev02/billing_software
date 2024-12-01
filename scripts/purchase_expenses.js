document.addEventListener("DOMContentLoaded", () => {
    const saveButton = document.getElementById("toolStripButton2");
    const deleteButton = document.getElementById("toolStripButton6");
    const dateFrom = document.getElementById("dateFrom");
    const dateTo = document.getElementById("dateTo");
    const cboLabour = document.getElementById("cbo_labour");
    const table = document.getElementById("dataGridView1").getElementsByTagName("tbody")[0];

    // Save button functionality
    saveButton.addEventListener("click", () => {
        const fromDate = dateFrom.value;
        const toDate = dateTo.value;
        const labour = cboLabour.value;

        if (fromDate && toDate && labour) {
            const row = table.insertRow();
            row.innerHTML = `
                <td>REF-${Math.floor(Math.random() * 1000)}</td>
                <td>${labour}</td>
                <td>${new Date().toLocaleDateString()}</td>
                <td>${Math.floor(Math.random() * 1000)}</td>
                <td>Col 1 Value</td>
                <td>Remarks</td>
            `;
            alert("Data saved successfully!");
        } else {
            alert("Please fill in all required fields.");
        }
    });

    // Delete button functionality
    deleteButton.addEventListener("click", () => {
        const selectedRow = table.querySelector("tr.selected");
        if (selectedRow) {
            table.deleteRow(selectedRow.rowIndex);
            alert("Data deleted successfully!");
        } else {
            alert("Please select a row to delete.");
        }
    });

    // Table row selection
    table.addEventListener("click", (event) => {
        if (event.target.tagName === "TD") {
            const selectedRow = event.target.parentNode;
            selectedRow.classList.toggle("selected");
        }
    });
});

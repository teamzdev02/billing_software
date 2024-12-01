document.addEventListener("DOMContentLoaded", () => {
    const newButton = document.getElementById("newButton");
    const saveButton = document.getElementById("saveButton");
    const deleteButton = document.getElementById("deleteButton");
    const updateButton = document.getElementById("updateButton");
    const printButton = document.getElementById("printButton");

    const txtCode = document.getElementById("txt_Code");
    const txtRemarks = document.getElementById("txt_Remarks");
    const datePicker = document.getElementById("datePicker");
    const checkBox1 = document.getElementById("checkBox1");
    const dataGrid = document.getElementById("dataGrid").querySelector("tbody");

    // Add new record
    newButton.addEventListener("click", () => {
        txtCode.value = "";
        txtRemarks.value = "";
        datePicker.value = "";
        checkBox1.checked = false;
        alert("Form cleared. Ready to add a new record.");
    });

    // Save record
    saveButton.addEventListener("click", () => {
        const code = txtCode.value.trim();
        const remarks = txtRemarks.value.trim();
        const date = datePicker.value;
        const isActive = checkBox1.checked;

        if (!code || !remarks || !date) {
            alert("Please fill out all fields before saving.");
            return;
        }

        const newRow = `
            <tr>
                <td>${code}</td>
                <td>${date}</td>
                <td>${remarks}</td>
                <td>${isActive ? "Active" : "Inactive"}</td>
            </tr>
        `;

        dataGrid.insertAdjacentHTML("beforeend", newRow);
        alert("Record saved successfully.");
    });

    // Delete selected record (basic implementation)
    deleteButton.addEventListener("click", () => {
        if (dataGrid.rows.length > 0) {
            dataGrid.deleteRow(dataGrid.rows.length - 1);
            alert("Last record deleted.");
        } else {
            alert("No records to delete.");
        }
    });

    // Update record placeholder
    updateButton.addEventListener("click", () => {
        alert("Update functionality is not implemented in this demo.");
    });

    // Print functionality placeholder
    printButton.addEventListener("click", () => {
        window.print();
    });
});

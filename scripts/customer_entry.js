// JavaScript for CustomerEntry

// Button Event Handlers
document.getElementById("btn_new").addEventListener("click", () => {
    clearFormFields();
    alert("New Entry Initialized!");
});

document.getElementById("btn_save").addEventListener("click", () => {
    alert("Saving Customer Entry...");
    // Add logic to save data
});

document.getElementById("btn_modify").addEventListener("click", () => {
    alert("Modifying Customer Entry...");
    // Add logic to modify data
});

document.getElementById("btn_delete").addEventListener("click", () => {
    alert("Deleting Customer Entry...");
    // Add logic to delete data
});

document.getElementById("btn_exit").addEventListener("click", () => {
    alert("Exiting Customer Entry...");
    // Add logic for exit
});

// Utility Function to Clear Form Fields
function clearFormFields() {
    const fields = [
        "txt_ledgerno",
        "txt_ledgername",
        "txt_address1",
        "txt_address2",
        "txt_address3",
        "txt_opdr",
        "txt_opcr",
        "txt_details",
    ];

    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) field.value = "";
    });
}

// Example: Search Filter
document.getElementById("txt_Search").addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const rows = document.querySelectorAll("#dgvGrid tbody tr");

    rows.forEach(row => {
        const rowData = row.textContent.toLowerCase();
        row.style.display = rowData.includes(searchTerm) ? "" : "none";
    });
});

// Add more logic as needed

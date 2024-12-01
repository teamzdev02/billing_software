document.addEventListener("DOMContentLoaded", () => {
    const lblDate = document.getElementById("lbl_date");
    const txtRemarks = document.getElementById("txt_Remarks");
    const isActiveCheckbox = document.getElementById("checkBox1");
    const saveButton = document.getElementById("saveButton");
    const clearButton = document.getElementById("clearButton");

    // Set current date dynamically
    const today = new Date();
    lblDate.textContent = today.toLocaleDateString();

    // Save button functionality
    saveButton.addEventListener("click", () => {
        const remarks = txtRemarks.value;
        const isActive = isActiveCheckbox.checked;

        if (!remarks.trim()) {
            alert("Remarks cannot be empty.");
            return;
        }

        alert(`Remainder saved:\nRemarks: ${remarks}\nIs Active: ${isActive ? "Yes" : "No"}`);
    });

    // Clear button functionality
    clearButton.addEventListener("click", () => {
        txtRemarks.value = "";
        isActiveCheckbox.checked = false;
        alert("Form cleared.");
    });
});

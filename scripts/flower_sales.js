// JavaScript for Flower Sales Management

document.addEventListener("DOMContentLoaded", () => {
    const salesDateInput = document.getElementById("salesDate");
    const kuleeAmountInput = document.getElementById("kuleeAmount");
    const remarksInput = document.getElementById("remarks");

    const saveButton = document.getElementById("saveEntry");
    const clearButton = document.getElementById("clearEntry");
    const deleteButton = document.getElementById("deleteEntry");
    const refreshButton = document.getElementById("refreshPage");

    // Function to save entry
    saveButton.addEventListener("click", () => {
        const salesDate = salesDateInput.value;
        const kuleeAmount = kuleeAmountInput.value.trim();
        const remarks = remarksInput.value.trim();

        if (!salesDate || !kuleeAmount) {
            alert("Sales Date and Kulee Amount are required.");
            return;
        }

        alert(`Entry Saved:\n\nSales Date: ${salesDate}\nKulee Amount: ${kuleeAmount}\nRemarks: ${remarks}`);
        clearFields();
    });

    // Function to clear fields
    clearButton.addEventListener("click", () => {
        clearFields();
    });

    // Function to delete entry (for now, just clears inputs)
    deleteButton.addEventListener("click", () => {
        if (confirm("Are you sure you want to delete the entry?")) {
            clearFields();
        }
    });

    // Function to refresh the page
    refreshButton.addEventListener("click", () => {
        location.reload();
    });

    // Utility: Clears input fields
    function clearFields() {
        salesDateInput.value = "";
        kuleeAmountInput.value = "";
        remarksInput.value = "";
    }
});

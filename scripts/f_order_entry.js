// JavaScript for FOrder Entry Management

document.addEventListener("DOMContentLoaded", () => {
    const orderDateInput = document.getElementById("orderDate");
    const voucherNoInput = document.getElementById("voucherNo");
    const ledgerNameInput = document.getElementById("ledgerName");
    const addressInput = document.getElementById("address");

    const newButton = document.getElementById("newEntry");
    const saveButton = document.getElementById("saveEntry");
    const modifyButton = document.getElementById("modifyEntry");
    const deleteButton = document.getElementById("deleteEntry");
    const exitButton = document.getElementById("exitApp");

    // New Entry
    newButton.addEventListener("click", () => {
        clearFields();
    });

    // Save Entry
    saveButton.addEventListener("click", () => {
        const orderDate = orderDateInput.value;
        const voucherNo = voucherNoInput.value.trim();
        const ledgerName = ledgerNameInput.value.trim();
        const address = addressInput.value.trim();

        if (!orderDate || !voucherNo || !ledgerName) {
            alert("Order Date, Voucher No, and Ledger Name are required.");
            return;
        }

        alert(`Entry Saved:\n\nOrder Date: ${orderDate}\nVoucher No: ${voucherNo}\nLedger Name: ${ledgerName}\nAddress: ${address}`);
        clearFields();
    });

    // Modify Entry
    modifyButton.addEventListener("click", () => {
        alert("Modify functionality not implemented yet.");
    });

    // Delete Entry
    deleteButton.addEventListener("click", () => {
        if (confirm("Are you sure you want to delete the entry?")) {
            clearFields();
        }
    });

    // Exit Application
    exitButton.addEventListener("click", () => {
        window.close(); // Note: This may not work in some browsers
    });

    // Utility: Clears all input fields
    function clearFields() {
        orderDateInput.value = "";
        voucherNoInput.value = "";
        ledgerNameInput.value = "";
        addressInput.value = "";
        document.querySelectorAll("#orderGrid tbody tr").forEach(row => {
            row.querySelectorAll("input").forEach(input => (input.value = ""));
        });
    }
});

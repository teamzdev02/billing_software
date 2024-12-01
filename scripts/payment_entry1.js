document.addEventListener("DOMContentLoaded", () => {
    const addEntryButton = document.getElementById("addEntry");
    const clearFormButton = document.getElementById("clearForm");
    const submitButton = document.getElementById("submit");
    const entriesTable = document.getElementById("entriesTable");

    addEntryButton.addEventListener("click", () => {
        const date = document.getElementById("datePicker").value;
        const voucher = document.getElementById("voucherNo").value;
        const ledgerName = document.getElementById("ledgerName").value;
        const debit = document.getElementById("debit").value || "0";
        const credit = document.getElementById("credit").value || "0";
        const narration = document.getElementById("narration1").value;

        if (!date || !voucher || !ledgerName || (!debit && !credit)) {
            alert("All fields are required.");
            return;
        }

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${date}</td>
            <td>${voucher}</td>
            <td>${ledgerName}</td>
            <td>${parseFloat(debit).toFixed(2)}</td>
            <td>${parseFloat(credit).toFixed(2)}</td>
            <td>${narration}</td>
        `;
        entriesTable.appendChild(row);
    });

    clearFormButton.addEventListener("click", () => {
        document.querySelectorAll("input, textarea").forEach(input => input.value = "");
    });

    submitButton.addEventListener("click", () => {
        alert("Entries submitted!");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const addRowButton = document.getElementById("addRow");
    const clearFormButton = document.getElementById("clearForm");
    const submitFormButton = document.getElementById("submitForm");

    const paymentTableBody = document.querySelector("#paymentDetails tbody");
    const dateInput = document.getElementById("mtb_Date");
    const ledgerInput = document.getElementById("txt_LedgerName");
    const narrationInput = document.getElementById("txt_Nar1");
    const debitInput = document.getElementById("txt_Debt");
    const creditInput = document.getElementById("txt_Credit");

    // Add a new row to the payment table
    addRowButton.addEventListener("click", () => {
        const date = dateInput.value;
        const ledger = ledgerInput.value;
        const narration = narrationInput.value;
        const debit = parseFloat(debitInput.value) || 0;
        const credit = parseFloat(creditInput.value) || 0;

        if (!date || !ledger || (debit === 0 && credit === 0)) {
            alert("Please fill in all required fields.");
            return;
        }

        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${date}</td>
            <td>${ledger}</td>
            <td>${narration}</td>
            <td>${debit.toFixed(2)}</td>
            <td>${credit.toFixed(2)}</td>
        `;
        paymentTableBody.appendChild(newRow);

        // Clear inputs
        ledgerInput.value = "";
        narrationInput.value = "";
        debitInput.value = "";
        creditInput.value = "";
    });

    // Clear the form
    clearFormButton.addEventListener("click", () => {
        ledgerInput.value = "";
        narrationInput.value = "";
        debitInput.value = "";
        creditInput.value = "";
    });

    // Submit the form
    submitFormButton.addEventListener("click", () => {
        if (paymentTableBody.children.length === 0) {
            alert("No payment entries to submit.");
            return;
        }
        alert("Payment entries submitted successfully!");
        paymentTableBody.innerHTML = ""; // Clear the table
    });
});

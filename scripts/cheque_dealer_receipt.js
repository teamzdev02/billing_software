document.addEventListener('DOMContentLoaded', () => {
    // Form fields and buttons
    const dealerName = document.getElementById('dealerName');
    const receiptDate = document.getElementById('receiptDate');
    const chequeNumber = document.getElementById('chequeNumber');
    const bankName = document.getElementById('bankName');
    const chequeAmount = document.getElementById('chequeAmount');
    const branch = document.getElementById('branch');
    const status = document.getElementById('status');
    const words = document.getElementById('words');

    const addButton = document.getElementById('addButton');
    const editButton = document.getElementById('editButton');
    const deleteButton = document.getElementById('deleteButton');
    const printButton = document.getElementById('printButton');

    const receiptGrid = document.getElementById('receiptGrid').getElementsByTagName('tbody')[0];

    // Add a new cheque receipt
    addButton.addEventListener('click', () => {
        const newRow = receiptGrid.insertRow();
        
        newRow.insertCell(0).textContent = chequeNumber.value;
        newRow.insertCell(1).textContent = dealerName.value;
        newRow.insertCell(2).textContent = bankName.value;
        newRow.insertCell(3).textContent = chequeAmount.value;
        newRow.insertCell(4).textContent = status.value;
        newRow.insertCell(5).textContent = receiptDate.value;

        clearForm();
    });

    // Edit a selected cheque receipt (This could be expanded with row selection logic)
    editButton.addEventListener('click', () => {
        const selectedRow = receiptGrid.rows[0]; // Just an example, you'll need to select a row first
        selectedRow.cells[0].textContent = chequeNumber.value;
        selectedRow.cells[1].textContent = dealerName.value;
        selectedRow.cells[2].textContent = bankName.value;
        selectedRow.cells[3].textContent = chequeAmount.value;
        selectedRow.cells[4].textContent = status.value;
        selectedRow.cells[5].textContent = receiptDate.value;
    });

    // Delete the selected cheque receipt (Just an example, you'd need row selection)
    deleteButton.addEventListener('click', () => {
        const selectedRow = receiptGrid.rows[0]; // Just an example, you'll need to select a row first
        receiptGrid.deleteRow(selectedRow.rowIndex);
    });

    // Print functionality (you can modify based on requirement)
    printButton.addEventListener('click', () => {
        window.print();
    });

    // Convert amount to words
    chequeAmount.addEventListener('input', () => {
        const amount = parseFloat(chequeAmount.value);
        if (amount) {
            words.value = convertNumberToWords(amount);
        } else {
            words.value = '';
        }
    });

    // Function to convert numbers to words (for the cheque amount)
    function convertNumberToWords(number) {
        const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
        if (number < 11) {
            return words[number];
        }
        return number.toString(); // Fallback for now
    }

    // Clear the form after adding/updating
    function clearForm() {
        dealerName.value = '';
        receiptDate.value = '';
        chequeNumber.value = '';
        bankName.value = '';
        chequeAmount.value = '';
        branch.value = '';
        status.value = 'Pending';
        words.value = '';
    }
});

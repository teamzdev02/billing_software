// withdrawamount.js

// Example data for ComboBoxes (can be replaced by actual data source)
const labourExpenses = ['Labour 1', 'Labour 2', 'Labour 3'];
const otherExpenses = ['Expense 1', 'Expense 2', 'Expense 3'];
const accountNumbers = ['Acc 001', 'Acc 002', 'Acc 003'];

// Populate ComboBoxes with example data
function populateComboBoxes() {
    const labourSelect = document.getElementById('cbo_Labourexpenses');
    const expenseSelect = document.getElementById('cbo_otherexpense');
    const accountSelect = document.getElementById('cmb_AccountNo');

    labourExpenses.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.textContent = item;
        labourSelect.appendChild(option);
    });

    otherExpenses.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.textContent = item;
        expenseSelect.appendChild(option);
    });

    accountNumbers.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.textContent = item;
        accountSelect.appendChild(option);
    });
}

// Initialize form with default data
populateComboBoxes();

// Optional event listeners for form elements (for validation, etc.)
document.getElementById('txt_Amount').addEventListener('input', function() {
    console.log('Amount changed:', this.value);
});

document.getElementById('toolButton1').addEventListener('click', function() {
    alert('Tool Button 1 clicked');
});

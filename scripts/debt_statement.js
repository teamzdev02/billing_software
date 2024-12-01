document.addEventListener('DOMContentLoaded', () => {
    const btnGenerateReport = document.getElementById('btnGenerateReport');
    const btnClearForm = document.getElementById('btnClearForm');
    const formInputs = document.querySelectorAll('input');
    const DgvExpGrid = document.getElementById('DgvExpGrid').getElementsByTagName('tbody')[0];

    btnGenerateReport.addEventListener('click', generateReport);
    btnClearForm.addEventListener('click', clearForm);

    function generateReport() {
        // Assuming you would get the data dynamically and populate the table
        const row = DgvExpGrid.insertRow();
        row.insertCell(0).textContent = '2024-11-16';  // Example Date
        row.insertCell(1).textContent = 'Purchase';   // Example Narration
        row.insertCell(2).textContent = '5000';       // Example Debit
    }

    function clearForm() {
        formInputs.forEach(input => input.value = '');
        DgvExpGrid.innerHTML = ''; // Clear table data
    }
});

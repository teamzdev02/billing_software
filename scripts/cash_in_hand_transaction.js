document.addEventListener('DOMContentLoaded', () => {
    // Handle form submission
    document.querySelector('#submitBtn').addEventListener('click', () => {
        const balance = document.querySelector('#balance').value;
        const amount = document.querySelector('#amount').value;
        const narration = document.querySelector('#narration').value;
        const remarks = document.querySelector('#remarks').value;
        const expense = document.querySelector('#expense').value;
        const laborExpense = document.querySelector('#laborExpense').value;

        if (balance && amount && narration && remarks) {
            alert('Transaction Submitted');
        } else {
            alert('Please fill in all fields');
        }
    });

    // Handle cancel button
    document.querySelector('#cancelBtn').addEventListener('click', () => {
        alert('Transaction Cancelled');
    });
});

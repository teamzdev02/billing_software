// Event listeners for buttons
document.getElementById('btnAdd').addEventListener('click', function() {
    alert('Add button clicked!');
});

document.getElementById('btnEdit').addEventListener('click', function() {
    alert('Edit button clicked!');
});

document.getElementById('btnDelete').addEventListener('click', function() {
    alert('Delete button clicked!');
});

// Submit button functionality
document.getElementById('submitBtn').addEventListener('click', function() {
    const bankName = document.getElementById('bankName').value;
    const amount = document.getElementById('amount').value;

    if (bankName && amount) {
        alert(`Bank: ${bankName}\nAmount: ${amount}`);
    } else {
        alert('Please fill out both fields');
    }
});

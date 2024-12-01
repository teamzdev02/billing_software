// Sample data array (this can be fetched dynamically from a server)
let dealerData = [
    { receiptNo: '001', amount: 5000, paymentMethod: 'Cash' },
    { receiptNo: '002', amount: 3000, paymentMethod: 'Cheque' }
];

// Function to render the dealer data in the table
function renderTable() {
    const tableBody = document.querySelector('#dealerDataTable tbody');
    tableBody.innerHTML = ''; // Clear the table body before rendering
    dealerData.forEach((data, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><input type="checkbox" class="row-select" data-index="${index}"></td>
            <td>${data.receiptNo}</td>
            <td>${data.amount}</td>
            <td>${data.paymentMethod}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to add a new row to the table
function addNewRow() {
    const receiptNo = prompt("Enter Receipt Number:");
    const amount = prompt("Enter Amount:");
    const paymentMethod = prompt("Enter Payment Method (cash/cheque/bank):");

    if (receiptNo && amount && paymentMethod) {
        dealerData.push({ receiptNo, amount, paymentMethod });
        renderTable();
    } else {
        alert("Please fill all fields.");
    }
}

// Function to remove selected rows
function removeSelectedRow() {
    const selectedRows = document.querySelectorAll('.row-select:checked');
    selectedRows.forEach(row => {
        const index = row.getAttribute('data-index');
        dealerData.splice(index, 1); // Remove the row from the data array
    });
    renderTable();
}

// Function to submit the receipt
function submitReceipt() {
    const date = document.querySelector('#date').value;
    const dealerName = document.querySelector('#dealerName').value;
    const debt = document.querySelector('#debt').value;
    const credit = document.querySelector('#credit').value;
    const availableBalance = document.querySelector('#availableBalance').value;
    const paymentMethod = document.querySelector('#paymentMethod').value;

    if (date && dealerName && debt && credit && availableBalance && paymentMethod) {
        // Here, you can send this data to your backend (server)
        alert(`Receipt Submitted for ${dealerName}`);
    } else {
        alert("Please fill in all the fields.");
    }
}

// Initialize the table when the page loads
document.addEventListener('DOMContentLoaded', () => {
    renderTable();
});

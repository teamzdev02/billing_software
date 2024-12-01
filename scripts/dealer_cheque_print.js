// Sample dealer cheque data, you can replace this with real data from the backend or API
const dealerData = [
    { chequeNo: '12345', dealerName: 'ABC Traders', amount: '5000', date: '2024-11-15', status: 'Paid' },
    { chequeNo: '12346', dealerName: 'XYZ Limited', amount: '3000', date: '2024-11-14', status: 'Pending' },
    { chequeNo: '12347', dealerName: 'Global Supplies', amount: '7000', date: '2024-11-13', status: 'Paid' }
];

// Function to render the report
function renderReport(data) {
    const tableBody = document.querySelector('#dealer-cheque-table tbody');
    
    // Clear previous table rows
    tableBody.innerHTML = '';

    data.forEach(dealer => {
        const row = document.createElement('tr');
        
        // Populate the table cells with data
        row.innerHTML = `
            <td>${dealer.chequeNo}</td>
            <td>${dealer.dealerName}</td>
            <td>${dealer.amount}</td>
            <td>${dealer.date}</td>
            <td>${dealer.status}</td>
        `;
        
        // Append the row to the table
        tableBody.appendChild(row);
    });
}

// Set the current date on the report header
function setReportDate() {
    const dateElement = document.querySelector('#report-date');
    const currentDate = new Date().toLocaleDateString();
    dateElement.textContent = currentDate;
}

// Initialize the report
function init() {
    renderReport(dealerData); // Populate data in the table
    setReportDate(); // Set the report generation date
}

// Call the init function when the page loads
init();

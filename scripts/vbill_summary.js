// vbillsummary.js

// Example data for the grid (can be replaced by actual data source)
const summaryData = [
    {
        date: '2024-01-01',
        code: '001',
        lno: 'LN001',
        lname: 'John Doe',
        debit: 1000,
        amount: 1500
    },
    {
        date: '2024-02-01',
        code: '002',
        lno: 'LN002',
        lname: 'Jane Smith',
        debit: 1200,
        amount: 1700
    }
];

// Function to populate the grid with data
function populateSummaryGrid() {
    const tableBody = document.querySelector('#billSummaryGrid tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    summaryData.forEach((summary) => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = summary.date;
        row.insertCell(1).textContent = summary.code;
        row.insertCell(2).textContent = summary.lno;
        row.insertCell(3).textContent = summary.lname;
        row.insertCell(4).textContent = summary.debit;
        row.insertCell(5).textContent = summary.amount;
    });
}

// Event listener for date field changes (optional, if you need to filter by date)
document.getElementById('mtb_TDate').addEventListener('change', function () {
    // Example: Filter grid by date (assuming the grid data has date property)
    // Here you can add your filtering logic if needed
    console.log('From Date selected:', this.value);
});

document.getElementById('mtb_FDate').addEventListener('change', function () {
    // Example: Filter grid by date (assuming the grid data has date property)
    // Here you can add your filtering logic if needed
    console.log('To Date selected:', this.value);
});

// Initial data population
populateSummaryGrid();

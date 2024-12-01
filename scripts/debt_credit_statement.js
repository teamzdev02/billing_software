// Sample data for DebtCreditStatement
let transactions = [
    { code: '001', date: '2024-11-01', vrtype: 'Type A', ledgercode: 'L001', ledgername: 'Ledger A', narration: 'Transaction A', debit: 1000, credit: 500, type: 'Debit' },
    { code: '002', date: '2024-11-02', vrtype: 'Type B', ledgercode: 'L002', ledgername: 'Ledger B', narration: 'Transaction B', debit: 500, credit: 300, type: 'Credit' },
    { code: '003', date: '2024-11-03', vrtype: 'Type C', ledgercode: 'L003', ledgername: 'Ledger C', narration: 'Transaction C', debit: 700, credit: 400, type: 'Debit' }
];

// Function to render transactions into the table (DebtCreditStatement)
function renderTransactions() {
    const tableBody = document.querySelector('#debtCreditTable tbody');
    tableBody.innerHTML = ''; // Clear existing rows
    
    transactions.forEach(transaction => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaction.code}</td>
            <td>${transaction.date}</td>
            <td>${transaction.vrtype}</td>
            <td>${transaction.ledgercode}</td>
            <td>${transaction.ledgername}</td>
            <td>${transaction.narration}</td>
            <td>${transaction.debit}</td>
            <td>${transaction.credit}</td>
            <td>${transaction.type}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to handle form submission for DebtCreditStatement
document.getElementById('btnSubmit').addEventListener('click', () => {
    const date = document.getElementById('mtbDate').value;
    const category = document.getElementById('cmbCategory').value;
    const year = document.getElementById('txtYear').value;
    const month = document.getElementById('txtMonth').value;
    const day = document.getElementById('txtDay').value;

    console.log(`Form Submitted with: Date: ${date}, Category: ${category}, Year: ${year}, Month: ${month}, Day: ${day}`);
    // Here you can filter or fetch new data based on the above values

    renderTransactions(); // Re-render the table with filtered data (for now, we just display all)
});

// Initial render of transactions for DebtCreditStatement
renderTransactions();

// Handling the report generation and printing for DebtCreditStatementPr
document.getElementById('btnGenerateReport').addEventListener('click', () => {
    const reportDate = document.getElementById('reportDate').value;
    
    console.log(`Report Generated for Date: ${reportDate}`);
    document.getElementById('reportViewer').innerHTML = `
        <h2>Report for ${reportDate}</h2>
        <p>Report content will go here.</p>
    `;
});

document.getElementById('btnPrintReport').addEventListener('click', () => {
    const reportContent = document.getElementById('reportViewer').innerHTML;
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Report</title></head><body>');
    printWindow.document.write(reportContent);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
});

document.addEventListener('DOMContentLoaded', () => {
    const billSummaryTable = document.getElementById('billSummaryTable').getElementsByTagName('tbody')[0];
    const filterForm = document.getElementById('filterForm');

    // Example data for demonstration
    const billSummaryData = [
        { date: '2024-01-01', code: '001', ledgerNo: '1001', ledgerName: 'Sample Ledger 1', amount: 500 },
        { date: '2024-01-02', code: '002', ledgerNo: '1002', ledgerName: 'Sample Ledger 2', amount: 750 },
        { date: '2024-01-03', code: '003', ledgerNo: '1003', ledgerName: 'Sample Ledger 3', amount: 1000 }
    ];

    function renderTable(data) {
        billSummaryTable.innerHTML = ''; // Clear existing rows

        if (data.length === 0) {
            const row = billSummaryTable.insertRow();
            const cell = row.insertCell(0);
            cell.colSpan = 5;
            cell.textContent = 'No records found';
            cell.style.textAlign = 'center';
            return;
        }

        data.forEach(item => {
            const row = billSummaryTable.insertRow();
            row.innerHTML = `
                <td>${item.date}</td>
                <td>${item.code}</td>
                <td>${item.ledgerNo}</td>
                <td>${item.ledgerName}</td>
                <td>$${item.amount.toFixed(2)}</td>
            `;
        });
    }

    // Filter form submission
    filterForm.addEventListener('submit', event => {
        event.preventDefault();

        const group = document.getElementById('txt_Group').value.toLowerCase();
        const ledger = document.getElementById('txt_Ledger').value.toLowerCase();
        const ledgerName = document.getElementById('txt_LedgerName').value.toLowerCase();

        // Simulate filtering (replace with actual logic if necessary)
        const filteredData = billSummaryData.filter(item => {
            return (
                (group ? item.ledgerName.toLowerCase().includes(group) : true) &&
                (ledger ? item.code.toLowerCase().includes(ledger) : true) &&
                (ledgerName ? item.ledgerName.toLowerCase().includes(ledgerName) : true)
            );
        });

        renderTable(filteredData);
    });

    // Initial table render
    renderTable(billSummaryData);
});

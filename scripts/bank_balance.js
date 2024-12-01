document.addEventListener('DOMContentLoaded', () => {
    const bankBalanceTable = document.getElementById('bankBalanceTable').getElementsByTagName('tbody')[0];
    const refreshBtn = document.getElementById('refreshBtn');
    const exportBtn = document.getElementById('exportBtn');
    const progressBar = document.getElementById('progressBar');

    // Example bank balances data
    const bankBalances = [
        { bankName: 'Sample Bank', balance: '$10,000' }
    ];

    function renderTable() {
        bankBalanceTable.innerHTML = ''; // Clear current rows

        bankBalances.forEach(bank => {
            const row = bankBalanceTable.insertRow();
            row.innerHTML = `
                <td>${bank.bankName}</td>
                <td>${bank.balance}</td>
            `;
        });
    }

    // Refresh data
    refreshBtn.addEventListener('click', () => {
        progressBar.value = 0;
        const interval = setInterval(() => {
            progressBar.value += 10;
            if (progressBar.value >= 100) {
                clearInterval(interval);
                alert("Data refreshed successfully");
            }
        }, 100);
        renderTable();
    });

    // Export data (for demo, just a message)
    exportBtn.addEventListener('click', () => {
        alert("Data exported successfully");
    });

    // Initial render
    renderTable();
});

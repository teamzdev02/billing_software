document.addEventListener('DOMContentLoaded', () => {
    const balanceData = [];

    // Toolbar buttons
    document.getElementById('toolAdd').addEventListener('click', addRecord);
    document.getElementById('toolUpdate').addEventListener('click', updateRecord);
    document.getElementById('toolDelete').addEventListener('click', deleteRecord);
    document.getElementById('toolExport').addEventListener('click', exportData);

    // Filter checkbox
    document.getElementById('filterDebtCredit').addEventListener('change', filterDebtCredit);

    function addRecord() {
        // Add a new record (dummy data here for demonstration)
        balanceData.push({
            customerName: 'New Customer',
            debt: 100,
            credit: 50,
            code: 'C123',
            date: new Date().toISOString().split('T')[0],
            amount: 150,
            balance: 50
        });
        refreshTable();
        updateSummary();
    }

    function updateRecord() {
        // Update the selected record (logic to select specific record needed)
        if (balanceData.length) {
            const lastRecord = balanceData[balanceData.length - 1];
            lastRecord.credit += 10;
            refreshTable();
            updateSummary();
        }
    }

    function deleteRecord() {
        // Delete the last record for demonstration (implement specific selection logic as needed)
        if (balanceData.length) {
            balanceData.pop();
            refreshTable();
            updateSummary();
        }
    }

    function exportData() {
        // Export the data to console (or implement actual export logic)
        console.log("Exporting data:", JSON.stringify(balanceData));
        alert("Data exported to console.");
    }

    function filterDebtCredit() {
        // Filter balanceData based on debt/credit checkbox and refresh table
        const filteredData = balanceData.filter(item => item.debt > 0 || item.credit > 0);
        refreshTable(filteredData);
    }

    function refreshTable(data = balanceData) {
        // Refresh table contents based on balanceData or filtered data
        const tbody = document.getElementById('balanceTable').querySelector('tbody');
        tbody.innerHTML = '';

        data.forEach(item => {
            const row = `<tr>
                <td>${item.customerName}</td>
                <td>${item.debt}</td>
                <td>${item.credit}</td>
                <td>${item.code}</td>
                <td>${item.date}</td>
                <td>${item.amount}</td>
                <td>${item.balance}</td>
            </tr>`;
            tbody.innerHTML += row;
        });
    }

    function updateSummary() {
        // Update summary values
        const total = balanceData.reduce((acc, item) => acc + item.balance, 0);
        const credit = balanceData.reduce((acc, item) => acc + item.credit, 0);
        const debt = balanceData.reduce((acc, item) => acc + item.debt, 0);

        document.getElementById('lbl_Total').textContent = total;
        document.getElementById('lbl_CreditAmt').textContent = credit;
        document.getElementById('lbl_Debt').textContent = debt;
    }
});

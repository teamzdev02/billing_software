document.addEventListener('DOMContentLoaded', () => {
    const ledgerTable = document.getElementById('ledgerTable').getElementsByTagName('tbody')[0];
    const bankLedgerForm = document.getElementById('bankLedgerForm');
    const progressBar = document.getElementById('progressBar');
    const refreshBtn = document.getElementById('refreshBtn');

    // Example ledger data
    const ledgerData = [
        {
            type: 'Savings',
            name: 'Sample Account',
            number: '123456789',
            passbook: '12345',
            bank: 'Sample Bank',
            balance: 1000,
            code: 'AC123',
            address: '123 Sample Street'
        }
    ];

    function renderTable() {
        ledgerTable.innerHTML = ''; // Clear current rows

        ledgerData.forEach(entry => {
            const row = ledgerTable.insertRow();
            row.innerHTML = `
                <td>${entry.type}</td>
                <td>${entry.name}</td>
                <td>${entry.number}</td>
                <td>${entry.passbook}</td>
                <td>${entry.bank}</td>
                <td>${entry.balance}</td>
                <td>${entry.code}</td>
                <td>${entry.address}</td>
            `;
        });
    }

    // Form submission handler
    bankLedgerForm.addEventListener('submit', e => {
        e.preventDefault();

        const newEntry = {
            type: document.getElementById('Cbo_Type').value,
            name: document.getElementById('txt_AccoName').value,
            number: document.getElementById('txt_AccNo').value,
            passbook: document.getElementById('txt_PassNo').value,
            bank: document.getElementById('txt_Bank').value,
            balance: document.getElementById('txt_ob').value,
            code: document.getElementById('txt_Mcode').value,
            address: document.getElementById('txt_Address').value
        };

        ledgerData.push(newEntry);
        renderTable();

        bankLedgerForm.reset();
        alert('Entry added successfully!');
    });

    // Refresh button
    refreshBtn.addEventListener('click', () => {
        progressBar.value = 0;
        const interval = setInterval(() => {
            progressBar.value += 10;
            if (progressBar.value >= 100) {
                clearInterval(interval);
                alert('Table refreshed!');
            }
        }, 100);
    });

    // Initial render
    renderTable();
});

document.addEventListener('DOMContentLoaded', () => {
    const bankAccountTable = document.getElementById('bankAccountTable').getElementsByTagName('tbody')[0];
    const addBtn = document.getElementById('addBtn');
    const deleteBtn = document.getElementById('deleteBtn');
    const bankSelector = document.getElementById('cbo_BankName');

    // Example bank accounts data
    const bankAccounts = [
        { accountNumber: '12345', accountName: 'Sample Account', branch: 'New York', balance: '$1,000', unit: 'Unit1', make: 'Make1', type: 'Type1', name: 'John Doe' }
    ];

    function renderTable() {
        bankAccountTable.innerHTML = ''; // Clear current rows

        bankAccounts.forEach(account => {
            const row = bankAccountTable.insertRow();
            row.innerHTML = `
                <td>${account.accountNumber}</td>
                <td>${account.accountName}</td>
                <td>${account.branch}</td>
                <td>${account.balance}</td>
                <td>${account.unit}</td>
                <td>${account.make}</td>
                <td>${account.type}</td>
                <td>${account.name}</td>
            `;
        });
    }

    // Add new account
    addBtn.addEventListener('click', () => {
        const newAccount = {
            accountNumber: '54321',
            accountName: 'New Account',
            branch: 'Chicago',
            balance: '$2,500',
            unit: 'Unit2',
            make: 'Make2',
            type: 'Type2',
            name: 'Jane Smith'
        };
        bankAccounts.push(newAccount);
        renderTable();
    });

    // Delete last account
    deleteBtn.addEventListener('click', () => {
        if (bankAccounts.length > 0) {
            bankAccounts.pop();
            renderTable();
        }
    });

    // Bank Selection
    bankSelector.addEventListener('change', (e) => {
        alert(`Selected bank: ${e.target.value}`);
    });

    // Initial render
    renderTable();
});

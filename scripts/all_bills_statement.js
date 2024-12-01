document.addEventListener('DOMContentLoaded', () => {
    const chkSelectAll = document.getElementById('chk_select_all');
    const chkRows = document.querySelectorAll('.select-row');

    // Select All functionality
    chkSelectAll.addEventListener('change', (e) => {
        const isChecked = e.target.checked;
        chkRows.forEach((checkbox) => {
            checkbox.checked = isChecked;
        });
    });

    // Load example data (if needed)
    const billStatementTable = document.getElementById('billStatementTable').getElementsByTagName('tbody')[0];

    const exampleData = [
        { supplier: 'Supplier A', inQty: 100, inRate: 50, inTRate: 5000, debit: 1000, outQty: 50, outRate: 40, outTRate: 2000, balance: 2000 },
        { supplier: 'Supplier B', inQty: 150, inRate: 45, inTRate: 6750, debit: 2000, outQty: 75, outRate: 35, outTRate: 2625, balance: 2125 }
    ];

    function renderTable(data) {
        billStatementTable.innerHTML = ''; // Clear table

        data.forEach((item) => {
            const row = billStatementTable.insertRow();
            row.innerHTML = `
                <td>${item.supplier}</td>
                <td>${item.inQty}</td>
                <td>$${item.inRate}</td>
                <td>$${item.inTRate}</td>
                <td>$${item.debit}</td>
                <td>${item.outQty}</td>
                <td>$${item.outRate}</td>
                <td>$${item.outTRate}</td>
                <td>$${item.balance}</td>
                <td><input type="checkbox" class="select-row"></td>
            `;
        });
    }

    renderTable(exampleData);
});

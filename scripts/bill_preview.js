document.addEventListener('DOMContentLoaded', () => {
    const billPreviewTable = document.getElementById('billPreviewTable').getElementsByTagName('tbody')[0];
    const lbl_NetAmot = document.getElementById('lbl_NetAmot');

    // Example Data
    const billItems = [
        { sno: 1, itemCode: '001', subproduct: 'Product A', qty: 10, pack: 'Box', rate: 20, kulee: 5, totalRate: 205 },
        { sno: 2, itemCode: '002', subproduct: 'Product B', qty: 5, pack: 'Bottle', rate: 30, kulee: 3, totalRate: 153 }
    ];

    // Render Table Data
    function renderTable(data) {
        billPreviewTable.innerHTML = ''; // Clear table

        if (data.length === 0) {
            const row = billPreviewTable.insertRow();
            const cell = row.insertCell(0);
            cell.colSpan = 8;
            cell.textContent = 'No items found';
            cell.style.textAlign = 'center';
            return;
        }

        data.forEach(item => {
            const row = billPreviewTable.insertRow();
            row.innerHTML = `
                <td>${item.sno}</td>
                <td>${item.itemCode}</td>
                <td>${item.subproduct}</td>
                <td>${item.qty}</td>
                <td>${item.pack}</td>
                <td>$${item.rate}</td>
                <td>$${item.kulee}</td>
                <td>$${item.totalRate}</td>
            `;
        });

        updateNetAmount(data);
    }

    // Update Net Amount
    function updateNetAmount(data) {
        const netAmount = data.reduce((sum, item) => sum + item.totalRate, 0);
        lbl_NetAmot.textContent = `$${netAmount.toFixed(2)}`;
    }

    // Initial Render
    renderTable(billItems);
});

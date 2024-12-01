document.addEventListener('DOMContentLoaded', () => {
    const dgvGrid = document.getElementById('dgvGrid').getElementsByTagName('tbody')[0];

    // Sample Data
    const sampleData = [
        ['Supplier 1', 100, 50, 60, 5000, 200, 40, 50, 'Details'],
        ['Supplier 2', 150, 45, 55, 6000, 250, 35, 45, 'Details'],
    ];

    // Populate Grid
    sampleData.forEach(rowData => {
        const row = dgvGrid.insertRow();
        rowData.forEach(cellData => {
            const cell = row.insertCell();
            cell.textContent = cellData;
        });
    });
});

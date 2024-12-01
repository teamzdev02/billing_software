document.addEventListener('DOMContentLoaded', () => {
    const dataGridView = document.getElementById('dataGridView').getElementsByTagName('tbody')[0];

    // Sample Data
    const sampleData = [
        ['Item 1', 'Category 1', 10, 'Brand A', 'Details'],
        ['Item 2', 'Category 2', 20, 'Brand B', 'Details'],
    ];

    // Populate Grid
    sampleData.forEach(rowData => {
        const row = dataGridView.insertRow();
        rowData.forEach(cellData => {
            const cell = row.insertCell();
            cell.textContent = cellData;
        });
    });

    // Toolbar button click events
    document.getElementById('toolStripButton2').addEventListener('click', () => {
        alert('Button 1 clicked');
    });
    document.getElementById('toolStripButton5').addEventListener('click', () => {
        alert('Button 2 clicked');
    });
    document.getElementById('toolStripButton6').addEventListener('click', () => {
        alert('Button 3 clicked');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const dataGrid = document.querySelector('#dataGrid tbody');

    // Example row addition function
    function addRow(data) {
        const row = document.createElement('tr');
        data.forEach((cellData) => {
            const cell = document.createElement('td');
            cell.textContent = cellData;
            row.appendChild(cell);
        });
        dataGrid.appendChild(row);
    }

    // Example: Add dummy data
    addRow([
        'INV001', '2024-11-16', 'Term1', 'ProductA', 'SubProductA', 
        '100.00', '10', '120.00', '1000.00', 'Pack1', 
        'MFR1', 'Batch1', '2025-01-01', '5%', '50.00', 
        '12345', '10%', 'Customer1', 'ItemA', '1000.00', 
        '1050.00', '5%'
    ]);

    // Add event listeners for toolbar buttons
    document.querySelector('#newBtn').addEventListener('click', () => {
        alert('New button clicked');
    });

    document.querySelector('#saveBtn').addEventListener('click', () => {
        alert('Save button clicked');
    });

    document.querySelector('#deleteBtn').addEventListener('click', () => {
        alert('Delete button clicked');
    });

    document.querySelector('#closeBtn').addEventListener('click', () => {
        alert('Close button clicked');
    });
});

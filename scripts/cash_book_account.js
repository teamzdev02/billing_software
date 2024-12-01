document.addEventListener('DOMContentLoaded', () => {
    const cashBookTable = document.querySelector('#cashBookTable tbody');

    // Example function to add a row dynamically
    function addRow(data) {
        const row = document.createElement('tr');
        data.forEach((cellData) => {
            const cell = document.createElement('td');
            cell.textContent = cellData;
            row.appendChild(cell);
        });
        cashBookTable.appendChild(row);
    }

    // Example: Add dummy data
    addRow(['1', 'Main Account', 'Value1', 'Value2', 'Unit1', 'Make1', 'Extra1', 'John Doe']);
    addRow(['2', 'Savings Account', 'Value3', 'Value4', 'Unit2', 'Make2', 'Extra2', 'Jane Smith']);

    // Toolbar button actions
    document.querySelector('#filterBtn').addEventListener('click', () => {
        alert('Filter applied');
    });

    document.querySelector('#printBtn').addEventListener('click', () => {
        window.print();
    });

    document.querySelector('#closeBtn').addEventListener('click', () => {
        alert('Close button clicked');
    });
});

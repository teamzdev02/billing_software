// vbill.js

// Example data for the grid (can be replaced by actual data source)
const billData = [
    {
        supplierName: 'Supplier A',
        inQty: 10,
        inRate: 200,
        inTRate: 250,
        debit: 1000,
        outQty: 5,
        outRate: 150,
        outTRate: 200,
        column3: 'Data A',
        isSelected: false
    },
    {
        supplierName: 'Supplier B',
        inQty: 20,
        inRate: 300,
        inTRate: 350,
        debit: 2000,
        outQty: 8,
        outRate: 180,
        outTRate: 220,
        column3: 'Data B',
        isSelected: false
    }
];

// Function to populate the grid with data
function populateDataGrid() {
    const tableBody = document.querySelector('#billStatementGrid tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    billData.forEach((bill) => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = bill.supplierName;
        row.insertCell(1).textContent = bill.inQty;
        row.insertCell(2).textContent = bill.inRate;
        row.insertCell(3).textContent = bill.inTRate;
        row.insertCell(4).textContent = bill.debit;
        row.insertCell(5).textContent = bill.outQty;
        row.insertCell(6).textContent = bill.outRate;
        row.insertCell(7).textContent = bill.outTRate;
        row.insertCell(8).textContent = bill.column3;

        const selectCell = row.insertCell(9);
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = bill.isSelected;
        checkbox.addEventListener('change', function () {
            bill.isSelected = checkbox.checked;
        });
        selectCell.appendChild(checkbox);
    });
}

// Event listener for date field changes (optional, if you need to filter by date)
document.getElementById('mtb_TDate').addEventListener('change', function () {
    // Example: Filter grid by date (assuming the grid data has date property)
    // Here you can add your filtering logic if needed
    console.log('Date selected:', this.value);
});

// Initial data population
populateDataGrid();

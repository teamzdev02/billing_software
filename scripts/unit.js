// unit.js

// Example data for the grid (can be replaced by actual data source)
const unitsData = [
    { code: 'U001', name: 'Unit A', isActive: true },
    { code: 'U002', name: 'Unit B', isActive: false }
];

// Function to refresh the data grid
function refreshDataGrid() {
    const tableBody = document.querySelector('#unitDataGrid tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    unitsData.forEach((unit) => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = unit.code;
        row.insertCell(1).textContent = unit.name;
        row.insertCell(2).textContent = unit.isActive ? 'Active' : 'Inactive';
    });
}

// Event listener for the Add button
document.getElementById('addButton').addEventListener('click', function () {
    const code = document.getElementById('txt_Mcode').value;
    const name = document.getElementById('txt_mname').value;
    const isActive = document.getElementById('checkBox1').checked;

    if (code && name) {
        unitsData.push({ code, name, isActive });
        refreshDataGrid();
        clearForm();
    } else {
        alert('Please fill in all fields.');
    }
});

// Event listener for the Edit button
document.getElementById('editButton').addEventListener('click', function () {
    const code = document.getElementById('txt_Mcode').value;
    const name = document.getElementById('txt_mname').value;
    const isActive = document.getElementById('checkBox1').checked;

    const unitIndex = unitsData.findIndex((unit) => unit.code === code);
    if (unitIndex !== -1) {
        unitsData[unitIndex] = { code, name, isActive };
        refreshDataGrid();
        clearForm();
    } else {
        alert('Unit not found.');
    }
});

// Event listener for the Delete button
document.getElementById('deleteButton').addEventListener('click', function () {
    const code = document.getElementById('txt_Mcode').value;

    const unitIndex = unitsData.findIndex((unit) => unit.code === code);
    if (unitIndex !== -1) {
        unitsData.splice(unitIndex, 1);
        refreshDataGrid();
        clearForm();
    } else {
        alert('Unit not found.');
    }
});

// Function to clear form inputs
function clearForm() {
    document.getElementById('txt_Mcode').value = '';
    document.getElementById('txt_mname').value = '';
    document.getElementById('checkBox1').checked = false;
}

// Event listener for the Refresh button
document.getElementById('refreshButton').addEventListener('click', function () {
    refreshDataGrid();
});

// Initial data load
refreshDataGrid();

document.addEventListener('DOMContentLoaded', () => {
    const categoryTable = document.querySelector('#categoryTable tbody');
    const mcodeInput = document.querySelector('#mcode');
    const mnameInput = document.querySelector('#mname');
    const isActiveCheckbox = document.querySelector('#isActive');

    // Dummy data for the category grid
    const categories = [
        { code: '001', name: 'Medicine A', isActive: true },
        { code: '002', name: 'Medicine B', isActive: false }
    ];

    // Function to add a row dynamically to the table
    function addRow(data) {
        const row = document.createElement('tr');
        data.forEach((cellData) => {
            const cell = document.createElement('td');
            cell.textContent = cellData;
            row.appendChild(cell);
        });
        categoryTable.appendChild(row);
    }

    // Populate the table with dummy data
    categories.forEach(category => {
        addRow([category.code, category.name, category.isActive ? 'Yes' : 'No']);
    });

    // Toolbar button actions
    document.querySelector('#addBtn').addEventListener('click', () => {
        mcodeInput.value = '';
        mnameInput.value = '';
        isActiveCheckbox.checked = false;
    });

    document.querySelector('#editBtn').addEventListener('click', () => {
        const selectedRow = categoryTable.querySelector('tr.selected');
        if (selectedRow) {
            mcodeInput.value = selectedRow.cells[0].textContent;
            mnameInput.value = selectedRow.cells[1].textContent;
            isActiveCheckbox.checked = selectedRow.cells[2].textContent === 'Yes';
        } else {
            alert('Please select a row to edit.');
        }
    });

    document.querySelector('#deleteBtn').addEventListener('click', () => {
        const selectedRow = categoryTable.querySelector('tr.selected');
        if (selectedRow) {
            selectedRow.remove();
        } else {
            alert('Please select a row to delete.');
        }
    });

    document.querySelector('#saveBtn').addEventListener('click', () => {
        const code = mcodeInput.value;
        const name = mnameInput.value;
        const isActive = isActiveCheckbox.checked;

        if (code && name) {
            alert('Category Saved');
            addRow([code, name, isActive ? 'Yes' : 'No']);
        } else {
            alert('Please fill all fields.');
        }
    });

    document.querySelector('#refreshBtn').addEventListener('click', () => {
        alert('Data Refreshed');
    });

    // Table row selection for edit/delete
    categoryTable.addEventListener('click', (event) => {
        if (event.target.tagName === 'TD') {
            const row = event.target.closest('tr');
            categoryTable.querySelectorAll('tr').forEach(r => r.classList.remove('selected'));
            row.classList.add('selected');
        }
    });
});

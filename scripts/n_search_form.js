// Sample data for the table
const sampleData = [
    { column1: 'John Doe', column2: 'Product A', column3: '10' },
    { column1: 'Jane Smith', column2: 'Product B', column3: '20' },
    { column1: 'George Johnson', column2: 'Product C', column3: '30' },
    { column1: 'Mary Brown', column2: 'Product D', column3: '40' },
    { column1: 'James White', column2: 'Product E', column3: '50' },
];

// Function to populate the table with data
function populateTable(data) {
    const tbody = document.querySelector("#gvSearch tbody");
    tbody.innerHTML = ''; // Clear existing rows

    data.forEach(row => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${row.column1}</td><td>${row.column2}</td><td>${row.column3}</td>`;
        tbody.appendChild(tr);
    });
}

// Function to filter the table based on the filter text
function filterTable() {
    const filterText = document.getElementById('filterText').value.toLowerCase();
    const filteredData = sampleData.filter(row => 
        row.column1.toLowerCase().includes(filterText) ||
        row.column2.toLowerCase().includes(filterText) ||
        row.column3.toLowerCase().includes(filterText)
    );
    populateTable(filteredData);
}

// Event listener for the filter input
document.getElementById('filterText').addEventListener('input', filterTable);

// Initial population of the table with sample data
populateTable(sampleData);

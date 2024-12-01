// type2bill.js

// Handle form submission
document.getElementById('type2BillForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission
    
    // Gather form data
    const formData = new FormData(event.target);
    const formValues = {};
    formData.forEach((value, key) => {
        formValues[key] = value;
    });

    // Example: Insert form data into the data grid
    insertDataIntoGrid(formValues);
});

// Function to insert data into the table
function insertDataIntoGrid(data) {
    const tableBody = document.querySelector('#dataGrid tbody');
    const newRow = tableBody.insertRow();

    // Insert new cells and fill with data
    Object.values(data).forEach((value, index) => {
        const cell = newRow.insertCell(index);
        cell.textContent = value;
    });
}

// Function to update progress bar
function updateProgressBar(value) {
    const progressBar = document.getElementById("progressBar1");
    progressBar.value = value;
}

// Example usage: Update the progress bar
updateProgressBar(50);  // Update progress to 50%

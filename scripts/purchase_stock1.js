document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("button3");
    const removeButton = document.getElementById("button4");
    const tableBody = document.querySelector("#dataGridView1 tbody");
    const progressBar = document.getElementById("progressBar1");

    // Add Product Row
    addButton.addEventListener("click", () => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>INV001</td>
            <td>D001</td>
            <td>${new Date().toLocaleDateString()}</td>
            <td>Category 1</td>
            <td>Subcategory 1</td>
            <td>10</td>
            <td>100</td>
            <td>120</td>
            <td>5%</td>
            <td>10%</td>
            <td>Yes</td>
        `;
        updateProgressBar();
    });

    // Remove Product Row
    removeButton.addEventListener("click", () => {
        if (tableBody.rows.length > 0) {
            tableBody.deleteRow(0);
            updateProgressBar();
        }
    });

    // Update Progress Bar
    function updateProgressBar() {
        const totalRows = tableBody.rows.length;
        const progressValue = Math.min((totalRows / 20) * 100, 100);
        progressBar.value = progressValue;
    }
});

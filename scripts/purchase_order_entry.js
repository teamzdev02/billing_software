document.addEventListener("DOMContentLoaded", () => {
    const saveButton = document.getElementById("toolStripButton2");
    const addProductButton = document.getElementById("button3");
    const removeProductButton = document.getElementById("button4");
    const tableBody = document.querySelector("#dataGridView1 tbody");
    const progressBar = document.getElementById("progressBar1");

    // Sample product data
    const products = [
        { itemCode: "P001", productName: "Product A", rate: 100, qty: 10, discount: 5, vat: 10 },
        { itemCode: "P002", productName: "Product B", rate: 150, qty: 5, discount: 10, vat: 12 }
    ];

    // Add Product to the table
    addProductButton.addEventListener("click", () => {
        const product = {
            itemCode: "P003",
            productName: "Product C",
            rate: 120,
            qty: 8,
            discount: 8,
            vat: 15
        };

        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>1</td>
            <td>${product.itemCode}</td>
            <td>${product.productName}</td>
            <td>${product.rate}</td>
            <td>${product.qty}</td>
            <td>${product.rate * product.qty}</td>
            <td>${product.discount}</td>
            <td>${product.vat}</td>
        `;

        updateProgressBar();
    });

    // Remove Product from the table
    removeProductButton.addEventListener("click", () => {
        if (tableBody.rows.length > 0) {
            tableBody.deleteRow(0);
            updateProgressBar();
        }
    });

    // Save Order
    saveButton.addEventListener("click", () => {
        alert("Order saved successfully!");
    });

    // Update progress bar
    function updateProgressBar() {
        const totalRows = tableBody.rows.length;
        const progressValue = Math.min((totalRows / 10) * 100, 100);
        progressBar.value = progressValue;
    }
});

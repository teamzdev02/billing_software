document.addEventListener("DOMContentLoaded", () => {
    const dataGridView1 = document.getElementById("dataGridView1");
    const txtProductName = document.getElementById("txt_ProductName");
    const txtBrand = document.getElementById("txt_Brand");
    const txtQty = document.getElementById("txt_qty");
    const txtRate = document.getElementById("txt_rate");
    const toolStripButton1 = document.getElementById("toolStripButton1");
    const toolStripButton2 = document.getElementById("toolStripButton2");
    const toolStripButton5 = document.getElementById("toolStripButton5");
    const toolStripButton6 = document.getElementById("toolStripButton6");

    let serialNo = 1;

    // Add Product to the Table
    const addProduct = () => {
        if (!txtProductName.value || !txtBrand.value || !txtQty.value || !txtRate.value) {
            alert("Please fill in all fields.");
            return;
        }

        const tbody = dataGridView1.querySelector("tbody");
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${serialNo++}</td>
            <td>INV${Math.floor(Math.random() * 1000)}</td>
            <td>${new Date().toLocaleDateString()}</td>
            <td>${Math.random().toString(36).substr(2, 5).toUpperCase()}</td>
            <td>Customer ${serialNo}</td>
            <td>${txtProductName.value}</td>
            <td>Sub-Product</td>
            <td>Pack</td>
            <td>${txtBrand.value}</td>
            <td>Batch123</td>
            <td>2025-12-31</td>
            <td>Size</td>
            <td>${txtQty.value}</td>
            <td>Yes</td>
            <td>${txtQty.value}</td>
            <td>${txtRate.value}</td>
            <td>${(txtQty.value * txtRate.value).toFixed(2)}</td>
            <td>Discount</td>
            <td>CUS${serialNo}</td>
            <td>Unit</td>
            <td>VAT</td>
            <td>Margin</td>
        `;

        tbody.appendChild(tr);
        clearInputs();
    };

    // Remove Selected Products
    const removeProduct = () => {
        const tbody = dataGridView1.querySelector("tbody");
        if (tbody.lastChild) {
            tbody.removeChild(tbody.lastChild);
        }
    };

    // Clear All Inputs
    const clearInputs = () => {
        txtProductName.value = "";
        txtBrand.value = "";
        txtQty.value = "";
        txtRate.value = "";
    };

    // Event Listeners
    toolStripButton1.addEventListener("click", addProduct);
    toolStripButton2.addEventListener("click", removeProduct);
    toolStripButton6.addEventListener("click", clearInputs);

    toolStripButton5.addEventListener("click", () => {
        alert("Product saved successfully!");
    });
});

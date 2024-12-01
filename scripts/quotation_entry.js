document.addEventListener("DOMContentLoaded", () => {
    const addItemButton = document.getElementById("button1");
    const removeItemButton = document.getElementById("button2");
    const tableBody = document.querySelector("#dataGridView1 tbody");
    const progressBar = document.getElementById("progressBar1");

    // Add item to the table
    addItemButton.addEventListener("click", () => {
        const sno = tableBody.rows.length + 1;
        const itemCode = document.getElementById("txt_ItemCode").value;
        const productName = document.getElementById("txt_ProductName").value;
        const brand = document.getElementById("txt_Brand").value;
        const quantity = document.getElementById("txt_qty").value;
        const rate = document.getElementById("txt_rate").value;
        const mrp = document.getElementById("txt_MRP").value;
        const discount = document.getElementById("txt_discount").value;

        const total = (quantity * rate * (1 - discount / 100)).toFixed(2);

        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${sno}</td>
            <td>INV${sno.toString().padStart(3, "0")}</td>
            <td>${new Date().toLocaleDateString()}</td>
            <td>${itemCode}</td>
            <td>${document.getElementById("txt_Customer").value}</td>
            <td>${productName}</td>
            <td>${brand}</td>
            <td>${quantity}</td>
            <td>${rate}</td>
            <td>${mrp}</td>
            <td>${discount}</td>
            <td>${total}</td>
        `;

        updateProgressBar();
    });

    // Remove the last item
    removeItemButton.addEventListener("click", () => {
        if (tableBody.rows.length > 0) {
            tableBody.deleteRow(-1);
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

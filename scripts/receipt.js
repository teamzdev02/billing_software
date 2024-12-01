document.addEventListener("DOMContentLoaded", () => {
    const addReceiptButton = document.getElementById("buttonAdd");
    const removeReceiptButton = document.getElementById("buttonRemove");
    const tableBody = document.querySelector("#dataGridView1 tbody");

    // Add a new receipt row
    addReceiptButton.addEventListener("click", () => {
        const invoiceNo = `INV${tableBody.rows.length + 1}`;
        const date = document.getElementById("dateTimePicker1").value;
        const customerName = document.getElementById("textBox5").value;
        const amount = parseFloat(document.getElementById("textBox2").value || 0).toFixed(2);
        const discount = (amount * 0.1).toFixed(2); // Assuming a 10% discount
        const netAmount = (amount - discount).toFixed(2);
        const paymentType = document.getElementById("comboBox1").value;
        const referenceNo = document.getElementById("textBox3").value;
        const remarks = "Completed";
        const status = "Active";

        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${invoiceNo}</td>
            <td>${date}</td>
            <td>${customerName}</td>
            <td>${amount}</td>
            <td>${discount}</td>
            <td>${netAmount}</td>
            <td>${paymentType}</td>
            <td>${referenceNo}</td>
            <td>${remarks}</td>
            <td>${status}</td>
        `;
    });

    // Remove the last receipt row
    removeReceiptButton.addEventListener("click", () => {
        if (tableBody.rows.length > 0) {
            tableBody.deleteRow(-1);
        }
    });
});

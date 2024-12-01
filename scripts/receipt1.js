document.addEventListener("DOMContentLoaded", () => {
    const addRowButton = document.getElementById("addRow");
    const removeRowButton = document.getElementById("removeRow");
    const tableBody = document.querySelector("#dataGridView1 tbody");

    // Add a new receipt row
    addRowButton.addEventListener("click", () => {
        const receiptNo = `R${tableBody.rows.length + 1}`;
        const date = document.getElementById("dateTimePicker2").value;
        const customerName = document.getElementById("textBox3").value;
        const amount = parseFloat(document.getElementById("textBox4").value || 0).toFixed(2);
        const remarks = document.getElementById("textBox5").value;
        const paymentMethod = document.getElementById("comboBox1").value;
        const referenceNo = document.getElementById("textBox6").value;
        const netAmount = parseFloat(document.getElementById("textBox7").value || 0).toFixed(2);
        const status = "Active";
        const type = document.querySelector('input[name="type"]:checked').value;

        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${receiptNo}</td>
            <td>${date}</td>
            <td>${customerName}</td>
            <td>${amount}</td>
            <td>${remarks}</td>
            <td>${paymentMethod}</td>
            <td>${referenceNo}</td>
            <td>${netAmount}</td>
            <td>${status}</td>
            <td>${type}</td>
        `;
    });

    // Remove the last receipt row
    removeRowButton.addEventListener("click", () => {
        if (tableBody.rows.length > 0) {
            tableBody.deleteRow(-1);
        }
    });
});

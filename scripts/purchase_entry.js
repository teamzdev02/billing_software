document.addEventListener("DOMContentLoaded", () => {
    const toolbarButtons = {
        save: document.getElementById("toolStripButton1"),
        edit: document.getElementById("toolStripButton2"),
        delete: document.getElementById("toolStripButton6"),
        print: document.getElementById("toolStripButton7"),
    };

    const nameField = document.getElementById("txt_Name");
    const productField = document.getElementById("txt_Product");
    const qtyField = document.getElementById("txt_qty");
    const rateField = document.getElementById("txt_rate");
    const table = document.getElementById("dataGridView1").getElementsByTagName("tbody")[0];

    // Example: Save button functionality
    toolbarButtons.save.addEventListener("click", () => {
        const name = nameField.value;
        const product = productField.value;
        const qty = parseFloat(qtyField.value);
        const rate = parseFloat(rateField.value);
        const amount = qty * rate;

        if (name && product && qty && rate) {
            const row = table.insertRow();
            row.innerHTML = `
                <td>${table.rows.length}</td>
                <td>INV-${Date.now()}</td>
                <td>${new Date().toLocaleDateString()}</td>
                <td>IC-${Math.random().toString(36).substr(2, 5).toUpperCase()}</td>
                <td>${name}</td>
                <td>${product}</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>${qty}</td>
                <td>${rate}</td>
                <td>${amount}</td>
                <td>0</td>
                <td>${amount}</td>
            `;
            alert("Entry saved successfully!");
        } else {
            alert("Please fill all fields.");
        }
    });

    // Other buttons can have similar logic implemented
});

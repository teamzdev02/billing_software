document.addEventListener("DOMContentLoaded", () => {
    const btnNew = document.getElementById("toolStripButton1");
    const btnSave = document.getElementById("toolStripButton2");
    const btnModify = document.getElementById("toolStripButton3");
    const btnDelete = document.getElementById("toolStripButton5");
    const btnExit = document.getElementById("toolStripButton6");

    const dataGridView1 = document.getElementById("dataGridView1").querySelector("tbody");

    // Clear Form Functionality
    function clearForm() {
        document.getElementById("txt_Code").value = "";
        document.getElementById("comboBox1").value = "Regular";
        document.getElementById("textBox7").value = "";
        document.getElementById("textBox5").value = "";
        document.getElementById("textBox2").value = "";
        document.getElementById("dateTimePicker1").value = "";
    }

    // Add a Row to the Data Grid
    function addRow() {
        const row = document.createElement("tr");
        const code = document.getElementById("txt_Code").value;
        const type = document.getElementById("comboBox1").value;
        const name = document.getElementById("textBox7").value;
        const phone = document.getElementById("textBox2").value;
        const address = document.getElementById("textBox5").value;
        const date = document.getElementById("dateTimePicker1").value;

        row.innerHTML = `
            <td>${Math.random().toString(36).substring(7)}</td>
            <td>${type}</td>
            <td>${code}</td>
            <td>${name}</td>
            <td>${address}</td>
            <td>${phone}</td>
            <td>${date}</td>
        `;
        dataGridView1.appendChild(row);
    }

    // New Button Event
    btnNew.addEventListener("click", () => {
        clearForm();
    });

    // Save Button Event
    btnSave.addEventListener("click", () => {
        if (validateForm()) {
            addRow();
            clearForm();
        } else {
            alert("Please fill out all required fields.");
        }
    });

    // Exit Button Event
    btnExit.addEventListener("click", () => {
        if (confirm("Are you sure you want to exit?")) {
            window.close();
        }
    });

    // Form Validation
    function validateForm() {
        const code = document.getElementById("txt_Code").value.trim();
        const name = document.getElementById("textBox7").value.trim();
        const phone = document.getElementById("textBox2").value.trim();
        return code && name && phone;
    }
});

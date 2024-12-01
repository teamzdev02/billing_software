document.addEventListener("DOMContentLoaded", () => {
    const addRowButton = document.getElementById("addRow");
    const clearFormButton = document.getElementById("clearForm");
    const tableBody = document.querySelector("#dataGridView1 tbody");
    const dateField = document.getElementById("mtb_Date");
    const weekdayLabel = document.getElementById("lbl_Weakday");

    // Update weekday when date is selected
    dateField.addEventListener("change", () => {
        const date = new Date(dateField.value);
        const weekday = date.toLocaleString('default', { weekday: 'long' });
        weekdayLabel.textContent = weekday || "[Day]";
    });

    // Add a new row to the table
    addRowButton.addEventListener("click", () => {
        const date = dateField.value;
        const narration = document.getElementById("txt_Nar1").value;
        const debit = parseFloat(document.getElementById("txt_Debt").value || 0).toFixed(2);
        const credit = parseFloat(document.getElementById("txt_Credit").value || 0).toFixed(2);

        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${date}</td>
            <td>${narration}</td>
            <td>${debit}</td>
            <td>${credit}</td>
        `;
    });

    // Clear all form inputs
    clearFormButton.addEventListener("click", () => {
        document.querySelectorAll("input, textarea").forEach(input => input.value = "");
        weekdayLabel.textContent = "[Day]";
    });
});

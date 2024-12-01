document.addEventListener("DOMContentLoaded", () => {
    const ledgerRecords = [];

    const ledgerNumber = document.getElementById("ledgerNumber");
    const ledgerName = document.getElementById("ledgerName");
    const address1 = document.getElementById("address1");
    const address2 = document.getElementById("address2");
    const address3 = document.getElementById("address3");
    const group = document.getElementById("group");
    const type = document.getElementById("type");
    const opDr = document.getElementById("opDr");
    const opCr = document.getElementById("opCr");
    const details = document.getElementById("details");
    const gridBody = document.getElementById("gridBody");

    const newButton = document.getElementById("newEntry");
    const saveButton = document.getElementById("saveEntry");
    const modifyButton = document.getElementById("modifyEntry");
    const deleteButton = document.getElementById("deleteEntry");
    const exitButton = document.getElementById("exitApp");

    // Add New Entry
    newButton.addEventListener("click", () => {
        clearForm();
    });

    // Save Entry
    saveButton.addEventListener("click", () => {
        if (!ledgerName.value.trim()) {
            alert("Ledger Name is required.");
            return;
        }

        const record = {
            ledgerNumber: ledgerNumber.value || `L${ledgerRecords.length + 1}`,
            ledgerName: ledgerName.value,
            address: `${address1.value} ${address2.value} ${address3.value}`.trim(),
            group: group.value,
            type: type.value,
            opDr: parseFloat(opDr.value) || 0,
            opCr: parseFloat(opCr.value) || 0,
        };

        ledgerRecords.push(record);
        updateGrid();
        clearForm();
    });

    // Modify Entry
    modifyButton.addEventListener("click", () => {
        alert("Modify functionality is not implemented yet.");
    });

    // Delete Entry
    deleteButton.addEventListener("click", () => {
        alert("Delete functionality is not implemented yet.");
    });

    // Exit
    exitButton.addEventListener("click", () => {
        window.close();
    });

    // Update Grid
    function updateGrid() {
        gridBody.innerHTML = "";
        ledgerRecords.forEach((record) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${record.ledgerNumber}</td>
                <td>${record.ledgerName}</td>
                <td>${record.address}</td>
                <td>${record.group}</td>
                <td>${record.type}</td>
                <td>${record.opDr}</td>
                <td>${record.opCr}</td>
            `;
            gridBody.appendChild(row);
        });
    }

    // Clear Form
    function clearForm() {
        ledgerNumber.value = "";
        ledgerName.value = "";
        address1.value = "";
        address2.value = "";
        address3.value = "";
        group.value = "";
        type.value = "";
        opDr.value = "";
        opCr.value = "";
        details.value = "";
    }
});

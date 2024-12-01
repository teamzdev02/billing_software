document.getElementById("saveDealerButton").addEventListener("click", () => {
    const dealerName = document.getElementById("dealerName").value;
    const dealerAddress = document.getElementById("dealerAddress").value;
    const dealerContact = document.getElementById("dealerContact").value;
    const dealerCode = document.getElementById("dealerCode").value;

    addDealerToTable(dealerName, dealerAddress, dealerContact, dealerCode);
});

function addDealerToTable(name, address, contact, code) {
    const table = document.getElementById("dealerTable").querySelector("tbody");
    const row = table.insertRow();
    row.innerHTML = `
        <td>${name}</td>
        <td>${address}</td>
        <td>${contact}</td>
        <td>${code}</td>
    `;
}

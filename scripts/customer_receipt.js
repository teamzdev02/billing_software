// JavaScript for Customer Receipt

document.getElementById("toolButton1").addEventListener("click", () => {
    clearFormFields();
    alert("New Receipt Initialized!");
});

document.getElementById("toolButton2").addEventListener("click", () => {
    const date = document.getElementById("receiptDate").value;
    const customerName = document.getElementById("customerName").value;
    const amount = document.getElementById("amount").value;
    const remarks = document.getElementById("remarks").value;

    addReceiptToTable(date, customerName, amount, remarks);
});

function clearFormFields() {
    document.getElementById("receiptDate").value = "";
    document.getElementById("customerName").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("remarks").value = "";
}

function addReceiptToTable(date, customerName, amount, remarks) {
    const table = document.getElementById("receiptTable").querySelector("tbody");
    const row = table.insertRow();
    row.innerHTML = `
        <td>${Math.floor(Math.random() * 10000)}</td>
        <td>${date}</td>
        <td>${customerName}</td>
        <td>${amount}</td>
        <td>${remarks}</td>
    `;
}

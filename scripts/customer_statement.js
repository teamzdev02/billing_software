// JavaScript for Customer Statement

document.getElementById("btnGenerate").addEventListener("click", () => {
    const fromDate = document.getElementById("fromDate").value;
    const toDate = document.getElementById("toDate").value;

    alert(`Generating statement from ${fromDate} to ${toDate}.`);
    generateStatement();
});

function generateStatement() {
    const table = document.getElementById("statementTable").querySelector("tbody");
    table.innerHTML = ""; // Clear existing rows

    const sampleData = [
        { date: "2024-11-01", narration: "Opening Balance", debit: "0", credit: "0", balance: "1000" },
        { date: "2024-11-02", narration: "Invoice 1234", debit: "500", credit: "0", balance: "500" },
        { date: "2024-11-03", narration: "Payment Received", debit: "0", credit: "300", balance: "800" },
    ];

    sampleData.forEach(data => {
        const row = table.insertRow();
        row.innerHTML = `
            <td>${data.date}</td>
            <td>${data.narration}</td>
            <td>${data.debit}</td>
            <td>${data.credit}</td>
            <td>${data.balance}</td>
        `;
    });
}

document.getElementById("ledgerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const ledgerCode = document.getElementById("txt_Mcode").value;
    const ledgerName = document.getElementById("Ledgername").value;
    const remarks = document.getElementById("txt_remark").value;
    const labour = document.getElementById("cbo_labour").value;
    const isActive = document.getElementById("checkBox2").checked ? "Active" : "Inactive";

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${ledgerCode}</td>
        <td>${ledgerName}</td>
        <td>${remarks}</td>
        <td>${isActive}</td>
    `;

    document.getElementById("ledgerTable").querySelector("tbody").appendChild(newRow);
});

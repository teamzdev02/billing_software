document.addEventListener("DOMContentLoaded", () => {
    const loadDataButton = document.getElementById("loadData");
    const exportDataButton = document.getElementById("exportData");
    const itemsTableBody = document.querySelector("#itemsTable tbody");

    // Mock data for demonstration purposes
    const mockData = [
        {
            supplier: "Supplier A",
            inQty: 100,
            inRate: 10,
            inTRate: 1000,
            debit: 500,
            outQty: 50,
            outRate: 20,
            outTRate: 1000,
        },
        {
            supplier: "Supplier B",
            inQty: 200,
            inRate: 15,
            inTRate: 3000,
            debit: 800,
            outQty: 75,
            outRate: 25,
            outTRate: 1875,
        },
    ];

    // Load data into the table
    loadDataButton.addEventListener("click", () => {
        itemsTableBody.innerHTML = ""; // Clear existing rows

        mockData.forEach((item) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.supplier}</td>
                <td>${item.inQty}</td>
                <td>${item.inRate}</td>
                <td>${item.inTRate}</td>
                <td>${item.debit}</td>
                <td>${item.outQty}</td>
                <td>${item.outRate}</td>
                <td>${item.outTRate}</td>
            `;
            itemsTableBody.appendChild(row);
        });
    });

    // Export table to CSV
    exportDataButton.addEventListener("click", () => {
        let csvContent = "data:text/csv;charset=utf-8,";
        const rows = document.querySelectorAll("#itemsTable tr");

        rows.forEach((row) => {
            const cols = row.querySelectorAll("th, td");
            const rowData = Array.from(cols).map((col) => col.textContent).join(",");
            csvContent += rowData + "\n";
        });

        const link = document.createElement("a");
        link.setAttribute("href", encodeURI(csvContent));
        link.setAttribute("download", "items_statement.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});

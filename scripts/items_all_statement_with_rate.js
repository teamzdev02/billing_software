document.addEventListener("DOMContentLoaded", () => {
    const applyFiltersButton = document.getElementById("applyFilters");

    // Example data for items
    const itemsData = [
        { name: "Item A", column1: "Data 1", column2: "Data 2", creditRate: 120, creditTotal: 240, debit: 100, credit: 50, debitRate: 110, debitTotal: 220, column3: "Data 3" },
        { name: "Item B", column1: "Data 4", column2: "Data 5", creditRate: 150, creditTotal: 300, debit: 130, credit: 70, debitRate: 140, debitTotal: 280, column3: "Data 6" },
        { name: "Item C", column1: "Data 7", column2: "Data 8", creditRate: 100, creditTotal: 200, debit: 90, credit: 40, debitRate: 95, debitTotal: 190, column3: "Data 9" },
    ];

    // Apply Filters button click
    applyFiltersButton.addEventListener("click", () => {
        const date = document.getElementById("mtb_TDate").value;
        const subCategory = document.getElementById("cboSubCategory").value;

        // Filtering logic (example based on subcategory)
        const filteredItems = itemsData.filter(item => {
            return (subCategory === "All" || item.column1 === subCategory);  // Example filter based on column1
        });

        // Update the table with filtered items
        const tableBody = document.getElementById("itemTable").querySelector("tbody");
        tableBody.innerHTML = "";
        filteredItems.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.column1}</td>
                <td>${item.column2}</td>
                <td>${item.creditRate}</td>
                <td>${item.creditTotal}</td>
                <td>${item.debit}</td>
                <td>${item.credit}</td>
                <td>${item.debitRate}</td>
                <td>${item.debitTotal}</td>
                <td>${item.column3}</td>
            `;
            tableBody.appendChild(row);
        });
    });
});

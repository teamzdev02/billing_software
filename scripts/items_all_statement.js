document.addEventListener("DOMContentLoaded", () => {
    const applyFiltersButton = document.getElementById("applyFilters");

    // Example data for items
    const itemsData = [
        { id: 1, name: "Item A", category: "Category 1", price: 100, quantity: 20 },
        { id: 2, name: "Item B", category: "Category 2", price: 150, quantity: 30 },
        { id: 3, name: "Item C", category: "Category 1", price: 120, quantity: 40 },
        { id: 4, name: "Item D", category: "Category 2", price: 180, quantity: 50 },
    ];

    // Apply Filters button click
    applyFiltersButton.addEventListener("click", () => {
        const year = document.getElementById("txtYear").value;
        const month = document.getElementById("txtMonth").value;
        const day = document.getElementById("txtDay").value;
        const subCategory = document.getElementById("cboSubCategory").value;
        const date = document.getElementById("mtb_TDate").value;

        // Filtering logic (example based on subcategory and date)
        const filteredItems = itemsData.filter(item => {
            return (subCategory === "All" || item.category === subCategory);
        });

        // Update the table with filtered items
        const tableBody = document.getElementById("itemTable").querySelector("tbody");
        tableBody.innerHTML = "";
        filteredItems.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.category}</td>
                <td>${item.price}</td>
                <td>${item.quantity}</td>
            `;
            tableBody.appendChild(row);
        });
    });
});

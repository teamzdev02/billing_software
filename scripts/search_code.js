document.addEventListener("DOMContentLoaded", () => {
    const txtYear = document.getElementById("txtYear");
    const txtMonth = document.getElementById("txtMonth");
    const txtDay = document.getElementById("txtDay");
    const mtbTDate = document.getElementById("mtb_TDate");
    const dgvGrid = document.getElementById("dgvGrid");

    const loadData = () => {
        // Simulate loading data into the grid
        const data = [
            { code: "A001", amount: "100", name: "Item A" },
            { code: "A002", amount: "200", name: "Item B" },
            { code: "A003", amount: "300", name: "Item C" }
        ];

        const tbody = dgvGrid.querySelector("tbody");
        data.forEach(row => {
            const tr = document.createElement("tr");
            Object.values(row).forEach(value => {
                const td = document.createElement("td");
                td.textContent = value;
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
    };

    // Initialize grid data
    loadData();

    // Event Listeners for Filters
    txtYear.addEventListener("input", filterData);
    txtMonth.addEventListener("input", filterData);
    txtDay.addEventListener("input", filterData);
    mtbTDate.addEventListener("change", filterData);

    function filterData() {
        const year = txtYear.value;
        const month = txtMonth.value;
        const day = txtDay.value;
        const date = mtbTDate.value;

        // Implement filtering logic based on input values
        console.log("Filtering data with:", { year, month, day, date });
        // Add filtering logic to update the table dynamically
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const txtfilter = document.getElementById("txtfilter");
    const radDropDownList1 = document.getElementById("radDropDownList1");
    const gvSearch = document.getElementById("gvSearch");

    const loadData = () => {
        // Simulate loading data into the grid
        const data = [
            { column1: "Item 1", column2: "Category 1", column3: "$100" },
            { column1: "Item 2", column2: "Category 2", column3: "$200" },
            { column1: "Item 3", column2: "Category 3", column3: "$300" }
        ];

        const tbody = gvSearch.querySelector("tbody");
        tbody.innerHTML = ""; // Clear previous rows
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

    // Event listener for filter input
    txtfilter.addEventListener("input", filterData);
    radDropDownList1.addEventListener("change", filterData);

    function filterData() {
        const filterText = txtfilter.value.toLowerCase();
        const selectedCategory = radDropDownList1.value;
        const rows = gvSearch.querySelectorAll("tbody tr");
        rows.forEach(row => {
            const cells = row.querySelectorAll("td");
            const category = cells[1]?.textContent.toLowerCase();
            let matchText = false;

            cells.forEach(cell => {
                if (cell.textContent.toLowerCase().includes(filterText)) {
                    matchText = true;
                }
            });

            const matchCategory =
                selectedCategory === "all" ||
                (category && category === selectedCategory.toLowerCase());

            row.style.display = matchText && matchCategory ? "" : "none";
        });
    }
});

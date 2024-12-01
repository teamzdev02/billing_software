document.addEventListener("DOMContentLoaded", () => {
    const txtfilter = document.getElementById("txtfilter");
    const gvSearch = document.getElementById("gvSearch");
    const LinkLabel1 = document.getElementById("LinkLabel1");

    const loadData = () => {
        // Simulate loading data into the grid
        const data = [
            { column1: "Item 1", column2: "Description 1", column3: "$100" },
            { column1: "Item 2", column2: "Description 2", column3: "$200" },
            { column1: "Item 3", column2: "Description 3", column3: "$300" }
        ];

        const tbody = gvSearch.querySelector("tbody");
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

    function filterData() {
        const filterText = txtfilter.value.toLowerCase();
        const rows = gvSearch.querySelectorAll("tbody tr");
        rows.forEach(row => {
            const cells = row.querySelectorAll("td");
            let match = false;
            cells.forEach(cell => {
                if (cell.textContent.toLowerCase().includes(filterText)) {
                    match = true;
                }
            });
            row.style.display = match ? "" : "none";
        });
    }

    // Event listener for LinkLabel click
    LinkLabel1.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Link clicked! Add more actions here.");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.getElementById("progressBar");
    const toolButton6 = document.getElementById("toolButton6");
    const toolButton2 = document.getElementById("toolButton2");
    const dataGridView = document.getElementById("dataGridView1");
    const cmbCat = document.getElementById("cmb_cat");
    const cmbSubcat = document.getElementById("cmb_subcat");
    const checkBox1 = document.getElementById("checkBox1");

    const loadData = () => {
        // Simulate loading data by updating the progress bar
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            progressBar.value = progress;
            if (progress >= 100) {
                clearInterval(interval);
                loadGridData(); // Load data into the grid
            }
        }, 500);
    };

    const loadGridData = () => {
        // Example of adding data rows to the data grid
        const data = [
            { col1: "Data 1", col2: "Data 2", col3: "Data 3", unit: "Unit 1", make: "Make 1", col4: "Data 4" },
            { col1: "Data A", col2: "Data B", col3: "Data C", unit: "Unit 2", make: "Make 2", col4: "Data D" },
        ];

        const tbody = dataGridView.querySelector("tbody");
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

    toolButton6.addEventListener("click", () => {
        alert("Tool 6 clicked");
    });

    toolButton2.addEventListener("click", () => {
        alert("Tool 2 clicked");
    });

    // Initialize the loading process
    loadData();
});

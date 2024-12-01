document.addEventListener("DOMContentLoaded", () => {
    const dataGridView1 = document.getElementById("dataGridView1");
    const dateTimePicker1 = document.getElementById("dateTimePicker1");
    const dateTimePicker2 = document.getElementById("dateTimePicker2");
    const toolStripButton5 = document.getElementById("toolStripButton5");
    const toolStripButton6 = document.getElementById("toolStripButton6");

    // Sample Data
    const data = [
        {
            column1: "001",
            accountName: "Account 1",
            column2: "Value 2",
            column3: "Value 3",
            unit: "Unit 1",
            make: "Make 1",
            column4: "Extra 1",
            name: "Name 1"
        },
        {
            column1: "002",
            accountName: "Account 2",
            column2: "Value 2",
            column3: "Value 3",
            unit: "Unit 2",
            make: "Make 2",
            column4: "Extra 2",
            name: "Name 2"
        }
    ];

    // Populate Data Grid
    const loadData = () => {
        const tbody = dataGridView1.querySelector("tbody");
        tbody.innerHTML = "";
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

    // Event Handlers
    toolStripButton5.addEventListener("click", () => {
        console.log(`Generating report from ${dateTimePicker1.value} to ${dateTimePicker2.value}`);
    });

    toolStripButton6.addEventListener("click", () => {
        console.log("Exporting data...");
    });

    // Initialize Data
    loadData();
});

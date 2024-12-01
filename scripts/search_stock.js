document.addEventListener("DOMContentLoaded", () => {
    const dataGridView1 = document.getElementById("dataGridView1");
    const progressBar1 = document.getElementById("progressBar1");

    const cbo_Category = document.getElementById("cbo_Category");
    const cbo_Brand = document.getElementById("cbo_Brand");
    const cmb_subcat = document.getElementById("cmb_subcat");
    const checkBox1 = document.getElementById("checkBox1");

    // Sample Data
    const data = [
        {
            tagNo: "001",
            column1: "Item 1",
            column2: "Value 1",
            make: "Make 1",
            mfr: "MFR 1",
            batch: "Batch 1",
            expDate: "2025-01-01",
            pSize: "50",
            column3: "Extra 1",
            column4: "Extra 2",
            sellingRate: "$10",
            rate: "$8"
        },
        {
            tagNo: "002",
            column1: "Item 2",
            column2: "Value 2",
            make: "Make 2",
            mfr: "MFR 2",
            batch: "Batch 2",
            expDate: "2023-06-15",
            pSize: "100",
            column3: "Extra 3",
            column4: "Extra 4",
            sellingRate: "$20",
            rate: "$15"
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
    checkBox1.addEventListener("change", () => {
        console.log(`Include Expired: ${checkBox1.checked}`);
    });

    [cbo_Category, cbo_Brand, cmb_subcat].forEach(select => {
        select.addEventListener("change", () => {
            console.log(`Selected Filters: 
                Category: ${cbo_Category.value}, 
                Brand: ${cbo_Brand.value}, 
                Subcategory: ${cmb_subcat.value}`);
        });
    });

    loadData();
});

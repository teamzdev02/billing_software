document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.getElementById("progressBar");
    const dataGridBody = document.getElementById("dataGridBody");

    // Example data
    const mockData = [
        {
            invoiceNo: "INV001",
            date: "2024-11-30",
            term: "Term 1",
            product: "Product A",
            subProduct: "Sub A",
            rate: "100",
            qty: "10",
            mrp: "120",
            batch: "B001",
            itemCode: "I001",
            discount: "5%",
            customerName: "John Doe",
        },
        // Add more rows as needed
    ];

    // Populate Data Grid
    mockData.forEach((data) => {
        const row = document.createElement("tr");
        for (const key in data) {
            const cell = document.createElement("td");
            cell.textContent = data[key];
            row.appendChild(cell);
        }
        dataGridBody.appendChild(row);
    });

    // Progress Bar Mock Update
    let progress = 0;
    setInterval(() => {
        if (progress < 100) {
            progress += 10;
            progressBar.value = progress;
        }
    }, 500);
});

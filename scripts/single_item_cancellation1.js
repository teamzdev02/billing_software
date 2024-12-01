document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.getElementById("progressBar");
    const dataGridBody = document.getElementById("dataGridBody");

    // Example data for the grid
    const mockData = [
        {
            refNo: "REF001",
            invoiceNo: "INV001",
            billDate: "2024-11-30",
            term: "Term 1",
            customerName: "John Doe",
            make: "Brand A",
            category: "Electronics",
            subcategory: "Phones",
            quantity: "10",
            rate: "1000",
            totalAmount: "10000",
            discountAmount: "500",
            netAmount: "9500",
        },
        // Add more data as needed
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

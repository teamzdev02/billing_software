document.addEventListener("DOMContentLoaded", () => {
    const countInputs = document.querySelectorAll(".count");
    const totalAmountInput = document.getElementById("totalAmount");

    // Calculate amount and total
    const calculateTotals = () => {
        let total = 0;

        countInputs.forEach(input => {
            const denomination = parseInt(input.getAttribute("data-value"));
            const count = parseInt(input.value) || 0;
            const amount = denomination * count;

            // Update row's amount field
            input.closest("tr").querySelector(".amount").value = amount.toFixed(2);

            // Add to total
            total += amount;
        });

        // Update total amount field
        totalAmountInput.value = total.toFixed(2);
    };

    // Attach input event listener to all count inputs
    countInputs.forEach(input => {
        input.addEventListener("input", calculateTotals);
    });

    // Toolbar button functionality (placeholder)
    document.getElementById("newEntry").addEventListener("click", () => {
        document.getElementById("denominationForm").reset();
        calculateTotals();
    });

    document.getElementById("saveEntry").addEventListener("click", () => {
        alert("Entry saved successfully!");
    });

    document.getElementById("deleteEntry").addEventListener("click", () => {
        alert("Entry deleted successfully!");
    });

    document.getElementById("printEntry").addEventListener("click", () => {
        window.print();
    });
});

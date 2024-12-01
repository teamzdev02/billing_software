// JavaScript for Expenses Account

document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("expensesTable").querySelector("tbody");
    const addExpenseButton = document.getElementById("addExpense");
    const clearTableButton = document.getElementById("clearTable");

    // Function to add a new expense
    addExpenseButton.addEventListener("click", () => {
        const startDate = document.getElementById("startDate").value;
        const endDate = document.getElementById("endDate").value;

        if (!startDate || !endDate) {
            alert("Please select both start and end dates.");
            return;
        }

        const description = prompt("Enter expense description:");
        const unit = prompt("Enter unit details:");
        const make = prompt("Enter make details:");
        const amount = parseFloat(prompt("Enter expense amount:")).toFixed(2);

        if (!description || !unit || !make || isNaN(amount)) {
            alert("All fields are required and amount must be a valid number.");
            return;
        }

        const newRow = tableBody.insertRow();
        newRow.innerHTML = `
            <td>${startDate} to ${endDate}</td>
            <td>${description}</td>
            <td>${unit}</td>
            <td>${make}</td>
            <td>${amount}</td>
        `;

        // Highlight new row
        newRow.classList.add("highlight");
        setTimeout(() => newRow.classList.remove("highlight"), 1000);
    });

    // Function to clear the table
    clearTableButton.addEventListener("click", () => {
        if (confirm("Are you sure you want to clear the table?")) {
            tableBody.innerHTML = "";
        }
    });
});

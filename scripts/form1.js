document.addEventListener("DOMContentLoaded", () => {
    const ledgerNameInput = document.getElementById("ledgerName");
    const searchInput = document.getElementById("search");
    const gridBody = document.getElementById("gridBody");

    const newButton = document.getElementById("newEntry");
    const saveButton = document.getElementById("saveEntry");
    const modifyButton = document.getElementById("modifyEntry");
    const deleteButton = document.getElementById("deleteEntry");
    const exitButton = document.getElementById("exitApp");

    const ledgers = []; // Array to store ledger entries

    // New Entry
    newButton.addEventListener("click", () => {
        ledgerNameInput.value = "";
    });

    // Save Entry
    saveButton.addEventListener("click", () => {
        const ledgerName = ledgerNameInput.value.trim();

        if (!ledgerName) {
            alert("Ledger Name is required.");
            return;
        }

        ledgers.push({ code: `L${ledgers.length + 1}`, name: ledgerName });
        updateGrid();
        ledgerNameInput.value = "";
    });

    // Modify Entry
    modifyButton.addEventListener("click", () => {
        alert("Modify functionality is not implemented yet.");
    });

    // Delete Entry
    deleteButton.addEventListener("click", () => {
        alert("Delete functionality is not implemented yet.");
    });

    // Exit Application
    exitButton.addEventListener("click", () => {
        window.close(); // Note: May not work in all browsers
    });

    // Search Functionality
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        updateGrid(query);
    });

    // Update Grid
    function updateGrid(filter = "") {
        gridBody.innerHTML = "";
        ledgers
            .filter((ledger) => ledger.name.toLowerCase().includes(filter))
            .forEach((ledger) => {
                const row = document.createElement("tr");
                row.innerHTML = `<td>${ledger.code}</td><td>${ledger.name}</td>`;
                gridBody.appendChild(row);
            });
    }
});

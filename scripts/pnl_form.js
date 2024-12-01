document.addEventListener("DOMContentLoaded", () => {
    const lblOS = document.getElementById("Lbl_OS");
    const lblPS = document.getElementById("Lbl_PS");
    const lblCS = document.getElementById("Lbl_CS");
    const lblDE = document.getElementById("Lbl_DE");

    const lblSGP = document.getElementById("Lbl_SGP");
    const lblIDE = document.getElementById("Lbl_IDE");
    const lblNP = document.getElementById("Lbl_NP");
    const lblSS = document.getElementById("Lbl_SS");

    const btnSave = document.getElementById("toolStripButton5");
    const btnExit = document.getElementById("toolStripButton6");

    // Sample calculation logic (replace with actual logic as needed)
    const calculateValues = () => {
        const openingStock = 5000;
        const purchases = 3000;
        const closingStock = 2000;
        const directExpenses = 1000;

        const grossProfit = closingStock + purchases - openingStock - directExpenses;
        const indirectExpenses = 800;
        const netProfit = grossProfit - indirectExpenses;
        const sales = grossProfit + purchases;

        lblOS.textContent = openingStock;
        lblPS.textContent = purchases;
        lblCS.textContent = closingStock;
        lblDE.textContent = directExpenses;

        lblSGP.textContent = grossProfit;
        lblIDE.textContent = indirectExpenses;
        lblNP.textContent = netProfit;
        lblSS.textContent = sales;
    };

    // Event listeners
    btnSave.addEventListener("click", () => {
        alert("Profit and Loss values saved successfully!");
    });

    btnExit.addEventListener("click", () => {
        if (confirm("Are you sure you want to exit?")) {
            window.close();
        }
    });

    // Perform calculations on load
    calculateValues();
});

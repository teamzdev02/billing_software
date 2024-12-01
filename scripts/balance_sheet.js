document.addEventListener('DOMContentLoaded', () => {
    const assets = {
        fixedAssets: 10000,
        bankAccount: 5000,
        cashInHand: 2000,
        sundryDebtors: 3000,
        closingStock: 1500,
        placement: 2000
    };

    const liabilities = {
        loan: 7000,
        sundryCreditors: 2000,
        capital: 10000,
        drawings: 1500,
        loss: 500
    };

    // Update HTML elements with asset values
    document.getElementById('Lbl_FAsset').textContent = assets.fixedAssets;
    document.getElementById('Lbl_BankAccount').textContent = assets.bankAccount;
    document.getElementById('lbl_CashInhand').textContent = assets.cashInHand;
    document.getElementById('lbl_SyndryDebitor').textContent = assets.sundryDebtors;
    document.getElementById('lbl_CCS').textContent = assets.closingStock;
    document.getElementById('lbl_Plac').textContent = assets.placement;

    // Update HTML elements with liability values
    document.getElementById('Lbl_Loan').textContent = liabilities.loan;
    document.getElementById('Lbl_Syndrtcreditor').textContent = liabilities.sundryCreditors;
    document.getElementById('Lbl_Captial').textContent = liabilities.capital;
    document.getElementById('lbl_Drawing').textContent = liabilities.drawings;
    document.getElementById('Lbl_Loss').textContent = liabilities.loss;

    // Calculate totals
    const totalAssets = Object.values(assets).reduce((acc, val) => acc + val, 0);
    const totalLiabilities = Object.values(liabilities).reduce((acc, val) => acc + val, 0);

    // Update totals in HTML
    document.getElementById('lbl_STotal').textContent = totalAssets;
    document.getElementById('lbl_LTotal').textContent = totalLiabilities;

    // Toolbar functionality
    document.getElementById('exportBtn').addEventListener('click', exportBalanceSheet);
    document.getElementById('printBtn').addEventListener('click', printBalanceSheet);

    function exportBalanceSheet() {
        // Placeholder for export functionality
        alert('Exporting Balance Sheet...');
    }

    function printBalanceSheet() {
        window.print();
    }
});

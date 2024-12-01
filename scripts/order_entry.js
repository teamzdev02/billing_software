document.addEventListener("DOMContentLoaded", () => {
    const btnExit = document.getElementById("btn_exit");
    const btnNew = document.getElementById("btn_new");
    const dataGrid = document.getElementById("dataGrid").querySelector("tbody");

    // Exit Button Event
    btnExit.addEventListener("click", () => {
        if (confirm("Are you sure you want to exit?")) {
            window.close();
        }
    });

    // New Button Event
    btnNew.addEventListener("click", () => {
        clearForm();
    });

    // Clear Form Function
    function clearForm() {
        document.getElementById("txt_VrNo").value = "";
        document.getElementById("txt_Date").value = "";
        document.getElementById("cmb_Type").value = "Type1";
        document.getElementById("txt_LedgerName").value = "";
        dataGrid.innerHTML = ""; // Clear Data Grid
        updateNetAmount();
    }

    // Update Net Amount
    function updateNetAmount() {
        const rows = Array.from(dataGrid.querySelectorAll("tr"));
        let netAmount = 0;

        rows.forEach(row => {
            const amount = parseFloat(row.cells[4].innerText || "0");
            netAmount += amount;
        });

        document.getElementById("lbl_NetAmot").innerText = netAmount.toFixed(2);
    }
});

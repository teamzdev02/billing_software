document.addEventListener("DOMContentLoaded", () => {
    const btnExit = document.getElementById("btn_exit");
    const btnNew = document.getElementById("btn_new");
    const dataGrid1 = document.getElementById("dataGrid1").querySelector("tbody");
    const dataGrid2 = document.getElementById("dataGrid2").querySelector("tbody");

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
        document.getElementById("Txt_Address").value = "";
        dataGrid1.innerHTML = ""; // Clear Data Grid 1
        dataGrid2.innerHTML = ""; // Clear Data Grid 2
        updateSummary();
    }

    // Update Summary Section
    function updateSummary() {
        const rows1 = Array.from(dataGrid1.querySelectorAll("tr"));
        const rows2 = Array.from(dataGrid2.querySelectorAll("tr"));

        let netAmount = 0;
        let paidAmount = 0;

        rows1.forEach(row => {
            const amount = parseFloat(row.cells[6].innerText || "0");
            netAmount += amount;
        });

        rows2.forEach(row => {
            const received = parseFloat(row.cells[4].innerText || "0");
            paidAmount += received;
        });

        document.getElementById("lbl_NetAmot").innerText = netAmount.toFixed(2);
        document.getElementById("lbl_Paid").innerText = paidAmount.toFixed(2);
    }
});

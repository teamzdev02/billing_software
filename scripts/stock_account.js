document.addEventListener("DOMContentLoaded", () => {
    const btnSave = document.getElementById("btnSave");
    const btnPrint = document.getElementById("btnPrint");
    const btnClose = document.getElementById("btnClose");

    btnSave.addEventListener("click", () => {
        alert("Stock account details saved successfully!");
    });

    btnPrint.addEventListener("click", () => {
        window.print();
    });

    btnClose.addEventListener("click", () => {
        if (confirm("Are you sure you want to close this window?")) {
            window.close();
        }
    });
});

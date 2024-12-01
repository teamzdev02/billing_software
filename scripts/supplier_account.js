document.addEventListener("DOMContentLoaded", () => {
    const btnSave = document.getElementById("btnSave");
    const txtOBalance = document.getElementById("txt_OBalance");

    btnSave.addEventListener("click", () => {
        const balance = txtOBalance.value.trim();
        if (balance === "" || isNaN(balance)) {
            alert("Please enter a valid opening balance.");
            return;
        }

        alert("Supplier account saved successfully!");
    });

    const btnNew = document.getElementById("btnNew");
    btnNew.addEventListener("click", () => {
        document.querySelectorAll(".input-panel input, .input-panel select").forEach((element) => {
            element.value = "";
        });
    });
});

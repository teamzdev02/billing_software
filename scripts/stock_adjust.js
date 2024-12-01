document.addEventListener("DOMContentLoaded", () => {
    const btnSave = document.getElementById("btnSave");
    const btnPrint = document.getElementById("btnPrint");
    const btnClose = document.getElementById("btnClose");
    const radioAdd = document.getElementById("radio_Add");
    const radioRemove = document.getElementById("radio_Remove");
    const txtAddQty = document.getElementById("txt_AddQty");

    btnSave.addEventListener("click", () => {
        const adjustmentType = radioAdd.checked ? "Add" : "Remove";
        const adjustQty = txtAddQty.value;
        alert(`Stock adjustment saved!\nType: ${adjustmentType}\nQuantity: ${adjustQty}`);
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
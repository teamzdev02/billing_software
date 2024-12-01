document.addEventListener("DOMContentLoaded", () => {
    const lblDate = document.getElementById("lbl_date");
    const btnSave = document.getElementById("btnSave");
    const btnCancel = document.getElementById("btnCancel");
    const txtRemarks = document.getElementById("txt_Remarks");
    const isActive = document.getElementById("isActive");

    // Set the current date in lbl_date
    lblDate.textContent = new Date().toLocaleDateString();

    // Save Button Click Event
    btnSave.addEventListener("click", () => {
        const remarks = txtRemarks.value.trim();
        const active = isActive.checked;

        if (!remarks) {
            alert("Please enter remarks before saving.");
            return;
        }

        alert(`Reminder Saved:\nRemarks: ${remarks}\nActive: ${active}`);
    });

    // Cancel Button Click Event
    btnCancel.addEventListener("click", () => {
        txtRemarks.value = "";
        isActive.checked = false;
    });
});

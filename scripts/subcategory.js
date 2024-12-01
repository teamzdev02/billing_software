document.addEventListener("DOMContentLoaded", () => {
    const btnSave = document.getElementById("btnSave");
    const progressBar = document.getElementById("progressBar");

    btnSave.addEventListener("click", () => {
        progressBar.value = 100;
        alert("Sub-category saved successfully!");
    });

    const btnClear = document.getElementById("btnClear");
    btnClear.addEventListener("click", () => {
        document.querySelectorAll(".input-panel input").forEach((input) => {
            if (input.type === "checkbox") {
                input.checked = false;
            } else {
                input.value = "";
            }
        });
        progressBar.value = 0;
    });
});

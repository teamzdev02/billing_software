document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submitButton");
    const clearButton = document.getElementById("clearButton");
    const resetButton = document.getElementById("resetButton");

    submitButton.addEventListener("click", () => {
        const radioOption = document.querySelector('input[name="radioOption"]:checked');
        const comboBoxValue = document.getElementById("comboBox1").value;
        const numeric1 = document.getElementById("numericUpDown1").value;
        const numeric2 = document.getElementById("numericUpDown2").value;
        const fromDate = document.getElementById("fromDate").value;
        const toDate = document.getElementById("toDate").value;
        const fromMonth = document.getElementById("fromMonth").value;
        const fromDay = document.getElementById("fromDay").value;

        if (!radioOption) {
            alert("Please select a radio option.");
            return;
        }

        if (!fromDate || !toDate) {
            alert("Please select both From Date and To Date.");
            return;
        }

        alert(`Form Submitted:
        Radio Option: ${radioOption.value}
        Combo Box: ${comboBoxValue}
        Numeric 1: ${numeric1}
        Numeric 2: ${numeric2}
        From Date: ${fromDate}
        To Date: ${toDate}
        From Month: ${fromMonth}
        From Day: ${fromDay}`);
    });

    clearButton.addEventListener("click", () => {
        document.querySelector('input[name="radioOption"]:checked').checked = false;
        document.getElementById("comboBox1").value = "";
        document.getElementById("numericUpDown1").value = "";
        document.getElementById("numericUpDown2").value = "";
        document.getElementById("fromDate").value = "";
        document.getElementById("toDate").value = "";
        document.getElementById("fromMonth").value = "";
        document.getElementById("fromDay").value = "";
    });

    resetButton.addEventListener("click", () => {
        document.location.reload();
    });
});

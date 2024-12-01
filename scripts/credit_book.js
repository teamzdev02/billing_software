document.addEventListener("DOMContentLoaded", () => {
    const btnView = document.getElementById("btnView");
    const reportFrame = document.getElementById("reportFrame");

    btnView.addEventListener("click", () => {
        const startDate = document.getElementById("startDate").value;
        const endDate = document.getElementById("endDate").value;

        if (startDate && endDate) {
            alert(`Generating report for ${startDate} to ${endDate}`);
            // Logic for generating the report goes here.
            reportFrame.src = `/generateReport?start=${startDate}&end=${endDate}`;
        } else {
            alert("Please select both start and end dates.");
        }
    });
});

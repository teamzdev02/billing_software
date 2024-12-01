document.addEventListener("DOMContentLoaded", () => {
    const reportViewer = document.getElementById("reportViewer");
    const reportOptions = document.getElementById("reportOptions");

    reportOptions.addEventListener("change", () => {
        const selectedReport = reportOptions.value;
        // Update the `src` of the iframe based on the selected report
        reportViewer.src = `${selectedReport}.pdf`;
    });
});

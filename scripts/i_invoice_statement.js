document.addEventListener("DOMContentLoaded", () => {
    const loadReportButton = document.getElementById("loadReport");
    const printReportButton = document.getElementById("printReport");
    const exportReportButton = document.getElementById("exportReport");
    const reportFrame = document.getElementById("reportFrame");

    // Mock report URL (can be replaced with actual dynamic content)
    const reportURL = "https://example.com/report";

    // Load Report
    loadReportButton.addEventListener("click", () => {
        const startDate = document.getElementById("startDate").value;
        const endDate = document.getElementById("endDate").value;
        const invoiceType = document.getElementById("invoiceType").value;
        const viewType = document.querySelector('input[name="viewType"]:checked').value;

        if (!startDate || !endDate) {
            alert("Please select a valid date range.");
            return;
        }

        const reportParams = `?start=${startDate}&end=${endDate}&type=${invoiceType}&view=${viewType}`;
        reportFrame.src = `${reportURL}${reportParams}`;
    });

    // Print Report
    printReportButton.addEventListener("click", () => {
        reportFrame.contentWindow.print();
    });

    // Export Report to PDF
    exportReportButton.addEventListener("click", () => {
        const link = document.createElement("a");
        link.href = `${reportURL}?export=pdf`;
        link.download = "InvoiceStatement.pdf";
        link.click();
    });
});

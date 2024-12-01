document.addEventListener("DOMContentLoaded", () => {
    const filterForm = document.getElementById("filterForm");
    const crystalReportViewer = document.getElementById("crystalReportViewer");

    // Handle form submission
    filterForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        // Get filter values
        const dateFrom = document.getElementById("dateFrom").value;
        const dateTo = document.getElementById("dateTo").value;
        const quotationNo = document.getElementById("quotationNo").value;
        const customer = document.getElementById("customer").value;

        // Simulate fetching and displaying the report for demonstration
        crystalReportViewer.innerHTML = `<p>Fetching the report from ${dateFrom} to ${dateTo} for Quotation No: ${quotationNo} and Customer: ${customer}.</p>`;

        // In a real implementation, you would interact with an API or server-side system 
        // to generate and load the actual Crystal Report into the viewer.
    });
});

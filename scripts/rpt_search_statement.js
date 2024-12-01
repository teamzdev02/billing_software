document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("searchForm");
    const crystalReportViewer = document.getElementById("crystalReportViewer");

    // Handle form submission
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        // Get search query
        const searchQuery = document.getElementById("searchQuery").value;

        // Simulate fetching and displaying the report for demonstration
        crystalReportViewer.innerHTML = `<p>Fetching the search statement report for query: ${searchQuery}.</p>`;

        // In a real implementation, you would interact with an API or server-side system 
        // to generate and load the actual Crystal Report into the viewer.
    });
});

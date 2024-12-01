document.addEventListener("DOMContentLoaded", () => {
    const btnPrint = document.getElementById("toolStripButton5");
    const btnExit = document.getElementById("toolStripButton6");
    const reportViewer = document.getElementById("crystalReportViewer1");

    // Exit Button Event
    btnExit.addEventListener("click", () => {
        if (confirm("Are you sure you want to exit?")) {
            window.close();
        }
    });

    // Print Button Event
    btnPrint.addEventListener("click", () => {
        window.print();
    });

    // Update Report Viewer Based on Filters
    const updateReportViewer = () => {
        const filterBy = document.getElementById("comboBox1").value;
        const startDate = document.getElementById("dateTimePicker1").value;
        const endDate = document.getElementById("dateTimePicker2").value;
        const customer = document.getElementById("comboBox2").value;
        const viewOption = document.querySelector('input[name="viewOption"]:checked').value;

        reportViewer.innerHTML = `
            <h3>Report Preview</h3>
            <p><strong>Filter By:</strong> ${filterBy}</p>
            <p><strong>Date Range:</strong> ${startDate} to ${endDate}</p>
            <p><strong>Customer:</strong> ${customer}</p>
            <p><strong>View Option:</strong> ${viewOption}</p>
        `;
    };

    // Event Listeners for Filters and Options
    document.getElementById("comboBox1").addEventListener("change", updateReportViewer);
    document.getElementById("dateTimePicker1").addEventListener("change", updateReportViewer);
    document.getElementById("dateTimePicker2").addEventListener("change", updateReportViewer);
    document.getElementById("comboBox2").addEventListener("change", updateReportViewer);
    document.querySelectorAll('input[name="viewOption"]').forEach(radio => {
        radio.addEventListener("change", updateReportViewer);
    });

    // Initialize Report Viewer
    updateReportViewer();
});

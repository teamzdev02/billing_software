document.addEventListener("DOMContentLoaded", () => {
    const startDate = document.getElementById("startDate");
    const endDate = document.getElementById("endDate");
    const group = document.getElementById("group");
    const codeInput = document.getElementById("code");
    const countLabel = document.getElementById("count");
    const btnPreview = document.getElementById("btnPreview");
    const btnPrint = document.getElementById("btnPrint");
    const reportFrame = document.getElementById("reportFrame");

    // Mock data for demonstration
    let reportCount = 0;

    // Preview Button Click Event
    btnPreview.addEventListener("click", () => {
        const start = startDate.value;
        const end = endDate.value;
        const selectedGroup = group.value;
        const code = codeInput.value.trim();

        if (!start || !end) {
            alert("Please select both start and end dates.");
            return;
        }

        // Generate a mock report URL
        const mockReportUrl = `https://example.com/report?start=${start}&end=${end}&group=${selectedGroup}&code=${code}`;
        reportFrame.src = mockReportUrl;

        // Update count
        reportCount++;
        countLabel.textContent = reportCount;
    });

    // Print Button Click Event
    btnPrint.addEventListener("click", () => {
        if (reportFrame.src) {
            reportFrame.contentWindow.print();
        } else {
            alert("Please preview a report before printing.");
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const fromDate = document.getElementById('fromDate');
    const toDate = document.getElementById('toDate');
    const type = document.getElementById('type');
    const year1 = document.getElementById('year1');
    const month1 = document.getElementById('month1');
    const day1 = document.getElementById('day1');
    const year = document.getElementById('year');
    const month = document.getElementById('month');
    const day = document.getElementById('day');

    const customerGrid = document.getElementById('customerGrid');

    // Function to filter customer grid based on selected filters
    function filterGrid() {
        const from = new Date(fromDate.value);
        const to = new Date(toDate.value);
        const selectedType = type.value;
        const yearFilter = year.value;
        const monthFilter = month.value;
        const dayFilter = day.value;

        const rows = customerGrid.querySelectorAll('tbody tr');

        rows.forEach(row => {
            const dateCell = row.cells[4].textContent;
            const rowDate = new Date(dateCell);

            let match = true;

            // Apply date range filter
            if (from && to && (rowDate < from || rowDate > to)) {
                match = false;
            }

            // Apply year/month/day filter
            if (yearFilter && rowDate.getFullYear().toString() !== yearFilter) {
                match = false;
            }
            if (monthFilter && (rowDate.getMonth() + 1).toString() !== monthFilter) {
                match = false;
            }
            if (dayFilter && rowDate.getDate().toString() !== dayFilter) {
                match = false;
            }

            // Apply statement type filter
            if (selectedType !== "All" && !row.cells[2].textContent.includes(selectedType)) {
                match = false;
            }

            // Toggle row visibility based on matching filters
            row.style.display = match ? "" : "none";
        });
    }

    // Add event listeners for filtering
    fromDate.addEventListener('change', filterGrid);
    toDate.addEventListener('change', filterGrid);
    type.addEventListener('change', filterGrid);
    year.addEventListener('input', filterGrid);
    month.addEventListener('input', filterGrid);
    day.addEventListener('input', filterGrid);
    year1.addEventListener('input', filterGrid);
    month1.addEventListener('input', filterGrid);
    day1.addEventListener('input', filterGrid);
});

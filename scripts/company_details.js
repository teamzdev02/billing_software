document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.getElementById("progress");
    const checkboxes = document.querySelectorAll(".checkbox-group input[type='checkbox']");

    // Example: Update progress bar value based on checkbox interaction
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            const checkedCount = [...checkboxes].filter(cb => cb.checked).length;
            progressBar.value = checkedCount * 50; // Example calculation
        });
    });

    // Toolbar button functionality
    document.querySelectorAll(".toolbar button").forEach(btn => {
        btn.addEventListener("click", () => {
            alert(`${btn.id} clicked`);
        });
    });
});

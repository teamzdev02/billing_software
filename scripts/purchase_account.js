document.addEventListener("DOMContentLoaded", () => {
    const button5 = document.getElementById("toolStripButton5");
    const button6 = document.getElementById("toolStripButton6");

    // Example functionality for Button 1
    button5.addEventListener("click", () => {
        alert("Button 1 clicked!");
    });

    // Example functionality for Button 2
    button6.addEventListener("click", () => {
        alert("Button 2 clicked!");
    });

    // Example: Handle date filtering logic
    const datePicker1 = document.getElementById("dateTimePicker1");
    const datePicker2 = document.getElementById("dateTimePicker2");

    datePicker1.addEventListener("change", () => {
        console.log(`Start date selected: ${datePicker1.value}`);
    });

    datePicker2.addEventListener("change", () => {
        console.log(`End date selected: ${datePicker2.value}`);
    });
});

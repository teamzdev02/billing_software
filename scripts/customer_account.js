// JavaScript for CustomerAccount

// Tool Button Events
document.getElementById("toolButton1").addEventListener("click", () => {
    alert("Tool Button 1 clicked!");
});

document.getElementById("toolButton2").addEventListener("click", () => {
    alert("Tool Button 2 clicked!");
});

document.getElementById("toolButton6").addEventListener("click", () => {
    alert("Tool Button 6 clicked!");
});

// Example: Populate Dropdown
window.onload = () => {
    const customerDropdown = document.getElementById("cmb_DorCName");
    const customers = ["Customer A", "Customer B", "Customer C"];

    customers.forEach(customer => {
        const option = document.createElement("option");
        option.value = customer;
        option.textContent = customer;
        customerDropdown.appendChild(option);
    });
};

// Add more logic as needed

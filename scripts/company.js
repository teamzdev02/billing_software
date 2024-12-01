document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tool-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert(`${button.textContent} clicked!`);
        });
    });
});

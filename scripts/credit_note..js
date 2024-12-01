document.addEventListener("DOMContentLoaded", () => {
    const btnAdd = document.getElementById("btnAdd");
    const tableBody = document.querySelector(".data-table tbody");

    btnAdd.addEventListener("click", () => {
        const date = document.getElementById("date").value;
        const reference = document.getElementById("reference").value;
        const amount = document.getElementById("amount").value;
        const description = document.getElementById("description").value;

        if (date && reference && amount) {
            const row = `
                <tr>
                    <td>${reference}</td>
                    <td>${date}</td>
                    <td>${amount}</td>
                    <td>${description}</td>
                </tr>
            `;
            tableBody.insertAdjacentHTML("beforeend", row);
        } else {
            alert("Please fill all required fields.");
        }
    });
});

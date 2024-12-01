document.addEventListener("DOMContentLoaded", () => {
    const btnSave = document.getElementById("btnSave");
    const btnNew = document.getElementById("btnNew");
    const txtSearch = document.getElementById("txtSearch");
    const btnSearch = document.getElementById("btnSearch");
    const supplierTable = document.getElementById("supplierTable").querySelector("tbody");

    btnSave.addEventListener("click", () => {
        alert("Supplier entry saved successfully!");
    });

    btnNew.addEventListener("click", () => {
        document.querySelectorAll("#supplierForm input, #supplierForm select, #supplierForm textarea").forEach((element) => {
            element.value = "";
            if (element.type === "checkbox") element.checked = false;
        });
    });

    btnSearch.addEventListener("click", () => {
        const searchTerm = txtSearch.value.trim().toLowerCase();
        if (searchTerm === "") {
            alert("Please enter a search term.");
            return;
        }

        alert(`Searching for suppliers with the term: ${searchTerm}`);
        // Implement search logic here
    });

    // Populate supplierTable dynamically
    // Sample row for demonstration
    supplierTable.innerHTML = `
        <tr>
            <td>001</td>
            <td>Yes</td>
            <td>Supplier A</td>
            <td>Address 1</td>
            <td>Address 2</td>
            <td>Address 3</td>
            <td>Supplier</td>
            <td>Group 1</td>
            <td>Details here</td>
            <td>1000</td>
            <td>500</td>
            <td>10%</td>
            <td>5%</td>
            <td>Yes</td>
        </tr>
    `;
});

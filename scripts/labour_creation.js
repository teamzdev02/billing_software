document.getElementById("labourForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("lbl_cname").value;
    const username = document.getElementById("txt_uname").value;
    const dailySalary = document.getElementById("txt_daysalary").value;
    const monthlySalary = document.getElementById("txt_monthsalary").value;
    const dateOfJoining = document.getElementById("dateofjoining").value;

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${username}</td>
        <td>${dailySalary}</td>
        <td>${monthlySalary}</td>
        <td>${dateOfJoining}</td>
    `;

    document.getElementById("employeeTable").querySelector("tbody").appendChild(newRow);
});

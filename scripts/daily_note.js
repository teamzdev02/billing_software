// JavaScript for Daily Note

document.getElementById("newButton").addEventListener("click", () => {
    clearFormFields();
    alert("New Daily Note Initialized!");
});

document.getElementById("saveButton").addEventListener("click", () => {
    const entryDate = document.getElementById("entryDate").value;
    const obal = document.getElementById("obal").value;
    const takenAmount = document.getElementById("takenAmount").value;
    const remarks = document.getElementById("remarks").value;
    const otherExpense = document.getElementById("otherExpense").value;
    const labourExpenses = document.getElementById("labourExpenses").value;
    const accountType = document.getElementById("accountType").value;

    addNoteToTable(entryDate, obal, takenAmount, remarks, otherExpense, labourExpenses, accountType);
});

function clearFormFields() {
    document.getElementById("entryDate").value = "";
    document.getElementById("obal").value = "";
    document.getElementById("takenAmount").value = "";
    document.getElementById("remarks").value = "";
    document.getElementById("otherExpense").value = "";
    document.getElementById("labourExpenses").value = "";
    document.getElementById("accountType").value = "expense";
}

function addNoteToTable(date, obal, takenAmount, remarks, otherExpense, labourExpenses, accountType) {
    const table = document.getElementById("dailyNoteTable").querySelector("tbody");
    const row = table.insertRow();
    row.innerHTML = `
        <td>${date}</td>
        <td>Account Type: ${accountType}</td>
        <td>${obal}</td>
        <td>${takenAmount}</td>
        <td>${remarks}</td>
    `;
}

document.getElementById("generateReport").addEventListener("click", () => {
    generateProgressReport();
});

function generateProgressReport() {
    const progressBar = document.getElementById("progressBar");
    let progress = 0;

    const interval = setInterval(() => {
        if (progress < 100) {
            progress += 10;
            progressBar.value = progress;
        } else {
            clearInterval(interval);
            alert("Report Generation Complete!");
        }
    }, 500);
}

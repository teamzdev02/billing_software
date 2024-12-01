document.addEventListener('DOMContentLoaded', function () {
    const toolButtons = document.querySelectorAll('.toolstrip-button');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const medicineCode = document.getElementById('medicineCode');
    const medicineName = document.getElementById('medicineName');
    const isActive = document.getElementById('isActive');
    const errorMessage = document.getElementById('errorMessage');
    const medicineTable = document.getElementById('medicineTable').getElementsByTagName('tbody')[0];

    // Sample data for table
    const data = [
        { col1: 'Data 1', col2: 'Data 2', col3: 'Data 3' },
        { col1: 'Data 4', col2: 'Data 5', col3: 'Data 6' },
    ];

    // Populate table with data
    data.forEach(item => {
        const row = medicineTable.insertRow();
        row.insertCell(0).innerText = item.col1;
        row.insertCell(1).innerText = item.col2;
        row.insertCell(2).innerText = item.col3;
    });

    // Tool button click events (example actions)
    toolButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert(`${button.innerText} clicked`);
        });
    });

    // Simulate progress bar
    function simulateProgress() {
        let progress = 0;
        const interval = setInterval(function () {
            progress += 10;
            progressBar.value = progress;
            progressText.innerText = `Progress: ${progress}%`;
            if (progress >= 100) {
                clearInterval(interval);
                progressText.innerText = 'Completed!';
            }
        }, 500);
    }

    // Form validation before simulating the progress
    document.getElementById('medicineCode').addEventListener('input', validateForm);
    document.getElementById('medicineName').addEventListener('input', validateForm);
    document.getElementById('isActive').addEventListener('change', validateForm);

    function validateForm() {
        if (medicineCode.value === "" || medicineName.value === "") {
            errorMessage.style.display = "block";
        } else {
            errorMessage.style.display = "none";
        }
    }

    // Example action to trigger progress bar simulation
    document.getElementById('medicineCode').addEventListener('blur', simulateProgress);
});

document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.querySelector('#progress');
    const saveBtn = document.querySelector('#saveBtn');
    const clearBtn = document.querySelector('#clearBtn');
    const loadBtn = document.querySelector('#loadBtn');
    const refreshBtn = document.querySelector('#refreshBtn');

    // Clear form function
    function clearForm() {
        document.querySelector('#text1').value = '';
        document.querySelector('#text2').value = '';
        document.querySelector('#text3').value = '';
        document.querySelector('#text4').value = '';
        document.querySelector('#text5').value = '';
        document.querySelector('#date').value = '';
        document.querySelector('#text6').value = '';
        document.querySelector('#text7').value = '';
    }

    // Simulate saving data
    saveBtn.addEventListener('click', () => {
        alert('Data saved');
        progressBar.value = 100;
    });

    // Simulate clearing form
    clearBtn.addEventListener('click', () => {
        clearForm();
    });

    // Simulate loading data
    loadBtn.addEventListener('click', () => {
        alert('Data loaded');
        // Example of populating the form
        document.querySelector('#text1').value = 'Example Data 1';
        document.querySelector('#text2').value = 'Example Data 2';
        document.querySelector('#text3').value = 'Example Data 3';
    });

    // Refresh function
    refreshBtn.addEventListener('click', () => {
        alert('Page Refreshed');
        location.reload();
    });

    // Progress simulation (could be tied to form completion or AJAX calls)
    setInterval(() => {
        if (progressBar.value < 100) {
            progressBar.value += 10;
        }
    }, 500);
});

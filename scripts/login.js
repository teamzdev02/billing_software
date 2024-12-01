document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    showLoading();
    setTimeout(function () {
        // Simulate form submission logic here
        alert("Login Successful!");
        hideLoading();
    }, 2000); // simulate a 2-second loading process
});

function showLoading() {
    document.getElementById('loading').style.display = 'block';
    var progressBar = document.getElementById('progressBar');
    var progress = 0;
    var timer = setInterval(function () {
        progress += 10;
        progressBar.value = progress;
        if (progress >= 100) {
            clearInterval(timer);
        }
    }, 200);
}

function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

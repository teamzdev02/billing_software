document.addEventListener('DOMContentLoaded', function () {
    // Get all menu items with submenus
    const menuItems = document.querySelectorAll('.menu-item');

    // Toggle submenu visibility on click (instead of hover)
    menuItems.forEach(item => {
        const submenu = item.querySelector('.submenu');
        const menuLink = item.querySelector('a');

        menuLink.addEventListener('click', function (e) {
            e.preventDefault();
            if (submenu.style.display === "block") {
                submenu.style.display = "none";
            } else {
                // Close all submenus
                document.querySelectorAll('.submenu').forEach(sub => sub.style.display = "none");
                submenu.style.display = "block";
            }
        });
    });

    // Optionally, add active class when a menu item is clicked
    const allLinks = document.querySelectorAll('.menu-item a, .submenu li a');
    allLinks.forEach(link => {
        link.addEventListener('click', function () {
            allLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

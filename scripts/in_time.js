document.addEventListener("DOMContentLoaded", () => {
    const moveAllRightButton = document.getElementById("moveAllRight");
    const moveSingleRightButton = document.getElementById("moveSingleRight");
    const moveAllLeftButton = document.getElementById("moveAllLeft");
    const moveSingleLeftButton = document.getElementById("moveSingleLeft");
    const exitButton = document.getElementById("exitButton");

    const availableList = document.getElementById("availableList");
    const presentList = document.getElementById("presentList");

    const availableItems = ["Item 1", "Item 2", "Item 3", "Item 4"];
    const presentItems = [];

    // Populate available list with sample items
    function populateLists() {
        availableList.innerHTML = '';
        availableItems.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            availableList.appendChild(listItem);
        });

        presentList.innerHTML = '';
        presentItems.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            presentList.appendChild(listItem);
        });
    }

    populateLists();

    // Move all items from available to present
    moveAllRightButton.addEventListener("click", () => {
        presentItems.push(...availableItems);
        availableItems.length = 0; // Empty the available list
        populateLists();
    });

    // Move single item from available to present
    moveSingleRightButton.addEventListener("click", () => {
        if (availableItems.length > 0) {
            presentItems.push(availableItems.shift()); // Move the first item
            populateLists();
        }
    });

    // Move all items from present to available
    moveAllLeftButton.addEventListener("click", () => {
        availableItems.push(...presentItems);
        presentItems.length = 0; // Empty the present list
        populateLists();
    });

    // Move single item from present to available
    moveSingleLeftButton.addEventListener("click", () => {
        if (presentItems.length > 0) {
            availableItems.push(presentItems.shift()); // Move the first item
            populateLists();
        }
    });

    // Exit Button
    exitButton.addEventListener("click", () => {
        window.close(); // Close the current window
    });
});

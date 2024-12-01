document.addEventListener("DOMContentLoaded", () => {
    const lstAvailable = document.getElementById("lst_available");
    const lstPresent = document.getElementById("lst_present");

    const btnMoveAll = document.getElementById("btn_moveall");
    const btnSingleMove = document.getElementById("btn_singlemove");
    const btnMoveSingleLeft = document.getElementById("btn_movesingleleft");
    const btnMoveAllLeft = document.getElementById("btn_moveallleft");

    const btnSave = document.getElementById("toolStripButton2");
    const btnExit = document.getElementById("toolStripButton6");

    // Populate the available list with sample data
    const sampleData = ["Employee A", "Employee B", "Employee C", "Employee D", "Employee E"];
    sampleData.forEach(item => {
        const option = document.createElement("option");
        option.text = item;
        lstAvailable.add(option);
    });

    // Move all items to Present
    btnMoveAll.addEventListener("click", () => {
        moveAllItems(lstAvailable, lstPresent);
    });

    // Move single selected item to Present
    btnSingleMove.addEventListener("click", () => {
        moveSelectedItems(lstAvailable, lstPresent);
    });

    // Move single selected item back to Available
    btnMoveSingleLeft.addEventListener("click", () => {
        moveSelectedItems(lstPresent, lstAvailable);
    });

    // Move all items back to Available
    btnMoveAllLeft.addEventListener("click", () => {
        moveAllItems(lstPresent, lstAvailable);
    });

    // Save button functionality
    btnSave.addEventListener("click", () => {
        const presentItems = Array.from(lstPresent.options).map(option => option.text);
        alert(`Present List Saved:\n${presentItems.join("\n")}`);
    });

    // Exit button functionality
    btnExit.addEventListener("click", () => {
        if (confirm("Are you sure you want to exit?")) {
            window.close();
        }
    });

    // Helper function to move all items
    function moveAllItems(sourceList, targetList) {
        Array.from(sourceList.options).forEach(option => {
            targetList.add(option);
        });
    }

    // Helper function to move selected items
    function moveSelectedItems(sourceList, targetList) {
        Array.from(sourceList.selectedOptions).forEach(option => {
            targetList.add(option);
        });
    }
});

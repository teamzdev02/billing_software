document.addEventListener("DOMContentLoaded", () => {
    const generateTagButton = document.getElementById("generateTagButton");

    generateTagButton.addEventListener("click", () => {
        const itemName = document.getElementById("itemName").value;
        const style = document.getElementById("style").value;
        const brand = document.getElementById("brand").value;
        const tagNumber = document.getElementById("tagNumber").value;
        const noOfLabels = document.getElementById("noOfLabels").value;

        if (itemName && style && brand && tagNumber && noOfLabels) {
            generateTag(itemName, style, brand, tagNumber, noOfLabels);
        } else {
            alert("Please fill in all fields before generating the tag.");
        }
    });

    // Function to simulate tag generation
    function generateTag(itemName, style, brand, tagNumber, noOfLabels) {
        alert(`Tag Generated:
        Item Name: ${itemName}
        Style: ${style}
        Brand: ${brand}
        Tag Number: ${tagNumber}
        Number of Labels: ${noOfLabels}`);
    }
});

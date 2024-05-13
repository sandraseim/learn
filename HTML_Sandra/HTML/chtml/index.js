function calculatePrice() {
    var studyType = document.querySelector('input[name="studyType"]:checked');
    if (studyType) {
        var price = studyType.value.split(" - ")[1]; 
        alert("The price for your selected study level is: €" + price);
    } else {
        alert("Please select a study level.");
    }
}

function handleSubmit() {
    preventDefault(); 

    if (confirm("Are you sure you want to submit the form?")) {
        alert("Form submitted successfully!");
    } else {
        alert("Submission canceled.");
    }
}
document.getElementById('navigation').addEventListener('click', function() {
    document.getElementById('navigation').addEventListener('click', function() {
        buttonClicked = true;
    });
});

document.getElementById('myButton').addEventListener('click', function() {
    buttonClicked = true;
});

document.getElementById("squad").addEventListener("blur", function() {
    console.log("Input blurred!");
});

function calculatePrice() {
    var studyType = document.querySelector('input[name="studyType"]:checked');
    if (studyType) {
        var price = studyType.value.split(' - ')[1]; // Extracting the price from the value attribute
        document.getElementById('price').innerText = "Price: €" + price; // Displaying the price
    } else {
        alert("Please select a study level.");
    }
}

function handleSubmit() {
    // You can add form submission handling logic here if needed
}

function validateForm() {
    // Validate phone number
    var phoneNumber = document.getElementById("phoneNumber").value;
    var phoneNumberRegex = /^[0-9]{10}$/; // Assuming a 10-digit phone number without any special characters

    if (!phoneNumberRegex.test(phoneNumber)) {
        alert("Please enter a valid 10-digit phone number.");
        return false; // Prevent form submission
    }

    // Display a confirmation message
    var confirmation = window.confirm("Thanks for booking! Click OK to continue.");

    // If user clicks OK, redirect to index.html
    if (confirmation) {
        window.location.href = "index.html";
    }

    // Prevent the default form submission
    return false;
}

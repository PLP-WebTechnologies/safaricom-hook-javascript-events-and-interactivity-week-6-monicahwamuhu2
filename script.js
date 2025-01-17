// Toggle Background Color
function toggleBackgroundColor() {
    const currentColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = (currentColor === 'lightblue') ? 'lightgreen' : 'lightblue';
}

// Slider for Real-Time Feedback (adjust text size)
function updateTextSize() {
    const textSize = document.getElementById("textSizeSlider").value;
    document.getElementById("textSizeDisplay").style.fontSize = textSize + 'px';
}

// Modal Handling
function openModal() {
    document.getElementById("myModal").style.display = 'block';
}

function closeModal() {
    document.getElementById("myModal").style.display = 'none';
}

// Form Validation
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;

    // Validate Name
    const name = document.getElementById("name").value;
    if (name.length < 3) {
        isValid = false;
        document.getElementById("nameError").textContent = "Name must be at least 3 characters long.";
    } else {
        document.getElementById("nameError").textContent = "";
    }

    // Validate Email
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Validate Password
    const password = document.getElementById("password").value;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password)) {
        isValid = false;
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters, include 1 uppercase letter and 1 number.";
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    // If form is valid, alert success message
    if (isValid) {
        alert("Form submitted successfully!");
    }
});

// Dropdown Option Change
function displayMessage() {
    const dropdown = document.getElementById("dropdown");
    const messageElement = document.getElementById("dropdownMessage");
    const selectedOption = dropdown.value;

    if (selectedOption === "option1") {
        messageElement.textContent = "You selected Option 1!";
    } else if (selectedOption === "option2") {
        messageElement.textContent = "You selected Option 2!";
    } else {
        messageElement.textContent = "";
    }
}

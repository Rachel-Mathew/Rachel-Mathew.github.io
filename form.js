function validatePhoneNumber() {
    var phone = document.getElementById('phone').value.trim();
    var phoneError = document.getElementById('phoneError');

    // Clear any previous error message
    phoneError.textContent = '';

    // Check for non-numeric characters
    if (!/^[0-9]*$/.test(phone)) {
        phoneError.textContent = 'Phone number must contain only numbers.';
    }

    // Check for length and starting digit
    if (phone.length > 0 && !/^[6789]/.test(phone)) {
        phoneError.textContent = 'Phone number must start with 6, 7, 8, or 9.';
    }

    // Check for exact length of 10 digits
    if (phone.length > 10) {
        phoneError.textContent = 'Phone number must be exactly 10 digits long.';
    }
}

function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    var gender = document.getElementById('gender').value;
    var address = document.getElementById('address').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var genderError = document.getElementById('genderError');
    var addressError = document.getElementById('addressError');
    var phoneError = document.getElementById('phoneError');

    // Clear previous error messages
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    genderError.textContent = '';
    addressError.textContent = '';

    var isValid = true;

    // Basic validation for name length
    if (name.length < 4) {
        nameError.textContent = 'Name should be at least 4 characters long.';
        isValid = false;
    }

    // Basic validation for email format
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Password validation
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
        passwordError.textContent = 'Password should contain at least 1 digit, 1 lowercase, 1 uppercase, 1 special character, and be at least 8 characters long.';
        isValid = false;
    }

    // Gender validation
    if (gender === '') {
        genderError.textContent = 'Please select a gender.';
        isValid = false;
    }

    // Basic validation for address
    if (address.length === 0) {
        addressError.textContent = 'Address is required.';
        isValid = false;
    }

    // Phone number validation
    var phoneRegex = /^[6789]\d{9}$/;
    if (!phoneRegex.test(phone)) {
        phoneError.textContent = 'Phone number should be 10 digits long and start with 6, 7, 8, or 9.';
        isValid = false;
    }

    // Additional check for phone error messages
    if (phoneError.textContent !== '') {
        isValid = false;
    }

    // If all validations pass, the form can be submitted
    return isValid;
}

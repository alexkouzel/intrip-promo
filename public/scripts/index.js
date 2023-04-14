const webAppURL = 'https://script.google.com/macros/s/AKfycbwYCDH_NjT1qzIidpKaZS9C_kyRkzcJOMDrYbdZOtNLoZUq6HuQQVdbc_etrLvcDP6u/exec';

document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById("participate-btn");
    
    button.onclick = async function () {
        const email = document.getElementById('email').value;

        // Send the email to the Google Web App
        const response = await fetch(webAppURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `email=${encodeURIComponent(email)}`,
        });

        if (response.ok) {
            // Clear the input field and display a success message
            document.getElementById('email').value = '';
            alert('Email submitted successfully!');
        } else {
            // Display an error message
            alert('Error submitting email');
        }
    }
});
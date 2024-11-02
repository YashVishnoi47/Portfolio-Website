document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    const popupMessage = document.getElementById('popupMessage');

    // Debugging: Log the popupMessage element to ensure it's found
    console.log('Popup Message Element:', popupMessage); // Add this line

    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent default form submission

        const formData = new FormData(form);
        const data = {
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password'),
        };

        // Check if all fields are filled
        if (!data.username || !data.email || !data.password) {
            popupMessage.style.display = 'block'; // Show the pop-up message
            return; // Stop execution
        }

        // Submit the form via fetch to handle the server response
        const response = await fetch(form.action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        
        // Handle the server response
        if (!response.ok) {
            popupMessage.innerText = result.error; // Show server error message
            popupMessage.style.display = 'block';
        } else {
            // Handle successful registration, e.g., redirect or show a success message
            alert(result.message); // Show success message
            // Optionally redirect to another page
            // window.location.href = '/'; // Redirect to homepage or login page
        }
    });
});

function loginUser (email, password) {
    // Simulate an API call for user login
    fakeApiLogin(email, password)
        .then(response => {
            if (response.status === 'success') {
                // Redirect to TikTok
                window.location.href = 'https://www.tiktok.com/@ariesgirlsssss26';
            } else {
                // Handle login failure
                alert('Login failed. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error during login:', error);
        });
}

// Simulated API login function
function fakeApiLogin(email, password) {
    return new Promise((resolve) => {
        // Simulate a successful login response
        setTimeout(() => {
            resolve({ status: 'success' }); // Change to 'failure' to test the failure case
        }, 1000);
    });
}

// Example usage
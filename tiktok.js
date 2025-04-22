document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Check if geolocation is available
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Create a tracking link with location data
            const trackingLink = `https://example.com/track?lat=${latitude}&lon=${longitude}`;
            console.log('Tracking Link:', trackingLink);

            // Here you can redirect to the tracking link or send it to your server
            // window.location.href = trackingLink; // Uncomment to redirect
        }, function(error) {
            console.error('Error obtaining location:', error);
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
});
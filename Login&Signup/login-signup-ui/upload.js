document.getElementById('submit-btn').addEventListener('click', function() {
    // Simulate file upload
    // In a real application, you would send the file data to the server here

    // Show success message
    document.getElementById('success-message').classList.remove('hidden');

    // Refresh the page after a delay
    setTimeout(function() {
        location.reload();
    }, 2000); // 2 seconds delay
});
document.getElementById('togglePassword').addEventListener('click', function (e) {
    const password = document.getElementById('password');
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.querySelector('i').classList.toggle('fa-eye');
    this.querySelector('i').classList.toggle('fa-eye-slash');
});

document.getElementById('toggleConfirmPassword').addEventListener('click', function (e) {
    const confirmPassword = document.getElementById('confirm-password');
    const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPassword.setAttribute('type', type);
    this.querySelector('i').classList.toggle('fa-eye');
    this.querySelector('i').classList.toggle('fa-eye-slash');
});

document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent actual form submission

    // Show success message
    document.getElementById('successMessage').classList.remove('hidden');

    // Redirect after 3 seconds
    setTimeout(function () {
        window.location.href = 'login.html'; // Redirect to login page
    }, 3000);
});
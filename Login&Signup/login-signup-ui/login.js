const togglePassword = document.querySelector('#togglePassword');
        const password = document.querySelector('#password');
        const loginForm = document.querySelector('#loginForm');
        const successMessage = document.querySelector('#successMessage');

        togglePassword.addEventListener('click', function (e) {
            // Toggle the type attribute
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);

            // Toggle the eye icon
            this.querySelector('i').classList.toggle('fa-eye');
            this.querySelector('i').classList.toggle('fa-eye-slash');
        });

        loginForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent default form submission
            
            // Simulate successful login
            setTimeout(() => {
                successMessage.classList.remove('hidden');
                
                // Hide the success message after a few seconds and then refresh the page
                setTimeout(() => {
                    successMessage.classList.add('hidden');
                    window.location.reload(); // Refresh the page
                }, 3000);
            }, 1000);
        });
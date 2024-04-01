document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const passwordError = document.getElementById('password-error');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (password !== confirmPassword) {
            passwordError.textContent = 'Passwords do not match.';
            confirmPasswordInput.focus();
        } else {
            /* Perform sign up process (redirect to product page or perform other actions) */
            alert('Sign up successful! Redirecting to product page.');
            window.location.href = 'products.html';
            
        }
        
    });
});

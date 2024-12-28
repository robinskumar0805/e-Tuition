// Sign Up Form Submission
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Example logic for sign-up
    console.log(`Sign Up - Name: ${name}, Email: ${email}, Password: ${password}`);
    alert('Sign-up successful!');
});

// Login Form Submission
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Example logic for login
    console.log(`Login - Email: ${email}, Password: ${password}`);
    alert('Login successful!');
});

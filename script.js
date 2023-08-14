// Step:1 add click event handler with submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // Step:2 Get the email address & password from input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('input-mail');
    const email = emailField.value;
    const passField = document.getElementById('input-pass');
    const pass = passField.value;

    // Step:4 verify email and password
    if (email === 'lappu@sachin.com' && pass === 'lappu') {
        window.location.href = 'bank.html'
    }
    else {
        alert('Your email or password not matched')
    }
})


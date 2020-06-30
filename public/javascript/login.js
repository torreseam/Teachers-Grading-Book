//submit event from the form
async function signupFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/teacher', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        // check the response status
        if (response.ok) {
            console.log('success');
        } else {
            alert(response.statusText);
        }
    }
}

async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

console.log("Login:", email, password)

    if (email && password) {
        const response = await fetch('/api/teacher/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/login'); // ir ruta dashboard
        } else {
            alert(response.statusText);
        }
    }
}

// document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
document.querySelector('#loginBtn').addEventListener('click', loginFormHandler);
document.getElementById('register-form').addEventListener('submit', function(event){
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(!email){
        document.getElementById('email-error').innerText = 'Email is required';
    } else {
        document.getElementById('email-error').innerText = '';
    }

    if(!password){
        document.getElementById('password-error').innerText = 'Password is required';
    } else {
        document.getElementById('password-error').innerText = '';
    }

    if(email && password){
        document.getElementById('register-form').submit();
        window.location.href="http://127.0.0.1:5500/html/homeWillify.html"
    }
    
});



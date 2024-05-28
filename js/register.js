document.getElementById('register-form').addEventListener('submit', function(event){
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;

    if(!name){
        document.getElementById('name-error').innerText = 'Name is required';
    } else {
        document.getElementById('name-error').innerText = '';
    }

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

    if(!age){
        document.getElementById('age-error').innerText = 'Age is required';
    } else {
        document.getElementById('age-error').innerText = '';
    }

    if(!gender){
        document.getElementById('gender-error').innerText = 'Gender is required';
    } else {
        document.getElementById('gender-error').innerText = '';
    }

    if(name && email && password && age && gender){
        document.getElementById('register-form').submit();
        window.location.href="http://127.0.0.1:5500/html/login.html"
    }
    
});



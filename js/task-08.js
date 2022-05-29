const form = document.querySelector('.login-form');
const emailEl = document.querySelector('input[type="email"]');
const passwordEl = document.querySelector('input[type="password"]');

form.addEventListener('submit', onFormSubmit);

let user = { email: '', password: '' };

function onFormSubmit(event) {
    event.preventDefault();

    
    if (emailEl.value === '' || passwordEl.value === '') {
       return alert('All fields must be filled!');
    } 
    else {
        user.email = emailEl.value;
        user.password = passwordEl.value; 
    }
    document.querySelector('.login-form').reset();
    console.log(user)
}
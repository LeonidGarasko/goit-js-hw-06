const form = document.querySelector('.login-form');
const emeilEl = document.querySelector('input[type="emeil"]');
const passwordEl = document.querySelector('input[type="password]');

form.addEventListener('submit', onFormSubmit);

let user = { emeil: '', password: '' };

function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(formData);

    if (emeilEl === '' || passwordEl === '') {
       return alert('All fields must be filled!');
    } 
    else {
        user.emeil = emeilEl;
        user.password = passwordEl;
    }
    document.querySelector('.login-form').reset();
    console.log(user)
}
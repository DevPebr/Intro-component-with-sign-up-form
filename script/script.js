    const btn = document.querySelector('.green-btn');
    btn.addEventListener('click', (event) => {
        event.preventDefault();
    const name = document.getElementById('name');
    const lastName = document.getElementById('lastname');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const nameAlert = document.querySelector('.name-alert');
    const lastNameAlert = document.querySelector('.lastname-alert');
    const emailAlert = document.querySelector('.email-alert');
    const passwordAlert = document.querySelector('.password-alert');

    if(name.value.length === 0) {
        name.classList.add('active-input');
        nameAlert.classList.add('active-p');
        name.style.border='3px solid hsl(0, 100%, 74%)';
    }
    else {
        name.classList.remove('active-input');
        nameAlert.classList.remove('active-p');
        name.style.border='3px solid hsl(248, 32%, 49%)';
    }

    if(lastName.value.length === 0) {
        lastName.classList.add('active-input');
        lastNameAlert.classList.add('active-p');
        lastName.style.border='3px solid hsl(0, 100%, 74%)';
    }

    else {
        lastName.classList.remove('active-input');
        lastNameAlert.classList.remove('active-p');
        lastName.style.border='2px solid hsl(246, 25%, 77%)';
    }

    if(emailRegex.test(email.value) === false) {
        email.classList.add('active-input');
        email.style.border='3px solid hsl(0, 100%, 74%)';
        email.value='email@example.com';
        email.style.color='hsl(0, 100%, 74%)';
        email.style.paddingLeft='1.2rem';
        emailAlert.classList.add('active-p');

    }

    else {
        email.classList.remove('active-input');
        emailAlert.classList.remove('active-p');
        email.style.border='2px solid hsl(246, 25%, 77%)';
    }

    if(password.value.length === 0) {
        password.classList.add('active-input');
        passwordAlert.classList.add('active-p');
        password.style.border='3px solid hsl(0, 100%, 74%)';
    }
    else {
        password.classList.remove('active-input');
        passwordAlert.classList.remove('active-p');
        password.style.border='2px solid hsl(246, 25%, 77%)';
  }
})
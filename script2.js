let registerdUser = JSON.parse(localStorage.getItem('registerdUser'))
let users = JSON.parse(localStorage.getItem('users'))? JSON.parse(localStorage.getItem('users')) :[]
let emailInput = document.querySelectorAll('input')[0]
let passwordInput = document.querySelectorAll('input')[1]
let rememberMe = document.getElementById('rememberMe')
let tooglePassword = document.getElementById('togglePassword')


if (registerdUser) {
    let email = registerdUser.email;
    let password = registerdUser.password;
    emailInput.value = email
    passwordInput.value = password
    localStorage.removeItem('registerdUser')

}
let form = document.querySelector('form')
let formDivs = document.querySelectorAll('form div.mb-2')

let emailRegex = /^[a-z]{4,9}[0-9]{1,5}@gmail\.com$/;
let passwordRegex = /^(?=.*[@#$%&*!])[A-Za-z0-9@#$%&*!]{8,}$/;


tooglePassword.addEventListener('click', function () {
    if (passwordInput.type == 'password') {
        passwordInput.type = 'text';
        tooglePassword.classList.replace('fa-eye', 'fa-eye-slash')
    }
    else {
        passwordInput.type = 'password';
        tooglePassword.classList.replace('fa-eye-slash', 'fa-eye')
    }
})

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    var emailError
    let valid = true;
    let admin = []
    try {
        let response = await fetch('admin.json');
        admin = await response.json()
    } catch (error) {
        console.log(error);

    }
        if (!emailRegex.test(emailInput.value.trim())) {
        let oldError = document.querySelector('.email-error')
        if (oldError) {
            oldError.remove()
        }
        let div = formDivs[0]
        emailInput.focus();
        if (emailInput.value.trim() === '') {
            emailError = 'Email is required'
        }
        else
            emailError = 'Invalid Email Address'
        div.classList.add('is-invalid')
        let newdiv = document.createElement('div');
        newdiv.classList.add('email-error')
        newdiv.innerHTML = `<div id="emailHelp" class="form-text">${emailError}</div>`
        div.appendChild(newdiv);
    }
    else if (passwordInput.value.trim() === '') {
        let oldError = document.querySelector('.password-error')
        if (oldError) {
            oldError.remove()
        }
        let div = formDivs[1]
        passwordInput.focus();
        let error = 'Invalid Password'
        div.classList.add('is-invalid')
        let newdiv = document.createElement('div');
        newdiv.classList.add('password-error')
        newdiv.innerHTML = `<div id="passwordHelp" class="form-text">${error}</div>`
        div.appendChild(newdiv);
    }
    else {

        let userAdmin = admin.find(ad => ad.email === emailInput.value.trim() && ad.password === passwordInput.value.trim())
        if (userAdmin) {
            if (rememberMe.checked) {
                sessionStorage.removeItem('admin')
                localStorage.setItem('admin', JSON.stringify(userAdmin))
            }
            else {
                localStorage.removeItem('admin')
                sessionStorage.setItem('admin', JSON.stringify(userAdmin))
            }
            window.open('https://www.google.com', '_self')
            return
        }
                let user = users.find(user => user.email === emailInput.value.trim() && user.password === passwordInput.value.trim())
        if (!user) {
            let oldError = document.querySelector('.password-error')
            if (oldError) {
                oldError.remove()
            }
            let div = formDivs[1]
            let error = 'Email Or Password is Incorrect !'
            let newdiv = document.createElement('div');
            newdiv.classList.add('password-error')
            newdiv.innerHTML = `<div id="passwordHelp" class="form-text text-danger mt-3">${error}</div>`
            newdiv.style.fontSize = '20px'
            div.appendChild(newdiv);
            return
        }

        if (rememberMe.checked) {
            sessionStorage.removeItem('loginedUser')
            localStorage.setItem('loginedUser', JSON.stringify(user))
        }
        else {
            localStorage.removeItem('loginedUser')
            sessionStorage.setItem('loginedUser', JSON.stringify(user))
        }
        window.open('profile.html', '_self')

    }
})

emailInput.addEventListener('blur', function () {

    var emailError
    let oldError = document.querySelector('.email-error')
    if (oldError) {
        oldError.remove()
    }
    let div = formDivs[0]
    if (!emailRegex.test(emailInput.value.trim())) {
        if (emailInput.value.trim() === '') {
            emailError = 'Email is required'
        }
        else {
            emailError = 'Invalid Email Address'
            div.classList.add('is-invalid')
            let newdiv = document.createElement('div');
            newdiv.classList.add('email-error')
            newdiv.innerHTML = `<div id="emailHelp" class="form-text">${emailError}</div>`
            div.appendChild(newdiv);
        }
    }
    else {
        div.classList.remove('is-invalid')
    }
})

passwordInput.addEventListener('blur', function () {
    let oldError = document.querySelector('.password-error')
    if (oldError) {
        oldError.remove()
    }
    let div = formDivs[1]
    if (passwordInput.value.trim() === '') {
        let error = 'Invalid Password'
        div.classList.add('is-invalid')
        let newdiv = document.createElement('div');
        newdiv.classList.add('password-error')
        newdiv.innerHTML = `<div id="passwordHelp" class="form-text">${error}</div>`
        div.appendChild(newdiv);
    }
    else {
        div.classList.remove('is-invalid')
    }

})

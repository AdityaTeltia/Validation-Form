const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('pass');
const form = document.querySelector('form');

function showPassword(){
    if(password.type === 'password'){
        password.type = 'text';
    }else{
        password.type = 'password'
    }
}

function showError(id){
    id.style.borderColor = 'red';
}

function showSuccess(id){
    id.style.borderColor = 'var(--successColor)'
}





form.addEventListener('submit' , function(e) {
    if(username.value === ''){
        showError(username);
    }else{
        showSuccess(username);
    }
    if(email.value === ''){
        showError(email);
    }else{
        showSuccess(email);
    } 
    if(password.value === ''){
        showError(password);
    }else{
        showSuccess(password);
    }
    
    e.preventDefault();
})

document.getElementById('show-password').addEventListener('click', showPassword);






function subscribe() {
    let email = document.querySelector('input#imail').value;
    
    localStorage.setItem('email', email);
}

function successp() {
    let email = localStorage.getItem('email');
    let stexto = document.querySelector('p#spp');
    stexto.innerHTML = `A confirmation email has been sent to ${email} Please open it and click the button inside to confirm your subscription.`;
}

window.onload = successp;

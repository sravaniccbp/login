let userName = document.getElementById('userName');
let userEmail = document.getElementById('userEmail');
let mobileNumber = document.getElementById('mobileNumber');
let password = document.getElementById('password');
let SignUpButton = document.getElementById('SignUpButton');
let loginButton = document.getElementById('loginButton');
let forText = document.getElementById('text')
let loginPasswordInput = document.getElementById('loginPasswordInput')
let LoginEmailInput = document.getElementById('LoginEmailInput')
loginButton.addEventListener('click', (event) => {
    let storedEmail = localStorage.getItem('User Email');
    let storedPassword = localStorage.getItem('Password');
    if (storedEmail === LoginEmailInput.value && storedPassword === loginPasswordInput.value) {
        event.preventDefault();
        alert('Login successful');
        window.location.href = 'dashboard.html'
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You Are Regiesterd Successfully",
            showConfirmButton: false,
            timer: 1500
          });
    } else {
        event.preventDefault();
        console.log('Login failed');
        forText.innerText = 'Please fill in this form'
    }
});




console.log(localStorage.getItem('User Name'));












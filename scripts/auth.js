//SIGN UP

const signupform = document.querySelector('#signup-form');
signupform.addEventListener('submit', (e) =>{
    e.preventDefault();

    //get user info
    const email = signupform['signup-email'].value;
    const password = signupform['signup-password'].value;


    console.log(email, password)
})
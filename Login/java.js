  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC1-aCWwtFH2iKsHvb-WOvVqSIVnfj5Q68",
    authDomain: "login-form-4c6b5.firebaseapp.com",
    projectId: "login-form-4c6b5",
    storageBucket: "login-form-4c6b5.appspot.com",
    messagingSenderId: "885226549299",
    appId: "1:885226549299:web:bf9e189a5de87a857cb346"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  
  
  function regis(){
	 var user id = document.getElementById("user");
	 var email = document.getElementById("email");
	 var Password = document.getElementById("Password");
	 
	 const promise = auth.CreateUserWithUserAndEmailAndPassword(user.value, email.value, Password.value);
	 promise.catch(e => alert(e.message));
	 
	 alert("Signed Up");
	 
  }





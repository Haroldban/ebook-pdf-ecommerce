var email = document.getElementById("email_su");

var email_log = document.getElementById("email_log");

var password = document.getElementById("password_su");

var password_log = document.getElementById("password_log");

function signup() {

  var userEM = email.value;
  var pass = password.value;
  if (userEM.length < 4) {
    alert('Please enter an email address.');
    return;
  }
  if (pass.length < 4) {
    alert('Please enter a password.');
    return;
  }
  // Create user with email and pass.
  // [START createwithemail]
  firebase.auth().createUserWithEmailAndPassword(userEM, pass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    // [END_EXCLUDE]
  });
  // [END createwithemail]
  window.alert("YEET!!")
}

function login() {
if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      } else {
        var email_log = document.getElementById('email_log').value;
        var password_log = document.getElementById('password_log').value;
        if (email_log.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password_log.length < 4) {
          alert('Please enter a password.');
          return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        const promise =  firebase.auth().signInWithEmailAndPassword(email_log, password_log)
          .then(function(result){
            console.log(result.user.email);
            window.alert("YEET");
          })
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode === 'auth/wrong-password') {
              alert('Wrong password.');
            } 
            if (errorCode === 'auth/invalid-email') {
              alert('Invalid email.');
            }
            if (errorCode === 'auth/user-disabled') {
              alert('User disabled.');
            }
            if (errorCode === 'auth/user-not-found') {
              alert('User Not Found');
            }
            console.log(error);
            document.getElementById('login').disabled = false;
            // [END_EXCLUDE]
          });
        // [END authwithemail]
      }
      document.getElementById('login').disabled = true;
}
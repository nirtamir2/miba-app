<template>
  <!--<div>-->
  <!--&lt;!&ndash;<link type="text/css" rel="stylesheet" href="../../node_modules/firebaseui/dist/firebaseui.css" />&ndash;&gt;-->
  <!--<h1>login!</h1>-->
  <!--<button id="sign-in-button">sign in!</button>-->
  <!--<div>-->
  <!--<label for="phone">phone</label>-->
  <!--<input type="text" id="phone">-->
  <!--</div>-->
  <!--<div>-->
  <!--<label for="code">code</label>-->
  <!--<input type="text" id="code">-->
  <!--</div>-->
  <!--</div>-->
  <div>
    <div id="firebaseui-auth-container">
    </div>
  </div>
</template>
<script>

  var firebase = require('firebase');
  var firebaseui = require('firebaseui');
  // FirebaseUI config.
  var uiConfig = {
    // Url to redirect to after a successful sign-in.
    'signInSuccessUrl': '/',
    'callbacks': {
      'signInSuccess': function (user, credential, redirectUrl) {
        if (window.opener) {
          // The widget has been opened in a popup, so close the window
          // and return false to not redirect the opener.
          window.close();
          return false;
        } else {
          // The widget has been used in redirect mode, so we redirect to the signInSuccessUrl.
          return true;
        }
      }
    },
    'signInOptions': [
      {
        provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        recaptchaParameters: {
          size: 'invisible',
        },
        defaultCountry: 'IL'

      }
    ],
    // Terms of service url.
    'tosUrl': 'https://www.google.com'
  };
  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  // The start method will wait until the DOM is loaded to include the FirebaseUI sign-in widget
  // within the element corresponding to the selector specified.
  ui.start('#firebaseui-auth-container', uiConfig);

  //
  //  // function onSignInSubmin() {
  //  //   console.log(onSignInSubmin);
  //  // }
  //
  //  // FirebaseUI config.
  //  var uiConfig = {
  //    signInSuccessUrl: '/hello',
  //    signInOptions: [
  //      firebase.auth.PhoneAuthProvider.PROVIDER_ID
  //    ],
  //    // Terms of service url.
  //    tosUrl: 'walla.oם.il'
  //  };
  //
  //  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  //  // The start method will wait until the DOM is loaded.
  //  ui.start('#firebaseui-auth-container', uiConfig);
  //
  ////  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
  ////    'size': 'invisible',
  ////    'callback': function (response) {
  ////      // reCAPTCHA solved, allow signInWithPhoneNumber.
  ////      onSignInSubmit();
  ////    }
  ////  });
  //
  //  // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  //  //
  //  //
  //  //    function getPhoneNumberFromUserInput() {
  //  //      return document.getElementById('phone').innerText;
  //  //    }
  //  //    var phoneNumber = getPhoneNumberFromUserInput();
  //  //    var appVerifier = window.recaptchaVerifier;
  //  //    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
  //  //      .then(function (confirmationResult) {
  //  //        // SMS sent. Prompt user to type the code from the message, then sign the
  //  //        // user in with confirmationResult.confirm(code).
  //  //        window.confirmationResult = confirmationResult;
  //  //      }).catch(function (error) {
  //  //      // Error; SMS not sent
  //  //      // ...
  //  //    });
  //  //
  //  //
  //  //    function getCodeFromUserInput() {
  //  //      return document.getElementById('code').innerText;
  //  //    }
  //  //    var code = getCodeFromUserInput();
  //  //    confirmationResult.confirm(code).then(function (result) {
  //  //      // User signed in successfully.
  //  //      var user = result.user;
  //  //      // ...
  //  //    }).catch(function (error) {
  //  //      // User couldn't sign in (bad verification code?)
  //  //      // ...
  //  //    });
  //  //
  //  //    var credential = firebase.auth.PhoneAuthProvider.credential(confirmationResult.verificationId, code);
  //
</script>

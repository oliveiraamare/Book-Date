forgotPassword = (Email) => {
  firebase.auth().sendPasswordResetEmail(Email)
    .then(function (user) {
      alert('Please check your email...')
    }).catch(function (e) {
      console.log(e)
    })
}

changePassword = (currentPassword, newPassword) => {
  this.reauthenticate(currentPassword).then(() => {
    var user = firebase.auth().currentUser;
    user.updatePassword(newPassword).then(() => {
      console.log("Password updated!");
    }).catch((error) => { console.log(error); });
  }).catch((error) => { console.log(error); });
}
$(document).ready(function () {
  $("#signUpSubmit").on("click", function () {
    event.preventDefault();

    // console.log($("#uname").val().trim());
    // console.log($("#psw").val().trim());

    if ($("#uname").val().trim() === "" || $("#psw").val().trim() === "") {
      alert("Username or Password is Blank");
      $("#uname").css("background-color", "pink");
      $("#psw").css("background-color", "pink");
      return null;
    }

    var newUser = {
      username: $("#uname").val().trim(),
      password: $("#psw").val().trim(),
    };

    $.ajax({
      type: 'post',
      url: 'https://pacific-ocean-86624.herokuapp.com/api/signUp',
      data: newUser,
      success: function(data, status) {
        window.location.href = 'https://pacific-ocean-86624.herokuapp.com/login.html';
      }
    })  
  })

  $("#loginSubmit").on("click", function () {
    event.preventDefault();

    // console.log($("#loginuname").val().trim());
    // console.log($("#loginpsw").val().trim());
    var sessionUsername = $("#loginuname").val().trim();
    // sessionStorage.clear();
    sessionStorage.setItem("username", sessionUsername);

    var checkUser = {
      username: $("#loginuname").val().trim(),
      password: $("#loginpsw").val().trim(),
    };

    // console.log(checkUser);

    $.post("/api/login/", checkUser, function (err, res) {
      if (res === "success") {
        alert("Successful Login")

        // sessionStorage.clear();
        sessionStorage.setItem("login_status", true);
        var loginStatus = sessionStorage.getItem("login_status");
        // console.log("login status" + loginStatus);
        window.location.href = "https://pacific-ocean-86624.herokuapp.com/loggedIn.html";
      } else {
        alert("Invalid Username or Password");
      }
    });

  })
});
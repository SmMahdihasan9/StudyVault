function login() {

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username === "admin" && password === "123456") {

        localStorage.setItem("loggedIn", "true");

        window.location.href = "home.html";

    } else {

        alert("Invalid Username or Password!");

    }
}

document.addEventListener("DOMContentLoaded", function () {
    const loginTab = document.getElementById("loginTab");
    const signupTab = document.getElementById("signupTab");
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    loginTab.addEventListener("click", function () {
        showTab("login");
    });

    signupTab.addEventListener("click", function () {
        showTab("signup");
    });

    function showTab(tabName) {
        if (tabName === "login") {
            loginTab.classList.add("active");
            signupTab.classList.remove("active");
            loginForm.classList.add("active");
            signupForm.classList.remove("active");
        } else {
            loginTab.classList.remove("active");
            signupTab.classList.add("active");
            loginForm.classList.remove("active");
            signupForm.classList.add("active");
        }
    }
});

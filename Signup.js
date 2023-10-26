const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); //preventing form submit
        forms.classList.toggle("show-signup");
    })
})

function handleSigNupClick() {
    let pwd = document.getElementById("password");
    let cofpwd = document.getElementById("cofPassword");
    let email = document.getElementById("email");
    if (!email.value) {
        alert("The mailbox cannot be empty");
        return
    }
    if (!isEmail(email.value)) {
        alert("Email format error");
        return
    }
    let b = false;

    if (!pwd.value || !cofpwd.value) {
        alert("The password cannot be empty");
    } else {
        if (pwd.value != cofpwd.value) {
            alert("Two different passwords");
        } else {
            location.href = "Home.html"
        }
    }
}

/**
 * 邮箱格式正则校验
 * @param email
 * @returns {boolean}
 */
function isEmail(email) {
    let emailRegExp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    return emailRegExp.test(email)
}
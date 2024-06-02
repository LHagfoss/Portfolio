function cookiesTransition() {
    setTimeout(function() {
        document.getElementById('cookies').style.display = "none";
        document.documentElement.style.overflow = "scroll";
        document.body.style.overflow = "scroll";
    }, 200);
}

function accept() {
    document.getElementById('cookies').style.opacity = "0";
    cookiesTransition();
}

function decline() {
    alert('You have to accept the cookies!');
}

window.onload = function balls() {
    document.getElementById("cookies").style.opacity = "1";
};


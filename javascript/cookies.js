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
    
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 500);
    });
    gsap.ticker.lagSmoothing(0);
}

function decline() {
    alert('You have to accept the cookies!');
}
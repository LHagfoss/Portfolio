document.addEventListener("DOMContentLoaded", function () {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 500);
    });

    gsap.ticker.lagSmoothing(0);
};

function github() {
    window.open('https://github.com/lhagfoss', '_blank');
};

function email() {
    window.open('mailto:lucash.1707@gmail.com', '_blank');
}

function rotateIcon() {
    const icon = document.querySelector('#rotate i');
    icon.style.transform = 'rotate(180deg)';
}

function resetIcon() {
    const icon = document.querySelector('#rotate i');
    icon.style.transform = 'rotate(0deg)';
}

document.getElementById('rotate').addEventListener('mouseover', rotateIcon);
document.getElementById('rotate').addEventListener('mouseout', resetIcon);

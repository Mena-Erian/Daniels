//start nav animation

var typed = new Typed("#elementtyped", {
    strings: ["Developer", "Designer", "Larry Daniels"],
    typeSpeed: 65,
    backSpeed: 65,
    loop: true,
    loopCount: Infinity,
});
//end nav animation

function animateCounter(element, target) {
    let start = 0;
    const duration = 2000; // duration in milliseconds
    const step = target / (duration / 16); // approximate frame interval for 60fps

    function updateCounter() {
        start += step;
        if (start >= target) {
            element.innerText = target;
        } else {
            element.innerText = Math.floor(start);
            requestAnimationFrame(updateCounter);
        }
    }

    updateCounter();
}

document.addEventListener("scroll", function () {
    const counterSection = document.getElementById("experienceWork");
    const counters = document.querySelectorAll(".counter");

    if (counterSection.getBoundingClientRect().top < window.innerHeight) {
        counters.forEach((counter) => {
            if (counter.innerText === "0") {
                // Only animate if not already animated
                const target = parseInt(counter.getAttribute("data-target"));
                animateCounter(counter, target);
            }
        });
    }
});

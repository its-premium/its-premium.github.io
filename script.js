document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelector(".bounce-text");

    target.innerHTML = target.textContent
        .split("")
        .map((char, i) => {
        const displayChar = char === " " ? "&nbsp;" : char;
        return `<span style="animation-delay:${i * 0.07}s">${displayChar}</span>`;
    })
    .join("");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!target.classList.contains("animate")) {
                    target.classList.add("animate");
                }
            } else {
            target.classList.remove("animate");
            }
        });
    }, { threshold: 0.5 });

    observer.observe(target);
});

function overlapsView(el) {
    const rect = el.getBoundingClientRect();
    const viewportTarget = window.innerHeight / 3;

    // Check if the viewport center lies between the element's top and bottom
    return rect.top <= viewportTarget && rect.bottom >= viewportTarget;
}

document.addEventListener("DOMContentLoaded", () => {
    const infoboxes = document.querySelectorAll(".infobox");

    if (!infoboxes.length) return; // Exit if no infoboxes exist

    window.addEventListener("scroll", () => {
        infoboxes.forEach((box) => {
            if (overlapsView(box)) {
            box.classList.add("selected");
            } else {
            box.classList.remove("selected");
            }
        });
    });
});

function toggleTheme() {
    document.body.classList.toggle("light-theme");

    document.querySelectorAll(".title").forEach(el => {
        el.classList.toggle("light-theme");
    });


    const sun = document.getElementById("sun-icon");
    const moon = document.getElementById("moon-icon");

    if (sun.style.display === "none") {
      sun.style.display = "initial";
      moon.style.display = "none";
    } else {
      sun.style.display = "none";
      moon.style.display = "initial";
    }
}
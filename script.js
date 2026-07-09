// Loader
window.addEventListener("load", function () {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        if (loader) {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
            }, 1000);
        }
    }, 2500);
});

// Start Button
const startBtn = document.getElementById("startBtn");
if (startBtn) {
    startBtn.addEventListener("click", function () {
        document.querySelector(".gallery").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// Popup
const popup = document.getElementById("popup");
const secret = document.getElementById("secret");

if (secret && popup) {
    secret.addEventListener("click", function () {
        popup.style.display = "flex";
    });
}

function closePopup() {
    if (popup) {
        popup.style.display = "none";
    }
}

// Floating Hearts
setInterval(() => {

    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";
    heart.style.transition = "transform 5s linear, opacity 5s linear";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = "translateY(-120vh)";
        heart.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        heart.remove();
    }, 5000);

}, 500);

// =========================
// Loader
// =========================

window.addEventListener("load", function () {
    setTimeout(() => {
        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
        }, 1000);

    }, 2500);
});

// =========================
// Start Button
// =========================

document.getElementById("startBtn").addEventListener("click", function () {

    document.querySelector(".gallery").scrollIntoView({

        behavior: "smooth"

    });

});

// =========================
// Secret Popup
// =========================

const popup = document.getElementById("popup");

document.getElementById("secret").addEventListener("click", function () {

    popup.style.display = "flex";

});

function closePopup() {

    popup.style.display = "none";

}

// =========================
// Floating Hearts
// =========================

setInterval(() => {

    const heart = document.createElement("div");

   

const Open = document.querySelector("#open"),
Close = document.querySelector("#close"),
nav = document.querySelector("#nav");

Open.addEventListener("click", () => {
    nav.classList.add("visible");
})

Close.addEventListener("click", () => {
    nav.classList.remove("visible");
})
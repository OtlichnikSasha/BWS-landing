window.onload = () => {
    setTimeout(() => {
        const preloader = document.getElementById("preloader")
        document.body.classList.remove("hidden")
        preloader.classList.remove("visible");
    }, 1600)
}
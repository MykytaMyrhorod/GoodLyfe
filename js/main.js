document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector(".header-top").classList.toggle("open")
    })
})
const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', '${window.innerHeight}px')
}
window.addEventListener('resize', appHeight)
appHeight()
const screens = document.getElementById("screen")
const box = document.getElementById("mystery-box")
const circleScreen = document.getElementById("circle-screen")
const cricle = document.getElementById("circle")
const light = document.getElementById("light1")
box.addEventListener('click', async () => {
    circleScreen.style.visibility = "visible"
    cricle.style.clipPath = `circle(2000px)`
    setTimeout(() => {
        screens.style.display = "none"
    }, 2000)
})
window.addEventListener("mousemove", (event) => {
    light.style.left = `${event.clientX - 2500}px`
    light.style.top = `${event.clientY - 2500}px`
})
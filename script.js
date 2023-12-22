const time = document.querySelector("#time")
const curcle = document.querySelector(".annoying-btn")

window.onload = update
setInterval(update, 15 * 1000)

function update() {
	time.innerHTML = render()
}
function render() {
	const now = new Date()
	let min = String(now.getMinutes())
	let hour = String(now.getHours())
	return hour + ":" + min
}

const btn = document.querySelector(".theme")

btn.addEventListener("click", () => {
	if (localStorage.getItem("mode") === "dark") {
		document.body.classList.add("dark")

		localStorage.setItem("mode", "light")
	} else {
		document.body.classList.remove("dark")

		localStorage.setItem("mode", "dark")
	}
})

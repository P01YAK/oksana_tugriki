var points = 0
var hasPlayedSound = false

function addPoints() {
	var displayPoints = document.getElementById('points')
	var currentPoints = parseInt(displayPoints.innerText)
	var newPoints = currentPoints + 30

	var interval = setInterval(function () {
		if (currentPoints < newPoints) {
			currentPoints++
			displayPoints.innerText = currentPoints
		} else {
			clearInterval(interval)
		}
	}, 20)

	points = newPoints
}

function playSound() {
	if (!hasPlayedSound) {
		var audio = document.getElementById('goose-sound')
		audio.play()
		hasPlayedSound = true
	}
}

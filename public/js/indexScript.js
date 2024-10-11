document.getElementById("play").addEventListener("click", function() {
	// Skryje element play a zobrazí element pause
	this.classList.add("d-none");
	document.getElementById("pause").classList.remove("d-none");
});

document.getElementById("pause").addEventListener("click", function() {
	// Skryje element pause a zobrazí element play
	this.classList.add("d-none");
	document.getElementById("play").classList.remove("d-none");
});


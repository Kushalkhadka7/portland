function openNav() {
	let sidebar = document.getElementById("sidebar");
	sidebar.style.width = "250px";
	sidebar.style.width = window.innerHeight;
}

function closeNav() {
	document.getElementById("sidebar").style.width = "0";
}

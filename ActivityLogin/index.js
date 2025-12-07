function validate() {
	let email = document.getElementById("email").value;
	
	if (email === "") {
		alert("Email is required.");
	} else {
		alert("Form submitted.");
	}
}
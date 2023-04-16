const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	if (validateForm()) {
		sendForm();
	}
});

function validateForm() {
	let name = document.getElementById('name').value.trim();
	let email = document.getElementById('email').value.trim();
	
	let message = document.getElementById('message').value.trim();

	if (name === '' || email === '' || message === '') {
		alert('All fields are required');
		return false;
	}

	let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		alert('Invalid email address');
		return false;
	}

	return true;
}







function sendForm() {
  
    var params = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        message: document.getElementById("message").value.trim()

    };


const serviceID = "service_q0l28uk";
const templateID = "template_5zoyv29";

emailjs.send(serviceID, templateID, params)
.then(
    res => {
        document.getElementById("name").value.trim();
        document.getElementById("email").value.trim();
        document.getElementById("message").value.trim();
        console.log(res);
        alert("Your message sent successfully")

    }
)

}

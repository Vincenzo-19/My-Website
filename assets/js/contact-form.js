function sendMail(){

    if (document.getElementById("contact-form").checkValidity()){

        let params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        emailjs.send("gmail", "template_8jav507", params)
        .then(alert("Message Sent Succesfully!"));
    };
}
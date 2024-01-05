function sendMail(){

    if (document.getElementById("contact-form").checkValidity()){

        let params = {
            firstname: document.getElementById("user_name").value,
            email: document.getElementById("user_email").value,
            message: document.getElementById("message").value,
        };

        emailjs.send("gmail", "template_8jav507", params)
        .then(alert("Message Sent Succesfully!"));
    };
}
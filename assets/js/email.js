document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".php-email-form").addEventListener("submit", function (event) {
        event.preventDefault();
        
        const serviceID = "service_spx5yx5";
        const templateID = "template_o4j85bv";
        const publicKey = "8rjSoa8g4C5KIF3s1";

        const formData = {
            name: document.querySelector("input[name='name']").value,
            email: document.querySelector("input[name='email']").value,
            subject: document.querySelector("input[name='subject']").value,
            message: document.querySelector("textarea[name='message']").value
        };

        emailjs.send(serviceID, templateID, formData, publicKey)
            .then(() => {
                Swal.fire({
                    title: "Message Sent!",
                    text: "Your email has been sent successfully.",
                    icon: "success",
                    draggable: true
                });
                document.querySelector(".php-email-form").reset();
            })
            .catch((error) => {
                Swal.fire({
                    title: "Error!",
                    text: "Failed to send email. Please try again.",
                    icon: "error",
                    draggable: true
                });
                console.error("EmailJS Error: ", error);
            });
    });
});

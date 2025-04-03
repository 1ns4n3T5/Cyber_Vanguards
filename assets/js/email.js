document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".php-email-form").addEventListener("submit", function (event) {
        event.preventDefault();
        
        const serviceID = "service_uvs3ypy";
        const templateID = "template_vt0urue";
        const publicKey = "5uaGJFon1MurFwUor";

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

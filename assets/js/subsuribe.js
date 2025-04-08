emailjs.init("5uaGJFon1MurFwUor");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("subscribe-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailValue = document.getElementById("email").value;

    const templateParams = {
      email: emailValue
    };

    emailjs.send("service_uvs3ypy", "template_ak96c2x", templateParams)
      .then(() => {
        Swal.fire({
          title: "You're in! 🎉",
          text: "Thanks for subscribing to our newsletter. Keep an eye on your inbox!",
          icon: "success",
          confirmButtonText: "Awesome!",
        });

        form.reset();
        document.querySelector(".sent-message").style.display = "block";
      })
      .catch((error) => {
        Swal.fire({
          title: "Oops 😓",
          text: "We couldn't subscribe you. Please try again in a moment.",
          icon: "error",
          confirmButtonText: "Okay",
        });
        console.error("EmailJS Error: ", error);
      }); // <-- This closing was missing
  });
});

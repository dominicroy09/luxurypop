const insReqCall = document.getElementById("ins-req-call");

insReqCall.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("ins-name").value;
    const phone = document.getElementById("ins-phone").value;
    const location = document.getElementById("ins-location").value;
    const ceilingStyle = document.getElementById("ins-ceiling-style").value;
    const room = document.getElementById("ins-room").value;
    const message = document.getElementsByClassName("ins-message").value;


    const whatsappMessage =
        `New client request\n\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Location: ${location}\n` +
        `room: ${room}\n` +
        `ceiling type: ${ceilingStyle}`;
        `message:${message}`;

    const whatsappNumber = "916202334232";

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");
});
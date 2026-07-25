const numeroWhatsApp = "60497954";

const botones = document.querySelectorAll(".producto button");

botones.forEach((boton) => {

    boton.addEventListener("click", () => {

        const producto = boton.parentElement.querySelector("h3").textContent;

        const mensaje = `Hola Tienda G.Y.C., estoy interesado en el producto: ${producto}`;

        const enlace = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

        window.open(enlace, "_blank");

    });

});

// Función para mover el botón "NO" aleatoriamente
const btnNo = document.querySelector("#btn-random");

function moverAleatoriamente(btn) {
    btn.style.position = "absolute";
    btn.style.fontWeight = "bolder";
    btn.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    btn.style.left = Math.floor(Math.random() * 90 + 5) + "%";
    btn.style.transition = "all 0.3s ease";
}

btnNo.addEventListener("mouseenter", function (e) {
    moverAleatoriamente(e.target);
});

// Efecto de confeti al hacer clic en "SÍ"
const btnSi = document.querySelector(".btn a[href='si.html']");

if (btnSi) {
    btnSi.addEventListener("click", function (e) {
        e.preventDefault(); // Evita que el enlace se abra inmediatamente

        // Crear confeti manual
        const confetiContainer = document.createElement("div");
        confetiContainer.classList.add("confeti");
        document.body.appendChild(confetiContainer);

        for (let i = 0; i < 150; i++) {
            const confeti = document.createElement("div");
            confeti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
            confeti.style.left = `${Math.random() * 100}%`;
            confeti.style.animationDuration = `${Math.random() * 2 + 1}s`;
            confetiContainer.appendChild(confeti);
        }

        // Redirige a la página "si.html" después de 1 segundo
        setTimeout(() => {
            window.location.href = "si.html";
        }, 1000);
    });
} else {
    console.error("El botón 'SÍ' no se encontró.");
}
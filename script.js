// Función para crear confeti manual
function crearConfeti() {
    const colores = ["#ff6f61", "#ffcccb", "#ff3b2f", "#fff", "#f4c2c2", "#ff9aa2"];
    const formas = ["circle", "square", "triangle"];
    const confetiContainer = document.createElement("div");
    confetiContainer.style.position = "fixed";
    confetiContainer.style.top = "0";
    confetiContainer.style.left = "0";
    confetiContainer.style.width = "100%";
    confetiContainer.style.height = "100%";
    confetiContainer.style.pointerEvents = "none";
    confetiContainer.style.zIndex = "1000";
    document.body.appendChild(confetiContainer);

    for (let i = 0; i < 200; i++) {
        const confeti = document.createElement("div");
        confeti.style.width = `${Math.random() * 10 + 5}px`;
        confeti.style.height = `${Math.random() * 10 + 5}px`;
        confeti.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
        confeti.style.position = "absolute";
        confeti.style.top = "0";
        confeti.style.left = `${Math.random() * 100}%`;
        confeti.style.animation = `confeti-caer ${Math.random() * 2 + 1}s linear`;
        confeti.style.borderRadius = formas[Math.floor(Math.random() * formas.length)] === "circle" ? "50%" : "0";
        confetiContainer.appendChild(confeti);
    }

    setTimeout(() => {
        confetiContainer.remove();
    }, 3000);
}

// Añadir animación de confeti
const style = document.createElement("style");
style.innerHTML = `
@keyframes confeti-caer {
    0% { transform: translateY(0) rotate(0deg); }
    100% { transform: translateY(100vh) rotate(360deg); }
}
`;
document.head.appendChild(style);

// Efecto de confeti al hacer clic en "SÍ"
const btnSi = document.querySelector(".btn a[href='si.html']");

if (btnSi) {
    btnSi.addEventListener("click", function (e) {
        e.preventDefault(); // Evita que el enlace se abra inmediatamente
        crearConfeti();

        // Redirige a la página "si.html" después de 1 segundo
        setTimeout(() => {
            window.location.href = "si.html";
        }, 1000);
    });
} else {
    console.error("El botón 'SÍ' no se encontró.");
}

// Efecto de movimiento aleatorio para el botón "NO" en no2.html
const btnRandom = document.getElementById("btn-random");

if (btnRandom) {
    btnRandom.addEventListener("mouseover", function () {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);
        btnRandom.style.position = "absolute";
        btnRandom.style.left = `${x}px`;
        btnRandom.style.top = `${y}px`;
    });
}
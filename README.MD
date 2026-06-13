```javascript
// ======================================
// LABORAGRO
// Torre Hidropônica Inteligente
// ======================================

const fluxo = document.getElementById("fluxo");
const ph = document.getElementById("ph");
const tds = document.getElementById("tds");

const fluxoValor = document.getElementById("fluxoValor");
const phValor = document.getElementById("phValor");
const tdsValor = document.getElementById("tdsValor");

const oledFluxo = document.getElementById("oledFluxo");
const oledPH = document.getElementById("oledPH");
const oledTDS = document.getElementById("oledTDS");

const statusBox = document.getElementById("status");

const autoBtn = document.getElementById("autoMode");
const muteBtn = document.getElementById("muteBtn");
const contrasteBtn = document.getElementById("contrasteBtn");

const alarme = document.getElementById("alarme");

const alfacesContainer =
document.getElementById("alfaces");

let autoMode = false;
let muted = false;

// ======================================
// CRIA 30 ALFACES EM ESPIRAL
// ======================================

function criarAlfaces() {

    alfacesContainer.innerHTML = "";

    const centroX = 350;
    const raio = 120;

    for (let i = 0; i < 30; i++) {

        const alface =
        document.createElement("div");

        alface.className = "alface";

        const angulo =
        i * 28;

        const rad =
        angulo * Math.PI / 180;

        const x =
        centroX +
        Math.cos(rad) * raio;

        const y =
        110 +
        (i * 18);

        alface.style.left =
        `${x}px`;

        alface.style.top =
        `${y}px`;

        alface.setAttribute(
        "aria-label",
        `Alface ${i + 1}`
        );

        alfacesContainer.appendChild(alface);
    }
}

criarAlfaces();


// ======================================
// MOSTRA VALORES
// ======================================

function atualizarDisplays() {

    fluxoValor.textContent =
    fluxo.value;

    phValor.textContent =
    Number(ph.value).toFixed(1);

    tdsValor.textContent =
    tds.value;

    oledFluxo.textContent =
    fluxo.value + "%";

    oledPH.textContent =
    Number(ph.value).toFixed(1);

    oledTDS.textContent =
    tds.value + " ppm";

    fluxo.setAttribute(
    "aria-valuenow",
    fluxo.value
    );

    ph.setAttribute(
    "aria-valuenow",
    ph.value
    );

    tds.setAttribute(
    "aria-valuenow",
    tds.value
    );
}


// ======================================
// VERIFICA SISTEMA
// ======================================

function verificarSistema() {

    atualizarDisplays();

    const fluxoOk =
    Number(fluxo.value) >= 60;

    const phOk =
    Number(ph.value) >= 5.5 &&
    Number(ph.value) <= 6.5;

    const tdsOk =
    Number(tds.value) >= 700 &&
    Number(tds.value) <= 1200;

    const sistemaOk =
    fluxoOk &&
    phOk &&
    tdsOk;

    const alfaces =
    document.querySelectorAll(".alface");

    if (sistemaOk) {

        statusBox.textContent =
        "✅ Sistema Operando Normalmente";

        statusBox.classList.remove(
        "alerta"
        );

        alfaces.forEach(a => {

            a.classList.remove(
            "doente"
            );

        });

    } else {

        statusBox.textContent =
        "⚠ ALERTA - Corrigir Fluxo, pH ou TDS";

        statusBox.classList.add(
        "alerta"
        );

        alfaces.forEach(a => {

            a.classList.add(
            "doente"
            );

        });

        tocarAlarme();
    }
}


// ======================================
// ALARME
// ======================================

function tocarAlarme() {

    if (muted) return;

    alarme.currentTime = 0;

    alarme.play()
    .catch(() => {});

}


// ======================================
// EVENTOS DOS SLIDERS
// ======================================

fluxo.addEventListener(
"input",
verificarSistema
);

ph.addEventListener(
"input",
verificarSistema
);

tds.addEventListener(
"input",
verificarSistema
);


// ======================================
// BOTÃO SILENCIAR
// ======================================

muteBtn.addEventListener(
"click",
() => {

    muted = !muted;

    if (muted) {

        alarme.pause();

        muteBtn.innerHTML =
        "🔈 Ativar Alarme";

    } else {

        muteBtn.innerHTML =
        "🔇 Silenciar Alarme";

    }

}
);


// ======================================
// ALTO CONTRASTE
// ======================================

contrasteBtn.addEventListener(
"click",
() => {

    document.body.classList.toggle(
    "alto-contraste"
    );

}
);


// ======================================
// MODO AUTOMÁTICO
// ======================================

autoBtn.addEventListener(
"click",
() => {

    autoMode = !autoMode;

    if (autoMode) {

        autoBtn.innerHTML =
        "🤖 Automático ON";

    } else {

        autoBtn.innerHTML =
        "🤖 Modo Automático";

    }

}
);


// ======================================
// CORREÇÃO AUTOMÁTICA
// ======================================

setInterval(() => {

    if (!autoMode) return;

    const fluxoOk =
    Number(fluxo.value) >= 60;

    const phOk =
    Number(ph.value) >= 5.5 &&
    Number(ph.value) <= 6.5;

    const tdsOk =
    Number(tds.value) >= 700 &&
    Number(tds.value) <= 1200;

    if (!fluxoOk) {

        fluxo.value = 80;

    }

    if (!phOk) {

        ph.value = 6.2;

    }

    if (!tdsOk) {

        tds.value = 900;

    }

    verificarSistema();

}, 1000);


// ======================================
// SIMULA PEQUENAS VARIAÇÕES
// ======================================

setInterval(() => {

    if (autoMode) return;

    let valorAtual =
    Number(fluxo.value);

    valorAtual +=
    (Math.random() - 0.5) * 2;

    valorAtual =
    Math.max(
    0,
    Math.min(
    100,
    valorAtual
    )
    );

    fluxo.value =
    valorAtual.toFixed(0);

    verificarSistema();

}, 5000);


// ======================================
// INICIALIZAÇÃO
// ======================================

atualizarDisplays();

verificarSistema();

console.log(
"LaborAGRO iniciado com sucesso."
);
```

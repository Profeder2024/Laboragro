const alfacesContainer = document.getElementById("alfaces");

for(let i=0;i<30;i++){

const alface = document.createElement("div");
alface.classList.add("alface");

const coluna = i % 2;

const y = 30 + (i*20);

if(coluna===0){
alface.style.left="220px";
}else{
alface.style.left="335px";
}

alface.style.top=y+"px";

alfacesContainer.appendChild(alface);
}

const fluxo = document.getElementById("fluxo");
const ph = document.getElementById("ph");
const tds = document.getElementById("tds");

const fluxoValor = document.getElementById("fluxoValor");
const phValor = document.getElementById("phValor");
const tdsValor = document.getElementById("tdsValor");

const status = document.getElementById("status");
const alarme = document.getElementById("alarme");

let tocando=false;

function verificarSistema(){

fluxoValor.textContent = fluxo.value;
phValor.textContent = ph.value;
tdsValor.textContent = tds.value;

const fluxoOk = fluxo.value >= 60;
const phOk = ph.value >= 5.5 && ph.value <= 6.5;
const tdsOk = tds.value >= 700 && tds.value <= 1200;

const alfaces = document.querySelectorAll(".alface");

if(fluxoOk && phOk && tdsOk){

status.textContent="Sistema Operando Normalmente";
status.classList.remove("alerta");

alfaces.forEach(a=>{
a.classList.remove("doente");
});

tocando=false;
alarme.pause();
alarme.currentTime=0;

}else{

status.textContent="⚠ ALERTA: Verificar Nutrientes!";
status.classList.add("alerta");

alfaces.forEach(a=>{
a.classList.add("doente");
});

if(!tocando){

alarme.play();
tocando=true;

setTimeout(()=>{
alarme.pause();
alarme.currentTime=0;
tocando=false;
},2000);

}

}

}

fluxo.addEventListener("input",verificarSistema);
ph.addEventListener("input",verificarSistema);
tds.addEventListener("input",verificarSistema);

verificarSistema();
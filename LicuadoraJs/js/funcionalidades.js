let estadoLicuadora = "apagada";
let licuadora = document.getElementById("blender");
let sonidoLicuadora = document.getElementById("blender-sound");
let sonidoBotonLicuadora = document.getElementById("blender-button_sound");
function controlarLicuadora() {
  if (estadoLicuadora == "apagada") {
    estadoLicuadora = "encendida";
    licuadora.classList.add("active");
    iniciarSonido();
    /*console.log("me prendiste");*/
  } else {
    estadoLicuadora = "apagada";
    licuadora.classList.remove("active");
    iniciarSonido();
    /*console.log("me apagaste");*/
  }
}
function iniciarSonido() {
  if (sonidoLicuadora.paused) {
    sonidoBotonLicuadora.play();
    sonidoLicuadora.play();
  } else {
    sonidoBotonLicuadora.play();
    sonidoLicuadora.pause();
    sonidoLicuadora.currentTime = 0;
  }
}

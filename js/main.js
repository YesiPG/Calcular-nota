(function () {
  "use strict";
  const d = document;
  const botonAgregar = d.querySelector(".contAgregar");
  const botonCalcular = d.querySelector(".contCalcularBoton");
  const contAddInfo = d.querySelector(".contFormAdd");
  const infoAgregar = d.querySelector(".contInfo");
  const nota = d.querySelector(".contFormLabelNota");
  const porcentaje = d.querySelector(".contFormLabelPorcentaje");
  const nota1 = d.querySelector(".contFormLabelNota1");
  const porcentaje1 = d.querySelector(".contFormLabelPorcentaje1");
  const nota2 = d.querySelector(".contFormLabelNota2");
  const porcentaje2 = d.querySelector(".contFormLabelPorcentaje2");
  const nota3 = d.querySelector(".contFormLabelNota3");
  const porcentaje3 = d.querySelector(".contFormLabelPorcentaje3");
  const contenedor = [...d.querySelectorAll(".contFormAddCont")];
  let contador = 0;

  botonAgregar.addEventListener("click", (e) => {

    contador++;

    if(contador === 1){
        contenedor[1].classList.remove("contFormAddContShow");
    }
    if(contador === 2){
        contenedor[2].classList.remove("contFormAddContShow");

    }
    if(contador === 3){
        contenedor[3].classList.remove("contFormAddContShow");

    }
    if(contador > 3){
        infoAgregar.innerHTML = "Superaste el limite de notas que puedes agregar";
    }
  });

  botonCalcular.addEventListener("click", (e) => {
    e.preventDefault();
    calcular();
  });

  function calcular(){
    let result =
        (nota.value * porcentaje.value +
          n1 * p1 +
          n2 * p2) /
        100;
      console.log(nota.value);
      console.log(n1);
      console.log(n2);
  }
})();

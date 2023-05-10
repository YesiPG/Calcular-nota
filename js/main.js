(function () {
  "use strict";
  const d = document;
  const botonAgregar = d.querySelector(".contAgregar");
  const botonCalcular = d.querySelector(".contCalcularBoton");
  const contAddInfo = d.querySelector(".contFormAdd");
  const infoAgregar = d.querySelector(".contInfo");
  const nota = d.querySelector(".contFormLabelNota");
  const porcentaje = d.querySelector(".contFormLabelPorcentaje");

  botonAgregar.addEventListener("click", (e) => {
    
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

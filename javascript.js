function gernerateNumber(){
const min =Math.ceil(document.querySelector(".input-min").value)
  const max =Math.floor(document.querySelector(".input-max").value )

 const result=Math.floor(Math.random() * (max - min + 1)) + min;


 const resultadoEl = document.getElementById("resultado");

if (isNaN(min) || isNaN(max)) {
                resultadoEl.textContent = "Por favor, insira números válidos.";
                resultadoEl.style.color = "red";
                return;



}

if (min > max) {
                resultadoEl.textContent = "O valor mínimo não pode ser maior que o máximo.";
                resultadoEl.style.color = "red";
                return;



}
const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;

resultadoEl.textContent = `Número sorteado: ${numeroSorteado}`;
            resultadoEl.style.color = "green";

}










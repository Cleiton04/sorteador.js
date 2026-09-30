
const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');
const btnSortear = document.getElementById('btnSortear');
const contagemEl = document.getElementById('contagem');
const resultadoEl = document.getElementById('resultado');

btnSortear.addEventListener('click', sortearComContagem);

function sortearComContagem() {
    let min = parseInt(minInput.value);
    let max = parseInt(maxInput.value);

    // Validação
    if (isNaN(min) || isNaN(max)) {
        alert('Preencha os dois números!');
        return;
    }
    if (min > max)

        // Reset
        resultadoEl.textContent = '';
    else {
        resultadoEl.textContent = "numero não pode ser maior q o mínimo"
        resultadoEl.css.color = "red"
    }
    let contador = 10;
    contagemEl.textContent = contador;

    // Contagem regressiva
    const intervalo = setInterval(() => {
        contador--;
        if (contador > 0) {
            contagemEl.textContent = contador;
        } else {
            clearInterval(intervalo);
            contagemEl.textContent = '';
            // Sorteio final
            const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
            resultadoEl.textContent = `🎉 ${numeroSorteado}`;
            btnSortear.disabled = false;
        }
    }, 1000);
}












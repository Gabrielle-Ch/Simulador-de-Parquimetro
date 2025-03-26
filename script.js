// Classe Parquímetro
class Parquimetro {
    constructor() {
        this.tabelaPrecos = [
            { valor: 3.00, tempo: 120 },
            { valor: 1.75, tempo: 60 },
            { valor: 1.00, tempo: 30 }
        ];
    }

    calcular(valorPago) {
        // Verifica se o valor inserido é válido
        if (isNaN(valorPago) || valorPago <= 0) {
            return { mensagem: "Por favor, insira um valor válido.", troco: 0, tempo: 0 };
        }

        // Encontrar a melhor opção com base no valor inserido
        for (let opcao of this.tabelaPrecos) {
            if (valorPago >= opcao.valor) {
                let troco = valorPago - opcao.valor;
                return { 
                    mensagem: `Tempo Permitido: ${opcao.tempo} minutos`, 
                    troco: troco > 0 ? troco.toFixed(2) : "0.00", 
                    tempo: opcao.tempo 
                };
            }
        }

        // Caso nenhum valor seja suficiente
        return { mensagem: "Valor insuficiente", troco: 0, tempo: 0 };
    }
}

// Função chamada ao clicar no botão
function calcularEstacionamento() {
    let valorInput = parseFloat(document.getElementById("valor").value);
    let parquimetro = new Parquimetro();
    let resultado = parquimetro.calcular(valorInput);

    // Exibir mensagem
    let mensagem = resultado.mensagem;
    if (resultado.tempo > 0) {
        mensagem += "<br>Troco: R$ " + resultado.troco;
    }

    document.getElementById("mensagem").innerHTML = mensagem;
}

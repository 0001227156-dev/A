// Pega o formulário
const formulario = document.getElementById("questionario");

// Gabarito das perguntas
// Coloque aqui a resposta correta de cada questão
const gabarito = {
    q1: "1", // HTML
    q2: "0"  // CSS
    // q3: "2",
    // q4: "1",
    // q5: "3"
};

// Quando o formulário for enviado
formulario.addEventListener("submit", function(event) {

    // Não deixa a página recarregar
    event.preventDefault();

    // Pega o nome
    const nome = document.getElementById("nome").value.trim();

    // Verifica se o nome foi preenchido
    if (nome === "") {
        alert("Digite seu nome antes de enviar.");
        document.getElementById("nome").focus();
        return;
    }

    let acertos = 0;
    let erros = 0;
    let respondidas = 0;

    // Percorre todas as perguntas do gabarito
    for (let pergunta in gabarito) {

        // Procura a alternativa marcada
        const resposta = document.querySelector(
            `input[name="${pergunta}"]:checked`
        );

        // Se não respondeu
        if (!resposta) {
            erros++;
            continue;
        }

        respondidas++;

        // Verifica se acertou
        if (resposta.value === gabarito[pergunta]) {
            acertos++;
        } else {
            erros++;
        }
    }

    // Quantidade total de perguntas
    const total = Object.keys(gabarito).length;

    // Verifica se todas foram respondidas
    if (respondidas < total) {
        alert(
            `Você respondeu ${respondidas} de ${total} perguntas.\n` +
            "Responda todas antes de finalizar."
        );
        return;
    }

    // Calcula a porcentagem
    const porcentagem = (acertos / total) * 100;

    // Calcula a nota de 0 a 10
    const nota = (acertos / total) * 10;

    // Cria a mensagem do resultado
    let mensagem = "";

    if (porcentagem >= 70) {
        mensagem = "Parabéns! Você teve um ótimo resultado!";
    } else if (porcentagem >= 50) {
        mensagem = "Bom resultado! Continue estudando.";
    } else {
        mensagem = "Continue estudando e tente novamente.";
    }

    // Mostra o resultado
    alert(
        "RESULTADO DO QUESTIONÁRIO\n\n" +
        "Nome: " + nome + "\n" +
        "Acertos: " + acertos + "\n" +
        "Erros: " + erros + "\n" +
        "Total: " + total + "\n" +
        "Nota: " + nota.toFixed(1) + "\n" +
        "Porcentagem: " + porcentagem.toFixed(0) + "%\n\n" +
        mensagem
    );

});
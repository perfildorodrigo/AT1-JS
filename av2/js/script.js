function calcularResultado() {
    let inscricao = document.querySelector("#inscricao").value.trim();
    let anonasc = parseFloat(document.querySelector("#anonasc").value);
    let natureza = parseFloat(document.querySelector("#natureza").value);
    let humanas = parseFloat(document.querySelector("#humanas").value);
    let linguagens = parseFloat(document.querySelector("#linguagens").value);
    let matematica = parseFloat(document.querySelector("#matematica").value);
    let redacao = parseFloat(document.querySelector("#redacao").value);
    let nome = document.querySelector("#nome").value.toUpperCase();

    const regex = /^2024\d{6}$/; 

    if (!regex.test(inscricao)) {
        alert("Inscrição deve começar com 2024 e conter exatamente 10 dígitos");
        return;
    }

    if ((anonasc < 1901) || (anonasc > 2007)) {
        alert("Ano de nascimento inválido. Insira um número entre 1901 e 2007");
        return;
    }

    const notas = [
        { valor: humanas, nome: "humanas" },
        { valor: linguagens, nome: "linguagens" },
        { valor: matematica, nome: "matematica" },
        { valor: natureza, nome: "natureza" },
        { valor: redacao, nome: "redacao" }
    ];

    for (let notaObj of notas) {
        if (isNaN(notaObj.valor)) {
            alert(`Nota de ${notaObj.nome} deve ser um número válido.`);
            return;
        }
        if (notaObj.valor < 0 || notaObj.valor > 1000) {
            alert(`Nota de ${notaObj.nome} inválida. Insira um número entre 0 e 1000.`);
            return;
        }
    }

    function classificarNota(nota) {
        if (nota >= 550) {
            return `<span class="aprovado">${nota}, Aprovado</span>`;
        } else if (nota >= 401) {
            return `<span class="recuperacao">${nota}, Recuperação</span>`;
        } else {
            return `<span class="reprovado">${nota}, Reprovado</span>`;
        }
    }

    let naturezaClassificada = classificarNota(natureza);
    let humanasClassificada = classificarNota(humanas);
    let linguagensClassificada = classificarNota(linguagens);
    let matematicaClassificada = classificarNota(matematica);
    let redacaoClassificada = classificarNota(redacao);

    document.querySelector("#resultado").innerHTML =
        `Nome: ${nome}<br>
        Número de inscrição: ${inscricao}<br>
        Nota de natureza: ${naturezaClassificada}<br>
        Nota de humanas: ${humanasClassificada}<br>
        Nota de linguagens: ${linguagensClassificada}<br>
        Nota de matematica: ${matematicaClassificada}<br>
        Nota de redacao: ${redacaoClassificada}<br>`;
}

document.querySelector('.btn').addEventListener('click', calcularResultado);
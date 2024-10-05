function calcularResultado() {
    let valorhora = parseFloat(document.querySelector("#valorhora").value.toUpperCase());
    let horastrab = parseFloat(document.querySelector("#horastrab").value.toUpperCase());
    let nome = document.querySelector("#nome").value.toUpperCase();
    let pis = document.querySelector("#PIS").value.toUpperCase();

    let valorbruto = valorhora * horastrab;
    let inss = 0;
    let iss = valorbruto * 0.05;
    let ir = 0;
    
    
    if (valorbruto <=1500.99) {
        inss = valorbruto * 0.075;
        
    } else if ((valorbruto >= 1501) && (valorbruto <=3000.99)) {
        inss = valorbruto * 0.09;
    } else if ((valorbruto >= 3001) && (valorbruto <= 5000.99)) {
        inss = valorbruto * 0.12;
    } else {
        inss = valorbruto *0.14;
    }
    
    if (valorbruto <=1500.99) {
        ir = 0;
    } else if ((valorbruto >= 1501) && (valorbruto <=2000.99)) {
        ir = valorbruto * 0.075;
    } else if ((valorbruto >= 2001) && (valorbruto <= 3000.99)) {
        ir = valorbruto * 0.15;
    } else if ((valorbruto >= 3001) && (valorbruto <= 4000.99)) {
        ir = valorbruto * 0.225;
    } else {
        ir = valorbruto *0.275;
    }

    if ((valorhora <20) || (valorhora > 500)) {
        alert("Valor por hora inválido. Insira um número entre 20 e 500")
        return;
    }

    if ((horastrab <20) || (horastrab > 200)) {
        alert("Número de horas trabalhadas inválido. Insira um número entre 20 e 200")
        return;
    }
    
    let valorliquido = valorbruto - inss - ir - iss;

    document.querySelector("#resultado").innerHTML=
    `Nome: ${nome}<br>
    PIS/PASEP: ${pis}<br>
    Valor da hora: R$${valorhora}<br>
    Número de horas trabalhadas: ${horastrab}<br>
    Valor bruto a receber: R$${valorbruto.toFixed(2)}<br>
    Desconto do INSS: R$${inss.toFixed(2)}<br>
    Desconto do IR: R$${ir.toFixed(2)}<br>
    Desconto do ISS: R$${iss.toFixed(2)}<br>
    Valor líquido a receber: R$${valorliquido.toFixed(2)}`;
}

document.querySelector('.btn').addEventListener('click', calcularResultado);
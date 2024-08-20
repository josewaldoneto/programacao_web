let dom = document;

// let titulo = document.getElementById("titulo").value;

// console.log(titulo);

function submeter() {
    // let nome = document.getElementById("nome").value;
    // let idade = document.getElementById("idade").value;
    let cpf = document.getElementById("cpf").value;
    // console.log(nome);
    // console.log(idade);
    // console.log(cpf);
    console.log(validaCPF(cpf));    
}

function validaCPF(cpf) {
    if (cpf == "") {
        alert("Campo CPF não pode ser vazio!");
        return false;
    }
    cpf = cpf.trim();

    // Valida se o CPF possui letras
    if(/[a-zA-Z]/.test(cpf)) {
        alert("CPF não pode conter letras!");
        return false;
    }

    // Valida se o CPF possui alguma coisa alem de numeros ou ponto ou hifen
    if (!/^[\d.-]+$/.test(cpf)) {
        alert("CPF só pode conter números, pontos e hífens!")
        return false;
    }

    // Validar que o cpf contem 11 caracteres ou 14(quando se inclui pontos e hifen)
    if(cpf.length != 11 && cpf.length != 14) {
        alert("Formato do CPF inválido!");
        return false;
    }

    // Validar a matemática do CPF
    // Replace está sendo usado para remover pontos e hífen
    if(!cpfMath(cpf.replace(/[\.-]/g,""))) {
        alert("CPF inválido");
        return false;
    }

    return true;
}

function cpfMath(cpf) {
    // Verificação do 1º dígito verificador
    let soma1 = 0;
    for (let i = 1; i <= 9; i++) {
        soma1 = soma1 + (cpf.charAt(i-1) * (10 - (i-1)));
    }

    let resto1 = ( soma1 % 11 )

    let digitoVerificador1 = 11 - resto1;

    if(digitoVerificador1 >= 10) {
        if (cpf[9] != 0) {
            return false;
        }
    } else if(digitoVerificador1 < 10) {
        if(digitoVerificador1 != cpf[9]) {
            return false;
        }
    }

    // Verificação do 2º dígito verificador
    let soma2 = 0;
    for (let j = 1; j <= 8; j++) {
        soma2 = soma2 + (cpf.charAt(j) * (10 - (j-1)));
    }

    soma2 += digitoVerificador1 * 2

    let resto2 = ( soma2 % 11 )
    
    let digitoVerificador2 = 11 - resto2

    if(digitoVerificador2 >= 10) {
        if (cpf[10] != 0) {
            return false;
        }
    } else if(digitoVerificador2 < 10) {
        if(digitoVerificador2 != cpf[10]) {
            return false;
        }
    }
    
    return true;
}
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

    if(/[a-zA-Z]/.test(cpf)) {
        alert("CPF não pode conter letras!");
        return false;
    }

    if (!/^[\d.-]+$/.test(cpf)) {
        alert("CPF só pode conter números, pontos e hífens!")
        return false;
    }

    return true;
}
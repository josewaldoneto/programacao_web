let dom = document;

let titulo = document.getElementById("titulo").value;

console.log(titulo);

function submeter() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let cpf = document.getElementById("cpf").value;
    console.log(nome);
    console.log(idade);
    console.log(cpf);
    console.log(validaCPF(cpf));    
}

function validaCPF(cpf) {
    if (cpf == "") {
        alert("Campo CPF não pode ser vazio!");
        return false;
    }

    return true;
}
const form = document.getElementById("form-cadastrar");
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const btnConfirmar = document.getElementById("btn-confirmar");
const nomeErro = document.getElementById("nomeErro");
const emailErro = document.getElementById("emailErro");
const senhaErro = document.getElementById("senhaErro");

const usuarios = [];


const validarEntradas = () => {
    if (!nomeInput.value || !emailInput.value || !senhaInput.value) {
        return false;
    }
    return true;
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Carregamento da página previnido!");
    if(validarEntradas()) {
        console.log("Cadastro realizado com sucesso!");
    } else {
        console.log("Preencha os campos vazios!");
    }
});
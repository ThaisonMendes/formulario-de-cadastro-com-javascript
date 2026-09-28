function Signup() {
    return {
        form: document.getElementById("signup-form"),
        name: document.getElementById("name"),
        email: document.getElementById("email"),
        pass: document.getElementById("pass"),
        submitBtn: document.getElementById("submit-btn"),

        sendForm() {
            this.form.addEventListener('submit', e => {
                e.preventDefault();
                console.log('Evento previnido!');

                if(this.validarEntradas()) {
                    console.log("Cadastro realizado com sucesso!");
                } else {
                    console.log("Preencha os campos vazios!");
                }
            });
        },

        validarEntradas() {
            if (!this.name.value || !this.email.value || !this.pass.value) {
                return false;
            }
            return true;
        },

        init() {
            this.sendForm();
        }
    }
}

const signup = Signup();
signup.init();
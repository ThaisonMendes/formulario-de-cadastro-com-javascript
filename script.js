function Signup() {
    return {
        form: document.getElementById("signup-form"),
        name: document.getElementById("name"),
        email: document.getElementById("email"),
        pass: document.getElementById("pass"),
        nameError: document.getElementById("nameError"),
        passError: document.getElementById("passError"),
        submitBtn: document.getElementById("submit-btn"),


        displayError(el, msg) {
            el.textContent = msg;
        },

        clearError(el) {
            el.textContent = "";
        },

        isValidateName() {
            let nameValue = this.name.value;

            if (!nameValue) {
                this.displayError(nameError, "Campo vazio");
                return false;
            }

            this.clearError(this.nameError);
            return true;
        },

        isValidateEmail() {
            return true
        },

        isValidatePass() {
            let passValue = this.pass.value;

            if (passValue.length < 8) {
                this.displayError(passError, "A senha deve ter pelo menos 8 caracteres");
                return false;
            }

            this.clearError(passError);
            return true;
        },

        validateForm() {
            let okName = this.isValidateName();
            let okEmail = this.isValidateEmail();
            let okPass = this.isValidatePass();
            
            return okName && okEmail & okPass;
        },

        sendForm() {
            this.form.addEventListener('submit', e => {
                e.preventDefault();
                console.log('Evento previnido!');

                if(this.validateForm()) {
                    alert("Cadastro realizado com sucesso!");
                } else {
                    alert("Preencha todos os campos corretamente!");
                }
            });
        },

        init() {
            this.sendForm();
        }
    }
}

const signup = Signup();
signup.init();
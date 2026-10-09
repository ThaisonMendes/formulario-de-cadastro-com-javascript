function Signup() {
    return {
        form: document.getElementById("signup-form"),
        name: document.getElementById("name"),
        email: document.getElementById("email"),
        pass: document.getElementById("pass"),
        nameError: document.getElementById("nameError"),
        emailError: document.getElementById("emailError"),
        passError: document.getElementById("passError"),
        submitBtn: document.getElementById("submit-btn"),

        displayError(el, msg) {
            el.textContent = msg;
        },

        clearError(el) {
            el.textContent = "";
        },

        addBorderError(el) {
            el.classList.add('input-error');
        },

        removeBorderError(el) {
            el.classList.remove('input-error');
        },

        isValidateName() {
            let nameValue = this.name.value.trim();

            if (!nameValue) {
                this.displayError(nameError, "Campo vazio");
                this.addBorderError(this.name);
                return false;
            }

            this.clearError(this.nameError);
            this.removeBorderError(this.name);
            return true;
        },

        isValidateEmail() {
            const emailValue = this.email.value.trim();
            
            const qtdArrobas = (emailValue.match(/@/g) || []).length;
            // console.log('qtd de arrobas: ', qtdArrobas);

            if (!emailValue) {
                this.displayError(this.emailError, "Campo vazio");
                this.addBorderError(this.email);
                return false;
            } 
            
            if (qtdArrobas > 1) {
                this.displayError(this.emailError, "O e-mail só pode ter um '@'");
                this.addBorderError(this.email);
                return false;
            }

            if (qtdArrobas === 1) {
                const posDoArroba = emailValue.match(/@/).index;
                // console.log(posDoArroba);
                const localPart = emailValue.slice(0, posDoArroba);
                // console.log("Parte local: ", localPart);

                const dominio = emailValue.slice(posDoArroba+1);
                console.log(dominio);
                
                if ((localPart.match(/[^a-zA-Z0-9\-\+\._]/gi) || []).length > 0) {
                    this.displayError(this.emailError, 'Por favor, insira um e-mail válido');
                    this.addBorderError(this.email);
                    return false;
                }

                if (localPart.length > 64) {
                    this.displayError(this.emailError, 'Nome de e-mail muito comprido');
                    this.addBorderError(this.email);
                    return false;
                }
                
                if (localPart[0] === '.' || localPart[posDoArroba-1] === '.' || localPart[0] === '-' || localPart[posDoArroba-1] === '-') {
                    this.displayError(this.emailError, "Não pode ter ' . ' ou ' - ' no inicio ou fim da parte local");
                    this.addBorderError(this.email);
                    return false;
                }

                if (dominio.match(/[\.]/) === null) {
                    this.displayError(this.emailError, "Por favor, insira um email válido");
                    this.addBorderError(this.email);
                    return false;
                }
            }

            this.clearError(this.emailError);
            this.removeBorderError(this.email);
            return true
        },

        isValidatePass() {
            let passValue = this.pass.value.trim();

            if (passValue.length < 8) {
                this.displayError(this.passError, "A senha deve ter pelo menos 8 caracteres");
                this.addBorderError(this.pass);
                return false;
            }

            this.clearError(this.passError);
            this.removeBorderError(this.pass);
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
                // console.log('Evento previnido!');

                if(this.validateForm()) {
                    console.log("Cadastro realizado com sucesso!");
                } else {
                    console.log("Preencha todos os campos corretamente!");
                }
            });
        },

        init() {
            this.submitBtn.addEventListener('click', () => {
                this.sendForm();
            });
        }
    }
}

const signup = Signup();
signup.init();
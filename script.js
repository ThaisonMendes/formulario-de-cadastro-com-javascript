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
            const emailValue = this.email.value.trim();
            
            const qtdArrobas = (emailValue.match(/@/g) || []).length;
            // console.log('qtd de arrobas: ', qtdArrobas);

            if (!emailValue) {
                this.displayError(emailError, "Campo vazio");
                return false;
            } 
            
            if (qtdArrobas > 1) {
                this.displayError(emailError, "O e-mail só pode ter um '@'");
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
                    this.displayError(emailError, 'Por favor, insira um endereço de e-mail válido');
                    return false;
                }

                if (localPart.length > 64) {
                    this.displayError(emailError, 'Nome de e-mail muito comprido');
                    return false;
                }
                
                if (localPart[0] === '.' || localPart[posDoArroba-1] === '.' || localPart[0] === '-' || localPart[posDoArroba-1] === '-') {
                    this.displayError(emailError, "Não pode ter ' . ' ou ' - ' no inicio ou fim da parte local");
                    return false;
                }

                if (dominio.match(/[\.]/) === null) {
                    this.displayError(emailError, "Por favor, insira um domínio válido (ex: .com, .com.br ou .org)");
                    return false;
                }
            }

            this.clearError(emailError);
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
                    console.log("Cadastro realizado com sucesso!");
                } else {
                    console.log("Preencha todos os campos corretamente!");
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
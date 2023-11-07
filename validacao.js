function validarFormulario() {
    // Obtém os valores dos campos
    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");
    var email = document.getElementById("email");

    // Função para redefinir a borda para a cor padrão
    function resetBorda(campo) {
        campo.style.borderColor = "";
    }

    // Função para definir a borda como verde e mais grossa
    function definirBordaVerde(campo) {
        campo.style.borderColor = "green";
        campo.style.borderWidth = "2px"; // Definir a largura da borda para 2px (ou qualquer valor desejado)
    }

    // Validação do campo Nome
    if (nome.value.trim() === "") {
        nome.style.borderColor = "red";
        alert("Por favor, preencha o campo Nome.");
        return false;
    } else {
        resetBorda(nome); // Redefine a borda para a cor padrão
        definirBordaVerde(nome); // Define a borda como verde e mais grossa
    }

    // Validação do campo Sobrenome
    if (sobrenome.value.trim() === "") {
        sobrenome.style.borderColor = "red";
        alert("Por favor, preencha o campo Sobrenome.");
        return false;
    } else {
        resetBorda(sobrenome);
        definirBordaVerde(sobrenome);
    }

    // Validação do campo Email
    if (email.value.trim() === "" || !email.value.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
        email.style.borderColor = "red";
        alert("Por favor, insira um endereço de e-mail válido.");
        return false;
    } else {
        resetBorda(email);
        definirBordaVerde(email);
    }

    // Se todas as validações passarem, exiba uma mensagem de confirmação
    alert("Formulário enviado com sucesso!");
}

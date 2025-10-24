document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const idade = document.getElementById('idade').value.trim();
    const cargo = document.getElementById('cargo').value.trim();

    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.querySelectorAll('input').forEach(el => el.classList.remove('error'));

    let valido = true;

    //  validação dos campos
    if (nome === "") {
        mensagem.textContent = "Por favor, digite seu nome";
        mensagem.style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        mensagem.textContent = "Email inválido. Inclua '@'";
        mensagem.style.color = "red";
        return;
    }
    if (idade === "") {
        mensagem.textContent = "Por favor, digite sua idade";
        mensagem.style.color = "red";
        
        return;
    }

    if (valido) {
        const usuario = { nome, email, idade, cargo };
        window.usuarios.push(usuario);
        window.atualizarListaUsuarios(window.__filtroAtual || '');
        document.getElementById('form').reset();
    }
});
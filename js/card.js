const usuarios = [];

function criarCard(usuario, index) {
    const card = document.createElement('div');
    card.classList.add('user-card');
    card.innerHTML = `
    <h3>${usuario.nome}</h3>
    <p>E-mail: ${usuario.email}</p>
    <p>Idade: ${usuario.idade}</p>
    <p>Cargo: ${usuario.cargo}</p>
  `;

    card.addEventListener('dblclick', () => {
        const confirma = confirm('Remover ' + usuario.nome + '?');
        if (confirma) {
            usuarios.splice(index, 1);
            atualizarListaUsuarios(window.__filtroAtual || '');
        }
    });

    return card;
}

function atualizarListaUsuarios(filtro = '') {
    const listaUsuarios = document.getElementById('lista-usuarios');
    listaUsuarios.innerHTML = '';

    const filtroLower = filtro.toLowerCase().trim();
    const filtrados = usuarios.filter(u => u.nome.toLowerCase().includes(filtroLower));

    if (filtrados.length === 0) {
        const mensagem = document.createElement('p');
        mensagem.classList.add('sem-results');
        mensagem.textContent = '...';
        listaUsuarios.appendChild(mensagem);
        return;
    }

    filtrados.forEach((usuario, idx) => {
        const realIndex = usuarios.indexOf(usuario);
        listaUsuarios.appendChild(criarCard(usuario, realIndex));
    });
}

window.usuarios = usuarios;
window.atualizarListaUsuarios = atualizarListaUsuarios;
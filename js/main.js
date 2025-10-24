document.addEventListener('DOMContentLoaded', () => {
    const inputBusca = document.getElementById('search');
    window.__filtroAtual = '';

    inputBusca.addEventListener('input', e => {
        const termo = e.target.value.trim();
        window.__filtroAtual = termo;
        if (window.atualizarListaUsuarios) window.atualizarListaUsuarios(termo);
    });

    if (window.atualizarListaUsuarios) window.atualizarListaUsuarios('');
});
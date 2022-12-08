document.addEventListener('click', (e) => {
    const targetEl = e.target;

    if (targetEl.classList.contains('btn-mais')) {
        const conteudoProjeto = targetEl.parentNode;
        var proxDiv = conteudoProjeto.nextElementSibling;
        proxDiv.classList.toggle('active')
    }
})
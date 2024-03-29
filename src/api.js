function dadosAPI() {
    const url = 'https://api.github.com/users/juliamxl/repos';
    const projetos = document.querySelector('.box-projetos')
    const AlinharCards = document.querySelector('.alinhar-cards')

    fetch(url)
        .then(res => res.json())
        .then(data => {
            data.map(item => {

            if(item.name != 'mainPortfolio' && item.description) {
                    var projeto = `<div class="projetos">
                        <div class="card-projetos">
                            <div class="conteudo-projeto">
                                <div class="texto-projeto">
                                    <h2 class="titulos">${item.name}</h2>
                                    <p class="descricao">${item.description}</p>
                                </div>
                                <img class="btn-mais" src="./imagens/plus.svg">
                            </div>
                            <div class="infos-projeto">
                                <div class="infos-projeto-cont">
                                    <p> Link do projeto:
                                        <a target="_blank" href="${item.homepage}">${item.homepage}</a>
                                    </p>
                                    <p>Repositório:
                                        <a target="_blank" href="${item.html_url}">${item.html_url}</a>
                                    </p>

                                    </div>
                                </div>
                            </div>
                        </div>`
                    projetos.insertAdjacentHTML("beforeend", projeto)
                }
             
            })
        })
}
let data = []

const submitComment = (event) => {
    event.preventDefault();

    const author = inputAuthor.value;
    const comment = inputComment.value;
    const date= dataAtual();
    data.push({ author: author, comment: comment, date})
    console.log(data)

    loadComment()
}

const formComentario = document.getElementById('formComment')
formComentario.addEventListener("submit", submitComment)

function dataAtual(){;
    const dataAtual = new Date();
    const opcoesFormatacao = { day: 'numeric', month: 'short', hour:'numeric'};
    const hora=dataAtual.getHours();
      const dataFormatada = dataAtual.toLocaleDateString('pt-BR', opcoesFormatacao);
      return dataFormatada+'hr';
      
}
const loadComment = () => {

    if (data) {
        displayComment();
    }
}


const displayComment = () => {
    const divFeed = document.getElementById('comment-feed');
    divFeed.innerHTML =``
    data.forEach(item => {
        const divDisplay = document.createElement('div');
        divDisplay.className = 'comentarios'
        divDisplay.innerHTML = `
        <div class="d-flex text-body-secondary pt-3">
        <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
            xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
            preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Comment</title>
            <rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff"
                dy=".3em">32x32</text>
        </svg>
        <p class="pb-3 mb-0 small lh-sm border-bottom">
            <strong class="d-block text-gray-dark">@${item.author}</strong>
            ${item.comment}

        </p>
        <p class="date">${item.date}</p>
    </div>
    `
        divFeed.appendChild(divDisplay);
    })

}

loadComment();
let data = [{}]

const submitComment = (event) => {
    event.preventDefault();

    const author = inputAuthor.value;
    const comment = inputComment.value;
    data.push({ author: author, comment: comment })
    console.log(data)

loadComment()
}

const formComentario = document.getElementById('formComment')
formComentario.addEventListerner("submit", submitComment)


const loadComment = () => {

if (data) {
 displayComment();   
}
}

const displayComment = () => {
    const body = document.getElementByIdTagName('body')[0];
    console.log(body)
    data.forEach(elemento => {
        const divDisplay = document.createElement('div');
        divDisplay.className = 'comentarios'
        divDisplay.innerHTML = `
    <strong>${elemento.author}</strong>
    <p>${elemento.coment}</p>
    `
        body.appendChild(divDisplay);
    })

}

loadComment();
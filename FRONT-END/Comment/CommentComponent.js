import { formatDate, darkColors, lightColors } from "../ultils.js";
import { CommentService } from "../services/comment.service.js";
import { Comment } from "../models/comment.models.js";
import { LoginService } from "../services/login.services.js";
import { StorageServices } from "../services/localStorage.services.js";

const getCommentInput = () => {
  return document.getElementById("inputComment");
};
const getInputCommentValue = () => {
  return document.getElementById("inputComment").value;
};
const setInputComment = (commentValue) => {
  getCommentInput().value = commentValue;
};
const clearCommentField = () => {
  getCommentInput().value = "";
};

const setAuthorCommentField = (usr) => {
  const inputAuthor = document.getElementById("inputAuthor");
  inputAuthor.value = usr.firstname + " " + usr.lastname;
  inputAuthor.style.backgroundColor = "#444";
  inputAuthor.style.color = "#FFF";
};

const submitComment = (event) => {
  event.preventDefault();

  const comment = {
    userId: StorageServices.user.get().getId(),
    comment_text: getInputCommentValue(),
  };

  CommentService.apiPostComment(comment)
    .then((result) => {
      alert(result);
      clearCommentField();
      loadComment();
    })
    .catch((error) => {
      console.log(error);
    });
};

const loadComment = () => {
  // Dados carregados da API
  CommentService.apiGetComment()
    .then((result) => {
      const comments = result.map(
        (comment) =>
          new Comment(
            comment.id,
            comment.userId,
            comment.author,
            comment.comment_text,
            comment.created_at,
            comment.updated_at
          )
      );
      console.log(comments);
      displayComment(comments);
    })
    .catch((error) => {
      console.error(error);
      alert(error);
    });
};

const displayComment = (comments) => {
  const divFeed = document.getElementById("comment-feed");
  divFeed.innerHTML = ``;
  comments.forEach((item) => {
    const divDisplay = document.createElement("div");
    divDisplay.className = "d-flex text-body-secondary pt-3 border-bottom";
    divDisplay.innerHTML = `
            <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>comentário</title>
                <rect width="100%" height="100%" fill="#${darkColors()}"></rect>
                <text x="35%" y="50%" fill="#${lightColors()}"dy=".3em">${item
      .getAuthor()
      .charAt(0)}</text>
            </svg>
            <p class="pb-3 mb-0 small lh-sm text-gray-dark">
                <strong class="d-block text-gray-dark">@${item.getAuthor()}
                <span class="date-style badge text-bg-secondary">${formatDate(
                  item.getCreatedAt()
                )}</span>
                </strong>
                <span class="comment">
                ${item.getCommentText()}
                </span>
            </p>        
        `;
    divFeed.appendChild(divDisplay);
  });
};

const CommentComponent = {
  run: () => {
    const formComentario = document.getElementById("formComment");
    formComentario.addEventListener("submit", submitComment);
    loadComment();
  },
};

export { CommentComponent, setInputComment, setAuthorCommentField };

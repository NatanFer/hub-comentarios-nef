import { mapComments } from "../models/comment.models.js";

apiPostComment: (userId) => {
    return new Promise((resolve, reject) => {
      fetch(`${URL_API}/user-comments`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userId)
      })
      .then(response => response.json())
      .then(data => {
          if (data.success) {
            resolve(data.comments);
            resolve(mapComments(data.comments));
          } else {
            reject(data.error);
          }
        })
      .catch(error => {
          reject('Erro na requisição AJAX:', error);
    });
});
};
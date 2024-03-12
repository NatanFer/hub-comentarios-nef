const URL_API = 'http://localhost:7000';

const commentService = {
    apiGetComment: (resolve, refect) => {
        return new Promise((resolve, reject) => {
            fetch(`${URL_API}/comment`)
                .then((response) => response.json)
                .then(data => {
                    if (data.success) {
                        resolve.comment
                    } else {
                        reject('Erro na requisição')
                    }
                });
        }).catch((error) => {
            reject(error);
        });
    },
};
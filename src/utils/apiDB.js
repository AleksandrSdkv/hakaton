const BASE_URL = 'http://185.231.206.160/';



const mainApi = ({
    method = 'GET',
    url
}) => {
    return fetch(`${BASE_URL}${url}`,
        {
            method,
            headers: {
                "Content-Type": "text/plain"
            },
        }
    ).then((response) => {

        if (!response.ok) return Promise.reject(`Упс, что-то пошло не так ${response.status}!!!`);
        return response.json();
    });
}

export const getArticle = () => {
    return mainApi({
        url: 'api/Article'
    })
}
export const getArticleId = (id) => {
    return mainApi({
        url: `article/${id}`,
        method: 'GET',
    })
}



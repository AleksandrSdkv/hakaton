const BASE_URL = 'http://localhost:3001/';

const mainApi = ({
    method = 'POST',
    url,
    data,
}) => {

    return fetch(`${BASE_URL}${url}`,
        {
            method,
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
            },
            ...!!data && { body: JSON.stringify(data) }
        }
    ).then((response) => {
        if (!response.ok) return Promise.reject(`Упс, что-то пошло не так ${response.status}!!!`);
        return response.json();
    });
}

export const getInfo = () => {
    return mainApi({
        url: 'reference',
        method: 'GET',

    })
}
export const getArticle = (id) => {
    return mainApi({
        url: `article/${id}`,
        method: 'GET',
    })
}

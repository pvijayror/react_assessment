
export function getEmailedArticles(data) {
    return {
        type: 'EMAILED_ARTICLES',
        emailed: data
    }
}

export function errorResponse(error)  {
    return {
        type: 'EMAILED_ARTICLS_ERROR',
        error
    }
}

export function fetchEmailedArticles(section) {
    const url = 'https://api.nytimes.com/svc/mostpopular/v2/emailed/1.json?api-key=A7Byis5MmEBe0Tt7cJr0m5xA6ItzMkWS'
    return dispatch => {
        return fetch(url)
            .then(res => res.json())
            .then(data => dispatch(getEmailedArticles(data)))
            .catch(err => dispatch(errorResponse(err)))
    }
}
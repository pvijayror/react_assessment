
export function getViewedArticles(data) {
    return {
        type: 'VIEWED_ARTICLES',
        viewed: data
    }
}

export function errorResponse(error)  {
    return {
        type: 'VIEWED_ARTICLES_ERROR',
        error
    }
}

export function fetchViewedArticles(section) {
    const url = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=A7Byis5MmEBe0Tt7cJr0m5xA6ItzMkWS'
    return dispatch => {
        return fetch(url)
            .then(res => res.json())
            .then(data => dispatch(getViewedArticles(data)))
            .catch(err => dispatch(errorResponse(err)))
    }
}
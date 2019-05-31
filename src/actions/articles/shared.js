
export function getSharedArticles(data) {
    return {
        type: 'SHARED_ARTICLES',
        shared: data
    }
}

export function errorResponse(error)  {
    return {
        type: 'SHARED_ARTICLES_ERROR',
        error
    }
}

export function fetchSharedArticles(section) {
    const url = 'https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=A7Byis5MmEBe0Tt7cJr0m5xA6ItzMkWS'
    return dispatch => {
        return fetch(url)
            .then(res => res.json())
            .then(data => dispatch(getSharedArticles(data)))
            .catch(err => dispatch(errorResponse(err)))
    }
}
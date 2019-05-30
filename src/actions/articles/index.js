
export function getArticles(articles) {
    return {
        type: 'ARTICLES',
        articles
    }
}

export function errorResponse(error) {
    console.log(error)
    return {
        type: 'ARTICLES_ERROR',
        error
    }
}

export function fetchArticles(q) {
    console.log("fetch articles", q)
    const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+q+'&api-key=A7Byis5MmEBe0Tt7cJr0m5xA6ItzMkWS'
    return dispatch => {
        return fetch(url)
                .then(res => res.json())
                .then(articles => dispatch(getArticles(articles)))
                .catch(err => dispatch(errorResponse(err)))
    }
}

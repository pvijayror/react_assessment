
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

export function fetchArticles() {
    console.log("fetch articles")
    return dispatch => {
        return fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=A7Byis5MmEBe0Tt7cJr0m5xA6ItzMkWS')
                .then(res => res.json())
                .then(articles => dispatch(getArticles(articles)))
                .catch(err => dispatch(errorResponse(err)))
    }
}

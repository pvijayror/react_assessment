const initialState = {
    articles: []
}

export function emailed(state = initialState, action ) {
    switch(action.type) {
        case 'ARTICLES':
            console.log("reducer.....");
            return {
                ...state,
                articles: action.articles
            }

        default:
            return state;    

    }
}

export function shared(state = initialState, action ) {
    switch(action.type) {
        case 'ARTICLES':
            console.log("reducer.....");
            return {
                ...state,
                articles: action.shared
            }

        default:
            return state;    

    }
}

export function viewed(state = initialState, action ) {
    switch(action.type) {
        case 'ARTICLES':
            console.log("reducer.....");
            return {
                ...state,
                articles: action.viewed
            }

        default:
            return state;    

    }
}
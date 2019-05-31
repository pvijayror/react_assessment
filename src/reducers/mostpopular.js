const initialState = {
    articles: []
}

export function emailed(state = initialState, action ) {
    switch(action.type) {
        case 'EMAILED_ARTICLES':
            console.log("reducer.....");
            return {
                ...state,
                articles: action.emailed
            }

        default:
            return state;    

    }
}

export function shared(state = initialState, action ) {
    switch(action.type) {
        case 'SHARED_ARTICLES':
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
        case 'VIEWED_ARTICLES':
            console.log("reducer.....");
            return {
                ...state,
                articles: action.viewed
            }

        default:
            return state;    

    }
}
const initialState = {
    articles: []
}

export default function(state = initialState, action ) {
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
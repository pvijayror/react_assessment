import { combineReducers } from 'redux';
import articles from './reducers/articles'
import { emailed , shared , viewed } from './reducers/mostpopular'

const rootReducer = combineReducers( {
    articles: articles,
    emailed: emailed,
    shared: shared,
    viewed: viewed,
})

export default rootReducer;
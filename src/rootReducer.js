import { combineReducers } from 'redux';
import articles from './reducers/articles'

const rootReducer = combineReducers( {
    articles: articles
})

export default rootReducer;
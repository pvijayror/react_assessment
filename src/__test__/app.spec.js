import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import thunk  from 'redux-thunk';
import rootReducer from '../../src/rootReducer';
import { shallow } from 'enzyme';


import App from '../containers/App'

const testStore = initialState => {
    const middlewareStore =  applyMiddleware(thunk)(createStore)
    return middlewareStore(rootReducer, initialState)
}


describe("<App/>", () => {
    it("test app render", () => {
        const store = testStore({})
        let wrapper = shallow(<App store={ store } />).childAt(0).dive()
        console.log(wrapper.debug())
        expect(wrapper.length).toBe(1)
    }) 
})
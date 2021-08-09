import React from 'react';
import  { mount }  from "enzyme";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import Home from '../../pages/Home';

const mockStore = configureStore();

describe('tests in  <Home/>',()=>{   
    const initState = {
        posts: [],        
    };
    let store = mockStore(initState);

    test('Must show correctly the component',()=>{
       
        const wrapper = mount(
            <Provider store={store}>
             <Home/>
            </Provider>
        );
        expect(wrapper).toMatchSnapshot()
    })

   
})
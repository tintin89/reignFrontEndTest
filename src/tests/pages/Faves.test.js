import React from 'react';
import  { mount }  from "enzyme";
import Faves from '../../pages/Faves';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('tests in  <Faves/>',()=>{   
    const initState = {
        favorites: [],        
    };
    let store = mockStore(initState);

    test('Must show correctly the component',()=>{
       
        const wrapper = mount(
            <Provider store={store}>
             <Faves/>
            </Provider>
        );
        expect(wrapper).toMatchSnapshot()
    })

   
})
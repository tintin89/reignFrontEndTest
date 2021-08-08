import React from 'react';
import  { shallow }  from "enzyme";
import { MemoryRouter } from "react-router-dom";
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
       
        const wrapper = shallow(
            <Provider store={store}>
             <Faves/>
            </Provider>
        );
        expect(wrapper).toMatchSnapshot()
    })

   
})
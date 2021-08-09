import React from 'react';
import  { mount}  from "enzyme";
import Element from '../../components/Results/Element/Element';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('tests in  <Dropdown/>',()=>{   
    const initState = {
        favorites:[],        
    };
    let store = mockStore(initState);

    test('Must show correctly the component',()=>{
       
        const wrapper = mount(
            <Provider store={store}>
             <Element/>
            </Provider>
        );
        expect(wrapper).toMatchSnapshot()
    }) 
   
})
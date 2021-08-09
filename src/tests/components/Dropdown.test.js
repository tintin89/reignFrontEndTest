import React from 'react';
import  { mount}  from "enzyme";
import Dropdown from '../../components/Dropdown/Dropdown';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('tests in  <Dropdown/>',()=>{   
    const initState = {
        query:"Reactjs",        
    };
    let store = mockStore(initState);

    const wrapper = mount(
        <Provider store={store}>
         <Dropdown/>
        </Provider>
    );

    test('Must show correctly the component',()=>{       
        
        expect(wrapper).toMatchSnapshot()
    }) 
      
})
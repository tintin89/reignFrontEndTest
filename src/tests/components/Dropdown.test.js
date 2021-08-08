import React from 'react';
import  { shallow }  from "enzyme";
import Dropdown from '../../components/Dropdown/Dropdown';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('tests in  <Dropdown/>',()=>{   
    const initState = {
        query:"Reactjs",        
    };
    let store = mockStore(initState);

    test('Must show correctly the component',()=>{
       
        const wrapper = shallow(
            <Provider store={store}>
             <Dropdown/>
            </Provider>
        );
        expect(wrapper).toMatchSnapshot()
    }) 
   
})
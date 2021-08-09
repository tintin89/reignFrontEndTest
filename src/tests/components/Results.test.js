import React from 'react';
import  {mount}  from "enzyme";
import Results from '../../components/Results/Results';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('tests in  <Results/>',()=>{   
    const initState = {
        loading:false,        
    };
    let store = mockStore(initState);

    test('Must show correctly the component',()=>{       
        const wrapper = mount(
            <Provider store={store}>
             <Results/>
            </Provider>
        );
        expect(wrapper).toMatchSnapshot()
    }) 
   
})
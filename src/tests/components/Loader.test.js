import React from 'react';
import  { shallow}  from "enzyme";
import Loader from '../../components/Loader/Loader';


describe('tests in  Loader',()=>{
    const wrapper = shallow(<Loader/>);

    test('Must show correctly the component',()=>{       
        
        expect(wrapper).toMatchSnapshot()
    }) 
      
})
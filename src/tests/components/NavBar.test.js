import React from 'react';
import  { shallow}  from "enzyme";
import NavBar from '../../components/NavBar/NavBar';


describe('tests in <NavBar/>',()=>{   
  

    test('Must show correctly the component',()=>{       
        const wrapper = shallow(<NavBar/>);
        expect(wrapper).toMatchSnapshot()
    }) 
   
})
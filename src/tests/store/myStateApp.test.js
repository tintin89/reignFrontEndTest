import myStateApp from "../../store/myStateApp"
import * as actionTypes from '../../store/actionTypes';


describe('Reducer tests',()=>{
    const initialState ={posts:[],favorites:[],query:{tag:"Select your news",img:""},page:0,scrolling:false,loading:false};

    test('Must return the default state',()=>{
         const state = myStateApp(initialState,{});
             expect(state).toEqual({posts:[],favorites:[],query:{tag:"Select your news",img:""},page:0,scrolling:false,loading:false})
    })

    test('Must update the posts',()=>{
        
        const action = {
            type:actionTypes.UPDATE_POSTS,
            payload:[{title:"title",author:"author",url:"url",created:"time",id:"1"},
            {title:"title2",author:"author2",url:"url2",created:"time2",id:"2"}]
        }
        const state = myStateApp(initialState,action);

        expect(state).toEqual({...state,posts:action.payload});
    })

    test('Must update the favorites',()=>{
        const action = {
            type:actionTypes.UPDATE_FAVS,
            payload:[{title:"title",author:"author",url:"url",created:"time",id:"1"},
            {title:"title2",author:"author2",url:"url2",created:"time2",id:"2"}]
        };

        const state = myStateApp(initialState,action);
        expect(state).toEqual({...state,favorites:action.payload});        
    })

    test('Must update query,page and scrolling',()=>{
        const action ={
            type:actionTypes.UPDATE_QUERY,
            payload:"Reactjs"
        };
        const state = myStateApp(initialState,action);

        expect(state).toEqual({...state,query:action.payload,page:0,scrolling:false});  
        
        
    })

    test('Must update page and scrolling',()=>{

        const action = {
            type:actionTypes.UPDATE_PAGE,            
        }

        const state = myStateApp(initialState,action);

        expect(state).toEqual({...state,page:1,scrolling:true});
        
    })

    test('Must update loading',()=>{

        const action = {
            type:actionTypes.UPDATE_LOADING,
            payload:true
        }

        const state = myStateApp(initialState,action);
        expect(state).toEqual({...state,loading:true});
        
    })


})
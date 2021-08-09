import {updatePost,updateFavorites,updateQuery,updateLoading,updatePage, fetchPosts} from '../../store/actions';
import * as actionTypes from '../../store/actionTypes';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('tests of actions',()=>{
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    const store = mockStore({});

    test('tests of actions',()=>{   

    const actionUpdatePost = updatePost([{title:"title",author:"author",url:"url",created:"time",id:"1"},
    {title:"title2",author:"author2",url:"url2",created:"time2",id:"2"}]);

    const actionUpdateFavorites = updateFavorites([{title:"title",author:"author",url:"url",created:"time",id:"1"},
    {title:"title2",author:"author2",url:"url2",created:"time2",id:"2"}]);

    const actionUpdateQuery = updateQuery("Reactjs");

    const actionUpdatePage = updatePage();

    const actionUpdateLoading = updateLoading(true);



    expect(actionUpdatePost).toEqual({
        type:actionTypes.UPDATE_POSTS,
        payload:[{title:"title",author:"author",url:"url",created:"time",id:"1"},
        {title:"title2",author:"author2",url:"url2",created:"time2",id:"2"}]
    });

    expect(actionUpdateFavorites).toEqual({
        type:actionTypes.UPDATE_FAVS,
        payload:[{title:"title",author:"author",url:"url",created:"time",id:"1"},
        {title:"title2",author:"author2",url:"url2",created:"time2",id:"2"}]
    });

    expect(actionUpdateQuery).toEqual({
        type:actionTypes.UPDATE_QUERY,
        payload:"Reactjs"
    });

    expect(actionUpdatePage).toEqual({
        type:actionTypes.UPDATE_PAGE,        
    });
   
    expect(actionUpdateLoading).toEqual({
        type:actionTypes.UPDATE_LOADING,
        payload:true
    })

    store.dispatch(fetchPosts("Reactjs",1))    
    const actions = store.getActions();
    
      expect(actions[0]).toEqual({type:actionTypes.UPDATE_LOADING,payload:true})   
     
    })
})



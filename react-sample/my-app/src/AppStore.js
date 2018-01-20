import { createStore } from 'redux';

var defaultState = {
	user: {

	}, list: ['C Language','Java', 'C++', 'Javascript']
}


const store = createStore(function reducer(state = defaultState, action){
	state = Object.assign({...state, user: {name : action.payload}});
	return state;
});

store.subscribe(()=>{
	console.log(store.getState());
});


store.dispatch({type:'FIRST_ACTION', payload: 'text'});



export default store;
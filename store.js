import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const appInitialState = {

	count: 0

}

export const actionTypes = {

	INCREMENT: 'INCREMENT'

}

// REDUCERS
export const reducer = ( state = appInitialState, action ) => {

	switch (action.type) {

	case actionTypes.INCREMENT:

		return Object.assign( {}, state, {

			count: state.count + 1

		} )

		default:
		return state

	}

}

// ACTIONS
export const incrementCount = () => dispatch => {

	return dispatch( { type: actionTypes.INCREMENT } )

}


export function initializeStore (initialState = appInitialState) {

	return createStore(

		reducer,
		initialState,
		composeWithDevTools( applyMiddleware( thunkMiddleware ) )

	)

}

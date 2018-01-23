import {HOME} from './constant'

export default (state = {}, action) => {
	switch (action.type){
		case HOME:
			return {
				...state,
				homm:11
				}
		default:
			return state;
	}
    
}
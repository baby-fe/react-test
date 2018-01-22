import {DOADD} from './constant'

export default (state = {}, action) => {
	switch (action.type){
		case DOADD:
			return {
				...state,
				tt:action.val+(state.tt||0)
				}
		default:
			return state;
	}
    
}
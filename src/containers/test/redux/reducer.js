const initState = { value: 'value' }
export default (state = initState, action) => {
	console.log('action:',action.type)
	switch (action.type){
		case 'edit':
			return {
				...state,
				tt:action.val
				}
		default:
			return state;
	}
    
}
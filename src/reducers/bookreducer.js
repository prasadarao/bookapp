const BookReducer = (state, action)  => {
	const initState = {};

	switch(action.type) {
		case 'BOOKADDITION': 
			return {
				...state,
				list: state.list ? state.list.push(action.data) : [action.data]
			};
		case 'BOOKLIST':
			return {...state};

		default: 
			return {...state};
	}

}

export default BookReducer;

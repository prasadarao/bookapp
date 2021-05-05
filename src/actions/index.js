import {dispatch} from 'react'; 



export const addBookAction = (bookObj) => {
	return {type: 'BOOKADDITION', data: bookObj};
} 

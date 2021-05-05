import React, {useState} from 'react';

import {addBookAction} from "./../actions";
import {connect} from 'react-redux';

const Add = (props) => {
	const [values, setValues] = useState({});

	const handleChange = (e) => {
		console.log("Event:", e.target.name);
		setValues({...values, [e.target.name]: e.target.value});
	} 

	const addBook = () => {
		console.log("book:", values);
		console.log(props);
		props.addBookAction(values);
	}

	return(
		<div>

			<div className="">
				<div className="label">Book Name:</div>
				<div className="field">
					<input 
						type="text" 
						name="bookname" 
						className="" 
						onChange={handleChange}/>
				</div>
			</div>
			<div className="">
				<div>Author:</div>
				<div>
					<input 
						type="text" 
						name="author" 
						className="" 
						onChange={handleChange}/>
				</div>
			</div>
			<div>
				<div>Count:</div>
				<div>
					<input 
						type="text" 
						name="count" 
						className="" 
						onChange={handleChange}/>
				</div>
			</div>
			<div>
				<div>Book Description:</div>
				<div>
					<textarea 
						name="desc" 
						className=""
						onChange={handleChange}
						></textarea>
				</div>
			</div>
			<div className="">
				<input type="button" name="submit" value="Submit" onClick={addBook}/>
			</div>
		</div>
	);
}

const mapstatetoprop = (state) => ({ 
	list: state.list 
});


const mapdispatchtoprop = (dispatch) => ({
	addBookAction: (values) => dispatch(addBookAction(values))
}); 

export default connect(mapstatetoprop, mapdispatchtoprop)(Add);
import React, { useState } from 'react';

import Add from './Add';
import List from './List';

const Books = () => {
	const [view, setView] = useState("list");


	function addBooks() {
		setView("add");
	}

	return (
		<div>
			<div className="container">
		        <div className="search">
		          <input type="text" name="" className="" />
		          <button name="add" className="btn" onClick={addBooks}>Add</button>
		        </div>

		        {view === "add" && <Add />}
		        {view === "list" && <List />}

		      </div>
		</div>

	)


}

export default Books;
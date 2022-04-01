import React from 'react';

// const createHeaders = data.map((headers) => <th scope="col">{headers.title}</th>);
// const createItems = data.map((list) => (
// 	<tr>
// 		<th scope="col">{list.title}</th>
// 	</tr>
// ));

const Table = ({ headers, list }) => {
	return (
		<table className="table table-success table-striped">
			<thead >
				{/* {createHeaders} */}
				<th scope="col">Alias</th>
                <th scope="col">Action</th>
			</thead>
			<tbody>
				{/* {createItems} */}
				<tr>
					<th scope="col">Gracia</th>
                    <th scope="col">View</th>
                    <th scope="col">Delete</th>
				</tr>

			</tbody>
		</table>
	);
};

export default Table;

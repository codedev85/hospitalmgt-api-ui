import React from 'react';

const PatientList =()=> {

	return (
		<div style={{display:'flex',justifyContent:'center'}}>
	
<div className='container'>
<div className="row">
<h3 style={{color:'white'}}>List Of All Patients</h3>
			<table className="table">
			  <thead className="thead-light">
			    <tr>
			      <th scope="col">#</th>
			      <th scope="col">First</th>
			      <th scope="col">Last</th>
			      <th scope="col">Handle</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr>
			      <td scope="row">1</td>
			      <td>Mark</td>
			      <td>Otto</td>
			      <td>
			      	<a href="#" className="btn btn-primary btn-sm">Add Prescriptions</a>
			      </td>
			    </tr>
			    <tr>
			      <th scope="row">2</th>
			      <td>Jacob</td>
			      <td>Thornton</td>
			      <td>
			      <a href="#" className="btn btn-primary btn-sm">Add Prescriptions</a>
			      </td>
			    </tr>
			    <tr>
			      <td scope="row">3</td>
			      <td>Larry</td>
			      <td>the Bird</td>
			      <td>
			      	<a href="#" className="btn btn-primary btn-sm">Add Prescriptions</a>
			      </td>
			    </tr>
			  </tbody>
			</table>
		
	   </div>

	   </div>
	   </div>
		)
}
export default PatientList;
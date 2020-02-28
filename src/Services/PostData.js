export function PostData(type, userData){

	let BaseUrl = 'http://limitless-citadel-42470.herokuapp.com/api/';


	return new Promise((resolve, reject) => {

		    fetch(BaseUrl + type,{
			    	method:'POST',
			    	body:JSON.stringify(userData),
		    })
		     .then((response) => response.json())
		     .then((result) => {

		     	resolve(result)
		     })
		     .catch((error) => {
		     	reject('this error', error)
		     });
	});
}
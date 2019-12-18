//
const movieData = async function() {
	const data = await getData();
	console.log('Log ALL the Data!!', data);
};

document.addEventListener('DOMContentLoaded', event => {
	console.log('DOM fully loaded and parsed');
	movieData();
});

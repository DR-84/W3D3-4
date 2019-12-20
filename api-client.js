const API_KEY = '5d512a07a1dfeb577fbda97e63d94d29';

const getData = async function() {
	const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
	try {
		const res = await fetch(apiUrl, { method: 'GET' });
		const data = await res.json();
		console.log('the response from the API URI in getData function is: ', res);
		console.log('The data in getData function ', typeof data);
		return data;
	} catch (error) {
		console.log(error);
	}
};

const getMovieById = async movieName => {
	const apiUrl = `https://api.themoviedb.org/3/find/${movieName}?external_source=imdb_id&api_key=${API_KEY}`;
	try {
		const res = await fetch(apiUrl, { method: 'GET' });
		return await res.json();
	} catch (error) {
		console.log(error);
	}
};
getData();

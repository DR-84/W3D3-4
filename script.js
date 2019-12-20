const movieData = async function() {
	const data = await getData();
	console.log('Log ALL the Data!!', data);
	return data;
};

const setMovieGenres = async () => {
	const movieGenresList = document.getElementById('list');
	const data = await movieData();
	const movieGenres = data.genres;
	movieGenres.forEach(movieGenre => {
		const li = document.createElement('li');
		const liContent = document.createTextNode(
			`genre naam: ${movieGenre.name},id: ${movieGenre.id}`
		);
		li.appendChild(liContent);
		movieGenresList.append(li);
	});
};

const setFavMovie = async () => {
	const data = await getMovieById('tt0080684');
	const movie = data.movie_results[0];
	const para = document.getElementById('empire');
	para.appendChild(document.createTextNode(movie.title));
};

document.addEventListener('DOMContentLoaded', () => {
	console.log('DOM fully loaded and parsed');
	movieData();
	setMovieGenres();
	setFavMovie();
});

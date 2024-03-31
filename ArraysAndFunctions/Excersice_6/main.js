const numMovies = parseInt(prompt('How many movies would you like to rate?'));
gatherMovieRatings();

function gatherMovieRatings() {
  const movies = [];

  for (let i = 0; i < numMovies; i++) {
    const title = prompt('Enter the title of movie #' + (i + 1) + ':');
    let rating = parseInt(prompt('Enter the rating for ' +
      'movie #' + (i + 1) + ' (1-5):'));

    while (isNaN(rating) || rating < 1 || rating > 5) {
      rating = parseInt(prompt('Invalid rating! Please enter ' +
        'a rating between 1 and 5 for movie #' + (i + 1) + ':'));
    }

    movies.push({
      title: title,
      rating: rating,
    });
  }

  movies.sort(function(a, b) {
    return b.rating - a.rating;
  });

  displayMovieRatings(movies);

  const highestRatedMovie = movies[0].title;
  document.getElementById('highestRated').textContent =
    'Highest Rated Movie: ' + highestRatedMovie;
}

function displayMovieRatings(movies) {
  const table = document.getElementById('movieTable');
  table.innerHTML = '';

  const headerRow = table.insertRow();
  const titleHeader = headerRow.insertCell(0);
  const ratingHeader = headerRow.insertCell(1);
  titleHeader.textContent = 'Title';
  ratingHeader.textContent = 'Rating';

  for (let i = 0; i < movies.length; i++) {
    const row = table.insertRow();
    const titleCell = row.insertCell(0);
    const ratingCell = row.insertCell(1);
    titleCell.textContent = movies[i].title;
    ratingCell.textContent = movies[i].rating;
  }
}

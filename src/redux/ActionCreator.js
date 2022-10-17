import * as ActionTypes from './ActionTypes'

export const fetchMovies = () => (dispatch) => {
    dispatch(moviesLoading(true));
    return fetch('https://online-movie-database.p.rapidapi.com/title/get-top-rated-movies',
        {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f93f623621msh3005da59c6ad829p1b43ecjsn2e90f3e750e9',
                'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
            }
        }).then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then(response => response.json())
        .then(movies => dispatch(addMovies(movies)))
        .catch(error => dispatch(moviesFailed(error.message)))
}
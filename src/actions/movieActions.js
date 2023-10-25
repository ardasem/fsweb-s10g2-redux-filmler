export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";

export const addMovie = (filmData) => {
  return ({ type: ADD_MOVIE, payload: filmData });
}

export const deleteMovie = (id) => {
  return ({ type: DELETE_MOVIE, payload: id });
}
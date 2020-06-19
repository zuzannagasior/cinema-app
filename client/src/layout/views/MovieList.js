import React, {useEffect, useContext} from 'react';
import axios from 'axios';
import MovieItem from '../components/MovieItem.js'
import {ReduxStoreContext, ACTIONS} from '../../Reducer.js'
import { MovieListCont } from '../../StyledComponents';
import CalendarSection from '../CalendarSection';
import Loading from '../components/Loading';

const MovieList = () => {
  const {state, dispatch} = useContext(ReduxStoreContext);

  const { movies, chosenDay, loading } = state;

  useEffect(() => {
    dispatch({ 
      type: ACTIONS.TOGGLE_LOADING, 
      payload: true });

    axios.get(`/repertoire/${chosenDay.day}`)
    .then(response => {
      dispatch({ 
        type: ACTIONS.SET_MOVIES, 
        payload: response.data });
      dispatch({ 
        type: ACTIONS.TOGGLE_LOADING, 
        payload: false });
    })
    .catch(function(error) {
        console.log(error);
    });
  }, [chosenDay, dispatch]);


  const movieList = movies.map((movie, index) => {
    return <MovieItem key={index} movie={movie} />
  })


  return (
    <>
      <CalendarSection />
      <MovieListCont>
        {loading 
          ? 
        <Loading />
          : 
        <>{movieList}</>}
      </MovieListCont>
    </>
  );
}

export default MovieList;
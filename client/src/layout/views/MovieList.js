import React, {useEffect, useContext} from 'react';
import axios from 'axios';
import MovieItem from '../components/MovieItem.js'
import {ReduxStoreContext, ACTIONS} from '../../Reducer.js'
import { MovieListCont } from '../../StyledComponents';
import CalendarSection from '../CalendarSection';
import Loading from '../components/Loading';

const MovieList = () => {
  const {state, dispatch} = useContext(ReduxStoreContext);

  const { movies } = state;
  const loading = Object.keys(movies).length === 0;


  //   const getMovies = async () => {
  //     let result = [];
  //     console.log('jestem')
  //     await axios.get('http://www.omdbapi.com/?apikey=788bb0a9&t=Love+Actually')
  //     .then(response => {
  //       console.log(response, 'response');
  //       result.push(response.data);
  //     })
  //     .catch(function(error) {
  //         console.log(error);
  //     }) 
  
  //     await axios.get('http://www.omdbapi.com/?apikey=788bb0a9&t=Pulp+Fiction')
  //     .then(response => {
  //       console.log(response, 'response');
  //       result.push(response.data);
  //     })
  //     .catch(function(error) {
  //         console.log(error);
  //     }) 
  
  //     await axios.get('http://www.omdbapi.com/?apikey=788bb0a9&t=Parasite')
  //     .then(response => {
  //       console.log(response, 'response');
  //       result.push(response.data);
  //     })
  //     .catch(function(error) {
  //         console.log(error);
  //     }) 
  
  //     return result;
  // }
  //   const getMovies = async () => {
  //     let result = [];
  //     console.log('jestem')
  //     await axios.get('http://www.omdbapi.com/?apikey=788bb0a9&t=Love+Actually')
  //     .then(response => {
  //       console.log(response, 'response');
  //       result.push(response.data);
  //     })
  //     .catch(function(error) {
  //         console.log(error);
  //     }) 
  
  //     await axios.get('http://www.omdbapi.com/?apikey=788bb0a9&t=Pulp+Fiction')
  //     .then(response => {
  //       console.log(response, 'response');
  //       result.push(response.data);
  //     })
  //     .catch(function(error) {
  //         console.log(error);
  //     }) 
  
  //     await axios.get('http://www.omdbapi.com/?apikey=788bb0a9&t=Parasite')
  //     .then(response => {
  //       console.log(response, 'response');
  //       result.push(response.data);
  //     })
  //     .catch(function(error) {
  //         console.log(error);
  //     }) 
  
  //     return result;
  // }

  useEffect(() => {

    axios.get('/repertoire/monday')
    .then(response => {
      console.log(response, 'response 2');
    })
    .catch(function(error) {
        console.log(error);
    });

    axios.get('/movies')
    .then(response => {
      dispatch({ 
        type: ACTIONS.SET_MOVIES, 
        payload: response.data });
    })
    .catch(function(error) {
        console.log(error);
    });


  }, []);


  const movieList = movies.map((movie) => {
    return <MovieItem key={movie._id} movie={movie} />
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
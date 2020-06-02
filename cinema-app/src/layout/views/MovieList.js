import React from 'react';
import axios from 'axios';
import MovieItem from '../components/MovieItem.js';
import { MovieListCont } from '../../StyledComponents';

const MovieList = () => {

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
  return (
    <MovieListCont>
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
    </MovieListCont>
  );
}

export default MovieList;
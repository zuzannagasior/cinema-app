import React, { useReducer } from 'react';
import {  BrowserRouter, Route } from 'react-router-dom';

import MovieList from './layout/views/MovieList.js';
import CinemaHall from './layout/views/CinemaHall';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { Container, Main } from './StyledComponents';

import { ReduxStoreContext, reducer, initialState } from './Reducer.js';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container>
      <Header />
      <Main>
        <ReduxStoreContext.Provider value={{state, dispatch}}>
          <BrowserRouter>    
            <Route path="/" exact component={MovieList} />     
            <Route path="/hall/:type" component={CinemaHall} />
          </BrowserRouter>
        </ReduxStoreContext.Provider>
      </Main>
      <Footer />
    </Container>
  );
}

export default App;

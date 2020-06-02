import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MovieList from './layout/views/MovieList.js';
import CinemaHall from './layout/views/CinemaHall';
import Header from './layout/Header';
import CalendarSection from './layout/CalendarSection';
import Footer from './layout/Footer';
import { Container, Main } from './StyledComponents';


const App = () => {
  return (
    <Container>
      <Header />
      <CalendarSection />
      <Main>
        <BrowserRouter>
          <Route path="/" exact component={MovieList} />
          <Route path="/hall" component={CinemaHall} />
        </BrowserRouter>
      </Main>
      <Footer />
    </Container>
  );
}

export default App;

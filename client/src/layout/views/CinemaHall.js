/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import axios from 'axios';
import { HallConteiner, CustomButton } from '../../StyledComponents';
import Summary from '../components/Summary.js';
import SeatItem from '../components/SeatItem.js';
import { Link, Redirect} from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import {ReduxStoreContext, ACTIONS} from '../../Reducer.js'
import Loading from '../components/Loading';
import { hallNames } from '../../config/HallNames';

const CinemaHall = () => {
  const {state, dispatch} = useContext(ReduxStoreContext);
  const [rows, setRows] = useState([]);
  const { chosenMovie, loading, chosenSeats } = state;
  const { title, hall } = chosenMovie;

  const handleBookClick = () => {
    console.log(state, 'state');
  };

  const handleReturnClick = () => {
    dispatch({ 
      type: ACTIONS.CLEAR_CHOSEN_SEATS});
  };

  useEffect(() => {
    const setCinemaSeats = (data = rows) => {
      const rowsToSet = data.rows.map((row, index) => {
        const seats = row.map((seat, index2) => {
          return <SeatItem key={index2} seat={seat}/>
        });
        return <div css={css`display: flex; padding-top: 16px;`} key={index}>{seats}</div>
      });
  
      setRows(rowsToSet);
    };

    dispatch({ 
      type: ACTIONS.TOGGLE_LOADING, 
      payload: true });

      console.log(hall, 'hall');
      if (hall) {
        axios.get(`/halls/${hall}`)
        .then(response => {
          console.log(response, 'response');
          setCinemaSeats(response.data);
    
          dispatch({ 
            type: ACTIONS.TOGGLE_LOADING, 
            payload: false });
        })
        .catch(function(error) {
            console.log(error);
        });
      }
  }, []);

  if (Object.keys(state.chosenMovie).length === 0) {
    return <Redirect to="/" />;
  } else {
    return (
      <HallConteiner>
          <h1>{title}</h1>
          <h2>{hallNames.get(hall)}</h2>
          {loading 
            ? 
          <Loading />
            : 
          <div css={css`padding-top: 16px; display: flex; flex-direction: column; margin-bottom: 32px;`}>
            {rows}
          </div>}
          {chosenSeats.length > 0 && <Summary />}
          <div css={css`transform: translateX(-25%);`}>
            <Link to="/" onClick={handleReturnClick}>
                <CustomButton className="secondary">Return</CustomButton>
            </Link>
            <CustomButton onClick={handleBookClick}>Book</CustomButton>
          </div>
      </HallConteiner>
    );
  }
}

export default CinemaHall;
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { HallConteiner, Seat, CustomButton } from '../../StyledComponents';
import Summary from '../components/Summary.js';
import { Link, Redirect} from 'react-router-dom';
import { useContext } from 'react';
import {ReduxStoreContext, ACTIONS} from '../../Reducer.js'

const CinemaHall = ({match}) => {
  console.log('match', match);
  const {state, dispatch} = useContext(ReduxStoreContext);
  const { title, hall } = state.chosenMovie;

  console.log('state.chosenMovie', state.chosenMovie);
  if (Object.keys(state.chosenMovie).length === 0) {
    return <Redirect to="/" />;
  } else {
    return (
      <HallConteiner>
          <h1>{title}</h1>
          <h2>{hall}</h2>
          <div css={css`padding-top: 16px; display: flex; flex-direction: column; margin-bottom: 32px;`}>
            <div css={css`display: flex; padding-top: 16px;`}>
              <Seat />
              <Seat />
              <Seat className="taken"></Seat>
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
            </div>
            <div css={css`display: flex; padding-top: 16px;`}>
              <Seat></Seat>
              <Seat />
              <Seat className="taken"></Seat>
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat className="taken" />
              <Seat className="taken" />
              <Seat />
              <Seat />
              <Seat />
            </div>
            <div css={css`display: flex; padding-top: 16px;`}>
              <Seat></Seat>
              <Seat />
              <Seat />
              <Seat className="taken" />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
            </div>
          </div>
          <Summary />
          <div css={css`transform: translateX(-25%);`}>
            <Link to="/">
                <CustomButton className="secondary">Return</CustomButton>
            </Link>
            <CustomButton>Book</CustomButton>
          </div>
      </HallConteiner>
    );
  }
}

export default CinemaHall;
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { HallConteiner, Seat, CustomButton } from '../../StyledComponents';
import Summary from '../components/Summary.js';
import { Link } from 'react-router-dom';

const CinemaHall = ({match}) => {
  console.log('match', match);

  return (
    <HallConteiner>
        <h1>Pulp Fiction (1994)</h1>
        <h2>GOLD DIAMOND HALL</h2>
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

export default CinemaHall;
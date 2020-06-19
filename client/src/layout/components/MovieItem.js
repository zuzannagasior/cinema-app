/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import { MovieItemCont, MovieItemBox, PosterImg, LighterText, CustomLink } from '../../StyledComponents';
import { useContext } from 'react';
import { ReduxStoreContext, ACTIONS } from '../../Reducer.js';
import { days } from '../../config/DaysOfWeek';


const MovieItem = ({ movie }) => {
    const {state, dispatch} = useContext(ReduxStoreContext);

    const handleClick = ({hall, time}) => {
        const payload = {
            title: movie.title,
            hall: hall,
            time: time
        }
        dispatch({ 
            type: ACTIONS.SET_CHOSEN_MOVIE, 
            payload: payload });
    };

    const isLinkActive = ({ time }) => {
        let active = true;
        if (state.chosenDay.day === days[new Date().getDay() - 1]) {
            let date = new Date();
            date.setHours(time.slice(0, 2), time.slice(3), '00');
            if (date.getTime() < new Date().getTime()) {
                active = false;
            }
        }

        return active;
    };

    // styles
    const headerBoxStyle = css`
        width: 100%;
        text-align: center; 
        margin-bottom: 8px;
    `;

    const posterSectionStyle = css`
        width: calc(40% - 16px);
    `;

    const infoSectionStyle = css`
        padding-left: 16px;
        width: 60%;
        height: 100%;
    `;

    const sectionSeparator = css`
        margin-bottom: 16px;
    `;

  return (
    <MovieItemCont>
        <header css={headerBoxStyle}>
            <h1 style={{color: "#3797a4"}}>{movie.title} ({movie.year})</h1>
        </header>
        <MovieItemBox>
            <section css={posterSectionStyle}>
                <PosterImg src={movie.poster} alt=""/>
            </section>
            <section css={infoSectionStyle}>
                <p><LighterText>runtime</LighterText> {movie.runtime} min</p>
                <p><LighterText>genres</LighterText> {movie.genre.join(', ')}</p>
                {/* <p><LighterText>reżyseria</LighterText> {movie.directior}</p> */}
                <p css={sectionSeparator}><LighterText>production</LighterText> {movie.countries.join(', ')}</p>
                <p>{movie.description}</p>
            </section>
        </MovieItemBox>
        <p><LighterText>Screening</LighterText> 
            {movie.screening.map((item, index) => {
                const isActive = isLinkActive(item);
                if (isActive) {
                    return <Link to="/hall" css={css`text-decoration: none;`} key={index}>
                                <CustomLink active={isActive} onClick={() => handleClick(item)}>{item.time}</CustomLink>
                            </Link>
                } else {
                    return <CustomLink active={isActive} key={index}>{item.time}</CustomLink>
                }
            })}
        </p>
    </MovieItemCont>
  );
}

export default MovieItem;
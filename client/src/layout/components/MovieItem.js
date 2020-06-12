/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import { MovieItemCont, MovieItemBox, PosterImg, LighterText, CustomLink } from '../../StyledComponents';
import { useContext } from 'react';
import {ReduxStoreContext, ACTIONS} from '../../Reducer.js'


const MovieItem = ({ movie }) => {
    const {state, dispatch} = useContext(ReduxStoreContext);

    //console.log(movie, 'movie');
    const handleClick = (event) => {

        const payload = {
            title: movie.title,
            hall: "GOLD DIAMOND HALL",
            hour: event.target.innerHTML
        }
        dispatch({ 
            type: ACTIONS.SET_CHOSEN_MOVIE, 
            payload: payload });
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
                return <Link to={"/hall/" + item.hall} css={css`text-decoration: none;`} key={index}>
                            <CustomLink active={false} onClick={handleClick}>{item.time}</CustomLink>
                        </Link>
            })}
        </p>
    </MovieItemCont>
  );
}

export default MovieItem;
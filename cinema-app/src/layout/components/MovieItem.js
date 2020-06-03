/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import pulp from '../../assets/pulp.jpg';
import { Link } from 'react-router-dom';
import { MovieItemCont, MovieItemBox, PosterImg, LighterText, CustomLink } from '../../StyledComponents';
import { useContext } from 'react';
import {ReduxStoreContext, ACTIONS} from '../../Reducer.js'


const MovieItem = () => {
    const {state, dispatch} = useContext(ReduxStoreContext);

    const handleClick = (event) => {

        const payload = {
            title: "Pulp Fiction (1994)",
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
            <h1 style={{color: "#3797a4"}}>Pulp Fiction (1994)</h1>
        </header>
        <MovieItemBox>
            <section css={posterSectionStyle}>
                <PosterImg src={pulp} alt=""/>
            </section>
            <section css={infoSectionStyle}>
                <p><LighterText>czas trwania</LighterText> 146 min</p>
                <p><LighterText>gatunek</LighterText> Gangsterski</p>
                <p><LighterText>reżyseria</LighterText> Quentin Tarantino</p>
                <p css={sectionSeparator}><LighterText>produkcja</LighterText> USA</p>
                <p>Przemoc i odkupienie w opowieści o dwóch płatnych mordercach pracujących na zlecenie mafii, żonie gangstera, bokserze i parze okradającej ludzi w restauracji.</p>
            </section>
        </MovieItemBox>
        <p><LighterText>Godziny seansów</LighterText> 
            <Link to="/hall/gold-diamond" css={css`text-decoration: none;`}>
                    <CustomLink active={false} onClick={handleClick}>14:50</CustomLink>
            </Link>
            <Link to="/hall/gold-diamond" css={css`text-decoration: none;`}>
                   <CustomLink active={true} onClick={handleClick}>15:40</CustomLink>
            </Link>
            <Link to="/hall/gold-diamond" css={css`text-decoration: none;`}>
                   <CustomLink active={true} onClick={handleClick}>20:00</CustomLink>
            </Link>
        </p>
    </MovieItemCont>
  );
}

export default MovieItem;
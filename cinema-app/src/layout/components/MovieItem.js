/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import pulp from '../../assets/pulp.jpg';
import { MovieItemCont, MovieItemBox, PosterImg, LighterText } from '../../StyledComponents';

const MovieItem = () => {


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
        <p><LighterText>Godziny seansów</LighterText> <span style={{color: "#3797a4"}}>14:50 15:20</span></p>
    </MovieItemCont>
  );
}

export default MovieItem;
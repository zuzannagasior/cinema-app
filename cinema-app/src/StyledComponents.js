/** @jsx jsx */
import styled from '@emotion/styled';


// Main

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column; 
    align-items: center;
`;

export const Main = styled.main`
    flex-grow: 1;
    padding: 16px;
    display: flex;
    justify-content: center;
`;

// Header

export const HeaderCont = styled.header`
    background-color: #3797a4;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
    font-weight: 600;
`;

export const Clapperboard = styled.img`
    width: 112px; 
    height: auto;
    padding-left: 24px;
    padding: ${props => props.padding};
`;

export const MainTitle = styled.p`
    padding-top: 32px;
    letter-spacing: 4px;
    padding-bottom: 8px;
    font-size: 72px;
    margin-top: 0;
    text-transform: uppercase;
`;

export const Subtitle = styled.p`
    padding-bottom: 40px;
    font-size: 24px;
`;

// Movie List

export const MovieListCont = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 80%;
`;

// Footer

export const FooterCont = styled.footer`
    width: 100%;
    text-align: center; 
    padding: 16px;
`;
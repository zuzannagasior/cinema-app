/** @jsx jsx */
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import emptyChair from './assets/emptychair.png';
import taken from './assets/taken2.png';
import chosen from './assets/yourchair.png';


// Keyframes

const moveFromRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(100px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;


// Main

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column; 
    align-items: center;
`;

export const Main = styled.main`
    width: 100%;
    flex-grow: 1;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
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

// Calendar

export const CalendarCont = styled.section`
    width: 80%;
    padding: 16px 32px;
    background-color: #1D1D20;
    display: flex;
    justify-content: space-around;
    position: ${props => props.fixed ? "sticky" : "block"};
    top: 0;
`;

export const DateButton = styled.button`
    background-color: transparent;
    border: none;
    color:  ${props => props.active ? "#3797a4" : "#DFDFE2"};
    text-transform: uppercase;
    padding: 16px;
    transition: .2s;
    &:hover {
        color: #3797a4;
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
`;

// Movie List

export const MovieListCont = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 80%;
`;

// Movie Item

export const MovieItemCont = styled.div`
    padding: 32px;
    max-width: 50%;
`;

export const MovieItemBox = styled.div`
    width: 100%;
    display: flex;
    padding-top: 16px;
    margin-bottom: 16px;
`;

export const PosterImg = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;

export const LighterText = styled.span`
    font-weight: 300;
`;

export const CustomLink = styled.span`
    color: ${props => props.active ? "#3797a4" : "#747474"};
    margin-left: 8px;
    transition: .2s;
    &:hover {
        color: ${props => props.active ? "#DFDFE2" : "#747474"};
    }
`;

// Cinema Hall

export const HallConteiner = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 32px;
`;

export const Seat = styled.div`
    width: 25px;
    height: 25px;
    background: url(${emptyChair}) no-repeat center center;
    background-size: cover;
    margin-left: 24px;
    cursor: pointer;
    &:first-of-type {
     margin-left: 0;
    }
    &:hover {
     background: url(${chosen}) no-repeat center center;
     background-size: cover;
    }
    &.taken {
     background: url(${taken}) no-repeat center center;
     background-size: cover;
     cursor: default;
     /* &:hover {
     background: url(${taken}) no-repeat center center cover;
    } */
    }
    &.chosen {
     background: url(${chosen}) no-repeat center center;
     background-size: cover;
    }
`;

// Footer

export const FooterCont = styled.footer`
    width: 100%;
    text-align: center; 
    padding: 16px;
`;

// buttons

export const CustomButton = styled.button`
    background-color: transparent;
    border: 1.5px solid #3797a4;
    min-width: 100px;
    padding: 8px;
    color: #DFDFE2;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
    transition: .2s;
    cursor: pointer;
    &:hover {
        background-color: #3797a4;
    }
    &:focus {
        outline: none;
        background-color: #3797a4;
    }
    &:disabled {
        background-color: transparent;
        cursor: default;
    }
    &.secondary {
        border: none;
        font-weight: 300;
        &:hover {
            background-color: transparent;
            text-decoration: underline;
        }
        &:focus {
            background-color: transparent;
            text-decoration: underline;
        }
    }
`;

// inputs

export const CustomInput = styled.input`
    background-color: #1d1d20;
    border: 1px solid #dfdfe2;
    padding: 8px;
    color: #dfdfe2;
    transition: .2s;
    margin-bottom: 16px;
    width: 200px;
    &:focus {
            border: 2px solid #3797a4;
            outline: none;
        }
`;

// table

export const SummaryBox = styled.div`
    animation: ${moveFromRight} 0.5s;
    margin-bottom: 32px; 
    width: 600px;
`;


export const Th = styled.th`
    padding-bottom: 16px;
`;

export const Td = styled.td`
    padding-bottom: 16px;
    animation: ${moveFromRight} 0.5s;
`;
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Select from 'react-select';
import { Th, Td, SummaryBox } from '../../StyledComponents';
import {ReduxStoreContext, ACTIONS} from '../../Reducer.js'
import { useContext } from 'react';

const selectStyles = {
    container: (styles) => ({ ...styles, width: "200px", borderRadius: "none", margin: "auto", color: '#DFDFE2'}),
    control: (styles, {isFocused}) => ({ ...styles, 
        backgroundColor: 'transparent', 
        borderRadius: "none", 
        border: isFocused ? "1.5px solid #3797a4" : "1.5px solid #DFDFE2",
        boxShadow: "none",
        transition: ".2s",
        '&:hover': { 
            borderColor: isFocused ? "#3797a4" : "#DFDFE2"
        },
    }),
    menu:(styles) => ({
        ...styles,
        backgroundColor: "#1D1D20",
        borderRadius: 0,
        border: "1.5px solid #DFDFE2",

    }),
    indicatorSeparator: () => ({
        display: "none"
    }),
    dropdownIndicator: (styles) => ({
        ...styles,
        '&>svg': { 
            fill: "#DFDFE2",
        },
    }),
    singleValue: () => ({
        color: '#DFDFE2'
    }),
    option: (styles, {isSelected, isFocused}) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "#1D1D20 !important" : "#1D1D20 !important",
        color: isSelected ? "#3797a4" : "#DFDFE2",
        '&:hover': { color: "#3797a4" },

      };
    }
};

const Summary = () => {
    const {state, dispatch} = useContext(ReduxStoreContext);

    const ticketTypeOption = [
        { value: 'adult', label: 'adult' },
        { value: 'children', label: 'children' }
        ];

    const handleChange = (selectedOption, seat) => {
        const payload = {
            ticketType: selectedOption.value,
            row: seat.row,
            seat: seat.seat
        };

        dispatch({ 
            type: ACTIONS.SET_TICKET_TYPE, 
            payload: payload });
    }

    const chosenTickets = state.chosenSeats.map((seat, index) => {
        return  <tr key={index}>
                    <Td>{index + 1}</Td>
                    <Td>{seat.row}</Td>
                    <Td>{seat.seat}</Td>
                    <Td><Select
                            defaultValue={{value: seat.ticketType, label: seat.ticketType}}
                            onChange={(e) => handleChange(e, seat)}
                            options={ticketTypeOption}
                            styles={selectStyles}
                            isSearchable={false}
                        /></Td>
                    <Td>{seat.price}</Td>
                </tr>;
    });

  return (
    <SummaryBox>
        <h2 css={css`margin-bottom: 16px;`}>Summary</h2>
        <table css={css`width: 100%;`}>
            <thead css={css`margin-bottom: 8px;`}>
                <tr>
                    <Th></Th>
                    <Th>row</Th>
                    <Th>seat</Th>
                    <Th>ticket type</Th>
                    <Th>price</Th>
                </tr>
            </thead>
            <tbody css={css`text-align: center;`}>
                {chosenTickets}
            </tbody>
        </table>   
    </SummaryBox>
  );
}

export default Summary;
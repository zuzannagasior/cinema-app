/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState, useContext } from 'react';
import { Seat } from '../../StyledComponents';
import {ReduxStoreContext, ACTIONS} from '../../Reducer.js';
import { ticketPrices } from '../../config/TicketPrices';

const SeatItem = ({ seat }) => {
    const {dispatch} = useContext(ReduxStoreContext);
    const [isChosen, setSeatChosen] = useState(false);

    const handleSeatClick = (seat) => {
        setSeatChosen(!isChosen);

        const action = isChosen ? ACTIONS.DELETE_SEAT : ACTIONS.ADD_SEAT;
        const payload = isChosen ? seat : 
            { ...seat, 
            ticketType: "adult", 
            price: ticketPrices.get("adult")};

        dispatch({ 
          type: action, 
          payload: payload });
    };

    return <Seat className={(seat.isTaken && "taken") || (isChosen && "chosen")} onClick={() => handleSeatClick(seat)}  />
};
 
export default SeatItem;
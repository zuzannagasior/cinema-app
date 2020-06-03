import React, { useEffect, useRef, useState, useContext } from 'react';
import {ReduxStoreContext, ACTIONS} from '../Reducer.js'
import { CalendarCont, DateButton } from '../StyledComponents';

const CalendarSection = () => {
  const [isSticky, setCalendarSticky] = useState(false);
  const ref = useRef(null);

  const {state, dispatch} = useContext(ReduxStoreContext);

  const handleClick = (event) => {
    dispatch({ 
        type: ACTIONS.SET_DATE, 
        payload: event.target.innerHTML });
  };

  const handleScroll = () => {
    if (ref.current) {
      setCalendarSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <CalendarCont fixed={isSticky} ref={ref}>
        <DateButton active={state.date === 'Today'} onClick={handleClick}>Today</DateButton>
        <DateButton active={state.date === 'Tommorow'} onClick={handleClick}>Tommorow</DateButton>
        <DateButton active={state.date === 'Thursday, 4.06'} onClick={handleClick}>Thursday, 4.06</DateButton>
        <DateButton active={state.date === 'Friday, 5.06'} onClick={handleClick}>Friday, 5.06</DateButton>
        <DateButton active={state.date === 'Saturday, 6.06'} onClick={handleClick}>Saturday, 6.06</DateButton>
        <DateButton active={state.date === 'Sunday, 7.06'} onClick={handleClick}>Sunday, 7.06</DateButton>
        <DateButton active={state.date === 'Monday, 8.06'} onClick={handleClick}>Monday, 8.06</DateButton>
    </CalendarCont>
  );
}

export default CalendarSection;
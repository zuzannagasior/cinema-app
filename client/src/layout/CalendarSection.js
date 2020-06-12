import React, { useEffect, useRef, useState, useContext } from 'react';
import {ReduxStoreContext, ACTIONS} from '../Reducer.js'
import { CalendarCont, DateButton } from '../StyledComponents';

const CalendarSection = () => {
  const [isSticky, setCalendarSticky] = useState(false);
  const ref = useRef(null);

  const {state, dispatch} = useContext(ReduxStoreContext);
  const { chosenDay, dates } = state;

  const handleClick = (event) => {
    dispatch({ 
        type: ACTIONS.SET_DAY, 
        payload: event.target.value });
  };

  const handleScroll = () => {
    if (ref.current) {
      setCalendarSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  const setDates = () => {
    let buttons = [];
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const today = new Date;
  
    for (let i = 0; i < 7; i++) {
      switch (i) {
        case 0:
            buttons.push({ text: 'TODAY', day: days[today.getDay() - 1] });
            break;
        case 1:
            let tomorrow = new Date();
            tomorrow.setDate(new Date().getDate()+1);
            buttons.push({ text: 'TOMMOROW', day: days[tomorrow.getDay() - 1] });
            break;
        default:
            let date = new Date();
            date.setDate(new Date().getDate() + i - 1);  
            buttons.push({ 
            text: `${days[date.getDay()].toUpperCase()}, 
            ${date.getDate()}.${date.getMonth().toString().length === 1 ? '0'.concat(date.getMonth().toString()) : date.getMonth()}`, 
            day: days[date.getDay()] });
      }
    };
    return buttons;
  
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    const buttons = setDates();

    dispatch({ 
      type: ACTIONS.SET_DATES, 
      payload: buttons });

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  const buttonsToDisplay = dates.map((date, index) => {
    return <DateButton key={index} active={chosenDay === date.day} onClick={handleClick} value={date.day}>{date.text}</DateButton>
  })
  
  return (
    <CalendarCont fixed={isSticky} ref={ref}>
        {buttonsToDisplay}
    </CalendarCont>
  );
}

export default CalendarSection;
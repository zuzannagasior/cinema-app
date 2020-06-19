import React, { useEffect, useRef, useState, useContext } from 'react';
import {ReduxStoreContext, ACTIONS} from '../Reducer.js'
import { CalendarCont, DateButton } from '../StyledComponents';
import { days } from '../config/DaysOfWeek';

const CalendarSection = () => {
  const [isSticky, setCalendarSticky] = useState(false);
  const ref = useRef(null);

  const {state, dispatch} = useContext(ReduxStoreContext);
  const { chosenDay, dates } = state;

  const handleClick = (date) => {
    const payload = {
      day: date.day,
      date: date.date
    };

    dispatch({ 
        type: ACTIONS.SET_DAY, 
        payload: payload });
  };

  const handleScroll = () => {
    if (ref.current) {
      setCalendarSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    
    const setDates = () => {
      let buttons = [];
      const today = new Date();
      const dayOfWeek = today.getDay() === 0 ? 6 : today.getDay() - 1;

      for (let i = 0; i < 7; i++) {
        switch (i) {
          case 0:
              buttons.push({ text: 'TODAY', day: days[dayOfWeek], date: today });
              break;
          case 1:
              let tomorrow = new Date();
              tomorrow.setDate(new Date().getDate() + 1);
              buttons.push({ text: 'TOMMOROW', day: days[tomorrow.getDay() - 1], date: tomorrow });
              break;
          default:
              let date = new Date();
              date.setDate(new Date().getDate() + i - 1);  
              buttons.push({ 
              text: `${days[date.getDay()].toUpperCase()}, 
              ${date.getDate()}.${date.getMonth().toString().length === 1 ? '0'.concat(date.getMonth().toString()) : date.getMonth()}`, 
              day: days[date.getDay()], 
              date: date});
        }
      };
      return buttons;
    
    }

    const buttons = setDates();

    dispatch({ 
      type: ACTIONS.SET_DATES, 
      payload: buttons });

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, [dispatch]);

  const buttonsToDisplay = dates.map((date, index) => {
    return <DateButton key={index} active={chosenDay.day === date.day} onClick={() => handleClick(date)} >{date.text}</DateButton>
  })
  
  return (
    <CalendarCont fixed={isSticky} ref={ref}>
        {buttonsToDisplay}
    </CalendarCont>
  );
}

export default CalendarSection;
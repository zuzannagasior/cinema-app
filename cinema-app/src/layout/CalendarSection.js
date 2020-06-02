import React, { useEffect, useRef, useState } from 'react';
import { CalendarCont, DateButton } from '../StyledComponents';

const CalendarSection = () => {
  const [isSticky, setCalendarSticky] = useState(false);
  const ref = useRef(null);

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
        <DateButton active={true}>Today</DateButton>
        <DateButton>Tommorow</DateButton>
        <DateButton>Thursday, 4.06</DateButton>
        <DateButton>Friday, 5.06</DateButton>
        <DateButton>Saturday, 6.06</DateButton>
        <DateButton>Sunday, 7.06</DateButton>
        <DateButton>Monday, 8.06</DateButton>
    </CalendarCont>
  );
}

export default CalendarSection;
import { createContext } from 'react';
import { days } from './config/DaysOfWeek';
import { ticketPrices } from './config/TicketPrices';


export const ACTIONS = {
    SET_CHOSEN_MOVIE: 'SET_CHOSEN_MOVIE',
    SET_DAY: 'SET_DAY',
    SET_DATES: 'SET_DATES',
    SET_MOVIES: 'SET_MOVIES',
    ADD_SEAT: 'ADD_SEAT',
    DELETE_SEAT: 'DELETE_SEAT',
    SET_TICKET_TYPE: 'SET_TICKET_TYPE',
    TOGGLE_LOADING: 'TOGGLE_LOADING',
    CLEAR_CHOSEN_SEATS: 'CLEAR_CHOSEN_SEATS',
    SET_MODAL_IS_OPEN: 'SET_MODAL_IS_OPEN'
};

export const reducer = (state, action) => {
   //console.log('Wywolanie reducer: ', { state, action });

   const getSeatIndex = () => {
        const row = action.payload.row;
        const seat = action.payload.seat;

        return state.chosenSeats.findIndex(item => item.row === row && item.seat === seat);
   };
  
    switch (action.type) {
        case ACTIONS.SET_DAY:
            console.log( action.payload, ' action.payload');
            return { ...state, chosenDay: action.payload };

        case ACTIONS.SET_DATES:
            return { ...state, dates: action.payload };

        case ACTIONS.SET_CHOSEN_MOVIE:
            return { ...state, chosenMovie: action.payload };

        case ACTIONS.SET_MOVIES:
            return { ...state, movies: action.payload };
            
        case ACTIONS.ADD_SEAT:
            return { ...state, chosenSeats: [...state.chosenSeats, action.payload] };

        case ACTIONS.DELETE_SEAT:
            return { ...state, chosenSeats: [...state.chosenSeats.slice(0, getSeatIndex()), ...state.chosenSeats.slice(getSeatIndex() + 1)] };

        case ACTIONS.TOGGLE_LOADING:
            return { ...state, loading: action.payload };

        case ACTIONS.SET_TICKET_TYPE:
            const newSeat = { ...state.chosenSeats[getSeatIndex()], ticketType: action.payload.ticketType, price: ticketPrices.get(action.payload.ticketType)};
            return { ...state, chosenSeats: [...state.chosenSeats.slice(0, getSeatIndex()), newSeat, ...state.chosenSeats.slice(getSeatIndex() + 1)] };
      
        case ACTIONS.CLEAR_CHOSEN_SEATS:
            return { ...state, chosenSeats: [] };

        case ACTIONS.SET_MODAL_IS_OPEN:
            return { ...state, modalIsOpen: action.payload };  

        default:
            return state;
    }
  };

  const dayOfWeek = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
  
  export const initialState = {
    chosenDay: {day: days[dayOfWeek], date: new Date()},
    dates: [],
    movies: [],
    chosenMovie: {},
    chosenSeats: [],
    loading: false,
    modalIsOpen: false
  };
  
  export const ReduxStoreContext = createContext();
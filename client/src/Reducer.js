import { createContext } from 'react';
import { days } from './config/DaysOfWeek';

export const ACTIONS = {
    SET_CHOSEN_MOVIE: 'SET_CHOSEN_MOVIE',
    SET_DAY: 'SET_DAY',
    SET_DATES: 'SET_DATES',
    SET_MOVIES: 'SET_MOVIES',
    ADD_SEAT: 'ADD_SEAT',
    DELETE_SEAT: 'DELETE_SEAT',
    SET_TICKET_TYPE: 'SET_TICKET_TYPE',
    TOGGLE_LOADING: 'TOGGLE_LOADING'
};

export const reducer = (state, action) => {
   console.log('Wywolanie reducer: ', { state, action });
  
    switch (action.type) {
        case ACTIONS.SET_DAY:
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
            const row = action.payload.row;
            const seat = action.payload.seat;

            const seatIndex = state.chosenSeats.findIndex(item => item.row === row && item.seat === seat);
            return { ...state, chosenSeats: [...state.chosenSeats.slice(0, seatIndex), ...state.chosenSeats.slice(seatIndex + 1)] };

        case ACTIONS.TOGGLE_LOADING:
            return { ...state, loading: action.payload };

      default:
        return state;
    }
  };

  const dayOfWeek = (new Date).getDay() === 0 ? 6 : (new Date).getDay() - 1;

  export const initialState = {
    chosenDay: days[dayOfWeek],
    dates: [],
    movies: [],
    chosenMovie: {},
    chosenSeats: [],
    loading: false
  };
  
  export const ReduxStoreContext = createContext();
import { createContext } from 'react';

export const ACTIONS = {
    SET_CHOSEN_MOVIE: 'SET_CHOSEN_MOVIE',
    SET_DATE: 'SET_DATE',
    SET_MOVIES: 'SET_MOVIES',
    ADD_SEAT: 'ADD_SEAT',
    DELETE_SEAT: 'DELETE_SEAT',
    SET_TICKET_TYPE: 'SET_TICKET_TYPE',
    TOGGLE_LOADING: 'TOGGLE_LOADING'
};

export const reducer = (state, action) => {
   console.log('Wywolanie reducer: ', { state, action });
  
    switch (action.type) {
        case ACTIONS.SET_DATE:
            return { ...state, date: action.payload };

        case ACTIONS.SET_CHOSEN_MOVIE:
            return { ...state, chosenMovie: action.payload };

        case ACTIONS.SET_MOVIES:
            return { ...state, movies: action.payload };
            
        case ACTIONS.ADD_SEAT:
            return { ...state, chosenSeats: [...state.chosenSeats, action.payload] };

      default:
        return state;
    }
  };
  
  export const initialState = {
    date: 'Today',
    movies: [],
    chosenMovie: {},
    chosenSeats: [],
    loading: false
  };
  
  export const ReduxStoreContext = createContext();
import { createContext } from 'react';

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

        case ACTIONS.TOGGLE_LOADING:
            return { ...state, loading: action.payload };

      default:
        return state;
    }
  };

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  export const initialState = {
    chosenDay: days[(new Date).getDay() - 1],
    dates: [],
    movies: [],
    chosenMovie: {},
    chosenSeats: [],
    loading: false
  };
  
  export const ReduxStoreContext = createContext();
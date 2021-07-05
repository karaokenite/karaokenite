import { configureStore } from '@reduxjs/toolkit';
import { get } from 'lodash';
const INITIAL_STATE = {
  byId: {},
};

const logger = ({ getState }) => {
  return (next) => (action) => {
    console.log(`Dispatching ${action.type}:`, action);
    const returnValue = next(action);
    console.log('Next State:', getState());
    return returnValue;
  };
};

// Triggered when a client is connected:
const roomReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CREATE_ROOM': {
      const { id, hostId } = action.payload;
      return {
        ...state,
        byId: {
          [id]: {
            messages: [],
            host: hostId,
            users: {
              [hostId]: {},
            },
          },
        },
      };
    }
    case 'JOIN_ROOM': {
      const { userId } = action.payload;
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            users: {
              ...state.byId[id].users,
              [userId]: {},
            },
          },
        },
      };
    }
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: roomReducer,
  middleware: [logger],
});

export const dispatch = store.dispatch;
export const getState = (lookup, fallback) =>
  get(store.getState(), lookup, fallback);

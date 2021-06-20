const { configureStore } = require('@reduxjs/toolkit');

const INITIAL_STATE = {
  byId: {},
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
  }
};

export const store = configureStore({ reducer: roomReducer });

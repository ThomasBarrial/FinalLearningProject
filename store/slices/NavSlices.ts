import { createSlice } from '@reduxjs/toolkit';

interface IPayload {
  origin: String | null;
  destination: String | null;
  travelTimeInformation: String | null;
}

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;

// Selectors
export const selectOrigin = (state: { nav: IPayload }) => state.nav.origin;
export const selectDestination = (state: { nav: IPayload }) => state.nav.destination;
export const selectTravelTimeInformation = (state: { nav: IPayload }) => state.nav.travelTimeInformation;

export default navSlice.reducer;

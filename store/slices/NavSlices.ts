import { createSlice } from '@reduxjs/toolkit';

interface IOrigin {
  description: string;
  location: {
    lat: number;
    lng: number;
  };
}

interface IDestination {
  description: string;
  location: {
    lat: number;
    lng: number;
  };
}

interface ITravelTimeInformation {
  distance: {
    text: string;
    value: string;
  };
  duration: {
    text: string;
    value: number;
  };
  status: string;
}

interface IPayload {
  origin: IOrigin;
  destination: IDestination;
  travelTimeInformation: ITravelTimeInformation;
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

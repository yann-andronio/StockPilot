import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ActiveLinkState {
  activeName: string;
}

const initialState: ActiveLinkState = {
  activeName: "Accueil", 
};

const activeLinkSlice = createSlice({
  name: "activeLink",
  initialState,
  reducers: {
    setActiveName: (state, action: PayloadAction<string>) => {
      state.activeName = action.payload;
    },
  },
});

export const { setActiveName } = activeLinkSlice.actions;
export default activeLinkSlice.reducer;

import { configureStore, createSlice } from '@reduxjs/toolkit';

const emojiSlice = createSlice({
  name: 'emoji',
  initialState: {
    data: [],
  },
  reducers: {
    setEmojiData: (state, action) => {
      state.data = action.payload;
    },
    setEmojiCategory:(state,action)=>{
        state.data = action.payload;
    }
  },
});

export const { setEmojiData } = emojiSlice.actions;

export const selectEmojiData = (state) => state.emoji.data;
export const { setEmojiCategory } = emojiSlice.actions;


const store = configureStore({
  reducer: {
    emoji: emojiSlice.reducer,
  },
});

export default store

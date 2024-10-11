import { configureStore } from '@reduxjs/toolkit';
import articleReducer from './ArticleSlice'

export const store = configureStore({
  reducer: {
     articles: articleReducer
  },
});

export default store;

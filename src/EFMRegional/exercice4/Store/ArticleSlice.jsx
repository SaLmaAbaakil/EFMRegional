import { createSlice } from '@reduxjs/toolkit';

const articleSlice = createSlice({
    name: 'articles',
    initialState: {
        articles: [
            {
                id: 10,
                title: 'Article 1',
                famille: 'informatique',
            },
            {
                id: 11,
                title: 'Article 2',
                famille: 'bureau',
            },
        ],
    },
    reducers: {
        ADD_ARTICLE: (state, action) => {
            state.articles.push(action.payload);
        },
        DELETE_ARTICLE: (state, action) => {
            state.articles = state.articles.filter(article => article.id !== action.payload);
        },
    },
});

export const { ADD_ARTICLE, DELETE_ARTICLE } = articleSlice.actions;

export default articleSlice.reducer;
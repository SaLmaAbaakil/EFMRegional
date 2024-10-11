import { useDispatch } from 'react-redux';
import { ADD_ARTICLE, DELETE_ARTICLE } from '../Store/ArticleSlice';

export const ArticleActions = () => {
    const dispatch = useDispatch();

    const addArticle = (article) => {
        dispatch(ADD_ARTICLE(article));
    };

    const deleteArticle = (id) => {
        dispatch(DELETE_ARTICLE(id));
    };

    return { addArticle, deleteArticle }; 
};


export const DELETE = (id) => (dispatch) => {
    dispatch(DELETE_ARTICLE(id));
};
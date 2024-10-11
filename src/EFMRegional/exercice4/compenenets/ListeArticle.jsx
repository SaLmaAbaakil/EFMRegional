import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DELETE } from './actions';
import AddArticle from './AddArticle';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const ListeArticle = () => {
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.articles.articles);
    const [currentArticle, setCurrentArticle] = useState(null);

    const handleEdit = (article) => {
        setCurrentArticle(article);
    };

    const handleDelete = (id) => {
        dispatch(DELETE(id));
    };

    return (
        <div>
            <AddArticle currentArticle={currentArticle} setCurrentArticle={setCurrentArticle} />
            <h2>Article List</h2>
            {articles.map((article) => (
                <div key={article.id} className="mb-3 border p-3">
                    <h3>{article.title}</h3>
                    <p>Famille: {article.famille}</p>
                    <button className="btn btn-danger me-2" onClick={() => handleDelete(article.id)}>
                        Delete
                    </button>
                    <button className="btn btn-warning" onClick={() => handleEdit(article)}>
                        Edit
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ListeArticle;

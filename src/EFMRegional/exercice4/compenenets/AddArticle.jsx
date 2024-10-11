import React, { useState, useEffect } from 'react';
import { ArticleActions } from './actions';

const AddArticle = ({ currentArticle, setCurrentArticle }) => {
    const { addArticle, deleteArticle } = ArticleActions();
    const [title, setTitle] = useState('');
    const [famille, setFamille] = useState('');
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        if (currentArticle) {
            setTitle(currentArticle.title);
            setFamille(currentArticle.famille);
            setShowForm(true);
        }
    }, [currentArticle]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !famille) return;

        const newArticle = {
            id: currentArticle ? currentArticle.id : Date.now(),
            title,
            famille,
        };

        if (currentArticle) {
            deleteArticle(currentArticle.id); 
        }

        addArticle(newArticle);
        setTitle('');
        setFamille('');
        setShowForm(false);
        setCurrentArticle(null);
    };

    return (
        <div>
            {!showForm ? (
                <button className="btn btn-primary mb-3" onClick={() => setShowForm(true)}>
                    Add Article
                </button>
            ) : (
                <form onSubmit={handleSubmit} className="mb-4">
                    <div className="mb-3">
                        <label htmlFor="articleTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            id="articleTitle"
                            className="form-control"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="articleFamille" className="form-label">Famille</label>
                        <input
                            type="text"
                            id="articleFamille"
                            className="form-control"
                            value={famille}
                            onChange={(e) => setFamille(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Save Article</button>
                    <button type="button" className="btn btn-secondary ms-2" onClick={() => setShowForm(false)}>
                        Cancel
                    </button>
                </form>
            )}
        </div>
    );
};

export default AddArticle;

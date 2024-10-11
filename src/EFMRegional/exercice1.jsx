import React, { useState, useEffect } from 'react';

const FetchArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(res => res.json())
      .then(data => setArticles(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='text-center'>
      <h2>Liste des articles</h2>
      <ul>
        {articles.map(article => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchArticles;

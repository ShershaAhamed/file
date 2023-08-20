import React, { useState, useEffect } from 'react';

const FavoriteArticles = ({ article }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Check if the article is already marked as a favorite in local storage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.includes(article.title));
  }, [article.title]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (isFavorite) {
      const updatedFavorites = favorites.filter(title => title !== article.title);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      favorites.push(article.title);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <button onClick={toggleFavorite}>
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  );
};

export default FavoriteArticles;

// NewsList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=API_KEY')
      .then(response => {
        setNews(response.data.articles);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);

  return (
    <div>
      <h1>News List</h1>
      <ul>
        {news.map(article => (
          <li key={article.title}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;

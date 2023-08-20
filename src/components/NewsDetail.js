import React from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = ({ newsData }) => {
  const { articleId } = useParams();

  const article = newsData.find(article => article.title === articleId);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read full article</a>
    </div>
  );
};

export default NewsDetail;

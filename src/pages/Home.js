import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from '../components/Auth';
import NewsList from '../components/NewsList';
import NewsDetail from '../components/NewsDetail';
import FavoriteArticles from '../components/FavoriteArticles';

const Home = ({ newsData }) => {
  return (
    <div>
      <h1>News App</h1>
      <Auth />

      <Route>
        <Route path="/" exact>
          <NewsList newsData={newsData} />
        </Route>
        <Route path="/article/:articleId">
          <NewsDetail newsData={newsData} />
          <FavoriteArticles article={""} />
        </Route>
      </Route>
    </div>
  );
};

export default Home;

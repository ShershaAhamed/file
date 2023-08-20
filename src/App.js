import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewsDetail from './components/NewsDetail'; 
import FavoriteArticles from './components/FavoriteArticles';
import Auth from './components/Auth';
import NewsList from './components/NewsList';
import NotFound from './pages/NotFound';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>News App</h1>
        <>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/article/:articleId">
            {/* <Auth />
            <ArticleDetail /> */}
            <NewsDetail />
            <FavoriteArticles />
          </Route>
          <Route>
            <NotFound />
          </Route>
          </>
      </div>
    </Router>
  );
};

export default App;

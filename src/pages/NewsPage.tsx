import React, { useState, useEffect } from 'react';
import NewsItem from '../components/NewsItem';
import axios from '../utils/API';

const NewsPage: React.FunctionComponent<{}> = (props) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get('/')
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  }, [news]);

  return (
    <div className="d-flex flex-column justify-content-center container">
      <div className="w-100 d-flex justify-content-center shadow mt-2 mb-2">
        <h1>Hacker News</h1>
      </div>
      <div className="top-0 w-100 d-flex flex-column mt-2 mb-2">
        <NewsItem />
      </div>
    </div>
  );
};

export default NewsPage;

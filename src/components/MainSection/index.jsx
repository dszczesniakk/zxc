import React, { useEffect, useState } from 'react';
import Article from '../Article';
import SortTool from '../SortTool';
import { getSportArticles, getFashionArticles } from '../../actions/getArticles';

const MainSection = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getSportArticles().then(x => setArticles(prev => [...prev, ...x]));
    getFashionArticles().then(x => setArticles(prev => [...prev, ...x]));
  }, []);

  return (
    <div className="mainSection">
      <SortTool/>
      {articles && articles.map((data) => {
        return (
          <Article
            key={data.id}
            image={data.image}
            title={data.title}
            description={data.preamble}
            category={data.category}
            date={data.date}
          />
        )
      })}
      
    </div>
  )
}

export default MainSection;
import React, { useEffect, useState } from 'react';
import Article from '../Article';
import SortTool from '../SortTool';
import { getSportArticles, getFashionArticles } from '../../actions/getArticles';
import { sortArticles } from '../../actions/sortArticles';

const MainSection = ({category}) => {
  const [articles, setArticles] = useState([]);
  const [order, setOrder] = useState('');

  useEffect(() => {
    getSportArticles().then(response => response.length > 0 && setArticles(prev => [...prev, ...response]));
    getFashionArticles().then(response => response.length > 0 && setArticles(prev => [...prev, ...response]));
  }, []);

  return (
    <div className="mainSection">
      {articles.length > 0
        && <>
            <SortTool onChangeOrder={(e) => setOrder(e)} order={order}/>
            {sortArticles(articles, order).map((data) => {
              return category.includes(data.category) || category.length === 0
              ? (
                  <Article
                    key={data.id}
                    image={data.image}
                    title={data.title}
                    description={data.preamble}
                    category={data.category}
                    date={data.date}
                  />
                )
              : null
            })}
        </>
    }
    </div>
  )
}

export default MainSection;
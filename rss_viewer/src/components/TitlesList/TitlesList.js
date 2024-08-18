import './TitlesList.css'
import { Spin, List } from 'antd';
import { useState, useEffect } from 'react';

const TitlesList = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/titles')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArticles(data);
      });
  }, []);

  if(!articles || !articles.titles) {
    return (
      <div className="spinner">
        <Spin size='large' />
      </div>
    );
  }

  return (
    <div className="list">
      <List size="large" bordered>
        {articles.titles.map((title) => {
          return (
            <List.Item>
              <a href={title.link} target='_blank'>
                {title.title}
              </a>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
}

export default TitlesList;
import styles from './TitlesList.css'
import { Spin, List } from 'antd';
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

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
      <span>
        <Spin size='large' />
      </span>
    );
  }

  const formattedTitles = articles.titles;

  return (
    <div className={styles.list}>
      <InfiniteScroll
        dataLength={articles.titles.length}
        scrollableTarget="scrollableDiv"
      >
        <List size="large" bordered>
          {articles.titles.map((title) => {
            return (
                <List.Item><a href={title.link} target='_blank'>{title.title}</a></List.Item>
            );
          })}
        </List>
      </InfiniteScroll>
    </div>
  );
}

export default TitlesList;
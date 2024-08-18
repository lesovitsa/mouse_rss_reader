import { Spin, List, Space, Input, Button } from 'antd';
import { useState, useEffect } from 'react';
import ListItem from './ListItem'

const FeedManager = ({ setPage }) => {
  const [rss, setRss] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    fetch('http://localhost:3000/feeds/all')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRss(data);
      });
  }, []);

  const onAdd = () => {
    fetch('http://localhost:3000/feeds/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            url: input,
        }),
        })

        setPage('feed');
    };

    const onChange = (value) => { console.log(value) }



  if(!rss || !rss.feeds) {
    return (
      <div className="spinner">
        <Spin size='large' />
      </div>
    );
  }

  return (
    <div className="list">
      <List size="large" bordered>
        <List.Item>
            <Space.Compact
                style={{
                    width: '100%',
                }}
                >
                <Input placeHolder="Add new feed" onChange={(e) => setInput(e.target.value)} />
                <Button type="primary" onClick={onAdd}>Submit</Button>
            </Space.Compact>
        </List.Item>
        {rss.feeds.map((feed) => <ListItem feed={feed} setPage={setPage} />)}
      </List>
    </div>
  );
}

export default FeedManager;
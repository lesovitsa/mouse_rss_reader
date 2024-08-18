import './FeedManager.css';
import { List, Input, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useState } from 'react';

const ListItem = ({ feed, setPage }) => {
    const [input, setInput] = useState("");
    const [isBeingEdited, setIsBeingEdited] = useState(false);

    const onUpdate = (id) => {
      fetch('http://localhost:3000/feeds/update', {
          method: 'PATCH',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              id: id,
              url: input,
          }),
          })
          setPage('feed');
      };

      const onDelete = (id) => {
        fetch('http://localhost:3000/feeds/remove', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
            }),
            })

            setPage('feed')
        };

    if (isBeingEdited) {
        return (
            <List.Item>
                <div className="listItem">
                    <Input defaultValue={feed.url} onChange={(e) => setInput(e.target.value)} />
                    <Button type="primary" onClick={() => onUpdate(feed.id)}>Submit</Button>
                    <Button type="primary" onClick={() => setIsBeingEdited(false)} danger>Cancel</Button>
                </div>
            </List.Item>
        )
    }

    return (
        <List.Item>
            <div className="listItem">
                {feed.url}
                <div>
                    <Button type='default' icon={<EditOutlined />} onClick={() => setIsBeingEdited(true)}>Change</Button>
                    <Button type="primary" onClick={() => onDelete(feed.id)} danger>Remove</Button>
                </div>
            </div>
        </List.Item>
    )
  }

  export default ListItem;
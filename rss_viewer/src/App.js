import './App.css';
import { EditOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { FloatButton, Typography } from 'antd';
import { useState } from 'react';
import TitlesList from './components/TitlesList/TitlesList.js';
import FeedManager from './components/FeedManager/FeedManager.js';

function App() {
  const { Title } = Typography;
  const [current, setCurrent] = useState('feed');

  const onClick = () => {
    if(current == 'feed')
      setCurrent('manager');
    else
      setCurrent('feed');
  }

  const renderCurrent = () => {
    switch(current) {
      case 'feed': return (
        <div>
          <TitlesList />
          <FloatButton tooltip={<div>Manage feeds</div>} type='primary' icon={<EditOutlined />} onClick={onClick}/>
        </div>
      ); 
      case 'manager': return (
        <div>
          <FeedManager setPage={setCurrent} />
          <FloatButton tooltip={<div>View feeds</div>} type='primary' icon={<UnorderedListOutlined />} onClick={onClick}/>
        </div>
      );
    }
  }

  return (
    <div className="page">
      <Title type='link'>Mouse's RSS Feed {current == 'feed' ? 'Reader' : 'Manager'}</Title>
      {renderCurrent()}
    </div>
  );
}

export default App;

import './App.css';
import { EditOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { FloatButton, Menu } from 'antd';
import { useState } from 'react';
import TitlesList from './components/TitlesList/TitlesList.js';
import FeedManager from './components/FeedManager/FeedManager.js';

function App() {
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
      {renderCurrent()}
    </div>
  );
}

export default App;

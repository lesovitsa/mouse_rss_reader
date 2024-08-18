import './App.css';
import { EditOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import TitlesList from './components/TitlesList/TitlesList.js';

function App() {
  return (
    <div className="page">
      <TitlesList />
      <FloatButton tooltip={<div>Manage feeds</div>} type='primary' icon={<EditOutlined />} />
    </div>
  );
}

export default App;

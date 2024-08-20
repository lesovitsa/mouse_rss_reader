import { Alert, Divider } from 'antd';

const Alerter = ({ alert }) => {
    if (alert)
      return (<div>
        <Alert message="Failed to submit feed" type="error" />
        <Divider />
      </div>);
}

export default Alerter;
import React, {useState , useEffect} from 'react';
import Layout from '../../components/layout';
import InputCommon from '../../components/InputCommon/InputCommon'
import { sjn } from '../../redux/action/index'
import { useSelector } from 'react-redux';

import Result from '../../components/Result/Result';
const Sjn = (props) => {
  
  const [data, setData] = useState(null);
  const [location, setLocation] = useState('');
  const [visible,setVisible] = useState(false)
  const state = useSelector(state => state.sjn);
  const local = props.location.pathname.slice(-(props.location.pathname.length - 1) );
  useEffect(() => {
  
     setData(state)
     setLocation(local)
  }, [state,local]);

  const  showModal = () => {
    setVisible(true)
  };


  const handleOk = e => {

    setVisible(false)
  };

  const handleCancel = e => {

    setVisible(false)
  };


  return (
    <>
      <Layout>
        <h1 style={{
          textAlign : 'center'
        }}> {location.toUpperCase()} </h1>
        <br/>
        <br/>

        <InputCommon  action={sjn} showModal={showModal} process="1 2 3" burst_time="24 3 3"
        title1="Nhập vào thời gian xuất hiện từng tiến trình:"
        title2="Nhập vào thời gian chạy từng tiến trình:"
        process="0 2 4 5"
        burst_time="7 4 1 4"
        
        />
       {data ?  <Result data={data} showModal={showModal} handleOk={handleOk} handleCancel={handleCancel} visible={visible}/>  : ''}

      </Layout>
    </>
  );
}

export default Sjn;

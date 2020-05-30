import React, {useState , useEffect} from 'react';
import Layout from '../../components/layout';
import InputCommon from '../../components/InputCommon/InputCommon'
import {fcfs} from '../../redux/action'
import { useSelector } from 'react-redux';

import Result from '../../components/Result/Result';
const Fcfs = (props) => {

  const [data, setData] = useState(null);
  const [location, setLocation] = useState('');
  const [visible,setVisible] = useState(false)
  const state = useSelector(state => state.fcfs);
  const local = props.location.pathname.slice(-(props.location.pathname.length - 1) );
  console.log(data)
  useEffect(() => {
     

     setData(state)
     setLocation(local)
  }, [state,local]);
  console.log(props.location)
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
        <InputCommon  action={fcfs} showModal={showModal} process="1 2 3" burst_time="24 3 3"
                title1="Nhập vào thứ tự tiến trình, mặc định như dưới:"
                title2="Nhập vào thời gian chạy từng tiến trình:"
                process="1 2 3"
                burst_time="24 3 3"
        />
       {data ?  <Result data={data} showModal={showModal} handleOk={handleOk} handleCancel={handleCancel} visible={visible}/>  : ''}

      </Layout>
    </>
  );
}

export default Fcfs;

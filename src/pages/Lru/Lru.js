import React, {useState , useEffect} from 'react';
import Layout from '../../components/layout';
import InputCommon from '../../components/InputCommon/InputCommon'
import { lru } from '../../redux/action'
import { useSelector } from 'react-redux';

import Result from '../../components/Result/Result';

const Lru = (props) => {

  const [data, setData] = useState(null);
  const [location, setLocation] = useState('');
  const [visible,setVisible] = useState(false)
  const state = useSelector(state => state.lru);
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
        <InputCommon  action={lru} showModal={showModal} process="1 2 3" burst_time="24 3 3"
                title1="Nhập vào chuỗi truy cập bộ nhớ:"
                title2="Nhập vào số khung trang được cấp phát:"
                process="1 2 3 4 1 2 5 1 2 3 4 5"
                burst_time="3"
        />
       {data ?  <Result data={data} showModal={showModal} handleOk={handleOk} handleCancel={handleCancel} visible={visible}/>  : ''}

      </Layout>
    </>
  );
}

export default Lru;

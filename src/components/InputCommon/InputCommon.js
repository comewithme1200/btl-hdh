import React, { useState } from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';


const InputCommon = (props) => {
  
  const [process, setProcess] = useState(props.process || '');
  const [burst_time, setBurstTime] = useState(props.burst_time || '');
 
  const dispatch = useDispatch();

  const onHandClick = (process,burst_time) =>{
    dispatch(props.action(process,burst_time));
     props.showModal();
  }

  return (
    <>
     <p> {props.title1} </p>
      <Input placeholder={props.placeholderProcess} value={process} onChange={e => setProcess(e.target.value)} />
      <br />
    <br />
    <p> {props.title2} </p>
    <Input placeholder={props.placeholderTimeProcess} value={burst_time} onChange={e => setBurstTime(e.target.value)} />
    <br />
    <br />

    <br />
    <Button  danger onClick={() => onHandClick(process,burst_time)} style={{
      borderRadius: "5px",
      backgroundColor : "blue",
      color : "white"
      
    }}>
      Kết Quả
    </Button>
    <br />
    <br />
    <br />
    <br />
    </>
  );
}

export default InputCommon;

import React from 'react';
import { Button, Row } from 'antd';
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
     
   <Row justify="space-around" >
      <Button  type="primary" danger><Link to="/fcfs">FCFS</Link></Button>
      <Button  type="primary" danger><Link to="/sjn">SJN</Link></Button>
      <Button  type="primary" danger><Link to="/lru">LRU</Link></Button>
   </Row>
   
    </>
  );
}

export default Footer;

import React from 'react';
import Footer from './Footer/Footer';
import { Row, Col } from 'antd';
const layout = (props) => {
  return (
    <>

     <Row>
      <Col span={12} offset={6}>
      {props.children}
       <Footer/>
      </Col>
    </Row>
    </>
  );
}

export default layout;

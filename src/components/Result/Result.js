import React, { useState ,useEffect } from 'react';
import { Modal, Button } from 'antd';
const Result = (props ) => {
  const [data, setData] = useState(null); 
   
  useEffect(() => {
    setData(data => props.data)
    
  }, [props.data]);
  const showGantt = () =>{

    let result1 = '';
    let result2 = '0';
    let result3 = 'P1:0 ';
    let result4 = 0;
    let result5 = '';
    let result6 = 0;
      if(data.type === "FCFS"){
        for(let i = 0 ;i<data.tat.length;i++){
          result4 += data.wt[i];
          result5 += `P${i+1}:${data.burst_time[i]} `
          result6 +=  data.burst_time[i];
          if(i === 0){
            let index = Math.floor(data.tat[0] / 2) ;
            for(let j = 0;j<data.tat[0];j++){
              result1 += "-";
              result2 += "-";
              if(j ===  index){
                result1 += `P${i+1}`;
              }
              if(j === data.tat[0] -1 ){
                result2 += data.tat[0];
              }
            } 
          } else{
            result1 += " ";
            const approx = data.tat[i] - data.tat[i - 1];
            for(let j = 0;j<approx;j++){
              result1 += "-";
    
  
              let index = Math.floor(approx / 2) ;
              result2 += "-";
              if(j ===  index){
                result1 += `P${i+1}`;
              }
              if(j === approx - 1 ){
                result2 += data.tat[i];
              }
          }
              result3 += `P${i}:${data.tat[i-1]} `;
        }
      
      }
      }else if(data.type === "SJN"){
        result5 = `P1:${data.burst_time[0].value} `;
        result6 = 7;
        for(let i = 0 ;i<data.tat.length;i++){
          result4 += data.wt[i] - data.process[i];
          // result5 += `P${data.burst_time[i].index}:${data.burst_time[i].value + data.process[i]}`
      
          if(i === 0){
            let index = Math.floor(data.tat[0] / 2) ;
            for(let j = 0;j<data.tat[0];j++){
              result1 += "-";
              result2 += "-";
              if(j ===  index){
                result1 += `P${data.burst_time[i].index}`;
              }
              if(j === data.tat[0] - 1 ){
                result2 += data.tat[0] ;
              }
            } 
          } else{
            const approx = data.tat[i] - data.tat[i - 1];
            for(let j = 0;j<approx;j++){
              result1 += "-";
    
  
              let index = Math.floor(approx / 2) ;
              result2 += "--";
              
              if(j ===  index){
                result1 += `P${data.burst_time[i].index}`;
              }
              if(j === approx - 1 ){
                result2 += data.tat[i];
              }
          }
          result5 += `P${data.burst_time[i].index}:${data.tat[i-1] - data.process[i] + data.burst_time[i].value}`
              result3 += `P${data.burst_time[i].index}:${data.tat[i-1] - data.process[i]} `;
              result6 +=  data.tat[i-1] - data.process[i] + data.burst_time[i].value;
            
        }

      }  
}

      return [result1,result2,result3,result4 / data.tat.length,result5,result6 / data.tat.length];
  }

  const showModalCpu = () => {
    if(data.process.length !== 0){
      return (
        <>
        <p>{ showGantt()[0] }</p>
            <p>{ showGantt()[1] }</p>
            <p> Wait time: </p>
            <p> {showGantt()[2]} </p>
            <p>AVG: {showGantt()[3]}</p>
            <p>Save time:</p>
            <p> {showGantt()[4]}</p>
            <p>AVG: {showGantt()[5]}</p></>
      )
    }
    return ''
  }
  const showModalPanigation = () =>{  

    let result = [];
    let j = 2;
    for(let i = 0 ;i <data.process.length;i++){

        result.push(<span key={i}> { `Page ${data.process[i]} : `  } </span>)
        for(let j = 0 ; j<data.nf;j++){
          if(data.error[i]==="No page fault"){
            result.push(<span> No page fault </span>)
            break;
          }else{
            result.push(<span key={`p+${i}`}> { data.error[i][j]  } </span>)
          }
        }
        result.push(<p></p>)

      }
  return <> {result}  
  <p>Total no of page faults: {data.pgfaultcnt} </p>
  </>;
  }
  console.log(data)
  return (
    <>
       {data!==null ?       
           (data.type=== "LRU" ?showModalPanigation(): showModalCpu()  )
        : ''}
    </>
  );
}

export default React.memo(Result);

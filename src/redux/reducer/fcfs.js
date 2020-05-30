import { FCFS } from '../../ActionType/ActionType'

const initialState = {
    wt : [],
    tat : [],
    total_wt : 0,
    total_tat :0,
    process : '',
    burst_time : ''
}

const findWaitingTime = (processes,n,bt, wt) => { 
// waiting time for first process is 0  
      wt[0] = 0; 

// calculating waiting time  
      for (let i = 1; i < n; i++) { 
      wt[i] = bt[i - 1] + wt[i - 1]; 
} 
}

const findTurnAroundTime =(processes, n, bt,  wt, tat) =>{ 
for (let i = 0; i < n; i++) { 
  tat[i] = bt[i] + wt[i]; 
} 
} 


const reducer = (state = initialState, action) =>{

  switch (action.type) {
    case FCFS:
      let { process, burst_time } = action.payload;
       process = process.split(" ");
       burst_time = burst_time.split(" ");
       for(let i = 0 ;i < process.length  ;i++){
        process[i] = parseInt(process[i])
        burst_time[i] = parseInt(burst_time[i])
       }

       for(let j = 0 ;j < process.length -1 ;j++){
        for(let k = 0 ;k < process.length - j-1 ;k++){
          if(process[k] > process[ k + 1]){
            let tem = process[k];
            process[k] = process[k + 1];
            process[k + 1] = tem;
            let temp = burst_time[k]; 
            burst_time[k] = burst_time[k+1]; 
            burst_time[k+1] = temp; 
          }
        }
      }

       findWaitingTime(process,process.length,burst_time, state.wt);
       findTurnAroundTime(process, process.length, burst_time,  state.wt, state.tat);
       for (let i = 0; i < process.length; i++) { 
        state.total_wt += state.wt[i]; 
        state.total_tat += state.tat[i]; 
       }
      return{
        ...state,
        process ,
        burst_time,
        type : FCFS
      }
  
    default:
      return {
        ...state
      }
  }

}

export default reducer;
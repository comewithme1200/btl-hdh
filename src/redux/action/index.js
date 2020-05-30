import * as actionType from '../../ActionType/ActionType';


export const fcfs = (process, burst_time) =>{
  return{
    type : actionType.FCFS,
    payload :{
      process ,
      burst_time
    }
  }
}
export const sjn = (process, burst_time) =>{
  return{
    type : actionType.SJN,
    payload :{
      process ,
      burst_time
    }
  }
}


export const lru = (process, frames) =>{
  return{
    type : actionType.LRU,
    payload :{
      process ,
      frames,
    }
  }
}
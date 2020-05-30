import {  LRU } from '../../ActionType/ActionType'

const initialState = {
    wt : [],
    tat : [],
    total_wt : 0,
    total_tat :0,
    process : [],
    p : [],
    pgfaultcnt : 0,
    hit : 0,
    error : [],
    k : 0,
    nf : 0

}

const initialize = (pgfaultcnt,p,nf) =>{
    pgfaultcnt=0;    // bat dau tu trang ban dau
    for(let i=0; i<nf; i++)  //khoi tao tat ca cac vi tri trang deu trong
        p[i]=10000;
}

const dispPages = (p,error,nf) =>{
  let arr = [];
    for (let k=0; k<nf; k++)
    {
       if(p[k] !== 10000){
         arr.push(p[k]);
       }
    }

    if(arr.length < nf){
      for(let i = arr.length ;i < nf ;i++){
        arr.push(" ");
      }
    }
    error.push([...arr])

}



const isHit = (data,hit,p,nf) =>{
    hit=0;
    for(let j=0; j<nf; j++)
    {
        if(p[j]===data)    
        {
            hit=1;   // danh dau cac vi tri da co trong bo nho
            break;            
        }
 
    }
    return hit;
}
const reducer = (state = initialState, action) =>{

  switch (action.type) {
  

      case LRU:{
        let { process, frames } = action.payload;
        process = process.split(" ");
        frames = parseInt(frames);
        for(let i = 0 ;i < process.length  ;i++){
         process[i] = parseInt(process[i])
        }
        let p = [];
        let pgfaultcnt = 0;
        let hit = 0;
        let error = [];
        let k = 0;

        initialize(pgfaultcnt,p,frames);
 
    let least = [];
    for(let i=0; i< process.length; i++)
    {
 
 
        if(isHit(process[i],hit,p,frames)===0)
        {
 
            for(let j=0; j<frames; j++)
            {
                let pg=p[j];
                let found=0;
                for(let k=i-1; k>=0; k--)
                {
                    if(pg===process[k])
                    {
                        least[j]=k;
                        found=1;
                        break;
                    }
                    else
                        found=0;
                }
                if(!found)
                    least[j]=-9999;
            }
            let min=9999;    // chi so toi thieu
            let repindex;
            for(let j=0; j<frames; j++)
            {
                if(least[j]<min)
                {
                    min=least[j];    // thay the bang chi so toi thieu
                    repindex=j;
                }
            }
            p[repindex]=process[i];  // thay the trang tim thay bang trang hien tai
            pgfaultcnt++;
 
            dispPages(p,error,frames);
              }
              else
                  error.push("No page fault")
    }


        return{
          ...state,
          process : process,
          error ,
          pgfaultcnt ,
          nf :  frames,
          type : LRU
        }
      }
         
  
    default:
      return {
        ...state
      }
  }

}
export default reducer;
import React from 'react';
import {Tabs, Tab} from '@mui/material'
interface Props{

}
const SwitchTab=(props:Props)=> {
    const [value,setValue]= React.useState(0)
    const handleTabs=(e:React.SyntheticEvent<Element, Event> , val: number)=>{
        console.log(val)
        setValue(val)
        }
    return (
        <div style={{zIndex:-1}}> 
    <Tabs value={value} onChange={handleTabs} style={{marginLeft:"15%",color:'green'}}>
      <Tab  label="Currently reading" style={{textTransform:"none",width:"304px",fontWeight:700,fontSize:18,textAlign:'left'}}/>
      <Tab  label="Finished" style={{textTransform:"none",width:"304px",fontWeight:700,fontSize:18}}/>
    </Tabs>
         </div>
    );
}

export default SwitchTab;
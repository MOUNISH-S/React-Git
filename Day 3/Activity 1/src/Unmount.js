import React,{useState} from 'react'
import LifeCycle from './LifeCycle'

 function Unmount() {
    const [mount,setMount]=useState(true)
  return (
    <div>
      <button onClick={()=>setMount(!mount)}>Toggle</button>
      {mount?<LifeCycle/>:''}
    </div>
  )
}
export default Unmount

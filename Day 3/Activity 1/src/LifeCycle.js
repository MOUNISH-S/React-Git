import React,{useEffect,useState} from 'react'

function LifeCycle() {
    const[x,setX]=useState(0);
    const[y,setY]=useState(0);
    const logMouseMovement=(event)=>{
        console.log('Mouse is moving')
        setX(event.clientX)
        setY(event.clientY)
    }
    useEffect(()=>{
        window.addEventListener('mousemove',logMouseMovement)
        return()=>{
            window.removeEventListener('mousemove',logMouseMovement)
        }
    })
  return (
    <div>
      X-{x}  y-{y}
    </div>
  )
}
export default LifeCycle
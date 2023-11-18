import {useState} from "react";
const Boxcolor = () => {
    const [data,setdata]=(useState('green'))
    const handleColor = () =>{
        data==='green' ? setdata('red') : setdata('green')
    }
    return (
        <>
        <div style={{display: "grid",justifyContent: "center",alignItems: "center",borderRadius:"200px",padding:"320px",backgroundColor: "grey"}}>

         <div style={{width:"150px",height:"150px",backgroundColor:`${data}`,borderRadius:"80px"}}>
        </div>
            <button onClick={handleColor}>Change</button>
        </div>
        </>
    )
} 
export default Boxcolor;
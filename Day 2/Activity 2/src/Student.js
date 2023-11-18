import React from "react";
const Student = (props)=> {
    return(
        <div style={{display:'flex',justifyContent:'center',alignItems:'center', height:'100vh'}}>
        <table border="5px" cellSpacing="0px" style={{width:'50vw',height:'40vh', textAlign:'center', fontSize:'18px'}}>
            <tbody>
                <tr>
                    <th>Name</th>
                    <td>{props.name}</td>
                </tr>
                <tr>
                    <th>Reg No</th>
                    <td>{props.roll}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{props.email}</td>
                </tr>
                <tr>
                    <th>Mobile</th>
                    <td>{props.mob}</td>
                </tr>
                <tr>
                    <th>Department</th>
                    <td>{props.dept}</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}
export default Student;
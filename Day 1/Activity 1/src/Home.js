import './Assests/style1.css';
export const Home=()=>{
    return(
        <body>
                 <form className="my">
                    <h1 style={{color:'orange'}}>Registeration Form</h1>
                 <input type="text" placeholder="name" className="m"></input><br/>
                 <input type="text" placeholder="UserName" className="m"></input><br/>
                 <input type="password" placeholder="password" className="m"></input><br/>
                 <input type="email" placeholder="Email" className="m"></input><br/>
                 <button type="submit" className="mine">Register</button><br/>
             </form>
         </body>
    )
}
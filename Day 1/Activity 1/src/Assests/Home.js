import './Assests/Component/style1.css';
export const Home=()=>{
    return(
        <body style={{backgroundColor:'blue'}}>
            <div class="my">
               <div>
                <input type="text" placeholder="name"></input>
               </div>
               <div>
                <input type="text" placeholder="UserName"></input>
               </div>
               <div>
                <input type="password" placeholder="password"></input>
               </div>
               <div>
                <input type="email" placeholder="Email"></input>
               </div>
            </div>
        </body>
    )
}
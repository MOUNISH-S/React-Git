import './Assests/style.css';
export  const App= () =>{
  return(
    <>
    <form action="https://attacomsian.com/blog/javascript-add-multiple-css-styles" target="blank">
    <h1>Registeration Form</h1>
    <br/>
      <table>
        <tr>
      <td>UName</td>
      <td><input type = 'text' class="cen"></input></td>
      </tr>
        <tr>
      <td>Password</td>
      <td><input type = 'password' class="cen"></input></td>
      </tr>
        <tr>
      <td>Email</td>
      <td><input type = 'email' class="cen"></input></td>
      </tr>
      <tr>
        <td>PhoneNumber</td>
        <td><input type="number" class="cen"></input></td>
      </tr>
       </table>
      <input type="submit" value="register" style={{width:'300px',height:'30px'}}></input>
       <input type="reset"></input>
    </form>
    <h1>WELCOME</h1>
    </>
  )
}
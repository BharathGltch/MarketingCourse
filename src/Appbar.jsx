import {Button,Typography} from "@mui/material";
import { useEffect,useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


function Appbar(){
  const navigate=useNavigate();
  const [userName,setuserName]=useState(null);
  useEffect(()=>{
    fetch("http://localhost:3000/admin/me",{
      method:"GET",
      headers:{
          "authorization":"Bearer "+localStorage.getItem("token")
      }
  }).then((obj)=>{obj.json().then((data)=>{ 
      if(data.username)
      setuserName(data.username)})});
  },[]);



   if(userName){
    return(
      <>
      <div style={{display:"flex",justifyContent:'space-between',alignContent:'space-between'}}>
          <Typography variant="h6">
            Log2Base2
          </Typography>
          <div style={{display:'flex'}}>
            <Typography variant="h6">{userName}</Typography>
            <Button variant="contained" style={{marginRight:'5px'}} onClick={()=>{
              localStorage.removeItem('token');
              window.location="/";
            }}>Logout</Button>
          </div>
      </div>
      </>
    )
   }

return(
    <>
     <div style={{display:"flex",justifyContent:"space-between"}}>
          <div>
           <Typography variant="h6">
            Log2Base2
           </Typography>
          </div>

          <div style={{display:"flex"}}>
            <Button variant="contained" style={{marginRight:"5px"}} onClick={()=>{navigate("/signin")}}>Sign In</Button>
            <Button variant="contained" onClick={()=>{navigate("/signup")}}>Sign Up</Button>
          </div>
     </div>
    </>
)
}

export default Appbar;
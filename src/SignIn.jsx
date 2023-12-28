import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function SignIn(){

    const [userName,setUserName]=useState();
    const [password,setPassword]=useState();
    return(
        <>
        <div style={{display:'flex',justifyContent:'center',alignContent:'center'}}>
            <Card variant="outlined" style={{marginTop:'100px',padding:'20px'}}>
            <TextField variant="outlined" type={"text"} onChange={(e)=>{setUserName(e.target.value)}} label="Username" fullWidth="true"></TextField>
            <TextField variant="outlined" type={"password"} onChange={(e)=>{setPassword(e.target.value)}} label="Password" fullWidth="true" style={{marginTop:"10px"}}></TextField>
            <div style={{display:'flex',justifyContent:'center',alignContent:'center',marginTop:'10px'}}>
            <Button variant="contained" size="large" onClick={()=>{
                    function callback1(response){
                        console.log(response.data);
                        localStorage.setItem('token',response.data.token);
                        window.location="/";
                    }

                 axios.post("http://localhost:3000/admin/signin",{
                     username:userName,
                     password:password
                 }).then(callback1);
              }}>SignIN</Button>
            </div>
            </Card>
        </div>
        </>
    )
}

export default SignIn;
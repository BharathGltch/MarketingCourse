import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Typography } from "@mui/material";


function Course(){
    let {courseId}=useParams();

    const [courses,setCourses]=useState("Whaar");


    useEffect(()=>{
        function callback2(data){
            setCourses(data.Courses);
        }

        function callback1(res){
            res.json().then(callback2);
        }

         fetch("http://localhost:3000/admin/courses",{
            method:"GET",
            headers:{
                "authorization":"bearer "+localStorage.getItem('token')
            }
         }).then(callback1);

        },[]);

        console.log(courses);
        

     let course=null;
     for(let i=0;i<courses.length;i++){
        console.log(courses[i]);
         if(courses[i].courseID==courseId){
             course=courses[i];
             break;
         }
     }
    console.log(course);
 
    return(
        <div>
          {JSON.stringify(course)}
        </div>
    )
}


function CourseCard(props){
   return(
    <Card style={{marginTop:"10px",minHeight:"300px"}}>
        <Typography variant="h6">{props.courseName}</Typography>
        <Typography variant="h6">{props.courseDescription}</Typography>
        <img src={props.courseImage} alt="Image not found" style={{width:"300px"}}/>
    </Card>
   )
}


export default Course;
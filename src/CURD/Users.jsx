import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import style from "./Home.module.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Users = () => {
  let[data,setData]=useState([])

  // let navigate = useNavigate()

  useEffect(()=>{
    axios.get("http://localhost:3000/employees")
  .then((response)=>{setData(response.data);})
  .catch(()=>{console.log("ERROR IN FETCHING THE DATA");})
  },[])

  let deleteuser=(id)=>{
    axios.delete(`http://localhost:3000/employees/${id}`)
    window.location.assign("/users")
    // navigate("/users")
  }
  return (
    <div id={style.userspage} >
      {data.map((x)=>{
        return(
          <div>
             <table>
              <tr>
                <th colSpan="2"> EMPLOYEE {x.id}</th>
              </tr>
              <tr>
                <td>NAME</td>
                <td>:{x.empName}</td>
              </tr>
              <tr>
                <td>SALARY</td>
                <td>:{x.empSalary}</td>
              </tr>
              <tr>
                <td>COMPANY</td>
                <td>:{x.empCompany}</td>
              </tr>
              <tr>
                {/* <td><button><Link to={/edit/${x.id}}></Link></button></td> */}
                <td><button><Link to={`/edit/${x.id}`}>Edit</Link></button></td> 
                <td><button onClick={()=>{deleteuser(x.id)}}>DELETE</button></td>
              </tr>
             </table>
          </div>
        )
      })}
    </div>
  )
}

export default Users
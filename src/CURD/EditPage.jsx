import React, { useEffect, useState } from 'react'
import style from "./Home.module.css"
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditPage = () => {
  let[name,setName]=useState("")
  let[salary,setSalary]=useState("")
  let[company,setCompany]=useState("")

  let navigate=useNavigate()

  let obj = useParams()
  console.log(obj);

  useEffect(()=>{
    axios.get(`http://localhost:3000/employees/${obj.id}`)
    .then((response)=>{
      setName(response.data.empName);
      setSalary(response.data.empSalary);
      setCompany(response.data.empCompany)
    })
    .catch(()=>{console.log("ERROR");})
  },[])
  

  let getName=(e)=>{
    setName(e.target.value)
  }

  let getSalary=(e)=>{
    setSalary(e.target.value)
  }

  let getCompany=(e)=>{
    setCompany(e.target.value)
  }

  let formHandle=(e)=>{
    e.preventDefault()
    let payload = {
      empName:name,
      empSalary:salary,
      empCompany:company
    }
    axios.put(`http://localhost:3000/employees/${obj.id}`,payload)
    .then(()=>{console.log("DATA UPDATED");})
    .catch(()=>{console.log("ERROR");})

    navigate("/users")
  }
  return (
    <section id={style.myForm}>
      <form action="">
        <h1>Edit user</h1>
        <label htmlFor="">NAME:</label>
        <input type="text"  value={name} onChange={getName}/>
        <label htmlFor="">SALARY:</label>
        <input type="text" value={salary} onChange={getSalary}/>
        <label htmlFor="">COMPANY:</label>
        <input type="text" value={company} onChange={getCompany}/> 

        <button onClick={formHandle}>SUBMIT</button>
      </form>
    </section>
  )
}

export default EditPage
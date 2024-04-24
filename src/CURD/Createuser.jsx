import React, { useState } from 'react'
import style from "./Home.module.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Createuser = () => {
  let[name,setName]=useState('')
  let[salary,setSalary]=useState()
  let[company,setCompany]=useState('')

  let navitage = useNavigate()

  // let[salary,setSalary]=useState()

  let nameData=(e)=>{
    setName(e.target.value)
  }
  let salData=(e)=>{
    setSalary(e.target.value)
  }
  let comData=(e)=>{
    setCompany(e.target.value)
  }

  let click=(e)=>{
    e.preventDefault()
    
    let payload={
      empName:name,
      empSalary:salary,
      empCompany:company
    }
    axios.post("http://localhost:3000/employees",payload)
    .then(()=>{console.log("DATA SENT");})
    .catch(()=>{console.log("ERROR");})
    // console.log(name,salary,company);

    navitage("/users")

  }
  return (
    <section id={style.myForm}>
      <form action="">
        <h1>Create user</h1>
        <label htmlFor="">NAME:</label>
        <input type="text" value={name} onChange={nameData}/>
        <label htmlFor="">SALARY:</label>
        <input type="text" value={salary} onChange={salData}/>
        <label htmlFor="">COMPANY:</label>
        <input type="text" value={company} onChange={comData}/> 

        <button onClick={click}>SUBMIT</button>
      </form>
    </section>
  )
}

export default Createuser
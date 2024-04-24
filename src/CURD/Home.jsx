import React from 'react'
import style from "./Home.module.css"
import { Link } from "react-router-dom"

const Home = () => {
    return (
    <section id={style.nav}>
        {/* <Link to="/Createuser">CREATE-USER</Link> */}
        <Link to="/">CREATE-USER</Link>
        <Link to="/Users">USERS</Link> 
    </section>

  )
}

export default Home


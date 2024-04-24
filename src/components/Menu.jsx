import React from 'react'
import style from "./FindCoder.module.css"
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div id={style.menublock}>
      <ol>
        <li><Link to="/explore">Explore work</Link></li>
        <li><Link to="/hire">Hire Talents</Link></li>
        <li><Link to="/dev">Dev Board</Link></li>
        <li><Link to="/challange">Challenges</Link></li>
      </ol>
    </div>
  )
}

export default Menu
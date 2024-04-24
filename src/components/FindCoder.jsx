import React from 'react'
import style from "./FindCoder.module.css"
import Logo from './Logo'
import Menu from './Menu'
import Btn from './Btn'
import Content from './Content'
import Heading from './Heading'

const FindCoder = () => {
    return (
        <div>
        <section id={style.nav}>
            <article>
                <div className={style.Logo}>
                    <Logo />
                </div>
                <div className={style.Menu}>
                    <Menu />
                </div>
                <div className={style.Btn}>
                    <Btn />
                </div>
            </article>
        </section>
        {/* <section id={style.body}>
            <article>
                <div className={style.heading}>
                   <Heading/>
                </div>
                <div className={style.content}>
                   <Content/>
                </div>
                <div>

                </div>
            </article>
            
        </section> */}
        <section>
            <article>
                
            </article>
        </section>
        </div>
        
    )
}
export default FindCoder
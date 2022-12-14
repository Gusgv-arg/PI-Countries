
import React from "react"
import {NavLink} from "react-router-dom"
import style from "../NavBar/navBar.module.css"

function NavBar (){
    return (
        <div className={style.nav}>
            <div className={style.comp}>
                <NavLink to="/createactivity" className={style.navlink}>
                    <p>Create Activity</p>
                </NavLink>
            </div>
            <div className={style.comp}>
                <NavLink to="/home" className={style.navlink}>
                    <p>Home</p>
                </NavLink>
            </div>
            <div className={style.comp}>
                <NavLink to="/" className={style.navlink}>
                    <p>Landing</p>
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar
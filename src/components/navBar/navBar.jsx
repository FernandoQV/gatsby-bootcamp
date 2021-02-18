import { Link } from 'gatsby'
import React from 'react'
import navBarStyle from './navBar.module.scss'
const links=['home','about','blog','contact']
const NavBar = () => {
    return (
        <div className={navBarStyle.container}>
            {
                links.map((link,index)=>(
                    <Link key={index} activeClassName={navBarStyle.linkActive} className={navBarStyle.linkPage} to={link==='home'?'/':`/${link}`}>{link.toUpperCase()}</Link>
                ))
            }
        </div>
    )
}

export default NavBar

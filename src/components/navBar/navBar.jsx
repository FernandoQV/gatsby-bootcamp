import { Link } from 'gatsby'
import React from 'react'
import linkStyle from './navBar.module.scss'
const links=['home','about','blog','contact']
const NavBar = () => {
    return (
        <div style={{display:'flex',
        justifyContent:'space-around'}}>
            {
                links.map(link=>(
                    <Link activeClassName={linkStyle.linkActive} className={linkStyle.linkPage} to={link==='home'?'/':`/${link}`}>{link.toUpperCase()}</Link>
                ))
            }
        </div>
    )
}

export default NavBar

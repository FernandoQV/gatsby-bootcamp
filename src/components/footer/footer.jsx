import { useStaticQuery,graphql } from 'gatsby'
import React from 'react'
import styleFooter from './style.module.scss'
const Footer = () => {
        const data=useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    author
                }
            }
        }
        `)
    return (
        <div className={styleFooter.footer}>
            <p>{new Date().getFullYear()} - Created by {data.site.siteMetadata.author} | Copyrigth</p>            
        </div>
    )
}

export default Footer

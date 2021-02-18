import { useStaticQuery,graphql } from 'gatsby'
import React from 'react'

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
        <div>
            <p>{new Date().getFullYear()} - Created by {data.site.siteMetadata.author} | Copyrigth</p>            
        </div>
    )
}

export default Footer

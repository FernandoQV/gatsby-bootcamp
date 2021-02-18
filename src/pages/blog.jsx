import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPage = () => {

    const data=useStaticQuery(graphql`
    query{
        allMarkdownRemark{
            edges{
              node{
                  frontmatter{
                  title
                  date(formatString: "DD-MMM-yyyy" )
                }
                html
                excerpt
              }
            }
          }
    }
    `)
    const {edges}=data.allMarkdownRemark
    
    return (
        
        <Layout>
            <SEO title={'Blog Bootcamp'}/>
        <div>
            <h1>Pagina de Blog que se creara con los contenidos de contenful,segun este bootcamp</h1>
            <p>Post dinamicos, tomaran como modelo el templade de blog que estara en la carpeta templades</p>
        </div>
        {
            edges.map((edge,index)=>(
                <div key={index}>
                    <h2>{edge.node.frontmatter.title}</h2>
                    <p>{edge.node.frontmatter.date}</p>
                </div>
            ))
        }
        </Layout>
    )
}

export default BlogPage

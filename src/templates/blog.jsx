import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
//el props devuelve odas las propiedades del archivo donde se encuentra lo exportado en query => que es un data, para comprobar hacer console.log(props)
const BlogTemplate = ({data}) => {
  
    return (
    <Layout>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <p>{data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{__html:data.markdownRemark.html}}>

      </div>
    </Layout>
  )
}

export default BlogTemplate

import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPage = () => {
    return (
        
        <Layout>
            <SEO title={'Blog Bootcamp'}/>
        <div>
            <h1>Pagina de Blog que se creara con los contenidos de contenful,segun este bootcamp</h1>
            <p>Post dinamicos, tomaran como modelo el templade de blog que estara en la carpeta templades</p>
        </div>
        </Layout>
    )
}

export default BlogPage

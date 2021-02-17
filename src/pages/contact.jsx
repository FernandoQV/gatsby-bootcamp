import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'

const contact = () => {
    return (
        <Layout>

        <div>
            <h1>Contact del Bootcamp</h1>
            <span>Dev </span><Link to={'/'}>Fernando QuiVer</Link>
        </div>
        </Layout>
    )
}

export default contact

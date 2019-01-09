import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const launchStyle = {
  border: '1px solid lightgray',
  padding: '12px',
  marginBottom: '12px',
  display: 'flex',
  justifyContent: 'space-between',
}

const renderLaunches = edges => {
  return edges.map(edge => {
    return (
      <div key={edge.node.id} style={launchStyle}>
        <h4>{edge.node.mission_name}</h4>
        <p>{edge.node.launch_date_utc}</p>
        {edge.node.links && (
          <img
            src={edge.node.links.mission_patch}
            alt="patch"
            style={{ maxWidth: '60px', alignSelf: 'center' }}
          />
        )}
      </div>
    )
  })
}

const SecondPage = data => {
  const { edges } = data.data.allInternalLaunches
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
      {renderLaunches(edges)}
    </Layout>
  )
}

export const query = graphql`
  {
    allInternalLaunches {
      edges {
        node {
          id
          mission_name
          launch_date_utc
          links {
            mission_patch
          }
        }
      }
    }
  }
`

export default SecondPage

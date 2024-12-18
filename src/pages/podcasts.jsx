import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout } from '@/components/layout'
import { Page } from '@/components/page'
import { Sidebar } from '@/components/sidebar'
import { Meta } from '@/components/meta'
import * as styles from '@/components/feed/feed.module.scss'

const PostItem = ({ node }) => {
    const { title, date, category, description, slug, audio, attachments } = node.frontmatter
    const { categorySlug } = node.fields

    return (
        <div className={styles.item}>
            <div className={styles.meta}>
                <time
                    className={styles.time}
                    dateTime={new Date(date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                >
                    {new Date(date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long'
                    })}
                </time>
                <span className={styles.divider} />
                <span className={styles.category}>
                    <Link to={categorySlug} className={styles.link}>
                        {category}
                    </Link>
                </span>
            </div>
            <h2 className={styles.title}>
                <Link className={styles.link} to={slug}>
                    {title}
                </Link>
            </h2>
            <p className={styles.description}>{description}</p>
            {audio && attachments && attachments[0] && (
                <div className={styles.audio}>
                    <audio controls>
                        <source src={attachments[0].publicURL} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            )}
            <Link className={styles.more} to={slug}>
                Read More
            </Link>
        </div>
    )
}

const PodcastsRoute = ({ data }) => {
    const { title, description } = data.site.siteMetadata
    const { edges } = data.allMarkdownRemark

    return (
        <Layout>
            <Sidebar />
            <Page title="Podcasts">
                <div className={styles.feed}>
                    {edges.map(edge => (
                        <PostItem key={edge.node.fields.slug} node={edge.node} />
                    ))}
                </div>
            </Page>
            <Meta title={`Podcasts - ${title}`} description={description} />
        </Layout>
    )
}

export default PodcastsRoute

export const pageQuery = graphql`
  query IndexQueryPod {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: { 
        frontmatter: { 
          template: { eq: "post" }, 
          draft: { ne: true }, 
          audio: { eq: true } 
        } 
      }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
            audio
            slug
            attachments {
              publicURL
            }
          }
        }
      }
    }
  }
` 
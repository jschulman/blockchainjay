exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
    type Site {
      siteMetadata: SiteMetadata!
    }
    type SiteMetadata {
      title: String!
      description: String!
      author: Author!
    }
    type Author {
      name: String!
    }
  `
    createTypes(typeDefs)
} 
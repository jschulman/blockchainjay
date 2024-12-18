module.exports = {
    siteMetadata: {
        title: 'Your Site Title',
        description: 'Your site description',
        author: {
            name: 'Your Name'
        }
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/content/posts`,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-copy-linked-files',
                        options: {
                            destinationDir: 'static',
                        },
                    },
                ],
            },
        },
    ],
} 
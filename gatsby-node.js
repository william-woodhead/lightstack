const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const homeEntry = path.resolve("src/templates/Home.tsx");
    const blogPostEntry = path.resolve("src/templates/BlogPost.tsx");

    resolve(
      graphql(
        `
          {
            storyblokEntry(name: { eq: "Home" }) {
              name
              content
            }
            allStoryblokEntry(filter: { field_component: { eq: "blogPost" } }) {
              edges {
                node {
                  full_slug
                  name
                  content
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // create blog posts
        const blogPosts = result.data.allStoryblokEntry.edges;
        blogPosts.forEach(blogPost => {
          createPage({
            path: `/${blogPost.node.full_slug}`,
            component: blogPostEntry,
            context: {
              blogPost: blogPost.node
            }
          });
        });

        // create home page
        createPage({
          path: `/`,
          component: homeEntry,
          context: {
            home: result.data.storyblokEntry,
            blogPosts: blogPosts.map(post => post.node)
          }
        });
      })
    );
  });
};

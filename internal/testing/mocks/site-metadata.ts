import author from "./author";
import menu from "./menu";

export default {
  site: {
    siteMetadata: {
      title: "Writings by Jay Schulman",
      url: "https://blockchainjay.org",
      description: "A blog about blockchain technology, DeFi, and the future of finance.",
      copyright: "© 2024 Jay Schulman. All rights reserved.",
      feedLimit: 4,
      author,
      menu,
    },
  },
};

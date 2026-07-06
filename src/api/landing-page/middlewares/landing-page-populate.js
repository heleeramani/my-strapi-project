"use strict";

/**
 * `landing-page-populate` middleware
 */
const populate = {
  blocks: {
    on: {
      "blocks.hero": {
        populate: {
          links: true,
          image: {
            fields: ["alternativeText", "url"],
          },
        },
      },
      "blocks.section-heading": true,
      "blocks.card-grid": {
        populate: {
          cards: true,
        },
      },
    },
  },
};
module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In landing-page-populate middleware.");
    ctx.query.populate = populate;
    await next();
  };
};

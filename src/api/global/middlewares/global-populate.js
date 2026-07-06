"use strict";

/**
 * `global-populate` middleware
 */

const populate = {
  "populate": {
    "banner": {
      "populate": {
        "link": true
      }
    },
    "header": {
      "populate": {
        "logo": {
          "populate": {
            "image": {
              "fields": ["alternativeText", "url"]
            }
          }
        },
        "navItems": true,
        "cta": true
      }
    },
    "footer": {
      "populate": {
        "logo": {
          "populate": {
            "image": {
              "fields": ["alternativeText", "url"]
            }
          }
        },
        "navItems": true,
        "socialLinks": {
          "populate": {
            "image": {
              "fields": ["alternativeText", "url"]
            }
          }
        }
      }
    }
  }
}


module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    // console.log(ctx.query);
    console.dir(ctx.query, { depth: null });

    // ctx.query.populate = populate
    ctx.query.populate = populate.populate;


    // console.log(populate, "populate");
    

    strapi.log.info("In global-populate middleware.");

    await next();
  };
};

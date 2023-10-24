'use strict';

/**
 * test controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::test.test', ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;

      const entity = await strapi.db.query('api::test.test').findOne({
        where: { slug: id },
        populate: ['questions']
      });
      const sanitizedResults = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedResults);
    }
}));
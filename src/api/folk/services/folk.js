'use strict';

/**
 * folk service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::folk.folk');

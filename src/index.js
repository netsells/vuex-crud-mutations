/* eslint-disable valid-jsdoc */
'use strict';
import helpers from './helpers';

/**
 * Return CRUD mutations object
 *
 * @param {String} entity
 * @returns {Object}
 */
export default (entity) => {
    const { singular, plural } = helpers(entity);

    return {
        /**
         * Create a new item
         *
         * @param {Object} state
         * @param {object} data
         */
        [singular('add')](state, data) {
            state[plural()].push(data);
        },

        /**
         * Replace the entire dataset
         *
         * @param {Object} state
         * @param {object} data
         */
        [plural('set')](state, data) {
            state[plural()] = data;
        },

        /**
         * Update a single item in our data
         *
         * @param {Object} state
         * @param {object} data
         */
        [singular('update')](state, data) {
            const existingEntity = state[plural()].find(({ id }) => id === data.id);

            Object.assign(existingEntity, data);
        },

        /**
         * Delete an item via id
         *
         * @param {Object} state
         * @param {object} entityId
         */
        [singular('delete')](state, entityId) {
            const existingEntityIndex = state[plural()].findIndex(({ id }) => id === entityId);

            state[plural()].splice(existingEntityIndex, 1);
        },
    };
}

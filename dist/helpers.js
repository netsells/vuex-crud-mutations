"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

/**
 * Return exports for the provided entity
 *
 * @param {String} entity
 * @returns {{singularEntity: string, pluralEntity: string, singular: singular, plural: plural}}
 */
exports.default = function (entity) {
    var singularEntity = entity.charAt(0).toUpperCase() + entity.slice(1);
    var pluralEntity = singularEntity + "s";

    /**
     * Generate a singular entity action
     *
     * @param {String} action
     * @returns {String}
     */
    var singular = function singular() {
        var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (!action) {
            return entity;
        }
        return "" + action + singularEntity;
    };

    /**
     * Generate a plural entity action
     *
     * @param {String} action
     * @returns {String}
     */
    var plural = function plural() {
        var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (!action) {
            return entity + "s";
        }
        return "" + action + pluralEntity;
    };

    return {
        singularEntity: singularEntity,
        pluralEntity: pluralEntity,
        singular: singular,
        plural: plural
    };
};
/**
 * Return exports for the provided entity
 *
 * @param {String} entity
 * @returns {{singularEntity: string, pluralEntity: string, singular: singular, plural: plural}}
 */
module.exports = (entity) => {
    const singularEntity = entity.charAt(0).toUpperCase() + entity.slice(1);
    const pluralEntity = `${singularEntity}s`;

    /**
     * Generate a singular entity action
     *
     * @param {String} action
     * @returns {String}
     */
    const singular = (action = null) => {
        if (!action) {
            return entity;
        }
        return `${action}${singularEntity}`;
    };

    /**
     * Generate a plural entity action
     *
     * @param {String} action
     * @returns {String}
     */
    const plural = (action = null) => {
        if (!action) {
            return `${entity}s`;
        }
        return `${action}${pluralEntity}`;
    };

    return {
        singularEntity,
        pluralEntity,
        singular,
        plural,
    }
};

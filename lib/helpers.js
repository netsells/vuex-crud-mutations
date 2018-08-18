module.exports = (entity) => {
    const singularEntity = entity.charAt(0).toUpperCase() + entity.slice(1);
    const pluralEntity = `${singularEntity}s`;

    const singular = (action = null) => {
        if (!action) {
            return entity;
        }
        return `${action}${singularEntity}`;
    };

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

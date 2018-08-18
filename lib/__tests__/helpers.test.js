/* eslint-disable no-undef */
const {
    singularEntity,
    pluralEntity,
    singular,
    plural,
} = require('../helpers')('user');

describe('helpers', () => {

    test('returns correct singular entity name', () => {
        expect(singularEntity).toBe('User');
    });

    test('returns correct plural entity name', () => {
        expect(pluralEntity).toBe('Users');
    });

    test('returns correct entity actions', () => {
        expect(plural('set')).toBe('setUsers');
        expect(singular('add')).toBe('addUser');
        expect(singular('update')).toBe('updateUser');
        expect(singular('delete')).toBe('deleteUser');
    });

});

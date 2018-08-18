/* eslint-disable no-undef */
const store = require('./store');

describe('vuexCrudMutations', () => {

    beforeEach(() => {
        store.commit('setUsers', [
            {
                id: 1,
                first_name: 'Sam',
                last_name: 'Turrel',
            },
            {
                id: 2,
                first_name: 'Rebecca',
                last_name: 'Anderton',
            },
            {
                id: 3,
                first_name: 'Rowan',
                last_name: 'Collins',
            },
        ]);
    });

    test('replaces the data', () => {
        store.commit('setUsers', [
            {
                id: 1,
                first_name: 'Brannan',
                last_name: 'Coady',
            },
        ]);

        expect(store.state.users.length).toBe(1);
        expect(store.state.users[0].first_name).toBe('Brannan');
    });

    test('adds a new item', () => {
        store.commit('addUser', {
            id: 4,
            first_name: 'Brannan',
            last_name: 'Coady',
        });

        expect(JSON.stringify(store.state.users)).toContain(JSON.stringify({
            id: 4,
            first_name: 'Brannan',
            last_name: 'Coady',
        }));
    });

    test('updates an existing item', () => {
        store.commit('updateUser', {
            id: 1,
            first_name: 'Sam',
            last_name: 'Turrell',
        });

        expect(store.state.users[0].last_name).toBe('Turrell');
    });

    test('deletes an existing item', () => {
        store.commit('deleteUser', 3);

        expect(store.state.users).not.toContain({
            id: 3,
            first_name: 'Rowan',
            last_name: 'Collins',
        });
    });

});

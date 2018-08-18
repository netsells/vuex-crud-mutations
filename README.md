# Vuex Crud Mutations

> Quickly scaffold CRUD mutations in Vuex

[![npm](https://img.shields.io/npm/v/@netsells/vuex-crud-mutations.svg?style=flat-square)](https://www.npmjs.com/package/@netsells/vuex-crud-mutations)
[![npm](https://img.shields.io/npm/dt/@netsells/vuex-crud-mutations.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@netsells/vuex-crud-mutations&from=2016-04-01)
[![Travis branch](https://img.shields.io/travis/netsells/vuex-crud-mutations/master.svg?style=flat-square)](https://travis-ci.org/githubUsername/@netsells/vuex-crud-mutations)
[![Codecov branch](https://img.shields.io/codecov/c/github/netsells/vuex-crud-mutations/master.svg?style=flat-square)](https://codecov.io/github/netsells/vuex-crud-mutations)
<br />
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Code of Conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square)](./other/code_of_conduct.md)
[![Roadmap](https://img.shields.io/badge/%F0%9F%93%94-roadmap-CD9523.svg?style=flat-square)](./other/roadmap.md)

## Why?

Quite often, your vuex mutations contain basic methods to manipulate your set of data. If your app has multiple data sets you end up repeating the same methods multiple times for different entities.

This module generates all that scaffold/boilerplate for you and keeps the crud "verbs" consistent (`set`, `add`, `update`, `delete`).

## Installation

```sh 
yarn add --save @netsells/vuex-crud-mutations
```

## Usage

In your Vue store add the results of the exported function to your mutations object. We're using the ES6 spread operator here (`...`) but you can use any object merging strategy you like. 

The following examples will be using `user` as our "entity". 

```js
// Pull the plugin in
import crudMutations from '@netsells/vuex-crud-mutations';

// Set up your store
module.exports = new Vuex.Store({
    state: {
        members: [], // Make sure you define your initial data
        products: [],
    },
    mutations: {
        ...crudMutations('user'), // Generate entity mutations - ensure the entity is singular
        ...crudMutations('product'), // You can generate multiple entities
    },
});
```

This will generate mutations for setting, creating, updating and deleting items in the entity. You can commit these mutations using the following commands within your Vue components.

```js
// Set your entity data
// This will replace the entire dataset
this.$store.commit('setMembers', [
    // ...data
]);

// Add an item to your entity data
this.$store.commit('addMember', {
    // ...data
});

// Update an item in your entity data
// The merging strategy here is based on the `id` property provided in the data object
this.$store.commit('updateMember', {
    // ...data
});

// Delete an item in your entity data
this.$store.commit('deleteMember', id);
```

## FAQ

### Can I use this in namespaced Vuex modules?

Yes, simply modify your mutations to include the module namespace e.g. `this.$store.commit('users/addUser', { ... });`

<!--## Related-->

<!--// TODO-->

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/5918348?v=4" width="100px;"/><br /><sub><b>Sam Turrell</b></sub>](http://samturrell.co.uk)<br />[💻](https://github.com/netsells/vuex-crud-mutations/commits?author=samturrell "Code") [📖](https://github.com/netsells/vuex-crud-mutations/commits?author=samturrell "Documentation") [💡](#example-samturrell "Examples") [⚠️](https://github.com/netsells/vuex-crud-mutations/commits?author=samturrell "Tests") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT &copy; [Netsells Ltd.](http://netsells.co.uk)

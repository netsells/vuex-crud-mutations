# vuex-crud-mutations

TODO: Quickly generate crud actions for a resource.

```js
export default {
    ...crudMutations('vehicle'),
}
```

Would be the equivalent of writing:

```js
export default {
    addVehicle(state, data) {
        state.vehicles.push(data);
    },

    setVehicles(state, data) {
        state.vehicles = data;
    },

    updateVehicle(state, data) {
        const vehicle = state.vehicles.find(({ id }) => id === data.id);

        Object.assign(vehicle, data);
    },

    deleteVehicle(state, vehicleId) {
        const vehicleIndex = state.vehicles.findIndex(({ id }) => id === vehicleId);

        state.vehicles.splice(vehicleIndex, 1);
    },
}
```

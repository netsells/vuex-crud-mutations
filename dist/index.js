/* eslint-disable valid-jsdoc */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _helpers2 = require('./helpers');

var _helpers3 = _interopRequireDefault(_helpers2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Return CRUD mutations object
 *
 * @param {String} entity
 * @returns {Object}
 */
exports.default = function (entity) {
    var _ref3;

    var _helpers = (0, _helpers3.default)(entity),
        singular = _helpers.singular,
        plural = _helpers.plural;

    return _ref3 = {}, _defineProperty(_ref3, singular('add'), function (state, data) {
        state[plural()].push(data);
    }), _defineProperty(_ref3, plural('set'), function (state, data) {
        state[plural()] = data;
    }), _defineProperty(_ref3, singular('update'), function (state, data) {
        var existingEntity = state[plural()].find(function (_ref) {
            var id = _ref.id;
            return id === data.id;
        });

        Object.assign(existingEntity, data);
    }), _defineProperty(_ref3, singular('delete'), function (state, entityId) {
        var existingEntityIndex = state[plural()].findIndex(function (_ref2) {
            var id = _ref2.id;
            return id === entityId;
        });

        state[plural()].splice(existingEntityIndex, 1);
    }), _ref3;
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultRoles = exports.RoleTypesShape = exports.ModifierPropType = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimitiveTypes = {
  localeUtils: _propTypes2.default.shape({
    formatMonthTitle: _propTypes2.default.func,
    formatWeekdayShort: _propTypes2.default.func,
    formatWeekdayLong: _propTypes2.default.func,
    getFirstDayOfWeek: _propTypes2.default.func
  }),
  range: _propTypes2.default.shape({
    from: _propTypes2.default.instanceOf(Date),
    to: _propTypes2.default.instanceOf(Date)
  }),
  after: _propTypes2.default.shape({
    after: _propTypes2.default.instanceOf(Date)
  }),
  before: _propTypes2.default.shape({
    before: _propTypes2.default.instanceOf(Date)
  })
};

var ModifierPropType = exports.ModifierPropType = _propTypes2.default.oneOfType([PrimitiveTypes.after, PrimitiveTypes.before, PrimitiveTypes.range, _propTypes2.default.func, _propTypes2.default.array]);

var RoleTypesShape = exports.RoleTypesShape = {
  caption: _propTypes2.default.string,
  month: _propTypes2.default.string,
  body: _propTypes2.default.string,
  weeknumber: _propTypes2.default.string,
  week: _propTypes2.default.string,
  weekday: _propTypes2.default.string,
  weekdays: _propTypes2.default.string,
  weekdaysRow: _propTypes2.default.string,
  day: _propTypes2.default.string,
  disabledDay: _propTypes2.default.string
};

var defaultRoles = exports.defaultRoles = {
  caption: 'heading',
  weeknumber: 'gridrow',
  weekdays: 'rowgroup',
  month: 'grid',
  body: 'rowgroup',
  week: 'row',
  day: 'gridcell',
  disabledDay: 'gridcell'
};

exports.default = PrimitiveTypes;
//# sourceMappingURL=PropTypes.js.map
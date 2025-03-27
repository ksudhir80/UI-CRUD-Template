"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.json.stringify.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _Newform = _interopRequireDefault(require("./components/Newform"));
var _react = require("react");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function App() {
  const [entity, setEntity] = (0, _react.useState)({
    name: 'John Doe',
    age: 30,
    dob: '1990-01-01'
  });
  const Entites = [{
    name: 'John Doe',
    age: 30,
    dob: '1990-01-01'
  }, {
    name: 'Jane Doe',
    age: 25,
    dob: '1995-01-01'
  }];
  const addForm = entity => {
    setEntity(entity);
    alert(JSON.stringify(entity));
  };
  const updateForm = entity => {
    setEntity(entity);
    alert(JSON.stringify(entity));
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_Newform.default, {
    entity: entity,
    addForm: addForm,
    updateForm: updateForm
  }));
}
var _default = exports.default = App;
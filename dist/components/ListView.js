"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.map.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _DeleteConfirm = _interopRequireDefault(require("./DeleteConfirm"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ListView = _ref => {
  let {
    onEdit,
    dataList,
    deleteItem,
    pageName = "Your Page Name"
  } = _ref;
  const [isShowDeleteModel, setIsShowDeleteModel] = _react.default.useState(false);
  const [deleteID, setDeleteID] = _react.default.useState(0);
  const onDeleteConfirm = id => {
    if (id) {
      deleteItem(id);
    }
    setIsShowDeleteModel(false);
  };
  const handleDelete = id => {
    debugger;
    setDeleteID(id);
    setIsShowDeleteModel(true);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "App-header"
  }, pageName), /*#__PURE__*/_react.default.createElement("div", {
    className: "p-4"
  }, /*#__PURE__*/_react.default.createElement("table", {
    className: "min-w-full bg-white border"
  }, /*#__PURE__*/_react.default.createElement("thead", {
    key: "colHead"
  }, /*#__PURE__*/_react.default.createElement("tr", {
    key: "columns"
  }, dataList && dataList[0] && Object.keys(dataList[0]).map(key => /*#__PURE__*/_react.default.createElement("th", {
    className: "border px-4 py-2"
  }, key)))), /*#__PURE__*/_react.default.createElement("tbody", null, dataList && dataList[0] && dataList.map(Item => /*#__PURE__*/_react.default.createElement("tr", {
    key: Item.id
  }, Object.keys(Item).map(key => /*#__PURE__*/_react.default.createElement("td", {
    className: "border px-4 py-2"
  }, Item[key])), /*#__PURE__*/_react.default.createElement("td", {
    className: "border px-4 py-2"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "bg-blue-500 text-white px-2 py-1 rounded mr-2",
    onClick: () => onEdit(Item)
  }, "Edit"), /*#__PURE__*/_react.default.createElement("button", {
    className: "bg-red-500 text-white px-2 py-1 rounded",
    onClick: () => handleDelete(Item.id)
  }, "Delete"))))))), /*#__PURE__*/_react.default.createElement(_DeleteConfirm.default, {
    onDelete: onDeleteConfirm,
    deleteID: deleteID,
    showModel: isShowDeleteModel
  }));
};
var _default = exports.default = ListView;
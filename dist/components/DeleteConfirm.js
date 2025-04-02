"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@headlessui/react");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
//import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const DeleteConfirm = _ref => {
  let {
    onDelete,
    deleteID,
    showModel
  } = _ref;
  const [open, setOpen] = (0, _react.useState)(false);
  debugger;
  const handleDelete = () => {
    onDelete(deleteID);
    setOpen(false);
  };
  const CancelDelete = () => {
    onDelete(null);
    setOpen(false);
  };
  (0, _react.useEffect)(() => {
    setOpen(showModel);
  });
  return /*#__PURE__*/_react.default.createElement(_react2.Dialog, {
    open: open && deleteID > 0,
    onClose: CancelDelete,
    className: "relative z-10"
  }, /*#__PURE__*/_react.default.createElement(_react2.DialogBackdrop, {
    transition: true,
    className: "fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "fixed inset-0 z-10 w-screen overflow-y-auto"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
  }, /*#__PURE__*/_react.default.createElement(_react2.DialogPanel, {
    transition: true,
    className: "relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sm:flex sm:items-start"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
  }, /*#__PURE__*/_react.default.createElement(_react2.DialogTitle, {
    as: "h3",
    className: "text-base font-semibold text-gray-900"
  }, "Delete Confirmation!"), /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text-sm text-gray-500"
  }, "Are you sure you want to delete ", deleteID, " ?"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: CancelDelete,
    className: "inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
  }, "Cancel"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    "data-autofocus": true,
    onClick: handleDelete,
    className: "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
  }, "Delete"))))));
};
var _default = exports.default = DeleteConfirm;
var _path, _path2;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
function SvgIconApprove(_ref, svgRef) {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    baseProfile: "tiny",
    id: "Layer_1_copy",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 200 200",
    overflow: "visible",
    xmlSpace: "preserve",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/React.createElement("path", {
    fill: "#2CC737",
    d: "M82.3,140.1c-2.1,0-4.2-0.8-5.8-2.4l-25.9-25.9c-3.2-3.2-3.2-8.5,0-11.7c3.2-3.2,8.5-3.2,11.7,0l20.1,20.1 l58-58c3.2-3.2,8.5-3.2,11.7,0c3.2,3.2,3.2,8.5,0,11.7l-63.9,63.9C86.5,139.3,84.4,140.1,82.3,140.1z"
  })), _path2 || (_path2 = /*#__PURE__*/React.createElement("path", {
    fill: "#2CC737",
    d: "M100,200C44.9,200,0,155.1,0,100C0,44.9,44.9,0,100,0c55.1,0,100,44.9,100,100C200,155.1,155.1,200,100,200z  M100,16.5C54,16.5,16.5,54,16.5,100S54,183.5,100,183.5s83.5-37.4,83.5-83.5S146,16.5,100,16.5z"
  })));
}

export default SvgIconApprove;

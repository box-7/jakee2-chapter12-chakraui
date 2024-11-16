var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Status as ChakraStatus } from "@chakra-ui/react";
import * as React from "react";
var statusMap = {
    success: "green",
    error: "red",
    warning: "orange",
    info: "blue",
};
export var Status = React.forwardRef(function Status(props, ref) {
    var _a;
    var children = props.children, _b = props.value, value = _b === void 0 ? "info" : _b, rest = __rest(props, ["children", "value"]);
    var colorPalette = (_a = rest.colorPalette) !== null && _a !== void 0 ? _a : statusMap[value];
    return (_jsxs(ChakraStatus.Root, __assign({ ref: ref }, rest, { colorPalette: colorPalette, children: [_jsx(ChakraStatus.Indicator, {}), children] })));
});

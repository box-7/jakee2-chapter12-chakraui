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
import { Checkbox as ChakraCheckbox } from "@chakra-ui/react";
import * as React from "react";
export var Checkbox = React.forwardRef(function Checkbox(props, ref) {
    var icon = props.icon, children = props.children, inputProps = props.inputProps, rootRef = props.rootRef, rest = __rest(props, ["icon", "children", "inputProps", "rootRef"]);
    return (_jsxs(ChakraCheckbox.Root, __assign({ ref: rootRef }, rest, { children: [_jsx(ChakraCheckbox.HiddenInput, __assign({ ref: ref }, inputProps)), _jsx(ChakraCheckbox.Control, { children: icon || _jsx(ChakraCheckbox.Indicator, {}) }), children != null && (_jsx(ChakraCheckbox.Label, { children: children }))] })));
});

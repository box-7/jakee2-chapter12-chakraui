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
import { PinInput as ChakraPinInput, Group } from "@chakra-ui/react";
import * as React from "react";
export var PinInput = React.forwardRef(function PinInput(props, ref) {
    var _a = props.count, count = _a === void 0 ? 4 : _a, inputProps = props.inputProps, rootRef = props.rootRef, attached = props.attached, rest = __rest(props, ["count", "inputProps", "rootRef", "attached"]);
    return (_jsxs(ChakraPinInput.Root, __assign({ ref: rootRef }, rest, { children: [_jsx(ChakraPinInput.HiddenInput, __assign({ ref: ref }, inputProps)), _jsx(ChakraPinInput.Control, { children: _jsx(Group, { attached: attached, children: Array.from({ length: count }).map(function (_, index) { return (_jsx(ChakraPinInput.Input, { index: index }, index)); }) }) })] })));
});
